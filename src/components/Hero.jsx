"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const containerRef = useRef(null);
  
  // Scroll Parallax (scale up to 1.08, rotate up to 4deg)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 4]);

  // 3D Mouse Tilt (max ±2deg)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 90 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const springTransition = { type: "spring", stiffness: 90, damping: 20 };

  return (
    <section 
      className="hero-section" 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-content container">
        {/* Left Column: Text */}
        <div className="hero-text-block">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springTransition, delay: 0 }}
          >
            ELEVATE YOUR<br />WORKSPACE
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springTransition, delay: 0.15 }}
          >
            Premium, high-performance desk mats designed for gamers, creators, and professionals who demand visual excellence.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springTransition, delay: 0.3 }}
          >
            <a href="#collection" className="btn-primary">
              Shop Collection
            </a>
          </motion.div>
        </div>

        {/* Right Column: 3D Parallax Image */}
        <motion.div 
          className="hero-image-block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...springTransition, delay: 0.45 }}
          style={{ 
            rotateX, 
            rotateY,
            scale,
            rotate: rotateZ,
            perspective: 1000 
          }}
        >
          {/* Faint radial background */}
          <div className="hero-image-bg"></div>

          {/* Floating Image Wrapper */}
          <motion.div
            style={{ width: '100%', height: '100%', position: 'relative' }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image 
              src="/images/hero-desk.png" 
              alt="Premium Desk Setup" 
              fill
              style={{ objectFit: 'contain', mixBlendMode: 'multiply' }}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
