import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  
  const addToCart = (quantity = 1) => {
    setCartCount(prev => prev + quantity);
    setIsCartOpen(true);
  };

  useEffect(() => {
    const img = new Image();
    img.src = '/images/hero_desk_setup.png';
  }, []);

  return (
    <div className="app-container">
      <Navbar cartCount={cartCount} toggleCart={toggleCart} />
      
      <main>
        <Hero />
        <ProductGrid addToCart={addToCart} />
      </main>
      
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
