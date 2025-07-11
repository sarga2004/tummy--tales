import React, { useEffect, useState } from 'react';
import './MyBlogs.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MyBlogs() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const userEmail = "admin@example.com"; // Replace with logged-in user's email

  // Fetch all blogs by user
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/my-blogs', {
          params: { email: userEmail }
        });
        setBlogs(res.data.blogs);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Delete handler
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (err) {
      console.error('Failed to delete blog:', err);
    }
  };

  return (
    <div className="my-blogs-container">
      <main>
        <div className="blogs-header">
        <h1>My Blogs</h1>
            <button className="create-button-container"
   onClick={() => navigate('/create-blog')}>
    ➕ Create New Blog
  </button>
</div>

       {loading ? (
  <p>Loading blogs...</p>
) : !Array.isArray(blogs) || blogs.length === 0 ? (
  <p>No blogs found.</p>
) : (
  

          <>
            {/* Highlight the first blog */}
            <section className="highlight-blog">
              <div className="blog-card special">
                <img src={blogs[0].image} alt={blogs[0].title} />
                <div className="content">
                  <h2>{blogs[0].title}</h2>
                  <p className="date">
                    Posted on: {new Date(blogs[0].createdAt).toDateString()}
                  </p>
                  <p>{blogs[0].description}</p>
                  <div className="actions">
                    
                    <button onClick={() => navigate(`/edit-blog/${blogs[0]._id}`)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(blogs[0]._id)}>Delete</button>
                  </div>
                </div>
              </div>
            </section>

            {/* Other blogs */}
            <div className="blogs-container">
              {blogs.slice(1).map((blog) => (
                <div className="blog-card" key={blog._id}>
                  <img src={blog.image} alt={blog.title} />
                  <div className="content">
                    <h2>{blog.title}</h2>
                    <p className="date">
                      Posted on: {new Date(blog.createdAt).toDateString()}
                    </p>
                    <p>{blog.description}</p>
                    <div className="actions">
                      <button onClick={() => navigate(`/edit-blog/${blogs._id}`)}>Edit</button>
                      <button className="delete" onClick={() => handleDelete(blog._id)}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
  

</div>


    
  );
}

export default MyBlogs;