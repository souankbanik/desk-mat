import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function ShippingPolicy() {
  return (
    <div className="app-container">
      <Navbar />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 24px', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '32px' }}>Shipping Policy</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.8', color: '#444' }}>
          <p>At DMND+, we strive to deliver your premium desk essentials as quickly and safely as possible.</p>
          
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', marginTop: '16px' }}>Manufacturing & Dispatch Time</h3>
          <p>All our products are carefully quality-checked. Orders are typically processed and dispatched within <strong>1-2 business days</strong> of being placed.</p>
          
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', marginTop: '16px' }}>Expected Delivery Time</h3>
          <p>Once dispatched, standard delivery times are:</p>
          <ul>
            <li>Metro Cities: 2-4 business days</li>
            <li>Rest of India: 4-7 business days</li>
          </ul>
          
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', marginTop: '16px' }}>Order Tracking</h3>
          <p>As soon as your order ships, you will receive a tracking number via email and SMS. You can track your order directly on our <a href="/track-order" style={{ color: '#0284c7' }}>Tracking Page</a>.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
