"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ProductDetails = () => {
  return (
    <section className="details-section container">
      <div className="details-header">
        <motion.h2 
          className="details-title text-metallic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Built to Perform. <br/>Designed to Impress.
        </motion.h2>
      </div>

      <div className="details-grid">
        {[
          {
            title: "Premium Comfort",
            desc: "4mm thickness for superior wrist comfort during long work or gaming sessions."
          },
          {
            title: "Refined Finish",
            desc: "Precision Anti-Fray stitched edges for exceptional durability and a clean look."
          },
          {
            title: "Firm Grip",
            desc: "High-grip natural rubber anti-slip base that stays firmly in place."
          },
          {
            title: "Vibrant Detail",
            desc: "Ultra High-Fidelity sublimation printing with rich colors that won't fade."
          }
        ].map((detail, idx) => (
          <motion.div 
            key={idx}
            className="detail-card premium-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <h3>{detail.title}</h3>
            <p className="text-secondary">{detail.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetails;
