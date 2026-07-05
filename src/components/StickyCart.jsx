import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import './StickyCart.css';

const StickyCart = ({ addToCart }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky cart after scrolling past 600px
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="sticky-cart-wrapper"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        >
          <div className="sticky-cart glass-panel">
            <div className="sticky-info">
              <div className="sticky-product">
                <span className="sticky-title">Premium Desk Mat</span>
                <span className="sticky-price">₹1,299</span>
              </div>
              <div className="sticky-badge">
                <Star size={14} fill="#FFD700" color="#FFD700" />
                <span>Bundle & Save ₹598</span>
              </div>
            </div>
            
            <button className="btn-primary sticky-btn" onClick={() => addToCart(1)}>
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCart;
