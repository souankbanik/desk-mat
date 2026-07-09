"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, ShieldCheck, Package, HelpCircle, Share2, Columns, Star, Zap } from 'lucide-react';
import ProductReviews from './ProductReviews';
import LiveViewersWidget from './LiveViewersWidget';
import FeaturesHighlights from './FeaturesHighlights';

export default function ProductDetails({ product, addToCart }) {
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('80x30');
  const [selectedSurface, setSelectedSurface] = useState('Control Type');
  const [quantity, setQuantity] = useState(1);
  const [soldCount, setSoldCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [hoveredColor, setHoveredColor] = useState(null);

  useEffect(() => {
    setSoldCount(Math.floor(Math.random() * (30 - 5 + 1)) + 5);
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [product?.id]);

  if (!product) return null;

  const galleryImages = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  const colors = [
    { name: 'Black', hex: '#1a1a1a' },
    { name: 'Sky Blue', hex: '#87CEEB' },
    { name: 'Pink', hex: '#FFC0CB' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Yellow', hex: '#FFD700' },
  ];

  return (
    <div className="product-details-page light-theme" style={{ backgroundColor: '#ffffff', color: '#333333', minHeight: '100vh', paddingBottom: showStickyBar ? '80px' : '0' }}>
      
      {/* CSS for animations and smooth scroll */}
      <style dangerouslySetInnerHTML={{__html: `
        .light-theme ::selection {
          background-color: #eee;
          color: #000;
        }
        .pulse-flame {
          animation: pulse-flame 2s infinite ease-in-out;
        }
        @keyframes pulse-flame {
          0% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.1); filter: brightness(1.3); }
          100% { transform: scale(1); filter: brightness(1); }
        }
        
        .gallery-image-container {
          opacity: 0.95;
          transition: opacity 0.3s ease, transform 0.3s ease;
          border: 1px solid #f0f0f0;
        }
        .gallery-image-container:hover {
          opacity: 1;
        }
        
        .buy-btn {
          background: linear-gradient(135deg, #111 0%, #333 100%);
          color: #fff;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .buy-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
        
        .cart-btn {
          background-color: rgba(0,0,0,0.03);
          color: #111;
          border: 1px solid rgba(0,0,0,0.1);
        }
        .cart-btn:hover {
          background-color: rgba(0,0,0,0.06);
          border-color: rgba(0,0,0,0.2);
        }

        .variant-btn {
          background-color: rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.08);
          color: #555;
        }
        .variant-btn.active {
          background-color: rgba(0,0,0,0.05);
          border-color: #111;
          color: #111;
        }

        .sticky-cart-bar {
          background: rgba(255, 255, 255, 0.9) !important;
          border-top: 1px solid rgba(0,0,0,0.05) !important;
        }

        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .pd-grid { grid-template-columns: 1fr !important; gap: 20px !important; margin-bottom: 40px !important; }
          .sticky-info-text { display: none; }
          
          /* Horizontal swipe gallery for mobile */
          .pd-gallery-column { 
            flex-direction: row !important; 
            overflow-x: auto; 
            scroll-snap-type: x mandatory; 
            padding-bottom: 12px;
            margin-right: -24px;
            margin-left: -24px;
            padding-left: 24px;
            padding-right: 24px;
          }
          .pd-gallery-column::-webkit-scrollbar { display: none; }
          .gallery-image-container { 
            min-width: 85%; 
            scroll-snap-align: center; 
          }
          
          /* Typography scaling */
          .pd-title { font-size: 28px !important; margin-bottom: 12px !important; }
          .pd-price { font-size: 24px !important; margin-bottom: 16px !important; }
          
          /* Remove sticky behavior on mobile for the info column */
          .pd-info-wrapper { position: static !important; }
        }
      `}} />

      <div className="pd-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Breadcrumbs */}
        <div style={{ fontSize: '13px', color: '#666', padding: '24px 0', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='#111'} onMouseLeave={e => e.target.style.color='#666'}>Home</Link>
          <span style={{ margin: '0 8px', color: '#ccc' }}>/</span>
          <span style={{ color: '#111', fontWeight: '500' }}>{product.name}</span>
        </div>

        <div className="pd-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '60px', marginBottom: '80px' }}>
          
          {/* Left Column: Stacked Gallery */}
          <div className="pd-gallery-column" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {galleryImages.map((img, idx) => (
              <div key={idx} className="gallery-image-container" style={{ position: 'relative', width: '100%', paddingBottom: '100%', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
                <Image 
                  src={img} 
                  alt={`${product.name} - view ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>

          {/* Right Column: Info */}
          <div className="pd-info-column" style={{ position: 'relative' }}>
            <div className="pd-info-wrapper" style={{ position: 'sticky', top: '40px', paddingBottom: '40px' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'rgba(0,0,0,0.03)', padding: '6px 12px', borderRadius: '100px' }}>
                  <Star size={14} fill="#F6A800" color="#F6A800" />
                  <span style={{ color: '#F6A800', fontWeight: '700', fontSize: '13px' }}>4.9</span>
                  <span style={{ fontSize: '13px', color: '#666', marginLeft: '4px' }}>(124 reviews)</span>
                </div>
                
                {/* Sold count - Animated */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#e03131', fontWeight: '600', backgroundColor: 'rgba(224,49,49,0.08)', padding: '6px 12px', borderRadius: '100px' }}>
                  <svg className="pulse-flame" width="13" height="15" fill="none">
                    <path fill="#e03131" d="M6.584 15c-2.437 0-4.626-1.556-5.356-3.88a5.186 5.186 0 0 1-.249-1.556c0-3.032 2.482-5.479 2.482-5.479s-.17.99-.064 1.834c.106.843.498 1.36.498 1.36s-.286-1.324.094-2.211c.438-1.022 1.255-1.495 1.569-2.415.36-1.059-.18-2.29-.18-2.29s1.78.688 3.065 2.462c1.459 2.013.476 4.606.476 4.606s.136-.716.873-1.297c.737-.58.438-1.48.438-1.48s1.993 2.233 1.993 4.91c0 .726-.208 1.459-.512 2.141C10.815 13.722 8.791 15 6.584 15Z"></path>
                  </svg>
                  <span>{mounted ? soldCount : '...'} sold recently</span>
                </div>
              </div>

              <h1 className="pd-title" style={{ fontSize: '38px', fontWeight: '800', fontFamily: 'var(--font-inter)', marginBottom: '16px', lineHeight: '1.1', color: '#111', letterSpacing: '-1px' }}>
                {product.name}
              </h1>
              
              <div className="pd-price" style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px', color: '#111', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                Rs. {product.price.toLocaleString('en-IN')}.00
                <span style={{ fontSize: '16px', color: '#888', textDecoration: 'line-through', fontWeight: '500' }}>Rs. {(product.price * 1.4).toLocaleString('en-IN')}.00</span>
                <span style={{ backgroundColor: '#10b981', color: '#fff', fontSize: '13px', padding: '4px 10px', borderRadius: '4px', fontWeight: '700', letterSpacing: '0.5px' }}>SAVE 28%</span>
              </div>

              <LiveViewersWidget />

              {/* Variant Pickers */}
              <div className="product-detail__variant-picker" style={{ marginBottom: '32px', marginTop: '24px' }}>
                
                {/* Colors */}
                <fieldset style={{ border: 'none', padding: 0, margin: '0 0 32px 0' }}>
                  <div style={{ display: 'flex', gap: '15px', justifyContent: 'space-between', marginBottom: '12px', width: '100%', lineHeight: 'normal' }}>
                    <span style={{ fontSize: '14px', color: '#555', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Color: <strong style={{ color: '#111' }}>{selectedColor}</strong></span>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {colors.map(color => (
                      <div key={color.name} style={{ position: 'relative' }}>
                        <button 
                          onClick={() => setSelectedColor(color.name)}
                          onMouseEnter={() => setHoveredColor(color.name)}
                          onMouseLeave={() => setHoveredColor(null)}
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            backgroundColor: color.hex,
                            border: '1px solid rgba(0,0,0,0.1)',
                            cursor: 'pointer',
                            position: 'relative',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: selectedColor === color.name ? 'scale(1.1)' : 'scale(1)',
                            boxShadow: selectedColor === color.name ? `0 0 0 2px #fff, 0 0 0 4px #111` : '0 2px 5px rgba(0,0,0,0.1)',
                          }}
                        />
                        
                        {/* Tooltip */}
                        <div style={{
                          position: 'absolute',
                          bottom: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          marginBottom: '12px',
                          backgroundColor: '#111',
                          color: '#fff',
                          padding: '6px 10px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '600',
                          whiteSpace: 'nowrap',
                          pointerEvents: 'none',
                          opacity: hoveredColor === color.name ? 1 : 0,
                          visibility: hoveredColor === color.name ? 'visible' : 'hidden',
                          transition: 'opacity 0.2s, visibility 0.2s',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                        }}>
                          {color.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </fieldset>

                {/* Mousepad Size */}
                <fieldset style={{ border: 'none', padding: 0, margin: '0 0 32px 0' }}>
                  <div style={{ display: 'flex', gap: '15px', justifyContent: 'space-between', marginBottom: '12px', width: '100%', lineHeight: 'normal' }}>
                    <span style={{ fontSize: '14px', color: '#555', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Size: <strong style={{ color: '#111' }}>{selectedSize}</strong></span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button 
                      className={`variant-btn ${selectedSize === '80x30' ? 'active' : ''}`}
                      onClick={() => setSelectedSize('80x30')}
                      style={{ 
                        padding: '14px 24px', 
                        borderRadius: '8px', 
                        fontWeight: '600', 
                        fontSize: '15px', 
                        cursor: 'pointer', 
                        transition: 'all 0.2s',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '4px'
                      }}
                    >
                      <span>80x30 cm</span>
                      <span style={{ fontSize: '12px', opacity: 0.7, fontWeight: '400' }}>4mm Thick • Premium Edge</span>
                    </button>
                  </div>
                </fieldset>

                {/* Surface Type */}
                <fieldset style={{ border: 'none', padding: 0, margin: '0' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px', width: '100%', lineHeight: 'normal' }}>
                    <span style={{ fontSize: '14px', color: '#555', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Surface: <strong style={{ color: '#111' }}>{selectedSurface}</strong></span>
                    <span style={{ fontSize: '12px', color: '#777', fontStyle: 'italic' }}>ⓘ Control = precision for gaming / Speed = smooth glide for daily use</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button 
                      className={`variant-btn ${selectedSurface === 'Control Type' ? 'active' : ''}`}
                      onClick={() => setSelectedSurface('Control Type')}
                      style={{ 
                        padding: '14px 24px', 
                        borderRadius: '8px', 
                        fontWeight: '600', 
                        fontSize: '15px', 
                        cursor: 'pointer', 
                        transition: 'all 0.2s',
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <Package size={18} /> Control 
                    </button>
                    <button 
                      className={`variant-btn ${selectedSurface === 'Speed Type' ? 'active' : ''}`}
                      onClick={() => setSelectedSurface('Speed Type')}
                      style={{ 
                        padding: '14px 24px', 
                        borderRadius: '8px', 
                        fontWeight: '600', 
                        fontSize: '15px', 
                        cursor: 'pointer', 
                        transition: 'all 0.2s',
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <Zap size={18} /> Speed 
                    </button>
                  </div>
                </fieldset>

              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', padding: '0 8px', width: '130px', justifyContent: 'space-between', height: '56px', backgroundColor: 'rgba(0,0,0,0.02)' }}>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ border: 'none', background: 'none', fontSize: '20px', cursor: 'pointer', padding: '10px', color: '#111' }}>-</button>
                  <span style={{ fontWeight: '600', color: '#111', fontSize: '16px' }}>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} style={{ border: 'none', background: 'none', fontSize: '20px', cursor: 'pointer', padding: '10px', color: '#111' }}>+</button>
                </div>
                <button 
                  className="cart-btn"
                  onClick={() => addToCart(quantity)} 
                  style={{ flex: 1, borderRadius: '8px', fontWeight: '700', fontSize: '16px', cursor: 'pointer', transition: 'all 0.2s', height: '56px' }}
                >
                  Add to Cart
                </button>
              </div>
              
              <button 
                className="buy-btn"
                style={{ width: '100%', border: 'none', borderRadius: '8px', height: '56px', fontWeight: '800', fontSize: '16px', marginBottom: '32px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
              >
                Buy it now
              </button>

              {/* Trust Badges Container */}
              <div style={{ padding: '24px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ color: '#111', backgroundColor: 'rgba(0,0,0,0.05)', padding: '10px', borderRadius: '8px' }}>
                    <ShieldCheck size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#111', marginBottom: '4px' }}>Premium Quality Guarantee</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>Get 100% refund on non-delivery or defects</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ color: '#111', backgroundColor: 'rgba(0,0,0,0.05)', padding: '10px', borderRadius: '8px' }}>
                    <Truck size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#111', marginBottom: '4px' }}>Free Express Shipping.</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>Order dispatched within 24 hours.</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', opacity: 0.6 }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#111', letterSpacing: '1px' }}>SECURE CHECKOUT</span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Full Width Features Grid */}
      <div style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
        <FeaturesHighlights />
      </div>

      {/* Tabs / Description */}
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px', gap: '16px' }}>
          <button 
            onClick={() => setActiveTab('description')}
            style={{ 
              padding: '12px 32px', 
              fontSize: '16px', 
              fontWeight: '700', 
              color: activeTab === 'description' ? '#fff' : '#555',
              backgroundColor: activeTab === 'description' ? '#111' : 'transparent',
              border: activeTab === 'description' ? '1px solid #111' : '1px solid #ddd',
              borderRadius: '100px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Story
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            style={{ 
              padding: '12px 32px', 
              fontSize: '16px', 
              fontWeight: '700', 
              color: activeTab === 'reviews' ? '#fff' : '#555',
              backgroundColor: activeTab === 'reviews' ? '#111' : 'transparent',
              border: activeTab === 'reviews' ? '1px solid #111' : '1px solid #ddd',
              borderRadius: '100px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Reviews (124)
          </button>
        </div>

        <div>
          {activeTab === 'reviews' ? (
            <ProductReviews />
          ) : (
            <div className="product-description-content" style={{ lineHeight: '1.8', color: '#555', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h3 style={{ fontSize: '36px', color: '#111', marginBottom: '32px', fontWeight: '800', letterSpacing: '-1px' }}>Elevate Your Setup.</h3>
              <p style={{ marginBottom: '40px', fontSize: '18px' }}>
                Add a modern, artistic flair to your workspace with our meticulously crafted premium desk mat. Featuring elegant contour lines in a variety of color options, this design brings a sophisticated, stylish touch to any setup, seamlessly blending creativity and functionality.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', textAlign: 'left', marginTop: '60px' }}>
                <div>
                  <h4 style={{ fontSize: '20px', color: '#111', marginBottom: '16px', fontWeight: '700' }}>Engineered for Precision</h4>
                  <p style={{ fontSize: '15px', color: '#666' }}>
                    With a 4mm thickness, our deskpads are just right—not too thick, not too thin. The micro-woven surface is optimized for both optical and laser mice.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '20px', color: '#111', marginBottom: '16px', fontWeight: '700' }}>Built to Outlast</h4>
                  <p style={{ fontSize: '15px', color: '#666' }}>
                    Fraying edges? Not here. Our deskpads are built with high-quality seamless stitched edges that keep them looking clean and polished for years.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sticky Bottom Cart Bar */}
      {showStickyBar && (
        <div className="sticky-cart-bar" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100, padding: '12px 24px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ width: '56px', height: '56px', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)' }}>
                <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="sticky-info-text">
                <div style={{ fontWeight: '700', fontSize: '16px', color: '#111', marginBottom: '4px' }}>{product.name}</div>
                <div style={{ fontSize: '13px', color: '#666', fontWeight: '500' }}>{selectedColor} / {selectedSurface}</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '18px', fontWeight: '700', color: '#111' }}>Rs. {product.price.toLocaleString('en-IN')}</span>
              <button onClick={() => addToCart(quantity)} className="buy-btn" style={{ border: 'none', borderRadius: '8px', fontWeight: '800', fontSize: '15px', padding: '0 32px', height: '48px', cursor: 'pointer', transition: 'all 0.2s' }}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
