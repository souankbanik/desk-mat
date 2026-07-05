"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import ProductGrid from '../components/ProductGrid';
import Reviews from '../components/Reviews';
import CartDrawer from '../components/CartDrawer';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  
  const addToCart = (quantity = 1) => {
    setCartCount(prev => prev + quantity);
    setIsCartOpen(true);
  };

  return (
    <div className="app-container">
      <Navbar cartCount={cartCount} toggleCart={toggleCart} />
      
      <main>
        <Hero />
        <TrustBanner />
        <ProductGrid addToCart={addToCart} />
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
