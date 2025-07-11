const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog'); // Adjust path if needed
const mongoose = require('mongoose');

// POST - Create a blog
router.post('/blogs', async (req, res) => {
  const { title, description, image, authorEmail } = req.body;
  try {
    const blog = new Blog({ title, description, image, authorEmail });
    await blog.save();
    res.status(201).json({ message: "Blog created", blog });
  } catch (err) {
    console.error('Blog creation error:', err);
    res.status(500).json({ message: "Failed to create blog" });
  }
});
// Seed default blogs (run only once)
router.get('/seed-default-blogs', async (req, res) => {
  const defaultBlogs = [
    {
      title: "My Mom’s Special MUTTON BIRIYANI",
      description: "This is not just a recipe, it’s a story of warmth, comfort, and tradition from my kitchen.",
      image: "https://th.bing.com/th/id/OIP.rY0mFsUjQfP_ySeGBUcrlQHaE7?rs=1&pid=ImgDetMain",
      authorEmail: "admin@example.com",
      createdAt: new Date('2025-05-21')
    },
    {
      title: "Street Style Noodles",
      description: "Hot and spicy noodles just like the ones from roadside stalls!",
       image: "https://images.unsplash.com/photo-1606755962770-512ec8b20354?w=600",
      authorEmail: "admin@example.com",
      createdAt: new Date('2025-05-19')
    },
    {
      title: "Chocolate Cupcakes",
      description: "Sweet, soft, and full of chocolate joy – perfect for any party!",
      image: "https://www.ihearteating.com/wp-content/uploads/2021/05/chocolate-cupcakes-7-1200-1027x1536.jpg",
      authorEmail: "admin@example.com",
      createdAt: new Date('2025-05-20')
    }
  ];

  try {
    const existing = await Blog.find({ authorEmail: "admin@example.com" });
    if (existing.length === 0) {
      await Blog.insertMany(defaultBlogs);
      res.status(201).json({ message: "Default blogs seeded!" });
    } else {
      res.status(200).json({ message: "Default blogs already exist." });
    }
  } catch (err) {
    console.error("Seeding error:", err);
    res.status(500).json({ error: "Failed to seed blogs." });
  }
});


// GET - Fetch user's blogs
router.get('/my-blogs', async (req, res) => {
  const { email } = req.query;
  try {
    const blogs = await Blog.find({ authorEmail: email }).sort({ createdAt: -1 });
    res.json({ blogs });
  } catch (err) {
    console.error('Fetching blogs error:', err);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
});

// DELETE - Delete a blog
router.delete('/blogs/:id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid blog ID" });
  }

  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ message: "Failed to delete blog" });
  }
});

// PUT - Update a blog
router.put('/blogs/:id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid blog ID" });
  }

  const { title, description, image } = req.body;
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    blog.title = title || blog.title;
    blog.description = description || blog.description;
    blog.image = image || blog.image;

    await blog.save();
    res.json({ message: "Blog updated", blog });
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ message: "Failed to update blog" });
  }
});


// GET a blog by ID (for editing)
router.get('/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
     if (!blog) return res.status(404).json({ message: "Blog not found" });
    
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
});

// ✅ Export the router
module.exports = router;