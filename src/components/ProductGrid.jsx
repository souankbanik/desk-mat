"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PRODUCTS = [
  { id: 1, name: "Midnight Series", image: "/images/mat_midnight.png" },
  { id: 2, name: "Topography Series", image: "/images/mat_topography.png" },
  { id: 3, name: "Texture Edition", image: "/images/mat_texture.png" },
  { id: 4, name: "Stitch Precision", image: "/images/mat_close_up_stitching.png" }
];

const ProductGrid = ({ addToCart }) => {
  return (
    <section id="collection" className="product-grid-section container">
      <div className="grid-container">
        {PRODUCTS.map((product, idx) => (
          <motion.div 
            key={product.id}
            className="product-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price">₹1,299</div>
              
              <ul className="product-specs text-secondary">
                <li>• 4mm thickness</li>
                <li>• Anti-Fray Stitched Edges</li>
                <li>• Anti-Slip Base</li>
                <li>• High-Fidelity Print</li>
              </ul>
              
              <button 
                className="btn-primary product-add-btn"
                onClick={() => addToCart(1)}
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
