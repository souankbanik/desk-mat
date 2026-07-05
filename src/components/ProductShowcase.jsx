"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  { id: 1, src: '/images/mat_topography.png', alt: 'Top view' },
  { id: 2, src: '/images/hero_desk_setup.png', alt: 'Keyboard + Mouse setup' },
  { id: 3, src: '/images/mat_midnight.png', alt: 'Minimal Dark Desk setup' },
  { id: 4, src: '/images/mat_close_up_stitching.png', alt: 'Close-up stitching' },
  { id: 5, src: '/images/mat_texture.png', alt: 'Texture macro' }
];

const ProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="showcase-section container">
      <div className="showcase-layout">
        <div className="showcase-main-image premium-card">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={IMAGES[activeIndex].src}
              alt={IMAGES[activeIndex].alt}
              className="main-img"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
        </div>
        
        <div className="showcase-thumbnails">
          {IMAGES.map((img, index) => (
            <button 
              key={img.id}
              className={`thumbnail-btn premium-card ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={img.src} alt={img.alt} className="thumb-img" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
