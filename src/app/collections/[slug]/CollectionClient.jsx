"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';
import ProductShowcase from '../../../components/ProductShowcase';
import CartDrawer from '../../../components/CartDrawer';
import { useCart } from '../../../context/CartContext';

export default function CollectionClient({ title, products }) {
  const { isCartOpen, toggleCart, addToCart, cartCount } = useCart();
  const [sortBy, setSortBy] = useState('featured');

  // Apply sorting
  let sortedProducts = [...products];
  if (sortBy === 'price-asc') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name-asc') {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'name-desc') {
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="app-container">
      <Navbar />
      <main className="collection-page" style={{ paddingBottom: '80px', minHeight: '80vh' }}>
        <div className="container">
          <div className="collection-header" style={{ marginBottom: '32px', textAlign: 'center' }}>
            <nav aria-label="breadcrumb" style={{ fontSize: '12px', marginBottom: '16px', color: '#666', marginTop: '24px' }}>
              <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link> 
              <span style={{ margin: '0 8px' }}>•</span> 
              <span style={{ color: '#111' }}>Premium Desk Mats & Desk Pads</span>
            </nav>

            <h1 className="collection-title" style={{ fontSize: '36px', fontFamily: 'var(--font-inter)', fontWeight: '800', marginBottom: '16px', color: '#111', lineHeight: 1.1 }}>
              {title}
            </h1>
            
            <p style={{ fontSize: '15px', color: '#555', marginBottom: '32px', maxWidth: '800px', margin: '0 auto 32px auto', lineHeight: 1.6 }}>
              Transform your desk with DMND+ premium desk mats – the extended mouse pads that actually elevate your setup. Our signature 4mm cushioned desk pads deliver consistent comfort whether you're grinding ranked matches, crushing deadlines, or perfecting your latest design. Choose Speed fabric for lightning-fast flicks or Control surface for pixel-perfect precision. With print-over-stitched edges and non-slip rubber base, these aren't just desk mats – they're the foundation of setups that slap.
            </p>

            <div style={{ margin: '0 -20px' }}>
              <ProductShowcase />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', marginTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#111', fontWeight: '600', fontSize: '14px' }}>Sort by:</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{ border: 'none', background: 'transparent', fontSize: '14px', color: '#111', fontWeight: '500', cursor: 'pointer', outline: 'none' }}
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price, low to high</option>
                  <option value="price-desc">Price, high to low</option>
                  <option value="name-asc">Alphabetically, A-Z</option>
                  <option value="name-desc">Alphabetically, Z-A</option>
                </select>
              </div>
              <div style={{ fontSize: '13px', color: '#666' }}>
                {products.length} Products
              </div>
            </div>
          </div>
          
          {sortedProducts.length > 0 ? (
            <div className="responsive-product-grid">
              {sortedProducts.map(product => (
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
