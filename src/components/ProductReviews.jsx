"use client";

import React from 'react';
import Image from 'next/image';

const dummyReviews = [
  { 
    id: 1, 
    name: "Arjun M.", 
    verified: true, 
    rating: 5, 
    date: "2 weeks ago", 
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&q=80", 
    text: "Writing scripts and building virtual environments takes hours. The 4mm thickness provides perfect wrist support, and the topographic design looks incredible under my monitor light bar." 
  },
  { 
    id: 2, 
    name: "David S.", 
    verified: true, 
    rating: 5, 
    date: "1 month ago", 
    image: "https://images.unsplash.com/photo-1600354173872-9fb458141443?w=500&q=80", 
    text: "When I'm tracking intraday charts and need precise mouse movements across multiple screens, this mat delivers. It feels incredibly premium and anchors my whole setup." 
  },
  { 
    id: 3, 
    name: "K. R.", 
    verified: true, 
    rating: 5, 
    date: "3 weeks ago", 
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=80", 
    text: "I design high-stakes business presentations all day. This mat elevates the entire aesthetic of my workspace. The micro-woven texture is flawless." 
  }
];

const ProductReviews = () => {
  return (
    <section className="product-reviews-section" style={{ padding: '80px 24px', background: '#000000' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-outfit), sans-serif', 
          textAlign: 'center', 
          textTransform: 'uppercase', 
          color: '#FFFFFF', 
          fontSize: '32px', 
          fontWeight: '700',
          marginBottom: '40px',
          letterSpacing: '0.05em'
        }}>
          Trusted by Professionals
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {dummyReviews.map((review) => (
            <div key={review.id} style={{ 
              background: '#1A1A1A', 
              borderRadius: '8px', 
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                <Image 
                  src={review.image} 
                  alt={`Review by ${review.name}`} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#E6C280" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                  {review.verified && (
                    <span style={{ color: '#A0A0A0', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      Verified Buyer
                    </span>
                  )}
                </div>
                
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.85)', 
                  fontFamily: 'var(--font-inter), sans-serif', 
                  fontSize: '15px', 
                  lineHeight: '1.6', 
                  marginBottom: '24px',
                  flexGrow: 1
                }}>
                  "{review.text}"
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '16px' }}>
                  <span style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '14px' }}>{review.name}</span>
                  <span style={{ color: '#A0A0A0', fontSize: '12px' }}>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;
