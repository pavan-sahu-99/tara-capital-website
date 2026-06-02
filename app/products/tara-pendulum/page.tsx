import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tara Pendulum — Swing Trading Intelligence | Tara Capitals",
  description:
    "Multi-timeframe swing trading intelligence for NSE equities and futures. Swing technicals, fundamentals overlay, mean reversion signals, futures setups.",
}

const features = [
  {
    title: "Swing Technicals Dashboard",
    desc: "Multi-timeframe technical analysis for NSE swing setups. RSI, MACD, Bollinger Bands, ADX, Supertrend — all synthesized into a single swing conviction score per stock. Filter by timeframe (daily, weekly) and signal confluence.",
    icon: "STA",
  },
  {
    title: "Swing Fundamentals Overlay",
    desc: "Not just price. Overlay fundamental quality scores on top of technical swing setups. Swing high-conviction setups where the technical pattern is supported by strong fundamentals — F-Score ≥ 6, debt-free balance sheet, growing earnings.",
    icon: "SFU",
  },
  {
    title: "Mean Reversion Identification",
    desc: "Statistically identify stocks that have deviated significantly from their mean. Bollinger Band breakouts, Z-Score price deviation, historical volatility context. Find stocks that have stretched too far and are likely to snap back.",
    icon: "REV",
  },
  {
    title: "NSE Futures Swing Setups",
    desc: "Dedicated futures page for swing trading NSE F&O contracts with multi-day holding intent. OI confirmation for futures positions, rollover analysis, upcoming expiry impact assessment. Different signal logic from intraday — designed for 3–10 day holds.",
    icon: "FUT",
  },
  {
    title: "Multi-Chart Analysis Suite",
    desc: "Side-by-side chart viewer for comparing multiple stocks simultaneously. Annotate support/resistance levels, mark swing highs and lows, overlay indicators. Designed for the chart-intensive workflow of a swing trader.",
    icon: "CHT",
  },
  {
    title: "Sector Swing Scanner",
    desc: "Identify which sectors have the most bullish or bearish swing setups right now. Sector-level aggregation of individual stock swing signals — find the strongest sector trends and trade the leaders within them.",
    icon: "SEC",
  },
]

const pricingTiers = [
  {
    name: "OBSERVER",
    price: "₹0",
    period: "FREE FOREVER",
    color: "#4a5060",
    features: [
      "Basic swing screener (limited results)",
      "Chart viewer — daily timeframe only",
      "No technical indicators on free tier",
      "No futures page",
    ],
    cta: "Start Free",
    ctaHref: "/waitlist",
    highlight: false,
  },
  {
    name: "RESEARCHER",
    price: "₹499",
    period: "per month",
    foundingPrice: "₹299",
    color: "#14b8a6",
    features: [
      "Full Swing Technicals Dashboard",
      "Swing Fundamentals Overlay",
      "Mean Reversion Identification",
      "NSE Futures Swing Setups",
      "Multi-Chart Analysis Suite",
      "Sector Swing Scanner",
      "Daily + Weekly timeframes",
      "OI confirmation for setups",
    ],
    cta: "Get Researcher Access",
    ctaHref: "/waitlist",
    highlight: true,
    badge: "ALL FEATURES INCLUDED",
  },
]

export default function TaraPendulumPage() {
  return (
    <div style={{ background: "#080809" }}>
      {/* Hero */}
      <section style={{ borderBottom: "0.5px solid #1c1c24", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 720 }}>
            <div style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ color: "#14b8a6", fontSize: 18 }}>◉</span>
              <div>
                <span style={{ fontSize: 7, letterSpacing: "2.5px", textTransform: "uppercase", color: "#14b8a6", display: "block" }}>
                  TARA PENDULUM
                </span>
                <span style={{ fontSize: 7, letterSpacing: "1.5px", textTransform: "uppercase", color: "#2e3040" }}>
                  SWING ANALYTICS // BY TARA CAPITAL
                </span>
              </div>
            </div>

            <h1
              style={{
                fontSize: "clamp(24px, 4vw, 44px)",
                fontWeight: 700,
                color: "#c9c5b8",
                lineHeight: 1.2,
                letterSpacing: "-0.3px",
                margin: "0 0 16px",
              }}
            >
              Swing Trading Intelligence
              <br />
              for NSE Equities
              <br />
              <span style={{ color: "#14b8a6" }}>and Futures Contracts.</span>
            </h1>

            <p
              style={{
                fontSize: 10,
                color: "#4a5060",
                lineHeight: 1.8,
                letterSpacing: "0.3px",
                marginBottom: 32,
                maxWidth: 560,
              }}
            >
              Multi-timeframe swing analysis. Technicals with fundamentals overlay. Mean
              reversion signals. NSE futures swing setups. One platform for the
              positional and swing trader who wants data, not noise.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/waitlist" className="btn-pendulum" style={{ textDecoration: "none" }}>
                REQUEST ACCESS →
              </a>
              <a href="#pricing" className="btn-ghost" style={{ textDecoration: "none" }}>
                VIEW PRICING
              </a>
            </div>

            <div style={{ marginTop: 24, display: "flex", gap: 16, flexWrap: "wrap" }}>
              {[
                { label: "3-10 DAY HOLDS", color: "#14b8a6" },
                { label: "OI CONFIRMATION", color: "#f0a500" },
                { label: "FUNDAMENTALS OVERLAY", color: "#3a8fff" },
              ].map((badge) => (
                <span
                  key={badge.label}
                  style={{
                    fontSize: 7,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: badge.color,
                    border: `0.5px solid ${badge.color}33`,
                    padding: "3px 8px",
                    borderRadius: 2,
                  }}
                >
                  ● {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Preview */}
      <section style={{ background: "#0d0d10", borderBottom: "0.5px solid #1c1c24", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span className="section-label">SWING INTELLIGENCE</span>
          <div style={{ background: "#080809", border: "0.5px solid #1c1c24", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ background: "#0d0d10", borderBottom: "0.5px solid #1c1c24", padding: "10px 20px", display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#14b8a6", fontSize: 9, letterSpacing: "2px", textTransform: "uppercase" }}>
                ◉ TARA PENDULUM // SWING SCANNER
              </span>
              <span style={{ color: "#2e3040", fontSize: 7 }}>NSE EOD // DAILY</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 1, background: "#1c1c24" }}>
              {/* Active Setups */}
              <div style={{ background: "#080809", padding: "20px" }}>
                <div style={{ fontSize: 7, letterSpacing: "2px", textTransform: "uppercase", color: "#2e3040", marginBottom: 12 }}>
                  ACTIVE SWING SETUPS
                </div>
                {[
                  { sym: "TITAN", type: "BREAKOUT", rr: "1:3.2", score: 8.4, color: "#1db954" },
                  { sym: "BAJAJFINSV", type: "REVERSION", rr: "1:2.8", score: 7.9, color: "#14b8a6" },
                  { sym: "LTIM", type: "MOMENTUM", rr: "1:2.4", score: 7.6, color: "#1db954" },
                  { sym: "MARUTI", type: "PULLBACK", rr: "1:2.1", score: 7.2, color: "#14b8a6" },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.5px solid #1c1c24", paddingBottom: 7, marginBottom: 7 }}>
                    <div>
                      <div style={{ fontSize: 8, color: "#c9c5b8", fontWeight: 600 }}>{r.sym}</div>
                      <div style={{ fontSize: 7, color: "#4a5060" }}>{r.type} • R:R {r.rr}</div>
                    </div>
                    <span style={{ fontSize: 9, color: r.color, fontWeight: 700 }}>{r.score}</span>
                  </div>
                ))}
              </div>

              {/* Reversion Signals */}
              <div style={{ background: "#080809", padding: "20px" }}>
                <div style={{ fontSize: 7, letterSpacing: "2px", textTransform: "uppercase", color: "#2e3040", marginBottom: 12 }}>
                  MEAN REVERSION CANDIDATES
                </div>
                {[
                  { sym: "TATAPOWER", dev: "-2.4σ", zone: "OVERSOLD", color: "#1db954" },
                  { sym: "ADANIGREEN", dev: "-2.1σ", zone: "STRETCHED", color: "#14b8a6" },
                  { sym: "SAIL", dev: "+2.8σ", zone: "OVERBOUGHT", color: "#e84040" },
                  { sym: "COALINDIA", dev: "+2.2σ", zone: "EXTENDED", color: "#f0a500" },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.5px solid #1c1c24", paddingBottom: 7, marginBottom: 7 }}>
                    <div>
                      <div style={{ fontSize: 8, color: "#c9c5b8", fontWeight: 600 }}>{r.sym}</div>
                      <div style={{ fontSize: 7, color: "#4a5060" }}>Dev: {r.dev}</div>
                    </div>
                    <span style={{ fontSize: 7, color: r.color, letterSpacing: "0.5px" }}>{r.zone}</span>
                  </div>
                ))}
              </div>

              {/* Futures setups */}
              <div style={{ background: "#080809", padding: "20px" }}>
                <div style={{ fontSize: 7, letterSpacing: "2px", textTransform: "uppercase", color: "#2e3040", marginBottom: 12 }}>
                  FUTURES SWING SETUPS
                </div>
                {[
                  { sym: "HDFCBANK FUT", exp: "26 Jun", oi: "+3.2L", dir: "LONG BUILDUP", color: "#1db954" },
                  { sym: "INFY FUT", exp: "26 Jun", oi: "+1.8L", dir: "LONG BUILDUP", color: "#1db954" },
                  { sym: "TATAMOTOR FUT", exp: "26 Jun", oi: "+2.1L", dir: "SHORT BUILD", color: "#e84040" },
                ].map((r, i) => (
                  <div key={i} style={{ borderBottom: "0.5px solid #1c1c24", paddingBottom: 8, marginBottom: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                      <span style={{ fontSize: 8, color: "#c9c5b8", fontWeight: 600 }}>{r.sym}</span>
                      <span style={{ fontSize: 7, color: r.color }}>{r.dir}</span>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <span style={{ fontSize: 7, color: "#4a5060" }}>Exp: {r.exp}</span>
                      <span style={{ fontSize: 7, color: "#4a5060" }}>OI: {r.oi}</span>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 7, color: "#4a5060" }}>AVG RISK-REWARD</span>
                    <span style={{ fontSize: 7, color: "#14b8a6", fontWeight: 600 }}>1 : 2.4 ▲</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <span className="section-label">CAPABILITIES</span>
        <h2 style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: "0 0 40px" }}>
          WHAT TARA PENDULUM GIVES YOU
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 1,
            background: "#1c1c24",
            border: "0.5px solid #1c1c24",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {features.map((f, i) => (
            <div key={i} style={{ background: "#080809", padding: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span
                  style={{
                    color: "#14b8a6",
                    fontSize: 7,
                    fontWeight: 700,
                    letterSpacing: "1px",
                    background: "#0d333044",
                    border: "0.5px solid #14b8a644",
                    borderRadius: 2,
                    padding: "3px 7px",
                  }}
                >
                  {f.icon}
                </span>
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#c9c5b8" }}>
                  {f.title}
                </span>
              </div>
              <p style={{ fontSize: 13, color: "#6b7585", lineHeight: 1.9, margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid #1c1c24" }} />

      {/* Pricing */}
      <section id="pricing" style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <span className="section-label">PRICING</span>
        <h2 style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: "0 0 40px" }}>
          TARA PENDULUM PLANS
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 1,
            background: "#1c1c24",
            border: "0.5px solid #1c1c24",
            borderRadius: 2,
            overflow: "hidden",
            maxWidth: 600,
          }}
        >
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                background: tier.highlight ? "#0d333011" : "#080809",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                borderTop: tier.highlight ? "1px solid #14b8a6" : "none",
              }}
            >
              {tier.badge && (
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    fontSize: 6,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: tier.highlight ? "#14b8a6" : "#4a5060",
                    border: `0.5px solid ${tier.highlight ? "#14b8a6" : "#252530"}`,
                    padding: "2px 6px",
                    borderRadius: 2,
                  }}
                >
                  {tier.badge}
                </span>
              )}

              <div style={{ fontSize: 8, letterSpacing: "3px", textTransform: "uppercase", color: "#4a5060", marginBottom: 16 }}>
                {tier.name}
              </div>

              <div style={{ marginBottom: 20 }}>
                {tier.foundingPrice && (
                  <div style={{ fontSize: 9, color: "#4a5060", textDecoration: "line-through", marginBottom: 2 }}>
                    {tier.price}/mo
                  </div>
                )}
                <span style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: tier.highlight ? "#14b8a6" : "#c9c5b8" }}>
                  {tier.foundingPrice ?? tier.price}
                </span>
                {tier.price !== "₹0" && (
                  <span style={{ fontSize: 8, color: "#4a5060", marginLeft: 6 }}>/{tier.period}</span>
                )}
                {tier.foundingPrice && (
                  <div style={{ fontSize: 7, color: "#14b8a6", letterSpacing: "1px", marginTop: 4, textTransform: "uppercase" }}>
                    FOUNDING MEMBER RATE
                  </div>
                )}
              </div>

              <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                {tier.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color: tier.highlight ? "#14b8a6" : "#4a5060", fontSize: 8, marginTop: 1 }}>▸</span>
                    <span style={{ fontSize: 8, color: "#c9c5b8", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>

              <a
                href={tier.ctaHref}
                style={{
                  background: tier.highlight ? "#0d333066" : "transparent",
                  border: `0.5px solid ${tier.highlight ? "#14b8a6" : "#252530"}`,
                  color: tier.highlight ? "#14b8a6" : "#4a5060",
                  fontSize: 8,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  padding: "8px 16px",
                  borderRadius: 2,
                  textDecoration: "none",
                  textAlign: "center",
                  display: "block",
                }}
              >
                {tier.cta} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "#0d0d10", borderTop: "0.5px solid #1c1c24", padding: "48px 24px", textAlign: "center" }}>
        <h3 style={{ fontSize: "clamp(16px, 2vw, 24px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: "0 0 24px" }}>
          TRADE THE SWING. NOT THE NOISE.
        </h3>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/waitlist" className="btn-pendulum" style={{ textDecoration: "none" }}>
            REQUEST EARLY ACCESS →
          </a>
          <Link href="/pricing" className="btn-ghost" style={{ textDecoration: "none" }}>
            COMPARE ALL PRODUCTS
          </Link>
        </div>
      </section>
    </div>
  )
}
