import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Smart Solution" className="logo-img" />
        <div>Smart Solution</div>
      </div>
      <nav className="nav-menu">
        {/* Add navigation items here if needed */}
      </nav>
    </header>
  );
};

export default Header;