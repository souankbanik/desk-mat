"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Plus, Minus, Trash2, ShieldCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const { cartCount, cartItems, addToCart, decreaseQuantity, removeFromCart, handleCheckout, isCheckingOut } = useCart();

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="cart-overlay"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="cart-drawer"
          >
            <div className="cart-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <ShoppingBag size={24} />
                <h2 style={{ fontSize: '20px', fontWeight: '700' }}>Your Cart</h2>
                <span className="cart-badge-inline">{cartCount}</span>
              </div>
              <button onClick={onClose} className="cart-close" aria-label="Close cart">
                <X size={24} />
              </button>
            </div>

            <div className="cart-content">
              {cartCount === 0 ? (
                <div className="cart-empty">
                  <div className="cart-empty-icon">
                    <ShoppingBag size={48} strokeWidth={1} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>Your cart is empty</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Looks like you haven't added anything yet.</p>
                  <button onClick={onClose} className="btn-primary" style={{ width: '100%' }}>
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="cart-items">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-image">
                        <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                      </div>
                      <div className="cart-item-details">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <div>
                            <h4 className="cart-item-title">{item.title}</h4>
                            <p className="cart-item-variant">Default</p>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="cart-item-remove" aria-label="Remove item">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                          <div className="cart-quantity-selector">
                            <button onClick={() => decreaseQuantity(item.id)} disabled={item.quantity <= 1}>
                              <Minus size={14} />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => addToCart(item, 1)}>
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="cart-item-price">Rs. {item.price.toLocaleString('en-IN')}.00</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartCount > 0 && (
              <div className="cart-footer">
                <div className="cart-subtotal">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString('en-IN')}.00</span>
                </div>
                
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px', textAlign: 'center' }}>
                  Shipping and taxes calculated at checkout.
                </p>

                <button onClick={handleCheckout} disabled={isCheckingOut} className="btn-primary" style={{ width: '100%', marginBottom: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                  {isCheckingOut ? 'Loading...' : 'Secure Checkout'}
                  {!isCheckingOut && <ArrowRight size={18} />}
                </button>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '13px' }}>
                  <ShieldCheck size={16} className="text-success" />
                  <span>256-bit SSL Encrypted Checkout</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
