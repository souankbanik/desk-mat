"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import ProductCard from './ProductCard';
import { collections } from '../data/products';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  // Aggregate all unique products for searching
  const allProducts = [];
  const addedIds = new Set();
  for (const key in collections) {
    collections[key].forEach(product => {
      if (!addedIds.has(product.id)) {
        allProducts.push(product);
        addedIds.add(product.id);
      }
    });
  }

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSearchQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const query = searchQuery.toLowerCase();
      const filtered = allProducts.filter(product => 
        product.name.toLowerCase().includes(query)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto'
    }}>
      <div className="container" style={{ paddingTop: '40px', paddingBottom: '40px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: 'var(--text-primary)' }}
          >
            <X size={32} strokeWidth={1.5} />
          </button>
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
          <div style={{ position: 'relative', marginBottom: '40px' }}>
            <input 
              ref={inputRef}
              type="text" 
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                fontSize: '2rem',
                padding: '16px 0',
                border: 'none',
                borderBottom: '2px solid var(--border-highlight)',
                backgroundColor: 'transparent',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-outfit)',
                outline: 'none'
              }}
            />
            <Search size={32} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          </div>

          {searchQuery.trim().length > 1 && (
            <div>
              <h3 style={{ marginBottom: '24px', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                {results.length} results found for "{searchQuery}"
              </h3>
              
              {results.length > 0 ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '24px' }}>
                  {results.map(product => (
                    <div key={product.id} onClick={onClose}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>No products found. Try a different search term.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
