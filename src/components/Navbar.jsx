import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import './Navbar.css';

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
      <div className="navbar glass-panel container">
        <div className="nav-logo text-metallic">MAT.</div>
        
        <div className="nav-links">
          <a href="#designs">Designs</a>
          <a href="#bundle">Bundle</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </div>

        <button className="nav-cart" onClick={toggleCart}>
          <ShoppingBag size={20} />
          <span>Cart ({cartCount})</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
