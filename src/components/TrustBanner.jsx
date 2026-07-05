"use client";

import React from 'react';

const TrustBanner = () => {
  const features = [
    { icon: '🚚', title: 'Free Shipping', desc: 'Dispatched across India within 24 hours.' },
    { icon: '🔒', title: 'Secure Checkout', desc: '256-bit SSL encrypted payments' },
    { icon: '✨', title: 'Premium 4mm Cushion', desc: 'Heavy anti-slip rubber base.' }
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
