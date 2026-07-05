import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import TrustBar from './components/TrustBar';
import ProductShowcase from './components/ProductShowcase';
import Pricing from './components/Pricing';
import ProductDetails from './components/ProductDetails';
import Lifestyle from './components/Lifestyle';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import StickyCart from './components/StickyCart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedDesign, setSelectedDesign] = useState('Topography');
  
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  
  const addToCart = (quantity = 1) => {
    setCartCount(prev => prev + quantity);
    setIsCartOpen(true);
  };

  // Preload hero image
  useEffect(() => {
    const img = new Image();
    img.src = '/images/hero_desk_setup.png';
  }, []);

  return (
    <div className="app-container">
      <Navbar cartCount={cartCount} toggleCart={toggleCart} />
      
      <main>
        <Hero 
          selectedDesign={selectedDesign} 
          setSelectedDesign={setSelectedDesign} 
          addToCart={addToCart} 
        />
        <SocialProof />
        <TrustBar />
        <ProductShowcase />
        <ProductDetails />
        <Lifestyle />
        <Pricing 
          selectedDesign={selectedDesign} 
          setSelectedDesign={setSelectedDesign}
          addToCart={addToCart} 
        />
        <Reviews />
        <FAQ />
      </main>

      <Footer />
      
      <StickyCart addToCart={addToCart} />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        toggleCart={toggleCart} 
        cartCount={cartCount}
        addToCart={addToCart}
      />
    </div>
  );
}

export default App;
