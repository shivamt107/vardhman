import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.jpg';

const Header = ({ onTab }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
        <button
          className={`nav-link ${isActive('/') ? 'active' : ''}`}
          onClick={() => { navigate('/'); setMobileMenuOpen(false); }}
        >
          Home
        </button>
        <button
          className={`nav-link ${isActive('/product-range') ? 'active' : ''}`}
          onClick={() => { navigate('/product-range'); setMobileMenuOpen(false); }}
        >
          Product Range
        </button>
        <button
          className={`nav-link ${isActive('/customers') ? 'active' : ''}`}
          onClick={() => { navigate('/customers'); setMobileMenuOpen(false); }}
        >
          Customers
        </button>
      </nav>
    </header>
  );
};

export default Header;
