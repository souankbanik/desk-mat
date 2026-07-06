"use client";

import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=2000",
    title: "PREMIUM WORKSPACE",
    subtitle: "NOW LIVE",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=2000",
    title: "CUSTOM KEYBOARDS",
    subtitle: "RESTOCKED",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000",
    title: "IMMERSIVE LIGHTING",
    subtitle: "NEW ARRIVALS",
  }
];

const BannerCarousel = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollPosition / width);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollPrev = () => {
    scrollTo(Math.max(0, activeIndex - 1));
  };

  const scrollNext = () => {
    scrollTo(Math.min(banners.length - 1, activeIndex + 1));
  };

  return (
    <section className="banner-carousel-section">
      <div className="container">
        <h2 className="banner-section-title">NEW IN</h2>
        
        <div className="carousel-wrapper">
          <div 
            className="carousel-scroll-container" 
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {banners.map((banner) => (
              <div key={banner.id} className="carousel-slide">
                <div className="banner-image-wrapper">
                  <img src={banner.image} alt={banner.title} className="banner-image" />
                  <div className="banner-overlay">
                    <span className="banner-badge">{banner.subtitle}</span>
                    <h3 className="banner-title">{banner.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className={`carousel-nav-btn prev ${activeIndex === 0 ? 'disabled' : ''}`} 
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className={`carousel-nav-btn next ${activeIndex === banners.length - 1 ? 'disabled' : ''}`} 
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="carousel-dots">
            {banners.map((_, idx) => (
              <button 
                key={idx}
                className={`carousel-dot ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;
