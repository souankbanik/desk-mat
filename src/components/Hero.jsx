import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section container">
      <div className="hero-content">
        <motion.h1 
          className="hero-title text-gold-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ELEVATE YOUR<br/>WORKSPACE
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Premium, high-performance desk mats<br/>
          designed for gamers, creators, and<br/>
          professionals who demand visual excellence.
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#collection" className="btn-primary">
            SHOP COLLECTION
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
