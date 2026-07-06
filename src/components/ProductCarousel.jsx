"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const ProductCarousel = ({ title, link, products, addToCart }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const calculatePages = () => {
    if (scrollRef.current) {
      const clientWidth = scrollRef.current.clientWidth;
      const scrollWidth = scrollRef.current.scrollWidth;
      // Calculate how many full or partial viewports we have
      const pages = Math.round(scrollWidth / clientWidth);
      setTotalPages(Math.max(1, pages));
    }
  };

  useEffect(() => {
    // Initial calculation
    calculatePages();
    
    // Add resize listener to recalculate if screen size changes
    window.addEventListener('resize', calculatePages);
    return () => window.removeEventListener('resize', calculatePages);
  }, [products]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const clientWidth = scrollRef.current.clientWidth;
      // Determine which page we are currently looking at
      const index = Math.round(scrollPosition / clientWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (pageIndex) => {
    if (scrollRef.current) {
      const clientWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: pageIndex * clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollPrev = () => {
    scrollTo(Math.max(0, activeIndex - 1));
  };

  const scrollNext = () => {
    scrollTo(Math.min(totalPages - 1, activeIndex + 1));
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
                    <div className="product-title-row">
                      <h3 className="product-title">{product.name}</h3>
                      <button className="btn-wishlist" aria-label="Add to wishlist">
                        <Heart size={18} />
                      </button>
                    </div>
                    <span className="product-collection">Desk Mats</span>
                    <span className="price-current">₹ {product.price.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className={`carousel-nav-btn prev product-nav ${activeIndex === 0 ? 'disabled' : ''}`} 
            onClick={scrollPrev}
            aria-label="Previous page"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className={`carousel-nav-btn next product-nav ${activeIndex >= totalPages - 1 ? 'disabled' : ''}`} 
            onClick={scrollNext}
            aria-label="Next page"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="carousel-dots">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button 
                key={idx}
                className={`carousel-dot ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => scrollTo(idx)}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
