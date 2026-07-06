import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { collections } from '../../../data/products';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

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
            <div className="products-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px', padding: '40px 0' }}>
              {products.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image-container">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="product-price-row">
                      <span className="price-current">Rs. {product.price.toLocaleString()}</span>
                      <button className="btn-add-cart">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
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
