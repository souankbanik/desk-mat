"use client";

import React, { useState, useEffect } from 'react';

const Navbar = ({ cartCount, toggleCart }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar container">
        <div className="nav-logo">DMND+</div>
        
        <button className="nav-cart" onClick={toggleCart}>
          Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
