"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content container">
        <div className="footer-brand">
          <h2 className="nav-logo">Mopadz</h2>
          <p className="text-secondary" style={{ marginTop: '16px' }}>Built to Inspire. Premium desk essentials for the modern workspace.</p>
        </div>
        <div className="footer-links" style={{ display: 'flex', gap: '32px', marginTop: '24px' }}>
          <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms of Service</a>
          <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
