import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { collections } from '../../../data/products';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ProductDetails from '../../../components/ProductDetails';

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

  if (!product) {
    return (
      <div className="app-container">
        <Navbar />
        <main className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
          <h1>Product not found</h1>
          <Link href="/" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>Return Home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-container">
      <Navbar />
      <div className="pd-breadcrumb-container container">
         <Link href="/" className="back-link">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
         </Link>
      </div>
      <main>
        <ProductDetails product={product} />
      </main>
      <Footer />
    </div>
  );
}
