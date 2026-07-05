"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section container">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo text-metallic">MAT.</div>
          <span className="text-secondary">Premium Desk Mats</span>
        </div>
        
        <div className="footer-links">
          <a href="#">Support</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Privacy</a>
          <a href="#">Instagram</a>
        </div>
        
        <div className="footer-copyright text-secondary">
          &copy; 2026 MAT.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
