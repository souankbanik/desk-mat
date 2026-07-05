"use client";

import React from 'react';
import { Truck, ShieldCheck, Sparkles, HandCoins } from 'lucide-react';

const TrustBanner = () => {
  const features = [
    { icon: <Truck size={32} />, title: 'Free Shipping', desc: 'Dispatched across India within 24 hours.' },
    { icon: <ShieldCheck size={32} />, title: 'Secure Checkout', desc: '256-bit SSL encrypted payments' },
    { icon: <HandCoins size={32} />, title: 'Cash on Delivery', desc: 'Available across India. Pay at your doorstep.' },
    { icon: <Sparkles size={32} />, title: 'Premium 4mm Cushion', desc: 'Heavy anti-slip rubber base.' }
  ];

  // Duplicate the array to create a seamless infinite loop
  const marqueeItems = [...features, ...features, ...features, ...features];

  return (
    <div style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '24px 0' }}>
      <div className="marquee-container">
        <div className="marquee-content">
          {marqueeItems.map((feature, idx) => (
            <div key={idx} className="marquee-item">
              <span style={{ fontSize: '2rem' }}>{feature.icon}</span>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>{feature.title}</h4>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;
