"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';
import CartDrawer from '../../../components/CartDrawer';

export default function CollectionClient({ title, products }) {
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
      
      <main className="collection-page" style={{ paddingTop: '40px', paddingBottom: '80px', minHeight: '80vh' }}>
        <div className="container">
          <div className="collection-header" style={{ marginBottom: '40px' }}>
            <Link href="/" className="back-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: '20px', textDecoration: 'none' }}>
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
            <h1 className="collection-title" style={{ fontSize: '40px', fontFamily: 'var(--font-outfit)', fontWeight: '700', marginBottom: '8px' }}>{title}</h1>
            <p className="collection-count" style={{ color: 'var(--text-secondary)' }}>{products.length} Products</p>
          </div>
          
          {products.length > 0 ? (
            <div className="responsive-product-grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} collectionName="Desk Mats" addToCart={addToCart} />
              ))}
            </div>
          ) : (
            <div className="empty-collection" style={{ padding: '80px 0', textAlign: 'center' }}>
              <h2>Collection not found</h2>
              <p>We couldn't find any products for this category.</p>
            </div>
          )}
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
