"use client";

import React, { useState } from 'react';
import Script from 'next/script';
import { JetBrains_Mono } from 'next/font/google';

const jetbrains = JetBrains_Mono({ subsets: ['latin'] });

// Declare Razorpay window object
declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tool: 'axiom_terminal',
    plan: 'monthly',
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const tools = [
    { id: 'axiom_terminal', name: 'Axiom Terminal', color: '#f0a500', price: { starter: 100, monthly: 999, annual: 9999, founding_monthly: 599 } },
    { id: 'tara_lens', name: 'Tara Lens', color: '#3a8fff', price: { starter: 100, monthly: 999, annual: 9999, founding_monthly: 499 } },
  ];

  const plans = [
    { id: 'starter', label: 'Starter', desc: 'Basic access — try before you commit', badge: '₹100/mo' },
    { id: 'founding_monthly', label: 'Founding Member', desc: 'Locked for life — first 100 users only', badge: 'Best Value' },
    { id: 'monthly', label: 'Monthly', desc: 'Full access, cancel anytime', badge: '' },
    { id: 'yearly', label: 'Annual', desc: '2 months free', badge: '16% off' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Create Order on Backend
      const res = await fetch('https://api.taracapitals.in/api/checkout/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.detail || 'Failed to create order');
      }

      // Initialize Razorpay Modal
      const options = {
        key: data.key_id,
        amount: data.amount,
        currency: 'INR',
        name: 'Tara Capital',
        description: `${formData.plan === 'monthly' ? 'Monthly' : formData.plan === 'annual' ? 'Annual' : 'Founding'} Subscription for ${tools.find(t => t.id === formData.tool)?.name}`,
        order_id: data.order_id,
        handler: function (response: any) {
          // Razorpay handles success via Webhook, but we can show success to user
          setSuccess(true);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: tools.find(t => t.id === formData.tool)?.color || '#38bdf8',
        },
      };

      const rzp = new window.Razorpay(options);
      
      rzp.on('payment.failed', function (response: any) {
        setError(response.error.description || 'Payment failed. Please try again.');
      });
      
      rzp.open();

    } catch (err: any) {
      setError(err.message || 'An error occurred during checkout.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className={`min-h-screen bg-[#080809] flex flex-col items-center justify-center text-white ${jetbrains.className} p-4`}>
        <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-10 max-w-lg text-center shadow-2xl">
          <svg className="w-16 h-16 text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h2 className="text-3xl font-bold mb-4">Payment Successful!</h2>
          <p className="text-gray-400 mb-8">
            Your subscription has been activated. Please check your email <strong>{formData.email}</strong> for your secure login credentials and instructions.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors border border-gray-700"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  const selectedTool = tools.find(t => t.id === formData.tool);
  const currentPrice = selectedTool?.price[formData.plan as 'monthly' | 'annual' | 'founding'];

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <div className={`min-h-screen bg-[#080809] flex items-center justify-center p-6 ${jetbrains.className} text-gray-200`}>
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8">
          
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold mb-4 text-white">Complete Your Checkout</h1>
            <p className="text-gray-400 mb-8">Secure your premium access to Tara Capital's quantitative options suite.</p>
            
            <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 w-1 h-full" 
                style={{ backgroundColor: selectedTool?.color }}
              ></div>
              <h3 className="text-xl font-bold mb-2 text-white">{selectedTool?.name}</h3>
              <p className="text-gray-400 text-sm mb-4">Professional analytics & real-time greeks tracker.</p>
              
              <div className="flex items-end gap-2 mt-6">
                <span className="text-3xl font-bold text-white">₹{currentPrice?.toLocaleString()}</span>
                <span className="text-gray-500 mb-1">/ {formData.plan === 'annual' ? 'year' : 'month'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-[#111827] border border-[#1f2937] p-8 rounded-xl shadow-2xl">
            <form onSubmit={handleCheckout} className="space-y-5">
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Select Tool</label>
                <div className="grid grid-cols-1 gap-3">
                  <select 
                    name="tool" 
                    value={formData.tool} 
                    onChange={handleInputChange}
                    className="w-full bg-[#1f2937] border border-[#374151] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  >
                    {tools.map(t => (
                      <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Billing Cycle</label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, plan: 'monthly' })}
                    className={`py-3 rounded-lg border text-sm font-semibold transition-all ${
                      formData.plan === 'monthly' 
                        ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#38bdf8]' 
                        : 'border-[#374151] bg-[#1f2937] text-gray-400 hover:bg-[#374151]'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, plan: 'annual' })}
                    className={`py-3 rounded-lg border text-sm font-semibold transition-all ${
                      formData.plan === 'annual' 
                        ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#38bdf8]' 
                        : 'border-[#374151] bg-[#1f2937] text-gray-400 hover:bg-[#374151]'
                    }`}
                  >
                    Annual
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, plan: 'founding' })}
                    className={`py-3 rounded-lg border text-sm font-semibold transition-all ${
                      formData.plan === 'founding' 
                        ? 'border-[#f0a500] bg-[#f0a500]/10 text-[#f0a500]' 
                        : 'border-[#374151] bg-[#1f2937] text-gray-400 hover:bg-[#374151]'
                    }`}
                  >
                    Founding
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-[#1f2937] border border-[#374151] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8]"
                  placeholder="Rahul Kumar"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#1f2937] border border-[#374151] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8]"
                  placeholder="rahul@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-[#1f2937] border border-[#374151] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8]"
                  placeholder="+91 98765 43210"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-900/30 border border-red-500/50 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{ backgroundColor: selectedTool?.color }}
                className="w-full py-4 mt-4 rounded-lg text-gray-900 font-extrabold text-lg hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : `Pay ₹${currentPrice?.toLocaleString()}`}
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Secured by Razorpay. 256-bit SSL encryption.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
