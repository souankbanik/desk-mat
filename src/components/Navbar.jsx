"use client";

import React from 'react';

const Navbar = ({ cartCount, toggleCart }) => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar container">
        <a href="/" className="nav-logo">
          Mopadz
        </a>
        
        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="#collection" className="nav-link">Shop</a>
          <a href="#" className="nav-link">Track Order</a>
          <a href="#" className="nav-link">Contact Us</a>
        </div>

        <button className="nav-cart" onClick={toggleCart}>
          Cart ({cartCount})
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
