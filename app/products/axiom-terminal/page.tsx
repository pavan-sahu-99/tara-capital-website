import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Axiom Terminal — F&O Intelligence Platform | Tara Capitals",
  description:
    "Real-time OI spurts, F&O Greeks dashboard, sector OI rotation, option chain analysis. The Bloomberg Terminal for Indian F&O traders at 1% of the price.",
}

const features = [
  {
    title: "Real-Time OI Spurts",
    desc: "Track open interest buildup across all NSE F&O contracts in real-time with a 3-minute refresh cycle. See institutional position building before the price moves. Know who is accumulating — and in which direction — before the candle even forms.",
    icon: "◈",
  },
  {
    title: "F&O Greeks Dashboard",
    desc: "Full Delta, Gamma, Theta, and Vega exposure across the entire NSE market — updated live. Manage risk like a prop desk trader. See the aggregate Greeks position of the market to understand where the options sellers are positioned and how decay is playing out.",
    icon: "Γ",
  },
  {
    title: "Sector OI Rotation",
    desc: "Which sectors have the most aggressive OI buildup today? Track smart money rotating across Banking, IT, FMCG, Metals, Pharma, and Auto — before the sector move is visible in price. Get ahead of sector rotation instead of chasing it.",
    icon: "⊙",
  },
  {
    title: "Volume Ratio + OI Comparator",
    desc: "Identify high-conviction setups by comparing OI changes versus volume ratios. When volume surges but OI holds — something is happening. When both surge together — it is institutional. Filter the noise and find only the high-confidence directional setups.",
    icon: "≋",
  },
  {
    title: "Option Chain Analysis",
    desc: "Full NSE option chain with PCR, Max Pain, OI migration heatmap, and IV skew. See where the market makers are positioned. Track OI unwinding versus buildup at every strike level — understand the true support and resistance from the options market.",
    icon: "⊞",
  },
  {
    title: "Signal Lab",
    desc: "Multi-factor scoring engine that combines OI signals, Greeks, price momentum, and volume patterns into a single composite confidence score. Stop analysing six dashboards at once — get one number that tells you how strong the setup is.",
    icon: "◉",
  },
  {
    title: "Momentum Radar",
    desc: "Real-time momentum scanner for NSE stocks and index contracts. Filter by OI momentum, IV percentile, and price momentum confluence. Find the setups before they are obvious — not after the move is already underway.",
    icon: "◎",
  },
  {
    title: "Breakout Beacon",
    desc: "Pattern-based breakout identification with OI confirmation. Axiom Terminal only signals breakouts where the price movement is backed by genuine OI buildup — not just price action alone. OI-confirmed breakouts have a fundamentally higher success rate.",
    icon: "▲",
  },
  {
    title: "Index OI Analysis",
    desc: "Nifty and BankNifty OI trend analysis with intraday snapshots. Track the complete OI story across the trading day — see exactly how institutional positions evolve from 9:15 to 3:30 and what the final OI pattern tells you about the next session.",
    icon: "∼",
  },
]

const pricingTiers = [
  {
    name: "OBSERVER",
    price: "₹0",
    period: "FREE FOREVER",
    color: "#4a5060",
    features: [
      "End-of-day OI summary — 15 minute delay",
      "Index OI trend — previous day only",
      "Basic option chain view",
      "No real-time data",
    ],
    cta: "Start Free",
    ctaHref: "/waitlist",
    highlight: false,
  },
  {
    name: "ANALYST",
    price: "₹999/mo  |  ₹9,999/yr",
    foundingPrice: "₹599/mo  |  ₹5,999/yr",
    color: "#f0a500",
    features: [
      "Real-time OI spurts — 3 minute refresh",
      "Stock and Index OI dashboard",
      "Volume ratio and OI comparator",
      "F&O Greeks dashboard",
      "Sector OI rotation view",
      "Option chain analysis",
      "Signal Lab and Momentum Radar",
    ],
    cta: "Get Analyst Access",
    ctaHref: "/waitlist",
    highlight: true,
    badge: "MOST POPULAR",
  },
  {
    name: "PRO",
    price: "₹1,999/mo  |  ₹19,999/yr",
    color: "#f0a500",
    features: [
      "Everything in Analyst",
      "Broker integration — Kite and Upstox",
      "Custom OI alerts via Telegram or WhatsApp",
      "Historical OI patterns — last 30 days",
      "Breakout Beacon — advanced mode",
      "Priority support — 24 hour response",
    ],
    cta: "Get Pro Access",
    ctaHref: "/waitlist",
    highlight: false,
  },
  {
    name: "INSTITUTIONAL",
    price: "₹7,999/mo  |  ₹79,999/yr",
    color: "#f0a500",
    features: [
      "Up to 5 seats",
      "Everything in Pro",
      "White-label option for prop desks",
      "Custom data exports",
      "Dedicated support channel",
      "Early access to new features",
    ],
    cta: "Contact for Institutional",
    ctaHref: "mailto:hello@taracapital.in",
    highlight: false,
    badge: "PROP DESKS",
  },
]

const competitors = [
  { name: "Sensibull", price: "₹999–1,999/mo", edge: "Options chain UI — no OI spurts" },
  { name: "Opstra", price: "₹799/mo", edge: "Strategy builder — no sector rotation" },
  { name: "Quantsapp", price: "₹2,499/mo", edge: "OI analytics — no Greeks + sector combined" },
  { name: "Bloomberg", price: "₹2L+/mo", edge: "Everything — at 200x the price" },
]

export default function AxiomTerminalPage() {
  return (
    <div style={{ background: "#080809" }}>
      {/* Hero */}
      <section style={{ borderBottom: "0.5px solid #1c1c24", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ color: "#f0a500", fontSize: 20, fontWeight: 700 }}>◈</span>
              <div>
                <span style={{ fontSize: 10, letterSpacing: "2.5px", textTransform: "uppercase", color: "#f0a500", display: "block" }}>AXIOM TERMINAL</span>
                <span style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#3a4050" }}>F&O INTELLIGENCE // BY TARA CAPITALS</span>
              </div>
            </div>

            <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#c9c5b8", lineHeight: 1.2, letterSpacing: "-0.3px", margin: "0 0 20px" }}>
              The Bloomberg Terminal
              <br />for Indian F&O Traders —
              <br /><span style={{ color: "#f0a500" }}>at 1% of the price.</span>
            </h1>

            <p style={{ fontSize: 14, color: "#6b7585", lineHeight: 1.9, letterSpacing: "0.3px", marginBottom: 36, maxWidth: 600 }}>
              Real-time OI spurts. F&O Greeks dashboard. Sector OI rotation. Option chain
              analysis with PCR and Max Pain. Everything a prop desk intraday trader needs
              — in one platform, refreshed every 3 minutes, at a price that does not require
              institutional backing.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/waitlist" className="btn-axiom" style={{ textDecoration: "none" }}>REQUEST ACCESS →</a>
              <a href="#pricing" className="btn-ghost" style={{ textDecoration: "none" }}>VIEW PRICING</a>
            </div>

            <div style={{ marginTop: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
              {[
                { label: "3-MINUTE DATA REFRESH", color: "#f0a500" },
                { label: "NSE REAL-TIME", color: "#1db954" },
                { label: "OI + GREEKS COMBINED", color: "#3a8fff" },
              ].map((badge) => (
                <span key={badge.label} style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: badge.color, border: `0.5px solid ${badge.color}44`, padding: "4px 10px", borderRadius: 2 }}>
                  ● {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Live Preview */}
      <section style={{ background: "#0d0d10", borderBottom: "0.5px solid #1c1c24", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span className="section-label">LIVE DATA INTELLIGENCE</span>
          <div style={{ background: "#080809", border: "0.5px solid #1c1c24", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ background: "#0d0d10", borderBottom: "0.5px solid #1c1c24", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ color: "#f0a500", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>◈ AXIOM TERMINAL // OI DASHBOARD</span>
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <span style={{ color: "#1db954", fontSize: 10 }}>● LIVE</span>
                <span style={{ color: "#3a4050", fontSize: 10 }}>09:18:32 IST</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 1, background: "#1c1c24" }}>
              {/* Index OI */}
              <div style={{ background: "#080809", padding: "20px 24px" }}>
                <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#3a4050", marginBottom: 14 }}>INDEX OI TREND</div>
                {[
                  { sym: "NIFTY 50", oi: "4.82 Cr", chg: "+12.3%", dir: "CE WRITING", bull: true },
                  { sym: "BANKNIFTY", oi: "2.14 Cr", chg: "+8.7%", dir: "PE WRITING", bull: false },
                  { sym: "FINNIFTY", oi: "0.94 Cr", chg: "+4.2%", dir: "NEUTRAL", bull: true },
                ].map((r) => (
                  <div key={r.sym} style={{ borderBottom: "0.5px solid #1c1c24", paddingBottom: 10, marginBottom: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 12, color: "#c9c5b8", fontWeight: 600 }}>{r.sym}</span>
                      <span style={{ fontSize: 12, color: r.bull ? "#1db954" : "#e84040", fontWeight: 600 }}>{r.chg}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 10, color: "#6b7585" }}>OI {r.oi}</span>
                      <span style={{ fontSize: 10, color: r.bull ? "#1db954" : "#f0a500" }}>{r.dir}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* OI Spurts */}
              <div style={{ background: "#080809", padding: "20px 24px" }}>
                <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#3a4050", marginBottom: 14 }}>TOP OI SPURTS — 3 MIN</div>
                {[
                  { sym: "HDFCBANK", strike: "1700 CE", oi: "+2.4L", spurt: "BUILDUP", color: "#1db954" },
                  { sym: "RELIANCE", strike: "3200 PE", oi: "+1.8L", spurt: "SHORT BUILD", color: "#e84040" },
                  { sym: "NIFTY", strike: "22500 CE", oi: "+4.1L", spurt: "STRONG BUILD", color: "#1db954" },
                  { sym: "BANKNIFTY", strike: "49000 PE", oi: "+3.2L", spurt: "HEDGE", color: "#f0a500" },
                  { sym: "ICICIBANK", strike: "1100 CE", oi: "+1.1L", spurt: "BUILDUP", color: "#1db954" },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.5px solid #1c1c24", paddingBottom: 8, marginBottom: 8 }}>
                    <div>
                      <div style={{ fontSize: 12, color: "#c9c5b8", fontWeight: 600 }}>{r.sym}</div>
                      <div style={{ fontSize: 10, color: "#6b7585" }}>{r.strike} • {r.oi}</div>
                    </div>
                    <span style={{ fontSize: 9, letterSpacing: "1px", textTransform: "uppercase", color: r.color, border: `0.5px solid ${r.color}44`, padding: "2px 7px", borderRadius: 2 }}>
                      {r.spurt}
                    </span>
                  </div>
                ))}
              </div>

              {/* Greeks */}
              <div style={{ background: "#080809", padding: "20px 24px" }}>
                <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#3a4050", marginBottom: 14 }}>GREEKS SNAPSHOT</div>
                {[
                  { greek: "NIFTY DELTA", value: "+0.52", color: "#1db954" },
                  { greek: "PORTFOLIO GAMMA", value: "+0.003", color: "#f0a500" },
                  { greek: "THETA DECAY", value: "-₹240/day", color: "#e84040" },
                  { greek: "VEGA EXPOSURE", value: "-₹1,840", color: "#e84040" },
                  { greek: "IV PERCENTILE", value: "34th %ile", color: "#3a8fff" },
                  { greek: "PCR NIFTY", value: "1.24 BULL", color: "#1db954" },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.5px solid #1c1c24", paddingBottom: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 10, color: "#6b7585", letterSpacing: "0.5px", textTransform: "uppercase" }}>{r.greek}</span>
                    <span style={{ fontSize: 11, color: r.color, fontWeight: 600 }}>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <span className="section-label">CAPABILITIES</span>
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: "0 0 40px" }}>
          WHAT AXIOM TERMINAL GIVES YOU
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 1, background: "#1c1c24", border: "0.5px solid #1c1c24", borderRadius: 2, overflow: "hidden" }}>
          {features.map((f, i) => (
            <div key={i} style={{ background: "#080809", padding: "28px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span style={{ color: "#f0a500", fontSize: 16, width: 28, textAlign: "center", fontWeight: 300 }}>{f.icon}</span>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#c9c5b8" }}>{f.title}</span>
              </div>
              <p style={{ fontSize: 13, color: "#6b7585", lineHeight: 1.9, letterSpacing: "0.2px", margin: 0, paddingLeft: 40 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid #1c1c24" }} />

      {/* Vs Competitors */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <span className="section-label">COMPETITIVE POSITIONING</span>
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: "0 0 32px" }}>
          WHERE AXIOM TERMINAL STANDS
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "#1c1c24", border: "0.5px solid #1c1c24", borderRadius: 2, overflow: "hidden" }}>
          {competitors.map((c, i) => (
            <div key={i} style={{ background: "#080809", padding: "24px" }}>
              <div style={{ fontSize: 12, color: "#6b7585", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 8 }}>{c.name}</div>
              <div style={{ fontSize: 13, color: "#3a4050", fontWeight: 600, marginBottom: 10 }}>{c.price}</div>
              <div style={{ fontSize: 12, color: "#3a4050", lineHeight: 1.6 }}>{c.edge}</div>
            </div>
          ))}
          <div style={{ background: "#2e220022", borderLeft: "1px solid #f0a500", padding: "24px" }}>
            <div style={{ fontSize: 12, color: "#f0a500", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>AXIOM TERMINAL</div>
            <div style={{ fontSize: 14, color: "#f0a500", fontWeight: 700, marginBottom: 10 }}>₹999/mo  |  ₹9,999/yr</div>
            <div style={{ fontSize: 12, color: "#c9c5b8", lineHeight: 1.7 }}>
              OI Spurts + Greeks + Sector Rotation + Option Chain — all combined in one dashboard. No competitor offers this complete stack.
            </div>
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid #1c1c24" }} />

      {/* Pricing */}
      <section id="pricing" style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <span className="section-label">PRICING</span>
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: "0 0 8px" }}>
          AXIOM TERMINAL PLANS
        </h2>
        <p style={{ fontSize: 13, color: "#6b7585", marginBottom: 40, lineHeight: 1.7 }}>
          Annual billing saves 2 months (equivalent to 16% off). Founding member pricing for the first 100 Analyst subscribers — locked for life.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 1, background: "#1c1c24", border: "0.5px solid #1c1c24", borderRadius: 2, overflow: "hidden" }}>
          {pricingTiers.map((tier) => (
            <div key={tier.name} style={{ background: tier.highlight ? "#2e220022" : "#080809", padding: "32px 24px", display: "flex", flexDirection: "column", position: "relative", borderTop: tier.highlight ? "1px solid #f0a500" : "none" }}>
              {tier.badge && (
                <span style={{ position: "absolute", top: 14, right: 14, fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: tier.highlight ? "#f0a500" : "#6b7585", border: `0.5px solid ${tier.highlight ? "#f0a500" : "#252530"}`, padding: "3px 7px", borderRadius: 2 }}>
                  {tier.badge}
                </span>
              )}

              <div style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#6b7585", marginBottom: 18 }}>{tier.name}</div>

              <div style={{ marginBottom: 20 }}>
                {tier.foundingPrice && (
                  <div style={{ fontSize: 12, color: "#6b7585", textDecoration: "line-through", marginBottom: 3 }}>{tier.price}</div>
                )}
                <div style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 700, color: tier.highlight ? "#f0a500" : "#c9c5b8", lineHeight: 1.3 }}>
                  {tier.foundingPrice ?? tier.price}
                </div>
                {tier.foundingPrice && (
                  <div style={{ fontSize: 10, color: "#f0a500", letterSpacing: "1px", marginTop: 5, textTransform: "uppercase" }}>FOUNDING MEMBER RATE</div>
                )}
              </div>

              <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {tier.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ color: tier.highlight ? "#f0a500" : "#6b7585", fontSize: 11, marginTop: 2 }}>▸</span>
                    <span style={{ fontSize: 13, color: "#c9c5b8", lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>

              <a href={tier.ctaHref} style={{ background: tier.highlight ? "#2e220066" : "transparent", border: `0.5px solid ${tier.highlight ? "#f0a500" : "#252530"}`, color: tier.highlight ? "#f0a500" : "#6b7585", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", padding: "10px 16px", borderRadius: 2, textDecoration: "none", textAlign: "center", display: "block" }}>
                {tier.cta} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "#0d0d10", borderTop: "0.5px solid #1c1c24", padding: "56px 24px", textAlign: "center" }}>
        <h3 style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: "0 0 24px" }}>
          STOP TRADING BLIND. START TRADING WITH EDGE.
        </h3>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/waitlist" className="btn-axiom" style={{ textDecoration: "none" }}>REQUEST EARLY ACCESS →</a>
          <Link href="/pricing" className="btn-ghost" style={{ textDecoration: "none" }}>COMPARE ALL PRODUCTS</Link>
        </div>
      </section>
    </div>
  )
}
