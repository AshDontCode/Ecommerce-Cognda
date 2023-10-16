// Footer.js
// import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <p>&copy; 2023 Fashion E-commerce</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

