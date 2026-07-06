import { collections } from '../../../data/products';
import ProductClient from './ProductClient';

// Find product by id across all collections
const getProductById = (id) => {
  for (const key in collections) {
    const product = collections[key].find(p => p.id === id);
    if (product) return product;
  }
  return null;
};

// Generate static routes for all products
export function generateStaticParams() {
  const params = [];
  for (const key in collections) {
    collections[key].forEach(product => {
      params.push({ id: product.id });
    });
  }
  return params;
}

export default async function ProductPage({ params }) {
  // Next.js 15+ requires awaiting params
  const { id } = await params;
  const product = getProductById(id);

  return <ProductClient product={product} />;
}
