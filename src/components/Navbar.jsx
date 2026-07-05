"use client";

import React from 'react';

import Link from 'next/link';

const Navbar = ({ cartCount, toggleCart }) => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar container">
        <Link href="/" className="nav-logo">
          DMND+
        </Link>
        
        <div className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/#collection" className="nav-link">Shop</Link>
          <Link href="/track-order" className="nav-link">Track Order</Link>
          <Link href="/contact" className="nav-link">Contact Us</Link>
        </div>

        <button className="nav-cart" onClick={toggleCart}>
          Cart ({cartCount || 0})
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
