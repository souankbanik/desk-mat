"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // Using a placeholder number for now as requested.
  // When a domain is bought, this will be updated to the real business number.
  const phoneNumber = "910000000000"; 
  const message = "Hi! I need help with my DMND+ order.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '100px', // high enough to clear mobile nav completely
        right: '24px',
        backgroundColor: '#25D366', // Official WhatsApp green
        color: '#fff',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
        zIndex: 999,
        transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        textDecoration: 'none'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <MessageCircle size={32} />
      
      {/* Pulse animation ring */}
      <span style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        borderRadius: '50%',
        border: '2px solid #25D366',
        animation: 'pulse-ring 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1)'
      }}></span>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @media (min-width: 768px) {
          a[aria-label="Chat with us on WhatsApp"] { bottom: 32px !important; }
        }
      `}} />
    </a>
  );
};

export default WhatsAppButton;
