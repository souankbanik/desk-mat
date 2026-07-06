"use client";

import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';
import CartDrawer from '../../../components/CartDrawer';
import { collections } from '../../../data/products';

export default function AllCollectionsPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  
  const addToCart = (quantity = 1) => {
    setCartCount(prev => prev + quantity);
    setIsCartOpen(true);
  };

  // Aggregate all unique products
  const allProducts = [];
  const addedIds = new Set();
  
  for (const key in collections) {
    collections[key].forEach(product => {
      if (!addedIds.has(product.id)) {
        allProducts.push(product);
        addedIds.add(product.id);
      }
    });
  }

  return (
    <div className="app-container">
      <Navbar cartCount={cartCount} toggleCart={toggleCart} />
      
      <main className="container" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', fontFamily: 'var(--font-outfit)', textTransform: 'uppercase' }}>ALL PRODUCTS</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            Discover our complete collection of premium, high-performance desk mats designed for gamers, creators, and professionals.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '30px' 
        }}>
          {allProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      </main>
      
      <Footer />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        toggleCart={toggleCart} 
        cartCount={cartCount}
      />
    </div>
  );
}
