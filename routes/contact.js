const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  try {
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: 'Your message has been sent successfully!' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;