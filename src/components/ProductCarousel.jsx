"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCarousel = ({ title, products, addToCart }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      // Assume each card roughly takes up a fraction of the container width based on view
      const itemWidth = scrollRef.current.firstElementChild.offsetWidth;
      const index = Math.round(scrollPosition / itemWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.firstElementChild.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollPrev = () => {
    scrollTo(Math.max(0, activeIndex - 1));
  };

  const scrollNext = () => {
    // Only scroll up to length - visible items. Approximation:
    scrollTo(Math.min(products.length - 1, activeIndex + 1));
  };

  return (
    <section className="product-carousel-section">
      <div className="container">
        <div className="product-carousel-header">
          <h2 className="product-carousel-title">{title}</h2>
        </div>
        
        <div className="product-carousel-wrapper">
          <div 
            className="product-carousel-scroll-container" 
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {products.map((product) => (
              <div key={product.id} className="product-carousel-slide">
                <div className="product-card">
                  <div className="product-image-container">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      style={{ objectFit: 'cover' }}
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="product-price-row">
                      <span className="price-current">Rs. {product.price.toLocaleString()}</span>
                      <button 
                        className="btn-add-cart"
                        onClick={() => addToCart(1)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className={`carousel-nav-btn prev product-nav ${activeIndex === 0 ? 'disabled' : ''}`} 
            onClick={scrollPrev}
            aria-label="Previous product"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className={`carousel-nav-btn next product-nav ${activeIndex >= products.length - 2 ? 'disabled' : ''}`} 
            onClick={scrollNext}
            aria-label="Next product"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="carousel-dots">
            {products.map((_, idx) => (
              <button 
                key={idx}
                className={`carousel-dot ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => scrollTo(idx)}
                aria-label={`Go to item ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
