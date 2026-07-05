import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './SocialProof.css';

const SocialProof = () => {
  return (
    <motion.section 
      className="social-proof-section container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill="#FFFFFF" color="#FFFFFF" />
        ))}
      </div>
      <p className="social-proof-text">
        Trusted by 3,000+ creators and professionals.
      </p>
    </motion.section>
  );
};

export default SocialProof;
