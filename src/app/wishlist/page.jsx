"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Heart } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import CartDrawer from '../../components/CartDrawer';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

export default function WishlistPage() {
  const { wishlistItems } = useWishlist();
  const { isCartOpen, toggleCart, addToCart, cartCount } = useCart();
  
  // To avoid hydration mismatch on client/server render of localstorage
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      
      <main className="collection-page" style={{ paddingTop: '40px', paddingBottom: '80px', minHeight: '80vh' }}>
        <div className="container">
          <div className="collection-header" style={{ marginBottom: '40px' }}>
            <Link href="/" className="back-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: '20px', textDecoration: 'none' }}>
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
              <Heart size={36} fill="var(--color-primary)" color="var(--color-primary)" />
              <h1 className="collection-title" style={{ fontSize: '40px', fontFamily: 'var(--font-outfit)', fontWeight: '700', margin: 0 }}>My Wishlist</h1>
            </div>
            <p className="collection-count" style={{ color: 'var(--text-secondary)' }}>{wishlistItems.length} Saved Items</p>
          </div>
          
          {wishlistItems.length > 0 ? (
            <div className="responsive-product-grid">
              {wishlistItems.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          ) : (
            <div className="empty-collection" style={{ padding: '80px 0', textAlign: 'center' }}>
              <Heart size={48} color="var(--text-secondary)" style={{ marginBottom: '16px', opacity: 0.5 }} />
              <h2>Your wishlist is empty</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Save your favorite desk mats here to buy them later.</p>
              <Link href="/collections/all" style={{ padding: '12px 24px', backgroundColor: 'var(--color-primary)', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
                Explore Products
              </Link>
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
