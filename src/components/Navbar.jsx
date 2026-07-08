"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Search, ShoppingCart } from 'lucide-react';
import SearchOverlay from './SearchOverlay';

const Navbar = ({ cartCount, toggleCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
          <Link href="/wishlist" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Wishlist</Link>
        </div>

        <div className="navbar-actions">
          <button aria-label="Search" onClick={() => setIsSearchOpen(true)} className="nav-action-btn">
            <Search className="navbar-icon" />
          </button>
          <button aria-label="Shopping Cart" className="nav-cart nav-action-btn" onClick={toggleCart}>
            <ShoppingCart className="navbar-icon" />
            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>
      
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};

export default Navbar;
