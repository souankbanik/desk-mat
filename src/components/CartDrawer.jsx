import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus } from 'lucide-react';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, toggleCart, cartCount, addToCart }) => {
  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const cartTotal = cartCount === 1 ? 1299 : (cartCount >= 2 ? (cartCount * 1000) : 0);
  const showUpsell = cartCount === 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
          />
          <motion.div 
            className="cart-drawer glass-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="cart-header">
              <h2>Your Cart ({cartCount})</h2>
              <button className="close-btn" onClick={toggleCart}>
                <X size={24} />
              </button>
            </div>

            <div className="cart-content">
              {cartCount === 0 ? (
                <div className="empty-cart text-secondary">
                  Your cart is empty.
                </div>
              ) : (
                <>
                  {showUpsell && (
                    <div className="upsell-banner premium-card">
                      <div className="upsell-badge">Unlock Our Best Value</div>
                      <p className="upsell-text">
                        You're <strong>₹701</strong> away from our best deal.<br/>
                        Add one more desk mat.<br/>
                        <span className="upsell-highlight">Save ₹598 instantly.</span>
                      </p>
                      <button 
                        className="btn-primary upsell-btn"
                        onClick={() => addToCart(1)}
                      >
                        Add Second Mat
                      </button>
                    </div>
                  )}

                  <div className="cart-items">
                    <div className="cart-item">
                      <img src="/images/mat_topography.png" alt="Desk Mat" className="cart-item-img" />
                      <div className="cart-item-details">
                        <h4>Premium Desk Mat</h4>
                        <div className="cart-item-price">
                          {cartCount >= 2 ? '₹1,000' : '₹1,299'}
                        </div>
                        <div className="quantity-selector">
                          <button><Minus size={14} /></button>
                          <span>{cartCount}</span>
                          <button onClick={() => addToCart(1)}><Plus size={14} /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {cartCount > 0 && (
              <div className="cart-footer">
                <div className="cart-subtotal">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <button className="btn-primary checkout-btn">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
