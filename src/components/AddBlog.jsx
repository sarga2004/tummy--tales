import React from 'react';
import './AddBlog.css'; 
function AddBlog() {
  return (
    
    <div className="add-blog-container">
      <main>
        <h1>Add New Blog</h1>
        {}
        <form className="add-blog-form">
          <label>
            Title: <input type="text" name="title" required />
          </label>
          {}
          <label>
            Image URL: <input type="text" name="image" />
          </label>
          {}
          <label>
            Description:<br /> {}
            <textarea name="description" rows="5" required></textarea>
          </label>
          {}
          <button type="submit">Submit Blog</button>
        </form>
      </main>
    </div>
  );
}

export default AddBlog;