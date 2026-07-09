"use client";

import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, login } = useAuth();
  
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // Countdown timer for OTP resend
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => setCountdown(prev => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  if (!isAuthModalOpen) return null;

  const validatePhone = () => {
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setError('Please enter a valid 10-digit phone number.');
      return false;
    }
    if (fullName.trim().length < 2) {
      setError('Please enter your full name.');
      return false;
    }
    setError('');
    return true;
  };

  const handleRequestOTP = (e) => {
    e.preventDefault();
    if (!validatePhone()) return;

    setIsLoading(true);
    // Simulate API call to send OTP
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
      setCountdown(30);
    }, 1500);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (otp !== '123456') {
      setError('Invalid OTP. Hint: use 123456');
      return;
    }

    setIsLoading(true);
    setError('');
    
    // Simulate API call for verification
    setTimeout(() => {
      setIsLoading(false);
      login({
        name: fullName,
        phone: `${countryCode} ${phone}`,
        id: 'usr_' + Math.random().toString(36).substr(2, 9)
      });
      // Reset state for next open
      setTimeout(() => {
        setStep(1);
        setPhone('');
        setFullName('');
        setOtp('');
      }, 500);
    }, 1200);
  };

  const resendOTP = () => {
    if (countdown > 0) return;
    setCountdown(30);
    // Simulate sending again
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 9999,
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#0a0a0a',
        border: '1px solid #222',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '440px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        
        {/* Close Button */}
        <button 
          onClick={closeAuthModal}
          style={{
            position: 'absolute', top: '20px', right: '20px',
            background: 'rgba(255,255,255,0.1)', border: 'none',
            borderRadius: '50%', width: '36px', height: '36px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#fff', zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        <div style={{ padding: '40px 32px' }}>
          {step === 1 ? (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <h2 style={{ fontSize: '28px', color: '#fff', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.5px' }}>
                Welcome to DMND+
              </h2>
              <p style={{ color: '#888', fontSize: '15px', marginBottom: '32px' }}>
                Enter your details to track orders, save items to wishlist, and checkout faster.
              </p>

              <form onSubmit={handleRequestOTP}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', color: '#ccc', fontSize: '13px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Full Name</label>
                  <input 
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    style={{
                      width: '100%', padding: '16px', borderRadius: '12px',
                      backgroundColor: '#111', border: '1px solid #333',
                      color: '#fff', fontSize: '16px', outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '8px' }}>
                  <label style={{ display: 'block', color: '#ccc', fontSize: '13px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone Number</label>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <select 
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      style={{
                        padding: '0 16px', borderRadius: '12px',
                        backgroundColor: '#111', border: '1px solid #333',
                        color: '#fff', fontSize: '16px', outline: 'none',
                        cursor: 'pointer', width: '100px', appearance: 'none'
                      }}
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+61">🇦🇺 +61</option>
                    </select>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0,10))}
                      placeholder="98765 43210"
                      style={{
                        flex: 1, padding: '16px', borderRadius: '12px',
                        backgroundColor: '#111', border: '1px solid #333',
                        color: '#fff', fontSize: '16px', outline: 'none', letterSpacing: '1px'
                      }}
                    />
                  </div>
                </div>

                {error && <p style={{ color: '#ff6b6b', fontSize: '13px', marginTop: '12px', fontWeight: '500' }}>{error}</p>}

                <button 
                  type="submit"
                  disabled={isLoading}
                  style={{
                    width: '100%', padding: '16px', borderRadius: '12px',
                    background: '#fff', color: '#0a0a0a', border: 'none',
                    fontSize: '16px', fontWeight: '700', cursor: 'pointer',
                    marginTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    opacity: isLoading ? 0.7 : 1
                  }}
                >
                  {isLoading ? <Loader2 className="animate-spin" size={20} /> : (
                    <>Send OTP <ArrowRight size={18} /></>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <div style={{ 
                width: '48px', height: '48px', borderRadius: '12px', 
                backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', 
                alignItems: 'center', justifyContent: 'center', marginBottom: '24px'
              }}>
                <CheckCircle2 color="#fff" size={24} />
              </div>
              <h2 style={{ fontSize: '28px', color: '#fff', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.5px' }}>
                Verify Phone
              </h2>
              <p style={{ color: '#888', fontSize: '15px', marginBottom: '32px' }}>
                We've sent a 6-digit code to <strong style={{ color: '#fff' }}>{countryCode} {phone}</strong>.{' '}
                <button onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: '#66b2ff', padding: 0, cursor: 'pointer', textDecoration: 'underline' }}>Edit</button>
              </p>

              <form onSubmit={handleVerifyOTP}>
                <input 
                  type="text" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0,6))}
                  placeholder="••••••"
                  style={{
                    width: '100%', padding: '20px', borderRadius: '12px',
                    backgroundColor: '#111', border: '1px solid #333',
                    color: '#fff', fontSize: '24px', outline: 'none',
                    textAlign: 'center', letterSpacing: '8px', fontWeight: '700'
                  }}
                />
                
                {error && <p style={{ color: '#ff6b6b', fontSize: '13px', marginTop: '12px', fontWeight: '500', textAlign: 'center' }}>{error}</p>}

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
                  <button 
                    type="button"
                    onClick={resendOTP}
                    disabled={countdown > 0}
                    style={{
                      background: 'none', border: 'none', 
                      color: countdown > 0 ? '#555' : '#fff', 
                      fontSize: '14px', fontWeight: '600', cursor: countdown > 0 ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {countdown > 0 ? `Resend code in ${countdown}s` : 'Resend Code'}
                  </button>
                </div>

                <button 
                  type="submit"
                  disabled={isLoading || otp.length !== 6}
                  style={{
                    width: '100%', padding: '16px', borderRadius: '12px',
                    background: '#fff', color: '#0a0a0a', border: 'none',
                    fontSize: '16px', fontWeight: '700', cursor: (isLoading || otp.length !== 6) ? 'not-allowed' : 'pointer',
                    marginTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    opacity: (isLoading || otp.length !== 6) ? 0.5 : 1
                  }}
                >
                  {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'Verify & Login'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .animate-spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
    </div>
  );
}
