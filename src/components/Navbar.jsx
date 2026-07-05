"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import { Search, ShoppingCart } from 'lucide-react';

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
          <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.svg" alt="DMND+" style={{ width: '180px', height: 'auto' }} />
          </Link>
        </div>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/#collection" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link href="/track-order" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Track Order</Link>
          <Link href="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Search size={22} />
          </button>
          <button className="nav-cart" onClick={toggleCart} style={{ padding: '8px', display: 'flex', alignItems: 'center', position: 'relative', border: 'none', background: 'none' }}>
            <ShoppingCart size={22} />
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
