import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function RefundPolicy() {
  return (
    <div className="app-container">
      <Navbar />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 24px', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '32px' }}>Return & Refund Policy</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.8', color: '#444' }}>
          <p>We want you to love your DMND+ experience. If you are not completely satisfied with your purchase, we're here to help.</p>
          
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', marginTop: '16px' }}>Returns</h3>
          <p>You have 7 days to return an item from the date you received it. To be eligible for a return, your item must be unused, in the same condition that you received it, and in the original packaging.</p>
          
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', marginTop: '16px' }}>Refunds</h3>
          <p>Once we receive your item, we will inspect it and notify you. If your return is approved, we will initiate a refund to your original method of payment. You will receive the credit within 5-7 business days.</p>
          
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', marginTop: '16px' }}>Cash on Delivery (COD)</h3>
          <p>If you placed a COD order and reject the package at the time of delivery without a valid reason, your account may be flagged, and the Rs. 50 COD fee will not be refunded in the event of partial returns.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
