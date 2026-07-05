"use client";

import React from 'react';

const Navbar = ({ cartCount, toggleCart }) => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar container">
        <a href="/" className="nav-logo">
          Mopadz
        </a>
        
        <button className="nav-cart" onClick={toggleCart}>
          Cart ({cartCount})
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
