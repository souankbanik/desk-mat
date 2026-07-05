"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    { q: "Do you offer free shipping in India?", a: "Yes, we offer free shipping across India on all prepaid orders." },
    { q: "How do I clean my desk mat?", a: "Simply use a damp cloth with mild soap and gently wipe the surface. Let it air dry." },
    { q: "What is the return policy?", a: "We have a 7-day return policy for any manufacturing defects." }
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="faq-section container">
      <h2 className="grid-title text-center" style={{ textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</h2>
      <div className="faq-accordion">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <button className="faq-question" onClick={() => setOpen(open === idx ? null : idx)}>
              {faq.q}
              <span>{open === idx ? '-' : '+'}</span>
            </button>
            <AnimatePresence>
              {open === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{ padding: '16px 0', color: 'var(--text-secondary)' }}>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
