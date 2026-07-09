"use client";

import React from 'react';
import CollectionClient from '../[slug]/CollectionClient';
import { collections } from '../../../data/products';

export default function AllCollectionsPage() {
  // Aggregate all unique products
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

  return (
    <CollectionClient title="All Products" products={allProducts} />
  );
}
