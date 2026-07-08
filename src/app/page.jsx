"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import ProductShowcase from '../components/ProductShowcase';
import ProductCarousel from '../components/ProductCarousel';
import BannerCarousel from '../components/BannerCarousel';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import { collections } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { isCartOpen, toggleCart, addToCart, cartCount } = useCart();

  return (
    <div className="app-container">
      <Navbar />
      
      <main>
        <Hero />
        <TrustBanner />
        <ProductShowcase />
        
        <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '12px', color: '#111111', fontFamily: 'var(--font-inter)' }}>Featured Desk Mats</h2>
              <p style={{ fontSize: '15px', color: '#555555', maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
                Top-rated designs for peak performance and aesthetics. Find your perfect desk upgrade.
              </p>
            </div>
            
            <div className="responsive-product-grid">
              {[...collections.newArrivals, ...collections.bestSellers].slice(0, 6).map((product, index) => (
                <div key={index}>
                  <ProductCard product={product} collectionName="Desk Mats" />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Reviews />
        <FAQ />
      </main>

      <Footer />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        toggleCart={toggleCart} 
        cartCount={cartCount}
        addToCart={addToCart}
      />
    </div>
  );
}
