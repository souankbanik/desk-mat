"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ProductDetails from '../../../components/ProductDetails';
import CartDrawer from '../../../components/CartDrawer';

export default function ProductClient({ product }) {
  const { isCartOpen, toggleCart, addToCart, cartCount } = useCart();

  if (!product) {
    return (
      <div className="app-container">
        <Navbar />
        <main className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
          <h1>Product not found</h1>
          <Link href="/" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>Return Home</Link>
        </main>
        <Footer />
        <CartDrawer isOpen={isCartOpen} toggleCart={toggleCart} cartCount={cartCount} />
      </div>
    );
  }

  return (
    <div className="app-container">
      <Navbar />
      <div className="pd-breadcrumb-container container" style={{ marginTop: '20px' }}>
         <Link href="/" className="back-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none' }}>
           <ArrowLeft size={20} />
           <span>Back to Home</span>
         </Link>
      </div>
      <ProductDetails product={product} addToCart={addToCart} />
      <Footer />
      <CartDrawer isOpen={isCartOpen} toggleCart={toggleCart} cartCount={cartCount} />
    </div>
  );
}
