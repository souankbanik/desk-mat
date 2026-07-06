"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Search, ShoppingCart } from 'lucide-react';

const Navbar = ({ cartCount, toggleCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button 
            className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            style={{ position: 'relative', zIndex: 110 }}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
            {/* Reduced width/height on the container so it doesn't invisible-block the buttons */}
            <div className="nav-logo-img-wrapper" style={{ position: 'relative', width: '180px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px' }}>
              <Image src="/logo.png" alt="DMND+" fill style={{ objectFit: 'contain', transform: 'scale(1.8)' }} priority />
            </div>
          </Link>
        </div>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/#collection" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link href="/track-order" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Track Order</Link>
          <Link href="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginRight: '-20px', position: 'relative', zIndex: 110 }}>
          <button aria-label="Search" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px' }}>
            <Search size={16} />
          </button>
          <button aria-label="Shopping Cart" className="nav-cart" onClick={toggleCart} style={{ padding: '4px', display: 'flex', alignItems: 'center', position: 'relative', border: 'none', background: 'none' }}>
            <ShoppingCart size={16} />
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: '-2px', right: '-4px', background: 'var(--color-primary)', color: 'white', fontSize: '0.65rem', fontWeight: 'bold', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
