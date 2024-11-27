"use client"; // Add this directive at the top


import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  // State to manage the menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
    <div className="navbar">
    <Link href="#" className="logo">
          <img src="logo.png" alt="Logo" />
        </Link>
      <ul id="listSec" className={isMenuOpen ? 'show' : ''}>
        <li><Link href="#" className="active">Home</Link></li>
        <li><Link href="features">Features</Link></li>
        <li><Link href="store">Products</Link></li>
        <li><Link href="blogs">Blogs</Link></li>
        <li><Link href="about">About</Link></li>
        <li><Link href="contact">Contact</Link></li>
      </ul>
      
      <div className="btn-sec">
        <button>
          Order Now
        </button>
        <div className="toggle-btn" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
    </header>
  );
};

export default Header;