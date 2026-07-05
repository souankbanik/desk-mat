"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Is it washable?",
    a: "Yes. Hand wash gently using mild soap and cold water."
  },
  {
    q: "Will the print fade?",
    a: "No. We use premium sublimation printing for vibrant, long-lasting colors."
  },
  {
    q: "Does it move while gaming?",
    a: "No. The natural rubber anti-slip base keeps it firmly in place."
  },
  {
    q: "What size is it?",
    a: "800×300mm with a comfortable 4mm thickness."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    if (openIndex === idx) setOpenIndex(null);
    else setOpenIndex(idx);
  };

  return (
    <section id="faq" className="faq-section container">
      <h2 className="faq-title text-center text-metallic">Frequently Asked Questions</h2>
      
      <div className="faq-accordion">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <button 
              className="faq-question" 
              onClick={() => toggle(idx)}
            >
              <span>{faq.q}</span>
              <motion.div
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} className="text-secondary" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="faq-answer-wrapper"
                >
                  <div className="faq-answer text-secondary">
                    {faq.a}
                  </div>
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
