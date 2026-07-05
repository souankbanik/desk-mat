"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ cartCount, toggleCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            className="hamburger-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
          <Link href="/" className="nav-logo">
            DMND+
          </Link>
        </div>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/#collection" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link href="/track-order" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Track Order</Link>
          <Link href="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </div>

        <button className="nav-cart" onClick={toggleCart}>
          Cart ({cartCount || 0})
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
