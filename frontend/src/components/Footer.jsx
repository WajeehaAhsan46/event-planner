import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-about">
          <div className="logo">EVENT<span>PLANNER</span></div>
          <p>Crafting luxurious experiences and unforgettable memories for every milestone in your life.</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>📍 Sahiwal, Punjab, Pakistan</p>
          <p>📞 +92 300 1234567</p>
          <p>✉️ info@eventplanner.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Event Planner. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;