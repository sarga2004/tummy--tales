import React from 'react'
import './Contact.css';
import { FaClock, FaEnvelope, FaInstagram, FaMapMarkedAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';
import {useState} from 'react';


  const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || '❌ Failed to send message.');
      }
    } catch (error) {
      console.error('Contact error:', error);
      setStatus('⚠ Something went wrong!');
    }
  };

  
  return (
    <div className="page-wrapper">
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="sub-text"> We'd love to hear from you! Reach out anytime via the form
       or directly through the option below
      </p>
      <form className="contact-form"
      onSubmit={handleSubmit}>
<h3>Get In Touch</h3>
<input
  type="text"
  name="name"
  placeholder="Your Name"
  value={formData.name}
  onChange={handleChange}
  required
/>

<input
  type="email"
  name="email"
  placeholder="Your Email"
  value={formData.email}
  onChange={handleChange}
  required
/>

<textarea
  name="message"
  placeholder="Your message..."
  rows="5"
  value={formData.message}
  onChange={handleChange}
  required
/>

<button varient="contained" type="submit" >Send</button>
</form>
{status && <p style={{ color:'green',fontWeight:'bold' }}>{status}</p>}

<br/><br/>
      <div className="contact-grid">
        <div className="contact-box">
     <FaPhone className="icon"/>
         <h3>phone</h3>
         <p>082-123-234-345</p>
         </div>
         <div className="contact-box">
         <FaWhatsapp className="icon green"/>
         <h3>WhatsApp</h3>
         <a href="https://wa.me/"target="_blank" rel="noreferrer">
          <button className="social-btn" varient="contained">Chat on WhatsApp</button>
          </a>
        </div>
           <div className="contact-box">
            <FaEnvelope className="icon"/>
          <h3>Email</h3>
          <p>tummytales@gmail.com</p></div>
           <div className="contact-box">
            <FaInstagram className="icon pink"/>
            <h3>Instagram</h3>
            <a href="https://www.instagram.com"target="_blank"rel="noreferrer">
            <button className="social-btn">Visit Instagram</button>
            </a>
            </div>
             <div className="contact-box">
          <FaClock className="icon blue"/>
          <h3>Hours</h3>
          <p>Mon-Sat:10:00 AM-9:00 PM</p>
          </div>
             <div className="contact-box">
            <FaMapMarkedAlt className="icon red"/>
          <h3>Location</h3>
       <a href="https://www.google.com/maps?q=Kochi,+Kerala" target="_blank"rel="noreferrer">
       <button className="social-btn">Open in Maps</button>
       </a>
       </div>
       
          </div>
          <br/><br/>
          <div className="form-map-section">

 <div className="map-container">
          <iframe
            title="Foodie Blog Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.630647167836!2d76.26730451463294!3d9.931232892902727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872f6241ef1c7%3A0x3d1b4877580cd00d!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1686732459284!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
    </div>
    </div>
    </div>
    </div>
  );  
}

export default Contact;