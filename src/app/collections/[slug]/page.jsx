"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { collections } from '../../../data/products';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';
import CartDrawer from '../../../components/CartDrawer';
import { use } from 'react';

// Helper to format slug to title
const formatTitle = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Map slug to collection key
const getCollectionKey = (slug) => {
  const parts = slug.split('-');
  if (parts.length === 1) return parts[0];
  
  const camelCase = parts[0] + parts.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  return camelCase;
};

export function generateStaticParams() {
  return [
    { slug: 'new-arrivals' },
    { slug: 'best-sellers' },
    { slug: 'anime-collection' },
    { slug: 'minimal-collection' },
    { slug: 'limited-edition' },
  ];
}

export default function CollectionPage({ params }) {
  // Use React.use() to unwrap params
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  
  const addToCart = (quantity = 1) => {
    setCartCount(prev => prev + quantity);
    setIsCartOpen(true);
  };
  
  const title = formatTitle(slug);
  const collectionKey = getCollectionKey(slug);
  const products = collections[collectionKey] || [];

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
            <div className="collection-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
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
