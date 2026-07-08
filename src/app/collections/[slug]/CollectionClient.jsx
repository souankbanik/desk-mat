"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';
import CartDrawer from '../../../components/CartDrawer';
import { useCart } from '../../../context/CartContext';

export default function CollectionClient({ title, products }) {
  const { isCartOpen, toggleCart, addToCart, cartCount } = useCart();

  return (
    <div className="app-container">
      <Navbar />
      
      <main className="collection-page" style={{ paddingTop: '40px', paddingBottom: '80px', minHeight: '80vh' }}>
        <div className="container">
          <div className="collection-header" style={{ marginBottom: '32px' }}>
            <nav aria-label="breadcrumb" style={{ fontSize: '13px', marginBottom: '24px', color: '#666' }}>
              <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link> 
              <span style={{ margin: '0 8px' }}>/</span> 
              <Link href="/collections/all" style={{ color: '#666', textDecoration: 'none' }}>Desk Mats</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: '#111', fontWeight: '500' }}>{title}</span>
            </nav>

            <h1 className="collection-title" style={{ fontSize: '32px', fontFamily: 'var(--font-inter)', fontWeight: '800', marginBottom: '12px', color: '#111' }}>{title}</h1>
            <p style={{ fontSize: '15px', color: '#555', marginBottom: '24px', maxWidth: '800px', lineHeight: 1.5 }}>
              Upgrade your workspace with our premium {title}. Designed for both gamers and professionals, offering superior precision, comfort, and an unmatched aesthetic.
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#111', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}>Filter & Sort</span>
              </div>
              <div style={{ fontSize: '13px', color: '#666' }}>
                {products.length} Products
              </div>
            </div>
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
