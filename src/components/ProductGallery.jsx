"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function ProductGallery({ images, altText }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="product-gallery">
      {/* Main Image */}
      <div style={{ position: 'relative', width: '100%', paddingBottom: '75%', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#f9f9f9', marginBottom: '16px' }}>
        <Image 
          src={images[activeIndex]} 
          alt={`${altText} - view ${activeIndex + 1}`}
          fill
          priority
          style={{ objectFit: 'contain' }}
        />
        
        {/* Navigation Arrows */}
        <button 
          onClick={handlePrev}
          style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={handleNext}
          style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        >
          <ChevronRight size={20} />
        </button>

        {/* Zoom Icon */}
        <button 
          style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        >
          <Maximize2 size={18} />
        </button>
      </div>

      {/* Thumbnails */}
      <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px' }}>
        {images.map((img, idx) => (
          <button 
            key={idx}
            onClick={() => setActiveIndex(idx)}
            style={{ 
              position: 'relative', 
              width: '80px', 
              height: '80px', 
              flexShrink: 0, 
              borderRadius: '8px', 
              overflow: 'hidden', 
              border: activeIndex === idx ? '2px solid #111' : '1px solid #eaeaea',
              backgroundColor: '#f9f9f9',
              cursor: 'pointer'
            }}
          >
            <Image 
              src={img} 
              alt={`Thumbnail ${idx + 1}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
