"use client";

import React from 'react';

const Reviews = () => {
  const reviews = [
    { id: 1, name: "Rahul S.", rating: 5, text: "The quality of the Liquid Obsidian mat is insane. The stitching is flawless and my mouse glides perfectly. Worth every rupee." },
    { id: 2, name: "Priya M.", rating: 5, text: "Absolutely love the minimalist design. It completely transformed my WFH setup. Shipping was super fast too!" },
    { id: 3, name: "Vikram K.", rating: 5, text: "Best desk pad I've ever owned. The anti-slip base actually works, unlike cheaper ones I've tried in the past." }
  ];

  return (
    <section className="container" style={{ padding: '80px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 className="grid-title">Loved by Creators</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', color: '#ffb400', fontSize: '1.25rem' }}>
          ★ ★ ★ ★ ★
        </div>
        <p className="text-secondary" style={{ marginTop: '8px' }}>Based on 500+ verified reviews</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {reviews.map(review => (
          <div key={review.id} style={{ padding: '32px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '16px' }}>
            <div style={{ color: '#ffb400', marginBottom: '16px', letterSpacing: '2px' }}>
              {'★'.repeat(review.rating)}
            </div>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px', fontStyle: 'italic' }}>
              "{review.text}"
            </p>
            <div style={{ fontWeight: '700', color: 'var(--text-primary)' }}>
              {review.name} <span style={{ color: '#10b981', marginLeft: '4px', fontSize: '0.8rem' }}>✓ Verified Buyer</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
