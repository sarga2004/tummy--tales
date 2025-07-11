import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditBlog.css';

function EditBlog() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [blog, setBlog] = useState({ title: '', description: '', image: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/blogs/${id}`);
        if (!res.ok) throw new Error('Failed to fetch blog');
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error('Error fetching blog:', err);
        alert('Could not load blog data');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      });
      if (res.ok) {
        alert('Blog updated');
        navigate('/my-blogs');
      } else {
        const errorData = await res.json();
        console.error('Update failed:', errorData);
        alert('Update failed');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Something went wrong');
    }
  };

  if (loading) return <p style={{ color: 'white' }}>Loading blog...</p>;


  return (
   
  <div className="edit-blog-container">
    <h2>Edit Blog</h2>
    <form onSubmit={handleSubmit} className="edit-blog-form">
      <label>
        Title:
        <input
          type="text"
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
          rows={4}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={blog.image}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Update Blog</button>
    </form>
  </div>
);

           
  
}

export default EditBlog;