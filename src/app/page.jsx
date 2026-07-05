"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import CartDrawer from '../components/CartDrawer';
import SocialProof from '../components/SocialProof';
import TrustBar from '../components/TrustBar';
import ProductDetails from '../components/ProductDetails';
import Lifestyle from '../components/Lifestyle';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import StickyCart from '../components/StickyCart';

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
        <ProductGrid addToCart={addToCart} />
        <SocialProof />
        <TrustBar />
        <ProductDetails />
        <Lifestyle />
        <Reviews />
        <FAQ />
      </main>

      <Footer />
      <StickyCart addToCart={addToCart} />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        toggleCart={toggleCart} 
        cartCount={cartCount}
        addToCart={addToCart}
      />
    </div>
  );
}
