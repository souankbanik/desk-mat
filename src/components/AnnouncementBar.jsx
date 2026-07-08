"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div style={{ backgroundColor: '#1a1a1a', color: '#ffffff', textAlign: 'center', padding: '10px 40px', fontSize: '13px', fontWeight: '500', position: 'relative', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'var(--font-inter)' }}>
      <span>10% off your first order. Use Code: <strong>LEVELUP</strong></span>
      <button 
        onClick={() => setIsVisible(false)} 
        style={{ position: 'absolute', right: '15px', background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px' }}
        aria-label="Close announcement"
      >
        <X size={14} />
      </button>
    </div>
  );
}
