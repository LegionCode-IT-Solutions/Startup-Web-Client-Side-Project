import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          YourCompany
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About Us</Link>
          <Link to="/services" className="hover:text-gray-400">Services</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          
          {/* Login Button */}
          <Link to="/login" className="hover:bg-gray-700 px-4 py-1  rounded-md bg-blue-500 hover:text-white">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-gray-200 hover:text-gray-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-center">
          <Link to="/" className="block py-2 hover:text-gray-400">Home</Link>
          <Link to="/about" className="block py-2 hover:text-gray-400">About Us</Link>
          <Link to="/services" className="block py-2 hover:text-gray-400">Services</Link>
          <Link to="/contact" className="block py-2 hover:text-gray-400">Contact</Link>

          {/* Mobile Login Button */}
          <Link to="/login" className="block py-2 hover:bg-gray-700 text-white px-4 rounded-md bg-blue-500 hover:text-white">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
