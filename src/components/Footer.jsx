import React from 'react';
import './Footer.css';

const Footer = ({ onContactClick }) => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-about">
          <h4>About</h4>
          <p>Vardaan Industries provides innovative tech and logistics solutions to help businesses scale.</p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: hello@smartsolution.example</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>
            <button className="footer-contact-link" onClick={onContactClick}>
              Contact Us
            </button>
          </p>
        </div>

        <div className="footer-copy">
          <p>© 2025 Vardaan Industries</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
