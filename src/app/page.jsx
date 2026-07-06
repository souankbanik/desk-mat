"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import BannerCarousel from '../components/BannerCarousel';
import ProductCarousel from '../components/ProductCarousel';
import Reviews from '../components/Reviews';
import CartDrawer from '../components/CartDrawer';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { collections } from '../data/products';

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
        <BannerCarousel />
        
        <ProductCarousel title="NEW ARRIVALS" products={collections.newArrivals} addToCart={addToCart} />
        <ProductCarousel title="BEST SELLERS" products={collections.bestSellers} addToCart={addToCart} />
        <ProductCarousel title="ANIME COLLECTION" products={collections.animeCollection} addToCart={addToCart} />
        <ProductCarousel title="MINIMAL COLLECTION" products={collections.minimalCollection} addToCart={addToCart} />
        <ProductCarousel title="LIMITED EDITION" products={collections.limitedEdition} addToCart={addToCart} />
        
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
