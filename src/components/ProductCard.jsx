import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product, collectionName, addToCart }) => {
  return (
    <div className="product-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div 
        className="product-image-container"
        style={{
          width: '100%',
          paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
          position: 'relative',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#f8f9fa',
          marginBottom: '12px'
        }}
      >
        <Link 
          href={`/products/${product.id}`} 
          className="product-image-link"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        >
          <Image 
            src={product.image} 
            alt={product.name} 
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            style={{ objectFit: 'cover' }}
            className="product-image"
          />
        </Link>
        <div className="product-actions">
          <button className="action-btn btn-wishlist" aria-label="Add to wishlist">
            <Heart size={16} />
          </button>
          <button className="action-btn btn-cart" aria-label="Add to cart" onClick={(e) => { e.preventDefault(); if (addToCart) addToCart(1); }}>
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
      <div className="product-info">
        <Link href={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
          <h3 className="product-title">{product.name}</h3>
        </Link>
        <div className="product-rating-minimal">
          {[...Array(5)].map((_, i) => (
             <span key={i} className="star">★</span>
          ))}
        </div>
        <span className="price-current">Rs. {product.price.toLocaleString('en-IN')}.00</span>
      </div>
    </div>
  );
};

export default ProductCard;
