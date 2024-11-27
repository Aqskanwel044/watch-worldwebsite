// components/Contact.js
import React from 'react';


const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Whether you have questions about our revolutionary smart watches or need assistance, feel free to reach out.</p>

      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:support@watchwebsite.com">support@watchwebsite.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        <h3>Follow Us</h3>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
             Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
             Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
           Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;