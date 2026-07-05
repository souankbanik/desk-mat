"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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
              <button aria-label="Close cart" onClick={toggleCart} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem' }}>&times;</button>
            </div>
            
            <div className="cart-content">
              {cartCount === 0 ? (
                <p style={{ textAlign: 'center', marginTop: '20px' }}>Your cart is empty.</p>
              ) : (
                <div style={{ display: 'flex', gap: '16px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '16px' }}>
                  <Image src="https://images.unsplash.com/photo-1629739884942-8c704f7bdc71?w=100" alt="Mat" width={80} height={80} style={{ borderRadius: '8px', objectFit: 'cover' }} />
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
                <button className="btn-primary checkout-btn" style={{ width: '100%', display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Secure Checkout
                </button>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '16px', color: 'var(--text-light)', fontSize: '0.8rem' }}>
                  <span>🔒 SSL Encrypted</span>
                  <span>•</span>
                  <span>UPI / Cards / NetBanking</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
