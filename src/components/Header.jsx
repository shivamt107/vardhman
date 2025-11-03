import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.jpg';

const Header = ({ onTab }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Vardaan Industries Logo" className="logo-img" />
        {/* <span className="logo-text">Vardaan Industries</span> */}
      </div>

      <button
        className="hamburger"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="nav-link" onClick={() => onTab('home')}>Home</button>
        <button className="nav-link" onClick={() => onTab('product-range')}>Product Range</button>
        <button className="nav-link" onClick={() => onTab('customers')}>Customers</button>
      </nav>
    </header>
  );
};

export default Header;
