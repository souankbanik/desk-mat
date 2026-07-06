import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const ProductCard = ({ product, collectionName }) => {
  return (
    <div className="product-card">
      <Link href={`/products/${product.id}`} className="product-image-container">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          style={{ objectFit: 'cover' }}
          className="product-image"
        />
      </Link>
      <div className="product-info">
        <div className="product-title-row">
          <Link href={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
            <h3 className="product-title">{product.name}</h3>
          </Link>
        </div>
        <div className="product-meta-row">
          <span className="product-collection">{collectionName}</span>
          <div className="product-rating-minimal">
            <span className="star">★</span>
            <span className="rating-val">{product.rating}</span>
            <span className="review-count">({product.reviewCount})</span>
          </div>
        </div>
        <span className="price-current">₹ {product.price.toLocaleString('en-IN')}</span>
      </div>
    </div>
  );
};

export default ProductCard;
