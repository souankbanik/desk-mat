import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = ({ selectedDesign, setSelectedDesign, addToCart }) => {
  const [selectedPackage, setSelectedPackage] = useState('bundle');

  return (
    <section id="bundle" className="pricing-section container">
      <div className="pricing-header">
        <h2 className="pricing-title">Choose Your Setup</h2>
      </div>

      <div className="pricing-cards">
        {/* Single Mat Card */}
        <div 
          className={`pricing-card single-card glass-panel ${selectedPackage === 'single' ? 'selected' : ''}`}
          onClick={() => setSelectedPackage('single')}
        >
          <div className="card-content">
            <h3>Single Mat</h3>
            <div className="price">₹1,299</div>
            <p className="text-secondary">Perfect for a minimal setup.</p>
            
            <div className="features">
              <div className="feature"><Check size={16} /> 1x Premium Desk Mat</div>
              <div className="feature"><Check size={16} /> Standard Shipping</div>
            </div>
            
            <button 
              className={`btn-selector ${selectedPackage === 'single' ? 'active' : ''}`}
            >
              {selectedPackage === 'single' ? 'Selected' : 'Select Package'}
            </button>
          </div>
        </div>

        {/* Bundle Card */}
        <motion.div 
          className={`pricing-card bundle-card ${selectedPackage === 'bundle' ? 'selected' : ''}`}
          onClick={() => setSelectedPackage('bundle')}
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div className="badge-popular text-metallic">MOST POPULAR</div>
          <div className="card-content">
            <h3>2 Premium Mats</h3>
            <div className="price-row">
              <div className="price">₹2,000</div>
              <div className="save-badge">Save ₹598</div>
            </div>
            <p className="text-secondary">Upgrade your home and office setup.</p>
            
            <div className="features bundle-features">
              <div className="feature"><Check size={18} color="#FFD700" /> Mix Any Designs</div>
              <div className="feature"><Check size={18} color="#FFD700" /> Free Expedited Shipping</div>
              <div className="feature"><Check size={18} color="#FFD700" /> Best Value Guaranteed</div>
            </div>
            
            <button 
              className={`btn-selector ${selectedPackage === 'bundle' ? 'active' : ''}`}
            >
              {selectedPackage === 'bundle' ? 'Selected' : 'Select Package'}
            </button>
          </div>
        </motion.div>
      </div>

      <div className="pricing-actions">
        <button 
          className="btn-primary huge-btn" 
          onClick={() => addToCart(selectedPackage === 'bundle' ? 2 : 1)}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default Pricing;
