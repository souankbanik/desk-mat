"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Crosshair, Sparkles, Truck } from 'lucide-react';

const features = [
  { icon: ShieldCheck, text: "Fade Resistant" },
  { icon: Crosshair, text: "Precision Stitching" },
  { icon: Sparkles, text: "4mm Comfort" },
  { icon: Truck, text: "Ships in 24 Hours" }
];

const TrustBar = () => {
  return (
    <section className="trust-bar-section container">
      <div className="trust-bar glass-panel">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div 
              key={index} 
              className="trust-item"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="trust-icon-wrapper">
                <Icon size={24} className="trust-icon" />
              </div>
              <span className="trust-text">{feature.text}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustBar;
