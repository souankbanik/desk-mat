import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="app-container">
      <Navbar />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 24px', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '32px' }}>Privacy Policy</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.8', color: '#444' }}>
          <p>Your privacy is important to us. It is DMND+'s policy to respect your privacy regarding any information we may collect from you across our website.</p>
          
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', marginTop: '16px' }}>Information We Collect</h3>
          <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.</p>
          
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', marginTop: '16px' }}>Data Storage</h3>
          <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
          
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', marginTop: '16px' }}>Third-Party Sharing</h3>
          <p>We don't share any personally identifying information publicly or with third-parties, except when required to by law or to process payments via our secure payment gateway partners.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
