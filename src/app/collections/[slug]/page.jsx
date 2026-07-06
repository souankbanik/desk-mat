import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { collections } from '../../../data/products';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';

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

export default async function CollectionPage({ params }) {
  // Next.js 15+ requires awaiting params
  const { slug } = await params;
  
  const title = formatTitle(slug);
  const collectionKey = getCollectionKey(slug);
  const products = collections[collectionKey] || [];

  return (
    <div className="app-container">
      {/* Simple navbar for subpages */}
      <div className="navbar-wrapper">
        <div className="container">
          <nav className="navbar">
            <Link href="/" className="nav-logo">DMND+</Link>
            <div className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/#collection" className="nav-link">Shop</Link>
            </div>
          </nav>
        </div>
      </div>
      
      <main className="collection-page">
        <div className="container">
          <div className="collection-header">
            <Link href="/" className="back-link">
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
            <h1 className="collection-title">{title}</h1>
            <p className="collection-count">{products.length} Products</p>
          </div>
          
          {products.length > 0 ? (
            <div className="collection-grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} collectionName="Desk Mats" />
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
    </div>
  );
}
