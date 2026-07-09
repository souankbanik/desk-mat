"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Search, ShoppingCart, User } from 'lucide-react';
import SearchOverlay from './SearchOverlay';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const { user, isAuthenticated, openAuthModal } = useAuth();
  const router = useRouter();

  const handleUserClick = () => {
    if (isAuthenticated) {
      router.push('/account');
    } else {
      openAuthModal();
    }
  };

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
          <Link href="/" className="nav-logo nav-logo-wrapper">
            <Image src="/logo.png" alt="DMND+" fill style={{ objectFit: 'contain', objectPosition: 'left center' }} priority />
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
          <button aria-label="User Account" onClick={handleUserClick} className="nav-action-btn">
            {isAuthenticated ? (
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#fff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            ) : (
              <User className="navbar-icon" />
            )}
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
