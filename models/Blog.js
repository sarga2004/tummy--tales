const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
  authorEmail: String,
});

module.exports = mongoose.model('Blog', blogSchema);