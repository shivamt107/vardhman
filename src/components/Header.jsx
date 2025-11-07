import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-[1000] bg-gradient-to-br from-purple-50/90 via-pink-50/90 to-blue-50/90 backdrop-blur-lg border-b border-white/30" 
      onClick={() => isMobileMenuOpen && setMobileMenuOpen(false)}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} alt="Vardaan Industries Logo" className="h-10 w-auto block" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <button
            className={`px-5 py-2 font-medium text-[15px] rounded-full transition-all duration-200 ${
              isActive('/') 
                ? 'bg-[#20B2AA] text-white shadow-md' 
                : 'text-gray-700 hover:bg-gray-200/50'
            }`}
            onClick={() => navigate('/')}
          >
            Home
          </button>
          <button
            className={`px-5 py-2 font-medium text-[15px] rounded-full transition-all duration-200 ${
              isActive('/product-range') 
                ? 'bg-[#20B2AA] text-white shadow-md' 
                : 'text-gray-700 hover:bg-gray-200/50'
            }`}
            onClick={() => navigate('/product-range')}
          >
            Product Range
          </button>
          <button
            className={`px-5 py-2 font-medium text-[15px] rounded-full transition-all duration-200 ${
              isActive('/customers') 
                ? 'bg-[#20B2AA] text-white shadow-md' 
                : 'text-gray-700 hover:bg-gray-200/50'
            }`}
            onClick={() => navigate('/customers')}
          >
            Customers
          </button>
        </nav>

        {/* Right side - Contact button (desktop) */}
        <button className="hidden md:flex items-center gap-2 px-5 py-2 font-medium text-[15px] text-gray-700 hover:text-gray-900 transition-colors">
          Contact Us
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden block text-2xl text-gray-900 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenuOpen(!isMobileMenuOpen);
          }}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav 
          className="md:hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 border-t border-white/30"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-6 py-4 flex flex-col gap-2">
            <button
              className={`px-5 py-3 font-medium text-[15px] rounded-lg text-left transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-[#20B2AA] text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-200/50'
              }`}
              onClick={() => { navigate('/'); setMobileMenuOpen(false); }}
            >
              Home
            </button>
            <button
              className={`px-5 py-3 font-medium text-[15px] rounded-lg text-left transition-all duration-200 ${
                isActive('/product-range') 
                  ? 'bg-[#20B2AA] text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-200/50'
              }`}
              onClick={() => { navigate('/product-range'); setMobileMenuOpen(false); }}
            >
              Product Range
            </button>
            <button
              className={`px-5 py-3 font-medium text-[15px] rounded-lg text-left transition-all duration-200 ${
                isActive('/customers') 
                  ? 'bg-[#20B2AA] text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-200/50'
              }`}
              onClick={() => { navigate('/customers'); setMobileMenuOpen(false); }}
            >
              Customers
            </button>
            <button
              className="px-5 py-3 font-medium text-[15px] rounded-lg text-left text-gray-700 hover:bg-gray-200/50 transition-all duration-200 flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default React.memo(Header);
