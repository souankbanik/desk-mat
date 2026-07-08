"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Store, ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function BottomNav() {
  const pathname = usePathname();
  const { cartCount, toggleCart } = useCart();
  const { wishlistItems } = useWishlist();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Shop', icon: Store, path: '/collections/all' },
    { name: 'Cart', icon: ShoppingBag, isCart: true },
    { name: 'Wishlist', icon: Heart, path: '/wishlist', badge: wishlistItems.length }
  ];

  return (
    <div className="bottom-nav" style={{
      position: 'fixed', bottom: 0, left: 0, width: '100%',
      backgroundColor: '#ffffff', borderTop: '1px solid #eeeeee',
      display: 'flex', justifyContent: 'space-around', alignItems: 'center',
      padding: '12px 0', zIndex: 1000, boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
    }}>
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = pathname === item.path;
        const color = isActive ? 'var(--color-primary)' : '#555555';
        
        const content = (
          <>
            <div style={{ position: 'relative' }}>
              <Icon size={24} color={color} strokeWidth={isActive ? 2.5 : 2} />
              {(item.isCart ? cartCount > 0 : item.badge > 0) && (
                <span style={{
                  position: 'absolute', top: '-6px', right: '-8px',
                  backgroundColor: '#4b0082', color: 'white',
                  fontSize: '10px', fontWeight: 'bold',
                  width: '16px', height: '16px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {item.isCart ? cartCount : item.badge}
                </span>
              )}
            </div>
            <span style={{ fontSize: '10px', marginTop: '4px', fontWeight: isActive ? '600' : '500', color }}>
              {item.name}
            </span>
          </>
        );

        if (item.isCart) {
          return (
            <button key={index} onClick={toggleCart} style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
              {content}
            </button>
          );
        }

        return (
          <Link key={index} href={item.path} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {content}
          </Link>
        );
      })}
    </div>
  );
}
