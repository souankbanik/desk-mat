"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductCarousel = ({ title, link, products, addToCart }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      // We need to calculate item width based on the first child
      const firstChild = scrollRef.current.children[0];
      if (firstChild) {
        // Include gap in item width calculation
        const style = window.getComputedStyle(scrollRef.current);
        const gap = parseInt(style.gap) || 0;
        const itemWidth = firstChild.clientWidth + gap;
        
        const index = Math.round(scrollPosition / itemWidth);
        // Ensure index doesn't exceed array bounds
        setActiveIndex(Math.min(index, products.length - 1));
      }
    }
  };

  const scrollTo = (index) => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.children[0];
      if (firstChild) {
        const style = window.getComputedStyle(scrollRef.current);
        const gap = parseInt(style.gap) || 0;
        const itemWidth = firstChild.clientWidth + gap;
        
        scrollRef.current.scrollTo({
          left: index * itemWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollPrev = () => {
    scrollTo(Math.max(0, activeIndex - 1));
  };

  const scrollNext = () => {
    scrollTo(Math.min(products.length - 1, activeIndex + 1));
  };

  return (
    <section className="product-carousel-section">
      <div className="container">
        <div className="product-carousel-header">
          <h2 className="product-carousel-title">{title}</h2>
          {link && (
            <Link href={link} className="product-carousel-view-all">
              View All
            </Link>
          )}
        </div>
        
        <div className="product-carousel-wrapper">
          <div 
            className="product-carousel-scroll-container" 
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {products.map((product) => (
              <div key={product.id} className="product-carousel-slide">
                <ProductCard product={product} collectionName="Desk Mats" />
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
            className={`carousel-nav-btn next product-nav ${activeIndex >= products.length - 1 ? 'disabled' : ''}`} 
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
                aria-label={`Go to product ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
