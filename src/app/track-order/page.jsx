"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CartDrawer from '../../components/CartDrawer';

export default function TrackOrder() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="app-container">
      <Navbar cartCount={0} toggleCart={toggleCart} />
      
      <main style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px 24px' }}>
        <h1 className="grid-title">Track Your Order</h1>
        <p className="text-secondary" style={{ marginBottom: '32px', textAlign: 'center', maxWidth: '500px' }}>
          Enter your order number and email address below to see the latest shipping updates for your premium desk mat.
        </p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '400px' }} onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Order Number (e.g. #1234)" 
            style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-highlight)', fontSize: '1rem', width: '100%' }}
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-highlight)', fontSize: '1rem', width: '100%' }}
          />
          <button className="btn-primary" style={{ width: '100%', marginTop: '8px' }}>
            Track Order
          </button>
        </form>
      </main>

      <Footer />
      <CartDrawer isOpen={isCartOpen} toggleCart={toggleCart} cartCount={0} />
    </div>
  );
}
