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
      className="flex justify-between items-center py-4 px-8 shadow-[0_4px_10px_rgba(0,0,0,0.03),0_0_2px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.12)] z-[1000] sticky top-0 animate-[headerSlideDown_0.8s_ease-out] bg-white" 
      onClick={() => isMobileMenuOpen && setMobileMenuOpen(false)}
      style={{
        animation: 'headerSlideDown 0.8s ease-out'
      }}
    >
      <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
        <img src={logo} alt="Vardaan Industries Logo" className="h-10 w-auto block" />
      </div>

      <button
        className="md:hidden block text-3xl bg-transparent border-none text-[#20B2AA] cursor-pointer z-[1100]"
        onClick={(e) => {
          e.stopPropagation();
          setMobileMenuOpen(!isMobileMenuOpen);
        }}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <nav 
        className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex gap-2 items-center flex-col md:flex-row absolute md:relative top-[60px] md:top-0 right-4 md:right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:shadow-none rounded-lg md:rounded-none z-[999]`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`px-5 py-2 no-underline font-medium text-[1.08rem] rounded-[22px] transition-all duration-200 relative tracking-wide border-none cursor-pointer ${
            isActive('/') ? '!bg-[#20B2AA] !text-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]' : 'bg-transparent text-[#222] hover:bg-[#20B2AA] hover:text-white hover:shadow-[0_2px_12px_rgba(0,0,0,0.08)]'
          } active:bg-[#20B2AA] active:text-white focus:outline-none`}
          onClick={() => { navigate('/'); setMobileMenuOpen(false); }}
        >
          Home
        </button>
        <button
          className={`px-5 py-2 no-underline font-medium text-[1.08rem] rounded-[22px] transition-all duration-200 relative tracking-wide border-none cursor-pointer ${
            isActive('/product-range') ? '!bg-[#20B2AA] !text-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]' : 'bg-transparent text-[#222] hover:bg-[#20B2AA] hover:text-white hover:shadow-[0_2px_12px_rgba(0,0,0,0.08)]'
          } active:bg-[#20B2AA] active:text-white focus:outline-none`}
          onClick={() => { navigate('/product-range'); setMobileMenuOpen(false); }}
        >
          Product Range
        </button>
        <button
          className={`px-5 py-2 no-underline font-medium text-[1.08rem] rounded-[22px] transition-all duration-200 relative tracking-wide border-none cursor-pointer ${
            isActive('/customers') ? '!bg-[#20B2AA] !text-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]' : 'bg-transparent text-[#222] hover:bg-[#20B2AA] hover:text-white hover:shadow-[0_2px_12px_rgba(0,0,0,0.08)]'
          } active:bg-[#20B2AA] active:text-white focus:outline-none`}
          onClick={() => { navigate('/customers'); setMobileMenuOpen(false); }}
        >
          Customers
        </button>
      </nav>
    </header>
  );
};

export default React.memo(Header);
