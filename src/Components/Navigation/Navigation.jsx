import React, { useState } from 'react';

const Navigation = ({ backgroundColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-colors duration-300" style={{ backgroundColor }}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-white">
            <img
              alt="Logo"
              src="./Images/logo1.png"
              className="h-10"
            />
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-gray-400 text-white">ABOUT US</a>
          <a href="#features" className="hover:text-gray-400 text-white">FEATURES</a>
          <a href="#colors" className="hover:text-gray-400 text-white">COLORS</a>
          <a href="#design" className="hover:text-gray-400 text-white">DESIGN</a>
          <a href="#reviews" className="hover:text-gray-400 text-white">REVIEWS</a>
          <a href="#products" className="bg-white text-black px-4 py-2 rounded">
            <i className="fa fa-shopping-bag text-black mr-2" aria-hidden="true"></i>BUY NOW
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="#about" className="block py-2 px-4 text-sm text-white">ABOUT US</a>
        <a href="#features" className="block py-2 px-4 text-sm text-white">FEATURES</a>
        <a href="#colors" className="block py-2 px-4 text-sm text-white">COLORS</a>
        <a href="#design" className="block py-2 px-4 text-sm text-white">DESIGN</a>
        <a href="#reviews" className="block py-2 px-4 text-sm text-white">REVIEWS</a>
        <a href="#products" className="block py-2 px-4 text-sm bg-white text-black">BUY NOW</a>
      </div>
    </nav>
  );
};

export default Navigation;





