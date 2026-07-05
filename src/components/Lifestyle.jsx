import React from 'react';
import { motion } from 'framer-motion';
import './Lifestyle.css';

const Lifestyle = () => {
  return (
    <section className="lifestyle-section container">
      <motion.div 
        className="lifestyle-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="lifestyle-title">More Than a Desk Mat.</h2>
        
        <div className="lifestyle-copy">
          <p>Your workspace reflects the way you think.</p>
          <p>
            Our Anime Collection transforms iconic artwork into refined desk aesthetics, 
            while our Topography Series brings subtle texture and modern minimalism to every setup.
          </p>
          <p>These aren't loud accessories.</p>
          <p>
            They're carefully designed statement pieces that elevate your workspace 
            without demanding attention.
          </p>
        </div>

        <div className="lifestyle-footer text-metallic">
          <span>Built for creators.</span> • <span>Designed for professionals.</span> • <span>Loved by enthusiasts.</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Lifestyle;
