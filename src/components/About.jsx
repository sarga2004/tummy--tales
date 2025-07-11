import React from 'react';
import './About.css';

const About = () => {
  return (
  <div className="about-container">
    <div className="about-inner" data-aos="fade-up">
      <h1>Welcome to <span className="highlight">Foodie Blog!</span></h1>
      <p>
        At <strong>Tummy Tales</strong>,we're not just writing recipes-we're sharing experiences,laughs,and love through
        food.
        our blog was born from friendship,weekend cookouts,spontaneous cafe visits,and one shared dream:to celebrate the
        joy of food.
      </p>
      <h2> Our Vision</h2>
      <p>
        we believe food connects people,preserves culture,and creates unforgettable moments.
        Our vision is to inspire fellow food lovers to try new things,eat mor joyfully,and make memories around the
        table.
      </p>
      <h2>What You'll Find Here</h2>
      <ul>
        <li> Handwritten,home-tested recipes</li>
        <li>Reviews of cozy cafes and food joints we actually visits</li>
        <li>Stories from our food travels and local discoveries</li>
        <li>Quick kitchen tips & ingredient hacks</li>
        <li>Behind-the-scenes moments of our foodie life</li>


      </ul>
      <p>
        Behind every blog post,every photo,and every recipe,you'll find the five of us - <strong>Sreehitha T
          Rajeev</strong>,
        <strong>Pavithra Manoj</strong>,<strong>Sherin Baby</strong>,<strong>Aneeta Anto</strong>,<strong>Sarga</strong>.
        We Brainstrorm together,cook together,review together,and laugh through every step.

      </p>
      <p>
        We're not professionals.we're passionate explores of flavors-learning,experimenting,and growing every day.
        If we can make something tasty, so can you!
      </p>
      <h2>Let's Stay Connected </h2>
      <p>
        Our hearts and inboxes are always open.Drop us a message,fellow us on instagram<strong>@tummy.tales</strong>,
        or just say hi! We love meeting fellow foodies from all walks of life.

      </p>
      <div className="join-section">
       < a href="/contact" className="join-btn">Join Us</a>
      </div>
      <p className="closing-note">Thanks for being here.You're part of our story now.<br />-love,
        the Foodie Blog Team</p>
    </div>
  </div>
 );
};

export default About;