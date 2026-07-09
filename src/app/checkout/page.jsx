"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { ChevronLeft, Lock, CheckCircle2, ShieldCheck, Truck, CreditCard } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const { cartCount } = useCart();
  const { user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState('prepaid');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Checkout Form State
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: '',
    phone: user?.phone || '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const subtotal = cartCount * 1999;
  const shipping = paymentMethod === 'cod' ? 50 : 0;
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate gateway redirect or order creation
    setTimeout(() => {
      alert(`Order placed successfully with ${paymentMethod.toUpperCase()}! Your order ID is #DMND-${Math.floor(Math.random() * 9000) + 1000}`);
      router.push('/account'); // redirect to account after purchase
    }, 2000);
  };

  if (cartCount === 0) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa' }}>
        <h2>Your cart is empty.</h2>
        <Link href="/" style={{ color: '#0284c7', marginTop: '16px', textDecoration: 'none' }}>&larr; Return to Shop</Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9f9f9', display: 'flex', flexDirection: 'column' }}>
      
      {/* Minimal Header */}
      <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee', padding: '24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', textDecoration: 'none', fontWeight: '500' }}>
            <ChevronLeft size={20} /> Back to store
          </Link>
          <div style={{ position: 'relative', width: '120px', height: '30px' }}>
            <Image src="/logo.png" alt="DMND+" fill style={{ objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontWeight: '600', fontSize: '14px' }}>
            <Lock size={16} /> Secure Checkout
          </div>
        </div>
      </header>

      <div style={{ flex: 1, padding: '40px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          {/* Left Column: Form */}
          <div style={{ animation: 'fadeIn 0.4s ease' }}>
            
            <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* Contact Info */}
              <div style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '16px', border: '1px solid #eee', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', color: '#111' }}>Contact Information</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input required name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Email Address" style={{ padding: '14px 16px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', width: '100%', fontSize: '16px' }} />
                  <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="Phone Number" style={{ padding: '14px 16px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', width: '100%', fontSize: '16px' }} />
                </div>
              </div>

              {/* Shipping Address */}
              <div style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '16px', border: '1px solid #eee', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', color: '#111' }}>Shipping Address</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input required name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Full Name" style={{ padding: '14px 16px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', width: '100%', fontSize: '16px' }} />
                  <input required name="address" value={formData.address} onChange={handleInputChange} type="text" placeholder="Street Address / Apartment" style={{ padding: '14px 16px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', width: '100%', fontSize: '16px' }} />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <input required name="city" value={formData.city} onChange={handleInputChange} type="text" placeholder="City" style={{ padding: '14px 16px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', width: '100%', fontSize: '16px' }} />
                    <input required name="state" value={formData.state} onChange={handleInputChange} type="text" placeholder="State" style={{ padding: '14px 16px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', width: '100%', fontSize: '16px' }} />
                  </div>
                  <input required name="pincode" value={formData.pincode} onChange={handleInputChange} type="text" placeholder="PIN Code" style={{ padding: '14px 16px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', width: '100%', fontSize: '16px' }} />
                </div>
              </div>

              {/* Payment Method */}
              <div style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '16px', border: '1px solid #eee', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', color: '#111' }}>Payment Options</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label style={{ 
                    display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', borderRadius: '8px', 
                    border: paymentMethod === 'prepaid' ? '2px solid #111' : '1px solid #ddd', 
                    backgroundColor: paymentMethod === 'prepaid' ? '#fafafa' : '#fff', cursor: 'pointer', transition: 'all 0.2s'
                  }}>
                    <input type="radio" name="payment" checked={paymentMethod === 'prepaid'} onChange={() => setPaymentMethod('prepaid')} style={{ width: '18px', height: '18px', accentColor: '#111' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '600', color: '#111', fontSize: '15px' }}>Prepaid (UPI, Cards, NetBanking)</div>
                      <div style={{ fontSize: '13px', color: '#10b981', marginTop: '2px', fontWeight: '500' }}>Recommended • Fast Dispatch</div>
                    </div>
                    <CreditCard size={20} color="#666" />
                  </label>

                  <label style={{ 
                    display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', borderRadius: '8px', 
                    border: paymentMethod === 'cod' ? '2px solid #111' : '1px solid #ddd', 
                    backgroundColor: paymentMethod === 'cod' ? '#fafafa' : '#fff', cursor: 'pointer', transition: 'all 0.2s'
                  }}>
                    <input type="radio" name="payment" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} style={{ width: '18px', height: '18px', accentColor: '#111' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '600', color: '#111', fontSize: '15px' }}>Cash on Delivery (COD)</div>
                      <div style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>Additional Rs. 50 fee applies</div>
                      <div style={{ fontSize: '12px', color: '#d93025', marginTop: '4px', fontStyle: 'italic', fontWeight: '500' }}>All COD orders will be verified via WhatsApp prior to dispatch.</div>
                    </div>
                    <Truck size={20} color="#666" />
                  </label>
                </div>
              </div>

              {/* Mobile Submit (Hidden on desktop if you prefer side-by-side, but good for flow) */}
              <button 
                type="submit" 
                disabled={isProcessing}
                style={{ 
                  padding: '20px', borderRadius: '12px', backgroundColor: '#111', color: '#fff', 
                  fontSize: '16px', fontWeight: '700', border: 'none', cursor: isProcessing ? 'not-allowed' : 'pointer',
                  display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)', transition: 'transform 0.2s'
                }}
              >
                {isProcessing ? 'Processing securely...' : `Pay Rs. ${total.toLocaleString('en-IN')}`}
                {!isProcessing && <Lock size={16} />}
              </button>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div style={{ position: 'sticky', top: '40px', alignSelf: 'start', animation: 'fadeIn 0.5s ease' }}>
            <div style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '16px', border: '1px solid #eee', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', color: '#111' }}>Order Summary</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '24px', borderBottom: '1px solid #eee' }}>
                {/* Mock item representing cart items */}
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ position: 'relative', width: '64px', height: '64px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eee' }}>
                    <Image src="https://images.unsplash.com/photo-1629739884942-8c704f7bdc71?w=100" alt="Mat" fill style={{ objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: '-6px', right: '-6px', backgroundColor: '#111', color: '#fff', fontSize: '12px', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{cartCount}</span>
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontWeight: '600', fontSize: '15px', color: '#111' }}>Liquid Obsidian Desk Mat</div>
                    <div style={{ color: '#666', fontSize: '13px' }}>90x40 cm</div>
                  </div>
                  <div style={{ fontWeight: '600', color: '#111', alignSelf: 'center' }}>
                    Rs. {(1999 * cartCount).toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '24px', paddingBottom: '24px', borderBottom: '1px solid #eee', color: '#444' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Subtotal</span>
                  <span style={{ fontWeight: '500' }}>Rs. {subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Shipping</span>
                  <span style={{ fontWeight: '500' }}>{shipping === 0 ? 'Free' : `Rs. ${shipping}`}</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '24px', alignItems: 'center' }}>
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#111' }}>Total</span>
                <span style={{ fontSize: '24px', fontWeight: '800', color: '#111' }}>
                  <span style={{ fontSize: '14px', color: '#888', fontWeight: '500', marginRight: '4px' }}>INR</span>
                  Rs. {total.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Trust Badges under summary */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#555', fontSize: '14px', fontWeight: '500' }}>
                <CheckCircle2 color="#10b981" size={20} /> Premium Vegan Leather
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#555', fontSize: '14px', fontWeight: '500' }}>
                <CheckCircle2 color="#10b981" size={20} /> Anti-Slip Rubber Base
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#555', fontSize: '14px', fontWeight: '500' }}>
                <ShieldCheck color="#10b981" size={20} /> 1-Year Warranty
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
