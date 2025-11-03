import React from 'react';
import './Footer.css';

const Footer = ({ onContactClick }) => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-about">
          <h4>About</h4>
          <p>Vardaan Electronics Industries Pvt. Ltd., is an ISO 9001 company setup in 2021 for the manufacturing of IPIS, PA, PIS, infotainment system and CCTV systems for Rolling stock application.

</p>
        </div>

        <div className="footer-contact">
                  <h4>Address</h4>
         <p>Vardaan Electronics Industries Pvt Ltd
            A-184, A Block, Sector 63,
            Noida, UP-201301, India</p>
          <h4>Contact</h4>
          <p>Email: info@vardaanindustries.in</p>
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
