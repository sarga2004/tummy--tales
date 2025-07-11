const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoute = require('./routes/contact');
const multer = require('multer');
const path = require('path');
const blogRoutes = require('./routes/blogs');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', blogRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/contact', contactRoute);


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB error:", err));

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  location: String,
  bio: String,
  profileImage: String
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered." });
    }
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "Signup successful!" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error during signup." });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required." });
  }
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password." });
    }
    res.status(200).json({
      message: "Login successful!",
      username: user.username,
      email: user.email,
      profileImage: user.profileImage || ''
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error during login." });
  }
});

app.put('/profile/update', async (req, res) => {
  const { email, location, bio } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    user.location = location;
    user.bio = bio;
    await user.save();
    res.status(200).json({ message: "Profile updated successfully!" });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Server error while updating profile" });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

app.post('/profile/upload-image', upload.single('profileImage'), async (req, res) => {
  const { email } = req.body;
  if (!req.file || !email) return res.status(400).json({ message: "Missing image or email." });
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    user.profileImage = req.file.path;
    await user.save();
    res.status(200).json({ message: "Image uploaded", profileImage: req.file.path });
  } catch (err) {
    console.error("Image upload error:", err);
    res.status(500).json({ message: "Image upload failed" });
  }
});

app.get('/test', (req, res) => {
  res.send('🚀 Server is working!');
});

const PORT = process.env.PORT || 5000;
app.all('*', (req, res) => {
  console.log('🚨 Unknown route hit:', req.method, req.url);
  res.status(404).send('Route not found');
});
const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// // POST /login
// app.post('/login', (req, res) => {
//   const { email, password, role } = req.body;

//   const users = [
//     { email: 'user@example.com', password: 'user123', role: 'user' },
//     { email: 'admin@example.com', password: 'admin123', role: 'admin' }
//   ];

//   const user = users.find(u => u.email === email && u.password === password && u.role === role);

//   if (user) {
//     res.json({ success: true, role: user.role });
//   } else {
//     res.status(401).json({ success: false, message: 'Invalid credentials' });
//   }
// });
