"use client";

import React from 'react';
import Link from 'next/link';

const CATEGORIES = [
  { name: 'Personalized Desk Mats', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80', slug: 'personalized' },
  { name: 'Shapes & Pattern Desk Mats', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&q=80', slug: 'shapes-pattern' },
  { name: 'Great Art Desk Mats', img: 'https://images.unsplash.com/photo-1518998053401-a414539ef8ac?w=400&q=80', slug: 'great-art' },
  { name: 'Gaming Desk Mats', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b7738?w=400&q=80', slug: 'gaming' },
  { name: 'Tech Desk Mats', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80', slug: 'tech' },
  { name: 'Japanese Desk Mats', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80', slug: 'japanese' },
  { name: 'Space Desk Mats', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80', slug: 'space' },
  { name: 'Anime Desk Mats', img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&q=80', slug: 'anime' }
];

const ProductShowcase = () => {
  return (
    <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#ffffff', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '12px', color: '#111111', fontFamily: 'var(--font-inter)' }}>Categories</h2>
        <p style={{ fontSize: '15px', color: '#555555', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: 1.5 }}>
          Explore our unique desk mat collections—crafted for style, performance, and personal expression.
        </p>

        <div className="hide-scrollbar" style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          scrollSnapType: 'x mandatory',
          gap: '24px', 
          padding: '10px 20px 20px 20px',
          margin: '0 -20px', // allow bleeding out of mobile screen
        }}>
          {CATEGORIES.map((cat, i) => (
            <Link key={i} href={`/collections/${cat.slug}`} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              minWidth: '120px',
              maxWidth: '120px',
              scrollSnapAlign: 'center',
              textDecoration: 'none'
            }}>
              <div style={{ 
                width: '110px', 
                height: '110px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                marginBottom: '16px',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <img src={cat.img} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#111111', textAlign: 'center', lineHeight: 1.3 }}>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#111111' }}></span>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#dddddd' }}></span>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#dddddd' }}></span>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#dddddd' }}></span>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
