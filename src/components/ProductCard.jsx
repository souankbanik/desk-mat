import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const ProductCard = ({ product, collectionName, addToCart }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isSaved = isInWishlist(product.id);

  return (
    <div className="product-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div 
        className="product-image-container"
        style={{
          width: '100%',
          paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundColor: '#F8F8F8',
          border: 'none',
          marginBottom: '12px'
        }}
      >
        {/* SALE Badge */}
        <div style={{
          position: 'absolute', top: '12px', left: '12px', zIndex: 5,
          backgroundColor: '#10b981', color: '#fff', fontSize: '10px',
          fontWeight: '700', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.5px'
        }}>
          SAVE 28%
        </div>
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
          <button 
            className="action-btn btn-wishlist" 
            aria-label="Add to wishlist"
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product);
            }}
          >
            <Heart size={14} fill={isSaved ? "currentColor" : "none"} color={isSaved ? "var(--color-primary)" : "currentColor"} />
          </button>
          <button className="action-btn btn-cart" aria-label="Add to cart" onClick={(e) => { e.preventDefault(); if (addToCart) addToCart(1); }}>
            <ShoppingBag size={14} />
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
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
          <span className="price-current">Rs. {product.price.toLocaleString('en-IN')}.00</span>
          <span style={{ fontSize: '11px', color: '#888', textDecoration: 'line-through' }}>Rs. {(product.price * 1.4).toLocaleString('en-IN')}.00</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
