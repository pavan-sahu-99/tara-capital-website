"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { JetBrains_Mono } from 'next/font/google';

const jetbrains = JetBrains_Mono({ subsets: ['latin'] });

declare global {
  interface Window { Razorpay: any; }
}

const tools = [
  { id: 'axiom_terminal', name: 'Axiom Terminal', color: '#f0a500', price: { starter: 100, monthly: 999, annual: 9999, founding_monthly: 599 } },
  { id: 'tara_lens',      name: 'Tara Lens',      color: '#3a8fff', price: { starter: 100, monthly: 499, annual: 4499, founding_monthly: 299 } },
];

const planLabel: Record<string, string> = {
  founding_monthly: 'Founding Member',
  monthly: 'Monthly',
  annual: 'Annual',
  starter: 'Starter',
};

function CheckoutForm() {
  const searchParams  = useSearchParams();
  const urlTool       = searchParams.get('tool') || '';
  const urlPlan       = searchParams.get('plan') || '';
  const isDirectBuy   = !!(urlTool && urlPlan);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    tool: urlTool || 'axiom_terminal',
    plan: urlPlan || 'monthly',
  });
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState('');
  const [success,  setSuccess]  = useState(false);
  const [launched, setLaunched] = useState(false);

  const selectedTool = tools.find(t => t.id === (isDirectBuy ? urlTool : formData.tool)) || tools[0];
  const displayPlan  = isDirectBuy ? urlPlan : formData.plan;
  const currentPrice = selectedTool?.price[displayPlan as keyof typeof selectedTool.price];

  // Direct-buy: auto-open Razorpay once script is loaded
  useEffect(() => {
    if (!isDirectBuy) return;

    const launch = () => {
      if (window.Razorpay && !launched) {
        setLaunched(true);
        triggerPayment(urlTool, urlPlan, {});
      }
    };

    launch(); // try immediately if already loaded
    window.addEventListener('razorpay-ready', launch);
    const poll = setInterval(() => { if (window.Razorpay) { launch(); clearInterval(poll); } }, 200);
    return () => { window.removeEventListener('razorpay-ready', launch); clearInterval(poll); };
  }, [isDirectBuy]);

  const triggerPayment = async (tool: string, plan: string, prefill: Record<string, string>) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://api.taracapitals.in/api/checkout/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tool,
          plan,
          name:  prefill.name  || '',
          email: prefill.email || '',
          phone: prefill.phone || '',
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Failed to create order');

      const toolInfo = tools.find(t => t.id === tool);
      const options = {
        key:         data.key_id,
        amount:      data.amount,
        currency:    'INR',
        name:        'Tara Capitals',
        description: `${planLabel[plan] || plan} — ${toolInfo?.name || tool}`,
        order_id:    data.order_id,
        handler: function () { setSuccess(true); },
        prefill,
        theme: { color: toolInfo?.color || '#f0a500' },
      };
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (r: any) => {
        setError(r.error.description || 'Payment failed. Please try again.');
        setLoading(false);
      });
      rzp.open();
    } catch (err: any) {
      setError(err.message || 'An error occurred during checkout.');
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    triggerPayment(formData.tool, formData.plan, {
      name:    formData.name,
      email:   formData.email,
      contact: formData.phone,
    });
  };

  // ── Success screen (shared) ──────────────────────────────────────────────
  if (success) {
    return (
      <div className={`min-h-screen bg-[#080809] flex flex-col items-center justify-center text-white ${jetbrains.className} p-4`}>
        <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-10 max-w-lg text-center shadow-2xl">
          <svg className="w-16 h-16 text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h2 className="text-3xl font-bold mb-4">Payment Successful!</h2>
          <p className="text-gray-400 mb-8">
            Your subscription has been activated. Check your email for login credentials.
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

  // ── Direct-buy mode: no form, just payment launch screen ────────────────
  if (isDirectBuy) {
    return (
      <div className={`min-h-screen bg-[#080809] flex items-center justify-center ${jetbrains.className}`}>
        <div className="text-center max-w-sm px-6">
          {/* Tool badge */}
          <div
            className="inline-block text-xs font-bold tracking-widest uppercase mb-6 px-3 py-1 rounded"
            style={{ color: selectedTool.color, border: `1px solid ${selectedTool.color}44`, background: `${selectedTool.color}11` }}
          >
            {selectedTool.name}
          </div>

          {/* Price */}
          <div className="text-5xl font-extrabold text-white mb-1">
            ₹{currentPrice?.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500 mb-2 uppercase tracking-widest">
            {planLabel[urlPlan] || urlPlan}
          </div>
          {urlPlan === 'founding_monthly' && (
            <div className="text-xs mb-6 uppercase tracking-widest" style={{ color: selectedTool.color }}>
              Founding rate — locked for life
            </div>
          )}

          {/* Status */}
          {error ? (
            <>
              <div className="p-3 bg-red-900/30 border border-red-500/50 rounded-lg text-red-400 text-sm mb-4">
                {error}
              </div>
              <button
                onClick={() => { setError(''); setLaunched(false); }}
                className="w-full py-4 rounded-lg font-extrabold text-sm tracking-widest uppercase transition-all hover:brightness-110"
                style={{ backgroundColor: selectedTool.color, color: '#080809' }}
              >
                Try Again
              </button>
            </>
          ) : loading ? (
            <div className="text-gray-500 text-sm tracking-widest uppercase animate-pulse">
              Preparing payment…
            </div>
          ) : (
            <button
              onClick={() => { setLaunched(false); setTimeout(() => setLaunched(true), 50); }}
              className="w-full py-4 rounded-lg font-extrabold text-sm tracking-widest uppercase transition-all hover:brightness-110"
              style={{ backgroundColor: selectedTool.color, color: '#080809' }}
            >
              Pay ₹{currentPrice?.toLocaleString()} →
            </button>
          )}

          <p className="text-xs text-gray-600 mt-6">Secured by Razorpay · 256-bit SSL</p>
        </div>
      </div>
    );
  }

  // ── Full form mode (direct /checkout navigation, no params) ─────────────
  return (
    <div className={`min-h-screen bg-[#080809] flex items-center justify-center p-6 ${jetbrains.className} text-gray-200`}>
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8">

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-4 text-white">Complete Your Checkout</h1>
          <p className="text-gray-400 mb-8">Secure your premium access to Tara Capitals' quantitative options suite.</p>
          <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: selectedTool?.color }}></div>
            <h3 className="text-xl font-bold mb-2 text-white">{selectedTool?.name}</h3>
            <p className="text-gray-400 text-sm mb-4">Professional analytics & real-time greeks tracker.</p>
            <div className="flex items-end gap-2 mt-6">
              <span className="text-3xl font-bold text-white">₹{currentPrice?.toLocaleString()}</span>
              <span className="text-gray-500 mb-1">/ {formData.plan === 'annual' ? 'year' : 'month'}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#111827] border border-[#1f2937] p-8 rounded-xl shadow-2xl">
          <form onSubmit={handleFormSubmit} className="space-y-5">

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">Select Tool</label>
              <select
                name="tool" value={formData.tool}
                onChange={e => setFormData({ ...formData, tool: e.target.value })}
                className="w-full bg-[#1f2937] border border-[#374151] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              >
                {tools.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">Billing Cycle</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'starter',         label: 'Starter ₹100' },
                  { id: 'founding_monthly', label: 'Founding'    },
                  { id: 'monthly',          label: 'Monthly'     },
                  { id: 'annual',           label: 'Annual'      },
                ].map(p => (
                  <button
                    key={p.id} type="button"
                    onClick={() => setFormData({ ...formData, plan: p.id })}
                    className={`py-3 rounded-lg border text-sm font-semibold transition-all ${
                      formData.plan === p.id
                        ? 'border-[#f0a500] bg-[#f0a500]/10 text-[#f0a500]'
                        : 'border-[#374151] bg-[#1f2937] text-gray-400 hover:bg-[#374151]'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">Full Name</label>
              <input type="text" name="name" required value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#1f2937] border border-[#374151] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8]"
                placeholder="Rahul Kumar" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">Email Address</label>
              <input type="email" name="email" required value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#1f2937] border border-[#374151] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8]"
                placeholder="rahul@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">Phone Number</label>
              <input type="tel" name="phone" required value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#1f2937] border border-[#374151] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8]"
                placeholder="+91 98765 43210" />
            </div>

            {error && (
              <div className="p-3 bg-red-900/30 border border-red-500/50 rounded-lg text-red-400 text-sm">{error}</div>
            )}

            <button
              type="submit" disabled={loading}
              style={{ backgroundColor: selectedTool?.color }}
              className="w-full py-4 mt-4 rounded-lg text-gray-900 font-extrabold text-lg hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : `Pay ₹${currentPrice?.toLocaleString()}`}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">Secured by Razorpay. 256-bit SSL encryption.</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className={`min-h-screen bg-[#080809] flex items-center justify-center ${jetbrains.className}`}>
        <div className="text-gray-600 text-xs tracking-widest uppercase">Loading…</div>
      </div>
    }>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
        onLoad={() => {
          const event = new CustomEvent('razorpay-ready');
          window.dispatchEvent(event);
        }}
      />
      <CheckoutForm />
    </Suspense>
  );
}
