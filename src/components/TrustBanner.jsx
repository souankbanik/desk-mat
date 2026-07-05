"use client";

import React from 'react';

const TrustBanner = () => {
  const features = [
    { icon: '🚚', title: 'Free Shipping', desc: 'Across India on all prepaid orders' },
    { icon: '🔒', title: 'Secure Checkout', desc: '256-bit SSL encrypted payments' },
    { icon: '↩️', title: '30-Day Returns', desc: 'Hassle-free return policy' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '24px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
        {features.map((feature, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1 1 300px', justifyContent: 'center' }}>
            <span style={{ fontSize: '2rem' }}>{feature.icon}</span>
            <div>
              <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>{feature.title}</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBanner;
