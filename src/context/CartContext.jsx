"use client";

import React, { createContext, useContext, useState } from 'react';
import { createShopifyCheckout } from '../lib/shopify';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Derive cartCount from items
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (productOrQuantity, optionalQty) => {
    let product = { id: 'gid://shopify/ProductVariant/DUMMY', title: 'DMND+ Control Deskmat', price: 1999, image: '/images/mat_midnight.png' };
    let quantity = 1;

    if (typeof productOrQuantity === 'number') {
      quantity = productOrQuantity;
    } else if (productOrQuantity && typeof productOrQuantity === 'object') {
      product = productOrQuantity;
      quantity = optionalQty !== undefined ? optionalQty : 1;
    }

    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const decreaseQuantity = (productId) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
      }
      return item;
    }));
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => setCartItems([]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    setIsCheckingOut(true);
    
    try {
      const checkoutUrl = await createShopifyCheckout(cartItems);
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        alert("Shopify is not connected yet! This is a demo checkout. To process real orders, add your Shopify Storefront API token to Cloudflare env vars.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to initialize checkout.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, cartCount, isCartOpen, setIsCartOpen, toggleCart, addToCart, decreaseQuantity, removeFromCart, clearCart, handleCheckout, isCheckingOut }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
