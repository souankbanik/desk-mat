"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { Package, User, LogOut, ChevronRight, CheckCircle2, Clock, Truck } from 'lucide-react';

export default function AccountDashboard() {
  const { user, isAuthenticated, logout, openAuthModal } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('orders');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!isAuthenticated) {
      router.push('/');
      setTimeout(() => openAuthModal(), 500); // slight delay to allow route change
    }
  }, [isAuthenticated, router, openAuthModal]);

  if (!mounted || !isAuthenticated) return null;

  const mockOrders = [
    {
      id: '#DMND-8492',
      date: 'Oct 24, 2024',
      total: 3999,
      status: 'Delivered',
      items: ['Topography Desk Mat - Black (80x30 cm)']
    },
    {
      id: '#DMND-7120',
      date: 'Sep 12, 2024',
      total: 4599,
      status: 'Processing',
      items: ['Midnight Desk Mat (90x40 cm)', 'Premium Wrist Rest']
    }
  ];

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const StatusIcon = ({ status }) => {
    if (status === 'Delivered') return <CheckCircle2 size={16} color="#4ade80" />;
    if (status === 'Shipped') return <Truck size={16} color="#60a5fa" />;
    return <Clock size={16} color="#fbbf24" />;
  };

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '80vh', color: '#111', paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.5px', color: '#111' }}>My Account</h1>
          <p style={{ color: '#666', fontSize: '15px' }}>Welcome back, {user?.name}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 3fr)', gap: '40px' }}>
          
          {/* Sidebar */}
          <div className="account-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button 
              onClick={() => setActiveTab('orders')}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px', padding: '16px',
                backgroundColor: activeTab === 'orders' ? '#fff' : 'transparent',
                border: '1px solid', borderColor: activeTab === 'orders' ? '#eee' : 'transparent',
                borderRadius: '12px', color: activeTab === 'orders' ? '#111' : '#666',
                boxShadow: activeTab === 'orders' ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
                fontSize: '15px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left'
              }}
            >
              <Package size={20} /> My Orders
            </button>

            <button 
              onClick={() => setActiveTab('profile')}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px', padding: '16px',
                backgroundColor: activeTab === 'profile' ? '#fff' : 'transparent',
                border: '1px solid', borderColor: activeTab === 'profile' ? '#eee' : 'transparent',
                borderRadius: '12px', color: activeTab === 'profile' ? '#111' : '#666',
                boxShadow: activeTab === 'profile' ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
                fontSize: '15px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left'
              }}
            >
              <User size={20} /> Profile Details
            </button>

            <button 
              onClick={handleLogout}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px', padding: '16px',
                backgroundColor: 'transparent', border: '1px solid transparent',
                borderRadius: '12px', color: '#ef4444',
                fontSize: '15px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left',
                marginTop: '24px'
              }}
            >
              <LogOut size={20} /> Log Out
            </button>
          </div>

          {/* Content Area */}
          <div className="account-content">
            {activeTab === 'orders' && (
              <div style={{ animation: 'fadeIn 0.3s ease' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '24px', color: '#111' }}>Order History</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {mockOrders.map((order, idx) => (
                    <div key={idx} style={{ 
                      backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '16px', padding: '24px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                      display: 'flex', flexDirection: 'column', gap: '20px'
                    }}>
                      
                      {/* Order Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                            <span style={{ fontSize: '18px', fontWeight: '700', color: '#111' }}>{order.id}</span>
                            <span style={{ 
                              display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '600', 
                              backgroundColor: '#f5f5f5', color: '#333', padding: '4px 10px', borderRadius: '100px'
                            }}>
                              <StatusIcon status={order.status} />
                              {order.status}
                            </span>
                          </div>
                          <div style={{ fontSize: '14px', color: '#666' }}>Placed on {order.date}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '18px', fontWeight: '700', color: '#111' }}>Rs. {order.total.toLocaleString('en-IN')}</div>
                        </div>
                      </div>

                      {/* Order Items */}
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>Items</div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {order.items.map((item, i) => (
                            <li key={i} style={{ fontSize: '15px', color: '#444', display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div style={{ width: '4px', height: '4px', backgroundColor: '#aaa', borderRadius: '50%' }}></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div style={{ display: 'flex', gap: '12px', paddingTop: '8px' }}>
                        <button 
                          onClick={() => router.push(`/track-order?id=${encodeURIComponent(order.id)}`)}
                          style={{ 
                          padding: '10px 20px', borderRadius: '8px', backgroundColor: '#111', color: '#fff', 
                          border: 'none', fontSize: '14px', fontWeight: '700', cursor: 'pointer', transition: 'opacity 0.2s' 
                        }} onMouseEnter={e => e.target.style.opacity = 0.8} onMouseLeave={e => e.target.style.opacity = 1}>
                          Track Package
                        </button>
                        <button 
                          onClick={() => alert(`Downloading receipt for order ${order.id}...`)}
                          style={{ 
                          padding: '10px 20px', borderRadius: '8px', backgroundColor: 'transparent', color: '#111', 
                          border: '1px solid #ccc', fontSize: '14px', fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s'
                        }} onMouseEnter={e => e.target.style.backgroundColor = '#f5f5f5'} onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}>
                          View Receipt
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div style={{ animation: 'fadeIn 0.3s ease' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '24px', color: '#111' }}>Profile Details</h2>
                
                <div style={{ backgroundColor: '#fff', border: '1px solid #eee', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div>
                    <label style={{ display: 'block', color: '#888', fontSize: '13px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Full Name</label>
                    <div style={{ fontSize: '18px', color: '#111', fontWeight: '500' }}>{user?.name}</div>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#888', fontSize: '13px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone Number</label>
                    <div style={{ fontSize: '18px', color: '#111', fontWeight: '500' }}>{user?.phone}</div>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#888', fontSize: '13px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Account ID</label>
                    <div style={{ fontSize: '15px', color: '#666', fontFamily: 'monospace' }}>{user?.id}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        
        @media (max-width: 768px) {
          .account-sidebar { flex-direction: row !important; overflow-x: auto; padding-bottom: 12px; margin-bottom: 24px; border-bottom: 1px solid #eee; }
          .account-sidebar button { white-space: nowrap; margin-top: 0 !important; }
          div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; gap: 0 !important; }
        }
      `}} />
    </div>
  );
}
