"use client";

import React from 'react';
import { AlignVerticalSpaceAround, Scissors, GripHorizontal, Palette } from 'lucide-react';

const FeaturesHighlights = () => {
  const features = [
    {
      icon: <AlignVerticalSpaceAround size={32} color="#4A90E2" />,
      title: '4 mm Thickness',
      description: 'Enjoy the perfect blend of comfort and stability with our 4mm thick desk mats. Thick enough for cushioning yet sleek for a seamless setup, they enhance your productivity and comfort.',
    },
    {
      icon: <Scissors size={32} color="#4A90E2" />,
      title: 'Anti-Fray Stitched Edges',
      description: 'Say goodbye to fraying. Our precisely stitched edges ensure durability and a premium feel, keeping your desk mat looking pristine over time.',
    },
    {
      icon: <GripHorizontal size={32} color="#4A90E2" />,
      title: 'Anti-Slip Natural Rubber Base',
      description: 'No more sliding—our anti-slip rubber base keeps your desk mat firmly in place, offering a secure grip and distraction-free use.',
    },
    {
      icon: <Palette size={32} color="#4A90E2" />,
      title: 'Vibrant Print Quality',
      description: 'Bring your desk to life with ultra-sharp, vibrant prints. Choose from our collection or upload your own design for a desk mat that reflects your style.',
    },
  ];

  return (
    <section style={{ padding: '80px 24px', backgroundColor: '#fdfdfd' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '16px', color: '#111', fontFamily: 'var(--font-inter)' }}>Engineered for Excellence</h2>
          <p style={{ fontSize: '16px', color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Discover the premium features that make our desk mats the perfect foundation for durability, stability, and unmatched aesthetics.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '48px 32px' }}>
          {features.map((feature, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ 
                marginBottom: '20px', 
                width: '64px', 
                height: '64px', 
                borderRadius: '16px', 
                backgroundColor: '#f0f5ff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#111', lineHeight: '1.3' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesHighlights;
