"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CartDrawer from '../../components/CartDrawer';

export default function Contact() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="app-container">
      <Navbar cartCount={0} toggleCart={toggleCart} />
      
      <main style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '100px 24px' }}>
        <h1 className="grid-title">Contact Us</h1>
        <p className="text-secondary" style={{ marginBottom: '40px', textAlign: 'center', maxWidth: '600px' }}>
          Have a question about our desk mats or need help with an order? Drop us a message below and our support team will get back to you within 24 hours.
        </p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '500px' }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <input 
              type="text" 
              placeholder="First Name" 
              style={{ flex: 1, padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-highlight)', fontSize: '1rem' }}
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              style={{ flex: 1, padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-highlight)', fontSize: '1rem' }}
            />
          </div>
          <input 
            type="email" 
            placeholder="Email Address" 
            style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-highlight)', fontSize: '1rem', width: '100%' }}
          />
          <textarea 
            placeholder="How can we help you?" 
            rows="5"
            style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-highlight)', fontSize: '1rem', width: '100%', resize: 'vertical', fontFamily: 'inherit' }}
          ></textarea>
          <button className="btn-primary" style={{ width: '100%', marginTop: '8px' }}>
            Send Message
          </button>
        </form>
      </main>

      <Footer />
      <CartDrawer isOpen={isCartOpen} toggleCart={toggleCart} cartCount={0} />
    </div>
  );
}
