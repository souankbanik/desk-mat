"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section style={{ position: 'relative', width: '100%', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Image 
          src="/images/hero-picture.jpg" 
          alt="Premium Desk Setup" 
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }} 
        />
        {/* Dark Overlay for text readability */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#ffffff', padding: '0 20px', maxWidth: '800px', width: '100%' }}>
        <p style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Premium Desk Mats</p>
        <h1 style={{ fontSize: 'clamp(48px, 10vw, 80px)', fontWeight: '800', lineHeight: 1.1, marginBottom: '24px', fontFamily: 'var(--font-inter)', letterSpacing: '-1px', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
          Level Up Your<br />Setup!
        </h1>
        <p style={{ fontSize: 'clamp(15px, 4vw, 18px)', fontWeight: '500', lineHeight: 1.5, marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px auto', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          4mm Thick, Premium Edge Stitching and Available in both Speed and Control Type
        </p>
        <Link href="/collections/all" style={{ 
          display: 'inline-block', 
          backgroundColor: '#000000', 
          color: '#ffffff', 
          padding: '16px 40px', 
          borderRadius: '8px', 
          fontSize: '16px', 
          fontWeight: '700', 
          textDecoration: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          transition: 'transform 0.2s ease, backgroundColor 0.2s ease'
        }}>
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
