"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer-section" style={{ padding: '80px 24px 40px', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ position: 'relative', width: '180px', height: '60px', marginLeft: '-15px' }}>
              <Image src="/logo.png" alt="DMND+" fill style={{ objectFit: 'contain', transform: 'scale(1.8)' }} />
            </div>
            <p className="text-secondary" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Built to Inspire. Premium desk essentials designed for gamers, creators, and professionals who demand visual excellence.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Shop</h4>
            <Link href="/collections/all" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>All Products</Link>
            <Link href="/collections/new-arrivals" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>New Arrivals</Link>
            <Link href="/collections/best-sellers" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Best Sellers</Link>
            <Link href="/collections/limited-edition" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Limited Edition</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Support</h4>
            <Link href="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Contact Us</Link>
            <Link href="/track-order" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Track Order</Link>
            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Shipping Policy</a>
            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Returns & Exchanges</a>
          </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid var(--border-highlight)', paddingTop: '32px' }}>
          <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>&copy; {new Date().getFullYear()} DMND+. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'var(--text-light)', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--text-light)', textDecoration: 'none', fontSize: '14px' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
