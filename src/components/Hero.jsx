"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content container">
        <div className="hero-text-block">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            ELEVATE YOUR<br />WORKSPACE
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Premium, high-performance desk mats designed for gamers, creators, and professionals who demand visual excellence.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/collections/all" className="btn-primary">
              Shop Collection
            </Link>
          </motion.div>
        </div>

        <div className="hero-image-block">
          <picture style={{ width: '100%', height: '100%', display: 'block' }}>
            <source media="(max-width: 992px)" srcSet="/images/hero-picture-mobile.jpg" />
            <motion.img 
              src="/images/hero-picture.jpg" 
              alt="Premium Desk Setup" 
              className="hero-img-element"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
