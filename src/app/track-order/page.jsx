"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CartDrawer from '../../components/CartDrawer';
import { useCart } from '../../context/CartContext';
import { Loader2, CheckCircle2, Truck, Clock } from 'lucide-react';

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const initialOrderId = searchParams.get('id') || '';
  
  const [orderId, setOrderId] = useState(initialOrderId);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (initialOrderId) {
      setOrderId(initialOrderId);
    }
  }, [initialOrderId]);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!orderId) return;

    setIsLoading(true);
    setResult(null);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setResult({
        id: orderId,
        status: 'Shipped',
        date: 'Oct 26, 2024',
        courier: 'BlueDart Express',
        trackingNumber: 'BD' + Math.random().toString().slice(2, 11),
        history: [
          { date: 'Oct 26, 10:30 AM', event: 'Out for delivery', location: 'Local Hub' },
          { date: 'Oct 25, 08:15 PM', event: 'Arrived at destination hub', location: 'City Center' },
          { date: 'Oct 24, 02:00 PM', event: 'Package dispatched', location: 'Warehouse' }
        ]
      });
    }, 1500);
  };

  return (
    <main style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '100px 24px' }}>
      <h1 className="grid-title">Track Your Order</h1>
      <p className="text-secondary" style={{ marginBottom: '32px', textAlign: 'center', maxWidth: '500px' }}>
        Enter your order number and email address below to see the latest shipping updates for your premium desk mat.
      </p>
      
      {!result ? (
        <form onSubmit={handleTrack} style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '400px' }}>
          <input 
            type="text" 
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Order Number (e.g. #DMND-1234)" 
            style={{ padding: '14px 16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', width: '100%', outline: 'none' }}
          />
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address" 
            style={{ padding: '14px 16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', width: '100%', outline: 'none' }}
          />
          <button type="submit" disabled={isLoading} className="btn-primary" style={{ width: '100%', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'Track Order'}
          </button>
        </form>
      ) : (
        <div style={{ width: '100%', maxWidth: '600px', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', animation: 'fadeIn 0.4s ease' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #eee' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', margin: '0 0 8px' }}>{result.id}</h3>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>via {result.courier} - {result.trackingNumber}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#e0f2fe', color: '#0284c7', padding: '6px 12px', borderRadius: '100px', fontWeight: '600', fontSize: '14px' }}>
              <Truck size={16} /> {result.status}
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '11px', width: '2px', backgroundColor: '#eee' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {result.history.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '20px', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: idx === 0 ? '#111' : '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {idx === 0 ? <CheckCircle2 size={14} color="#fff" /> : <div style={{ width: '8px', height: '8px', backgroundColor: '#fff', borderRadius: '50%' }}></div>}
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '15px', color: idx === 0 ? '#111' : '#555' }}>{item.event}</h4>
                    <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>{item.date} • {item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => setResult(null)} style={{ marginTop: '32px', background: 'none', border: '1px solid #ddd', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', width: '100%' }}>
            Track Another Order
          </button>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .animate-spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
    </main>
  );
}

export default function TrackOrder() {
  const { isCartOpen, toggleCart, cartCount } = useCart();

  return (
    <div className="app-container">
      <Navbar cartCount={cartCount} toggleCart={toggleCart} />
      
      <Suspense fallback={<div style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Loader2 className="animate-spin" /></div>}>
        <TrackOrderContent />
      </Suspense>

      <Footer />
      <CartDrawer isOpen={isCartOpen} toggleCart={toggleCart} cartCount={cartCount} />
    </div>
  );
}
