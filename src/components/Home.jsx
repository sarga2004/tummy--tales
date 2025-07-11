import React from 'react';

import './Home.css';
function Home() {
  return (
    <div>
      <section className="hero">
        <img
          src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?cs=srgb&dl=bowl-cuisine-delicious-1640773.jpg&fm=jpg"
          alt="Hero Image"
        />
        <div className="hero-text">
          <h1>Welcome to Tummy Tales</h1>
          <p>Discover delicious recipes and food stories</p>
        </div>
      </section>

      <section className="featured">
        <h2>Featured Recipes</h2>
        <div className="blogs-container">
          <div className="blog-card">
            <img
              src="https://butteroverbae.com/wp-content/uploads/2020/10/karachi-chicken-biryani-14.jpg"
              alt="Biryani"
            />
            <div className="content">
              <h2>Spicy Chicken Biryani</h2>
              <p>Rich, flavorful and full of spices, a weekend favorite!</p>
            </div>
          </div>

          <div className="blog-card">
            <img
              src="https://th.bing.com/th/id/OIP.EEYk8OPFdzXe1lQNGNtuUQHaIl?w=1280&h=1484&rs=1&pid=ImgDetMain"
              alt="Smoothie"
            />
            <div className="content">
              <h2>Fruit Smoothie</h2>
              <p>Fresh and energizing drinks to keep you cool and healthy.</p>
            </div>
          </div>

          <div className="blog-card">
            <img
              src="https://th.bing.com/th/id/OIP.IsKtKIckg6oONfGX2K5EQwHaLH?w=640&h=960&rs=1&pid=ImgDetMain"
              alt="Pancakes"
            />
            <div className="content">
              <h2>Fluffy Pancakes</h2>
              <p>Golden, soft pancakes perfect for a cozy breakfast!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;