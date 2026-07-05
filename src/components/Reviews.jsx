"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Reviews = () => {
  return (
    <section id="reviews" className="reviews-section container">
      <h2 className="reviews-title text-center text-metallic">Customer Reviews</h2>
      
      <div className="reviews-grid">
        {[1, 2, 3].map((item, idx) => (
          <motion.div 
            key={idx}
            className="review-card premium-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div className="review-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
              ))}
            </div>
            <p className="review-text">"This is where your verified Shopify review will appear. Replace this with Judge.me or Loox later."</p>
            <div className="review-author">
              <span className="author-name">Customer Review</span>
              <span className="verified-badge">✓ Verified Purchase</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
