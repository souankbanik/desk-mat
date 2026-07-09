import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function TermsOfService() {
  return (
    <div className="app-container">
      <Navbar />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 24px', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '32px' }}>Terms of Service</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.8', color: '#444' }}>
          <p>By accessing the website at DMND+, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', marginTop: '16px' }}>Use License</h3>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on DMND+'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
          
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', marginTop: '16px' }}>Disclaimer</h3>
          <p>The materials on DMND+'s website are provided on an 'as is' basis. DMND+ makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', marginTop: '16px' }}>Limitations</h3>
          <p>In no event shall DMND+ or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DMND+'s website.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
