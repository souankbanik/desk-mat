import React from 'react';
import { collections } from '../../../data/products';
import CollectionClient from './CollectionClient';

// Helper to format slug to title
const formatTitle = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Map slug to collection key
const getCollectionKey = (slug) => {
  const parts = slug.split('-');
  if (parts.length === 1) return parts[0];
  
  const camelCase = parts[0] + parts.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  return camelCase;
};

export function generateStaticParams() {
  return [
    { slug: 'new-arrivals' },
    { slug: 'best-sellers' },
    { slug: 'anime-collection' },
    { slug: 'minimal-collection' },
    { slug: 'limited-edition' },
    // New Categories
    { slug: 'personalized' },
    { slug: 'shapes-pattern' },
    { slug: 'great-art' },
    { slug: 'gaming' },
    { slug: 'tech' },
    { slug: 'japanese' },
    { slug: 'space' },
    { slug: 'anime' }
  ];
}

export default async function CollectionPage({ params }) {
  // Await the params object in Next.js Server Components
  const { slug } = await params;
  
  const title = formatTitle(slug);
  const collectionKey = getCollectionKey(slug);
  const products = collections[collectionKey] || [];

  return <CollectionClient title={title} products={products} />;
}
