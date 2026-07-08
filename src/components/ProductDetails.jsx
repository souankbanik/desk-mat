"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Flame, Eye, Truck, ShieldCheck, Package } from 'lucide-react';
import ProductReviews from './ProductReviews';

export default function ProductDetails({ product, addToCart }) {
  const [selectedSize, setSelectedSize] = useState('80x30');
  const [selectedSurface, setSelectedSurface] = useState('Control Type');
  const [quantity, setQuantity] = useState(1);

  const galleryImages = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  return (
    <div className="product-details-page">
      <div className="pd-container">
        <div className="pd-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          
          {/* Top image gallery */}
          <div className="pd-gallery-column">
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: '12px', overflow: 'hidden' }}>
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Details */}
          <div className="pd-info-column" style={{ padding: '0 10px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: '800', fontFamily: 'var(--font-inter)', marginBottom: '8px' }}>
              {product.name}
            </h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <div className="pd-rating" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ color: '#4b0082', fontSize: '14px' }}>★★★★★</span>
                <span style={{ fontSize: '13px', color: '#555' }}>19 reviews</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#d9381e', fontWeight: '500' }}>
                <Flame size={14} /> 8 sold in last 24 hours
              </div>
            </div>
            
            <div style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px' }}>
              Rs. {product.price.toLocaleString('en-IN')}.00
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#555', marginBottom: '24px', backgroundColor: '#f5f5f5', padding: '8px 12px', borderRadius: '4px' }}>
              <Eye size={16} /> 39 people are viewing this right now
            </div>

            {/* Variants */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '13px', marginBottom: '8px' }}>Mousepad Size: <strong>80x30 (Cm) - 4mm Thick</strong></div>
              <button style={{ backgroundColor: '#111', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '13px' }}>
                80x30 (cm) - 4mm Thick
              </button>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '13px', marginBottom: '8px' }}>Surface Type: <strong>{selectedSurface}</strong></div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  onClick={() => setSelectedSurface('Control Type')}
                  style={{ backgroundColor: selectedSurface === 'Control Type' ? '#111' : '#fff', color: selectedSurface === 'Control Type' ? '#fff' : '#111', border: '1px solid #111', padding: '8px 16px', borderRadius: '4px', fontWeight: '600', fontSize: '13px', cursor: 'pointer' }}
                >
                  Control Type
                </button>
                <button 
                  onClick={() => setSelectedSurface('Speed Type')}
                  style={{ backgroundColor: selectedSurface === 'Speed Type' ? '#111' : '#fff', color: selectedSurface === 'Speed Type' ? '#fff' : '#111', border: '1px solid #ddd', padding: '8px 16px', borderRadius: '4px', fontWeight: '600', fontSize: '13px', cursor: 'pointer' }}
                >
                  Speed Type
                </button>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '4px', padding: '4px 12px' }}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ border: 'none', background: 'none', fontSize: '18px', cursor: 'pointer' }}>-</button>
                <span style={{ margin: '0 16px', fontWeight: '600' }}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} style={{ border: 'none', background: 'none', fontSize: '18px', cursor: 'pointer' }}>+</button>
              </div>
              <button onClick={() => addToCart(quantity)} style={{ flex: 1, backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '15px', cursor: 'pointer' }}>
                Add to Cart
              </button>
            </div>
            
            <button style={{ width: '100%', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', padding: '14px', fontWeight: '800', fontSize: '16px', marginBottom: '24px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
              BUY NOW <span style={{ fontSize: '18px' }}>›</span>
            </button>

            {/* Trust Badges */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #eee' }}>
                <div style={{ backgroundColor: '#f3e8ff', color: '#7e22ce', padding: '8px', borderRadius: '50%' }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '14px' }}>Razorpay Money Back Promise</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>Get 100% refund on non-delivery or defects</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
                <div>
                  <Truck size={20} style={{ margin: '0 auto 8px auto', color: '#555' }} />
                  <div style={{ fontSize: '13px' }}>Free shipping on all orders <strong>across India.</strong></div>
                </div>
                <div style={{ borderTop: '1px solid #eee', paddingTop: '16px' }}>
                  <Package size={20} style={{ margin: '0 auto 8px auto', color: '#555' }} />
                  <div style={{ fontSize: '13px' }}>Order dispatched within <strong>1-3 days.</strong></div>
                </div>
              </div>
            </div>
            
            {/* Features Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 16px', marginBottom: '32px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>📏</div>
                <div style={{ fontWeight: '700', fontSize: '13px', marginBottom: '4px' }}>4 mm Thickness</div>
                <div style={{ fontSize: '12px', color: '#666', lineHeight: 1.4 }}>Enjoy the perfect blend of comfort and stability.</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>🧵</div>
                <div style={{ fontWeight: '700', fontSize: '13px', marginBottom: '4px' }}>Anti-Fray Stitched Edges</div>
                <div style={{ fontSize: '12px', color: '#666', lineHeight: 1.4 }}>Our precisely stitched edges ensure durability.</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>🛑</div>
                <div style={{ fontWeight: '700', fontSize: '13px', marginBottom: '4px' }}>Anti-Slip Rubber Base</div>
                <div style={{ fontSize: '12px', color: '#666', lineHeight: 1.4 }}>No more sliding—keeps your desk mat firmly in place.</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>✨</div>
                <div style={{ fontWeight: '700', fontSize: '13px', marginBottom: '4px' }}>Vibrant Print Quality</div>
                <div style={{ fontSize: '12px', color: '#666', lineHeight: 1.4 }}>Bring your desk to life with ultra-sharp, vibrant prints.</div>
              </div>
            </div>

            {/* Tabs */}
            <div style={{ borderTop: '1px solid #eee', paddingTop: '24px' }}>
              <div style={{ display: 'flex', gap: '24px', borderBottom: '1px solid #eee', marginBottom: '20px', justifyContent: 'center' }}>
                <button style={{ paddingBottom: '12px', background: 'none', border: 'none', borderBottom: '2px solid #111', fontWeight: '700', color: '#111', fontSize: '15px', cursor: 'pointer' }}>Customer Reviews</button>
                <button style={{ paddingBottom: '12px', background: 'none', border: 'none', color: '#888', fontSize: '15px', fontWeight: '500', cursor: 'pointer' }}>Description</button>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Product Reviews Section placeholder since mopadz has Tabs, but we will leave this as is for now */}
      <ProductReviews />
    </div>
  );
}
