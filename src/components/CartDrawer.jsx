"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';

const ALTERNATIVE_DESIGNS = [
  { id: 2, name: "Topography", image: "/images/mat_topography.png" },
  { id: 3, name: "Texture", image: "/images/mat_texture.png" },
  { id: 4, name: "Stitch", image: "/images/mat_close_up_stitching.png" }
];

const CartDrawer = ({ isOpen, toggleCart, cartCount, addToCart }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const cartTotal = cartCount === 1 ? 1299 : (cartCount >= 2 ? (cartCount * 1000) : 0);
  const showUpsell = cartCount === 1;

  const handleInstantUpsell = () => {
    addToCart(1);
  };

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
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
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
                    <div className="upsell-container">
                      <div className="upsell-banner">
                        Add a 2nd Mat for just ₹701 more! Unlock the 2-Mat Bundle for ₹2,000.
                      </div>
                      
                      <div className="upsell-grid">
                        {ALTERNATIVE_DESIGNS.map((design) => (
                          <div key={design.id} className="upsell-item">
                            <img src={design.image} alt={design.name} className="upsell-img" />
                            <div className="upsell-info">
                              <span className="upsell-name">{design.name}</span>
                              <button 
                                className="upsell-add-btn text-gold-gradient"
                                onClick={handleInstantUpsell}
                              >
                                + ADD
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="cart-items">
                    <div className="cart-item">
                      <img src="/images/mat_midnight.png" alt="Desk Mat" className="cart-item-img" />
                      <div className="cart-item-details">
                        <h4>Premium Desk Mat</h4>
                        <div className="cart-item-price text-gold-gradient">
                          {cartCount >= 2 ? '₹1,000 (Bundle Rate)' : '₹1,299'}
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
