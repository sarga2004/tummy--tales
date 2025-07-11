// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');

const JWT_SECRET = 'your_secret_key';

router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Wrong password' });

  if (user.role !== role) return res.status(403).json({ message: 'Unauthorized role' });

  const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

  res.json({
    message: 'Login successful',
    email: user.email,
    role: user.role,
    username: user.username,
    token
  });
});

module.exports = router;
