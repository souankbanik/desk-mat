"use client";

import React from 'react';

const ProductGrid = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: "Liquid Obsidian Desk Mat",
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1629739884942-8c704f7bdc71?w=800&q=80"
    },
    {
      id: 2,
      name: "Topographic Noir Desk Mat",
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1588693959306-613d2f9b8c94?w=800&q=80"
    },
    {
      id: 3,
      name: "Minimalist Ivory Desk Mat",
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=800&q=80"
    },
    {
      id: 4,
      name: "Cyber Grid Extended Pad",
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&q=80"
    }
  ];

  return (
    <section id="collection" className="product-grid-section container">
      <div className="grid-header">
        <h2 className="grid-title">Featured Collection</h2>
        <p className="text-secondary">Explore our premium designs</p>
      </div>
      
      <div className="products-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
              <h3 className="product-title">{product.name}</h3>
              <div className="product-price-row">
                <span className="price-current">Rs. {product.price.toLocaleString()}</span>
                <button 
                  className="btn-add-cart"
                  onClick={() => addToCart(1)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
