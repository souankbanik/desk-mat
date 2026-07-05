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
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Hamburger hidden temporarily */}
          <button 
            className="hamburger-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
          <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '300px', height: '85px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px', top: '2.5px' }}>
              <Image src="/logo.png" alt="DMND+" fill style={{ objectFit: 'contain', transform: 'scale(2.2)' }} priority />
            </div>
          </Link>
        </div>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/#collection" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link href="/track-order" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Track Order</Link>
          <Link href="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginRight: '-12px' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Search size={18} />
          </button>
          <button className="nav-cart" onClick={toggleCart} style={{ padding: '8px', display: 'flex', alignItems: 'center', position: 'relative', border: 'none', background: 'none' }}>
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: '0px', right: '0px', background: 'var(--color-primary)', color: 'white', fontSize: '0.7rem', fontWeight: 'bold', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
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
