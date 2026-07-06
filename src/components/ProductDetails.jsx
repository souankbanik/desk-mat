"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ProductReviews from './ProductReviews';

const dimensions = [
  { id: '900x400', label: '900x400mm' },
  { id: '1200x600', label: '1200x600mm' }
];

export default function ProductDetails({ product, addToCart }) {
  const [selectedDim, setSelectedDim] = useState(dimensions[0].id);
  const [activeAccordion, setActiveAccordion] = useState('specs'); // 'specs' or 'shipping' or null

  // We duplicate the main image to simulate a gallery since our dummy data only has one
  const galleryImages = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  const toggleAccordion = (section) => {
    setActiveAccordion(prev => prev === section ? null : section);
  };

  return (
    <div className="product-details-page">
      <div className="pd-container">
        <div className="pd-grid">
          
          {/* Left Column: Images (Sticky on desktop) */}
          <div className="pd-gallery-column">
            <div className="pd-gallery-sticky">
              <div className="pd-main-image-wrapper">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                  className="pd-main-image"
                />
              </div>
              <div className="pd-thumbnail-row">
                {galleryImages.map((img, idx) => (
                  <div key={idx} className={`pd-thumbnail ${idx === 0 ? 'active' : ''}`}>
                    <Image 
                      src={img} 
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="pd-info-column">
            <div className="pd-header">
              <h1 className="pd-title">{product.name}</h1>
              
              {/* Minimalist Rating Component */}
              <div className="pd-rating">
                <span className="pd-star">★</span>
                <span className="pd-rating-val">{product.rating}</span>
                <span className="pd-review-count">({product.reviewCount} reviews)</span>
              </div>
              
              <div className="pd-price">₹ {product.price.toLocaleString('en-IN')}</div>
            </div>

            <div className="pd-dimensions-section">
              <h3 className="pd-section-label">Dimensions</h3>
              <div className="pd-dimensions-grid">
                {dimensions.map(dim => (
                  <button
                    key={dim.id}
                    className={`pd-dim-btn ${selectedDim === dim.id ? 'active' : ''}`}
                    onClick={() => setSelectedDim(dim.id)}
                  >
                    {dim.label}
                  </button>
                ))}
              </div>
            </div>

            <button className="pd-add-to-cart" onClick={() => addToCart(1)}>
              Add to Cart
            </button>

            {/* Accordion Section */}
            <div className="pd-accordion-container">
              
              {/* Specifications */}
              <div className="pd-accordion-item">
                <button 
                  className="pd-accordion-trigger" 
                  onClick={() => toggleAccordion('specs')}
                >
                  <span className="pd-accordion-title">Specifications</span>
                  {activeAccordion === 'specs' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <div className={`pd-accordion-content ${activeAccordion === 'specs' ? 'open' : ''}`}>
                  <ul className="pd-specs-list">
                    <li><strong>Thickness:</strong> 4mm for optimal comfort and sound dampening.</li>
                    <li><strong>Surface:</strong> Micro-woven texture for flawless precision tracking.</li>
                    <li><strong>Edges:</strong> Premium stitched edges to prevent fraying.</li>
                    <li><strong>Base:</strong> Anti-slip rubber base keeps the mat firmly in place.</li>
                  </ul>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div className="pd-accordion-item">
                <button 
                  className="pd-accordion-trigger"
                  onClick={() => toggleAccordion('shipping')}
                >
                  <span>Shipping & Returns</span>
                  {activeAccordion === 'shipping' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <div className={`pd-accordion-content ${activeAccordion === 'shipping' ? 'open' : ''}`}>
                  <p>Free standard shipping on all orders. Expedited shipping available at checkout.</p>
                  <p>Returns accepted within 30 days of delivery. Custom desk mats are final sale.</p>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Product Reviews Section */}
      <ProductReviews />
    </div>
  );
}
