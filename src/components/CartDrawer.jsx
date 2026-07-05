"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = ({ isOpen, toggleCart, cartCount }) => {
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
              <h2>Your Cart</h2>
              <button onClick={toggleCart} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem' }}>&times;</button>
            </div>
            
            <div className="cart-content">
              {cartCount === 0 ? (
                <p style={{ textAlign: 'center', marginTop: '20px' }}>Your cart is empty.</p>
              ) : (
                <div style={{ display: 'flex', gap: '16px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '16px' }}>
                  <img src="https://images.unsplash.com/photo-1629739884942-8c704f7bdc71?w=100" alt="Mat" style={{ width: '80px', borderRadius: '8px' }} />
                  <div>
                    <h4 style={{ margin: '0 0 8px' }}>Liquid Obsidian Desk Mat</h4>
                    <p style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>Rs. 1,999</p>
                    <p>Qty: {cartCount}</p>
                  </div>
                </div>
              )}
            </div>

            {cartCount > 0 && (
              <div className="cart-footer">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  <span>Subtotal</span>
                  <span>Rs. {(cartCount * 1999).toLocaleString()}</span>
                </div>
                <button className="btn-primary checkout-btn" style={{ width: '100%' }}>
                  Proceed to Checkout
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
