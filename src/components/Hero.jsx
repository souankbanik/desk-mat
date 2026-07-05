import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const DESIGNS = [
  'Topography',
  'Midnight',
  'Sakura',
  'Waves',
  'Anime',
  'Abstract'
];

const Hero = ({ selectedDesign, setSelectedDesign, addToCart }) => {
  const getHeroImage = () => {
    switch (selectedDesign) {
      case 'Topography': return '/images/mat_topography.png';
      case 'Midnight': return '/images/mat_midnight.png';
      default: return '/images/hero_desk_setup.png';
    }
  };

  return (
    <section className="hero-section container">
      <div className="hero-content">
        <motion.h1 
          className="hero-title text-metallic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Desk Deserves Better.
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Transform your workspace into a place built for focus, precision, and creativity with premium extended desk mats crafted for professionals, creators, and serious gamers.
        </motion.p>

        <motion.div 
          className="design-selector"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="selector-label">Choose Design</span>
          <div className="selector-options">
            {DESIGNS.map(design => (
              <button 
                key={design}
                className={`selector-btn ${selectedDesign === design ? 'active' : ''}`}
                onClick={() => setSelectedDesign(design)}
              >
                <div className="radio-circle">
                  {selectedDesign === design && <div className="radio-inner" />}
                </div>
                {design}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="btn-primary" onClick={() => addToCart(1)}>
            Shop Now
          </button>
          <a href="#designs" className="btn-secondary">
            Explore Designs
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="hero-image-wrapper"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedDesign}
            src={getHeroImage()}
            alt={`${selectedDesign} Desk Mat Setup`}
            className="hero-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="hero-glow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
