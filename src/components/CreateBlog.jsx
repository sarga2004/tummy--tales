import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './EditBlog.css'; // Reuse the same styling as EditBlog

function CreateBlog() {
  const [blog, setBlog] = useState({ title: '', description: '', image: '' });
  const navigate = useNavigate();
  const authorEmail = "admin@example.com"; // Replace with logged-in user's email if available

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/blogs', {
        ...blog,
        authorEmail,
      });
      alert("Blog created!");
      navigate('/my-blogs');
    } catch (err) {
      console.error('Create error:', err);
      alert('Failed to create blog.');
    }
  };

  return (
    <div className="edit-blog-container">
      <h2>Create New Blog</h2>
      <form onSubmit={handleSubmit} className="edit-blog-form">
        <label>
          Title:
          <input
            name="title"
            value={blog.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={blog.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            name="image"
            value={blog.image}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;