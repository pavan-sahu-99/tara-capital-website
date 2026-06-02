import Link from "next/link"

const TICKER_ITEMS = [
  "NSE REAL-TIME DATA",
  "F&O OI ANALYTICS",
  "MARKET REGIME DETECTION",
  "BENEISH M-SCORE",
  "SMART PORTFOLIO BUILDER",
  "FORENSIC ACCOUNTING",
  "PIOTROSKI F-SCORE",
  "ALTMAN Z-SCORE",
  "SECTOR ROTATION MAP",
  "GREEKS DASHBOARD",
  "OI SPURTS TRACKER",
  "SWING INTELLIGENCE",
]

const products = [
  {
    symbol: "◈",
    name: "AXIOM TERMINAL",
    tag: "F&O INTELLIGENCE",
    color: "#f0a500",
    href: "/products/axiom-terminal",
    pitch: "The Bloomberg Terminal for Indian F&O Traders — at 1% of the price.",
    features: [
      "Real-time OI Spurts",
      "F&O Greeks Dashboard",
      "Sector OI Rotation",
      "Volume Ratio + OI Comparator",
      "Option Chain Analysis",
      "Signal Lab & Momentum Radar",
    ],
    price: "₹599/mo",
    priceStrike: "₹999",
    annual: "₹9,999/year",
    audience: "Intraday F&O Traders",
  },
  {
    symbol: "◎",
    name: "TARA LENS",
    tag: "EQUITY RESEARCH",
    color: "#3a8fff",
    href: "/products/tara-lens",
    pitch: "Institutional quant analytics for Indian equity researchers and SEBI RIAs.",
    features: [
      "Market Regime Detection",
      "Beneish M-Score + F-Score + Altman Z",
      "Smart Portfolio Builder — 5 methods",
      "Sector Rotation Map (RRG)",
      "4-Pillar Conviction Scoring",
      "Advanced Factor Screener — 2000+ stocks",
    ],
    price: "₹299/mo",
    priceStrike: "₹499",
    annual: "₹4,499/year",
    audience: "Equity Researchers & RIAs",
  },
  {
    symbol: "◉",
    name: "TARA PENDULUM",
    tag: "SWING ANALYTICS",
    color: "#3a4050",
    href: "/products/tara-pendulum",
    pitch: "Multi-timeframe swing intelligence for NSE equities and futures contracts.",
    features: [
      "Swing Technicals Dashboard",
      "Swing Fundamentals Overlay",
      "Mean Reversion Identification",
      "NSE Futures Swing Setups",
      "Multi-Chart Analysis Suite",
      "Sector Swing Scanner",
    ],
    price: "Coming Soon",
    annual: "",
    audience: "Swing & Positional Traders",
    comingSoon: true,
  },
]

const edges = [
  {
    title: "India-First Architecture",
    desc: "Built exclusively for NSE/BSE. Not a US tool retrofitted for India. OI data, sector mapping, F&O expiry logic — all India-native.",
    color: "#f0a500",
  },
  {
    title: "Statistically Rigorous Research",
    desc: "HMM regime models. Academically-backed factor scoring. Forensic accounting screens. We show you the math, not just the signal.",
    color: "#3a8fff",
  },
  {
    title: "Institutional Tools, Retail Price",
    desc: "Beneish M-Score, Piotroski F-Score, Altman Z-Score, Smart Portfolio Builder — tools that funds pay ₹2L+/month for. You get them for ₹499/mo.",
    color: "#14b8a6",
  },
  {
    title: "Real-Time, Not Delayed",
    desc: "Axiom Terminal refreshes every 3 minutes during market hours. OI spurts, Greeks, sector rotation — all live. No 15-minute delay.",
    color: "#f0a500",
  },
  {
    title: "Not for Beginners",
    desc: "We serve researchers, not gamblers. Tara Capital assumes financial literacy. If you understand factor models and Greeks, you're home.",
    color: "#3a8fff",
  },
  {
    title: "No VC. No Noise.",
    desc: "Bootstrapped and independent. No investor pressure to add irrelevant features. The roadmap is driven by researchers and traders — not funding rounds.",
    color: "#14b8a6",
  },
]

export default function Home() {
  return (
    <div style={{ background: "#080809" }}>
      {/* Ticker Bar */}
      <div style={{ background: "#080809", borderBottom: "0.5px solid #1c1c24", overflow: "hidden", height: 32, display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 0, whiteSpace: "nowrap", width: "max-content" }} className="animate-marquee">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: i % 6 === 0 ? "#f0a500" : i % 6 === 2 ? "#3a8fff" : i % 6 === 4 ? "#14b8a6" : "#3a4050", padding: "0 28px", borderRight: "0.5px solid #1c1c24" }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 64px" }}>
        <div style={{ maxWidth: 800 }}>
          <div style={{ marginBottom: 24 }}>
            <span style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#6b7585", padding: "4px 12px", border: "0.5px solid #1c1c24", borderRadius: 2 }}>
              ● TARA CAPITAL // QUANT RESEARCH PLATFORM
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(30px, 5vw, 54px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.5px", color: "#c9c5b8", margin: "0 0 20px" }}>
            Institutional-Grade
            <br /><span style={{ color: "#f0a500" }}>Quant Research Tools</span>
            <br />for Indian Markets.
          </h1>

          <p style={{ fontSize: 15, color: "#6b7585", lineHeight: 1.9, letterSpacing: "0.3px", marginBottom: 36, maxWidth: 580 }}>
            Beneish M-Score. Smart Portfolio Builder. Real-time OI Spurts. Market
            Regime Detection. Sector Rotation Map. Tools that hedge funds pay ₹2 lakh
            per month for — available to you for a fraction of that cost.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/products/axiom-terminal" className="btn-axiom" style={{ textDecoration: "none" }}>AXIOM TERMINAL →</Link>
            <Link href="/products/tara-lens" className="btn-lens" style={{ textDecoration: "none" }}>TARA LENS →</Link>
            <Link href="/pricing" className="btn-ghost" style={{ textDecoration: "none" }}>VIEW PRICING</Link>
          </div>
        </div>

        {/* Terminal mockup */}
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "#1c1c24", border: "0.5px solid #1c1c24", borderRadius: 2, overflow: "hidden" }}>
          {/* Axiom snapshot */}
          <div style={{ background: "#080809", padding: "22px 26px" }}>
            <div style={{ marginBottom: 14 }}>
              <span style={{ color: "#f0a500", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>◈ AXIOM TERMINAL</span>
              <span style={{ color: "#3a4050", fontSize: 10, letterSpacing: "1px", marginLeft: 12 }}>09:18:32</span>
            </div>
            <div style={{ borderTop: "0.5px solid #1c1c24", paddingTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "NIFTY OI TREND", value: "▲ BULLISH", color: "#1db954" },
                { label: "BANKNIFTY PCR", value: "1.24 CE DOM.", color: "#f0a500" },
                { label: "SMART MONEY", value: "▲ ACCUMULATION", color: "#1db954" },
                { label: "TOP SECTOR HEAT", value: "BANKING ● ACTIVE", color: "#3a8fff" },
                { label: "SIGNAL SCORE", value: "87 / 100 ▲", color: "#f0a500" },
              ].map((row, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 10, letterSpacing: "0.5px", textTransform: "uppercase", color: "#6b7585" }}>{row.label}</span>
                  <span style={{ fontSize: 11, letterSpacing: "0.5px", color: row.color, fontWeight: 600 }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tara Lens snapshot */}
          <div style={{ background: "#080809", padding: "22px 26px" }}>
            <div style={{ marginBottom: 14 }}>
              <span style={{ color: "#3a8fff", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>◎ TARA LENS</span>
              <span style={{ color: "#3a4050", fontSize: 10, letterSpacing: "1px", marginLeft: 12 }}>REGIME SCAN</span>
            </div>
            <div style={{ borderTop: "0.5px solid #1c1c24", paddingTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "MARKET REGIME", value: "BULL TREND", color: "#1db954" },
                { label: "HEALTH SCORE", value: "74 / 100", color: "#3a8fff" },
                { label: "M-SCORE WARNINGS", value: "3 STOCKS FLAGGED", color: "#e84040" },
                { label: "PORTFOLIO SHARPE", value: "1.82 ▲ STRONG", color: "#1db954" },
                { label: "TOP SECTOR (RRG)", value: "LEADING: IT", color: "#3a8fff" },
              ].map((row, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 10, letterSpacing: "0.5px", textTransform: "uppercase", color: "#6b7585" }}>{row.label}</span>
                  <span style={{ fontSize: 11, letterSpacing: "0.5px", color: row.color, fontWeight: 600 }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tara Pendulum — Coming Soon */}
          <div style={{ background: "#080809", padding: "22px 26px", position: "relative", opacity: 0.5 }}>
            <div style={{ marginBottom: 14 }}>
              <span style={{ color: "#3a4050", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>◉ TARA PENDULUM</span>
              <span style={{ color: "#2a2a40", fontSize: 10, letterSpacing: "1px", marginLeft: 12 }}>SWING SCAN</span>
            </div>
            <div style={{ borderTop: "0.5px solid #1c1c24", paddingTop: 14, display: "flex", alignItems: "center", justifyContent: "center", height: 80 }}>
              <span style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#3a4050", border: "0.5px solid #252530", padding: "6px 16px", borderRadius: 2 }}>
                ● COMING SOON
              </span>
            </div>
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid #1c1c24" }} />

      {/* Products Section */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ marginBottom: 48 }}>
          <span className="section-label">THE PLATFORM</span>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: 0 }}>
            THREE TOOLS. ONE EDGE.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 1, background: "#1c1c24", border: "0.5px solid #1c1c24", borderRadius: 2, overflow: "hidden" }}>
          {products.map((p) => (
            <div key={p.name} style={{ background: "#080809", padding: "36px 30px", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: p.color, opacity: 0.6 }} />

              <div style={{ marginBottom: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ color: p.color, fontSize: 18 }}>{p.symbol}</span>
                  <span style={{ color: p.color, fontSize: 12, letterSpacing: "2.5px", textTransform: "uppercase", fontWeight: 700 }}>{p.name}</span>
                </div>
                <span style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#3a4050", paddingLeft: 28 }}>{p.tag}</span>
              </div>

              <p style={{ fontSize: 13, color: "#6b7585", lineHeight: 1.8, marginBottom: 24, flexGrow: 1 }}>
                {p.pitch}
              </p>

              <div style={{ marginBottom: 24, display: "flex", flexDirection: "column", gap: 8 }}>
                {p.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: p.color, fontSize: 8 }}>▸</span>
                    <span style={{ fontSize: 12, color: "#c9c5b8" }}>{f}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "0.5px solid #1c1c24", paddingTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  {"priceStrike" in p && p.priceStrike && (
                    <div style={{ fontSize: 10, color: "#3a4050", textDecoration: "line-through" }}>{p.priceStrike}/mo</div>
                  )}
                  <div style={{ fontSize: 13, fontWeight: 700, color: p.color }}>{p.price} <span style={{ fontSize: 9, color: "#f0a500", fontWeight: 400 }}>FOUNDING</span></div>
                  <div style={{ fontSize: 10, color: "#3a4050", letterSpacing: "0.5px" }}>{p.annual}</div>
                  <div style={{ fontSize: 10, color: "#3a4050", textTransform: "uppercase", letterSpacing: "0.5px", marginTop: 2 }}>{p.audience}</div>
                </div>
                {"comingSoon" in p && p.comingSoon ? (
                  <span style={{ background: "transparent", border: "0.5px solid #252530", color: "#3a4050", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", padding: "7px 16px", borderRadius: 2 }}>
                    COMING SOON
                  </span>
                ) : (
                  <Link href={p.href} style={{ background: "transparent", border: `0.5px solid ${p.color}`, color: p.color, fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", padding: "7px 16px", borderRadius: 2, textDecoration: "none" }}>
                    EXPLORE →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid #1c1c24" }} />

      {/* Why Tara Capital */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ marginBottom: 48 }}>
          <span className="section-label">THE EDGE</span>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: 0 }}>
            WHY RESEARCHERS CHOOSE TARA CAPITAL
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 1, background: "#1c1c24", border: "0.5px solid #1c1c24", borderRadius: 2, overflow: "hidden" }}>
          {edges.map((e, i) => (
            <div key={i} style={{ background: "#080809", padding: "32px 28px" }}>
              <div style={{ width: 3, height: 24, background: e.color, marginBottom: 18, borderRadius: 1 }} />
              <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#c9c5b8", margin: "0 0 12px" }}>
                {e.title}
              </h3>
              <p style={{ fontSize: 13, color: "#6b7585", lineHeight: 1.9, margin: 0 }}>
                {e.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid #1c1c24" }} />

      {/* Competitor comparison */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ marginBottom: 40 }}>
          <span className="section-label">COMPETITIVE EDGE</span>
          <h2 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: 0 }}>
            FEATURES YOUR CURRENT TOOLS DON&apos;T HAVE
          </h2>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "0.5px solid #252530" }}>
                {["FEATURE", "SCREENER.IN", "TICKERTAPE", "TRENDLYNE", "TARA CAPITAL"].map((h, i) => (
                  <th key={i} style={{ padding: "12px 18px", textAlign: i === 0 ? "left" : "center", color: i === 4 ? "#f0a500" : "#3a4050", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: i === 4 ? 700 : 400 }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Beneish M / F-Score / Altman Z", "✕", "✕", "✕", "✓"],
                ["Market Regime Detection", "✕", "✕", "✕", "✓"],
                ["Smart Portfolio Builder (5 methods)", "✕", "✕", "✕", "✓"],
                ["Sector Rotation Map (RRG)", "✕", "✕", "Simplified", "✓"],
                ["Real-time F&O OI Spurts", "✕", "✕", "✕", "✓"],
                ["F&O Greeks Dashboard", "✕", "✕", "✕", "✓"],
                ["Sector OI Rotation Analysis", "✕", "✕", "✕", "✓"],
                ["4-Pillar Conviction Scoring", "✕", "Partial", "Partial", "✓"],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "0.5px solid #1c1c24", background: i % 2 === 0 ? "#080809" : "#0d0d10" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "12px 18px", textAlign: j === 0 ? "left" : "center", color: cell === "✓" ? "#1db954" : cell === "✕" ? "#3a4050" : j === 4 ? "#f0a500" : "#6b7585", fontSize: 12, fontWeight: cell === "✓" || cell === "✕" ? 700 : 400 }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid #1c1c24" }} />

      {/* Stats */}
      <section style={{ background: "#0d0d10", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 1, background: "#1c1c24", border: "0.5px solid #1c1c24", borderRadius: 2, overflow: "hidden" }}>
          {[
            { value: "45M+", label: "Active NSE F&O accounts (NSE 2024)", color: "#f0a500" },
            { value: "₹500L Cr", label: "Daily NSE F&O Turnover", color: "#3a8fff" },
            { value: "₹0", label: "VC funding — roadmap driven by traders", color: "#14b8a6" },
            { value: "1,300+", label: "SEBI RIAs in India", color: "#f0a500" },
            { value: "3", label: "Forensic models — Beneish, F-Score, Z-Score", color: "#3a8fff" },
            { value: "5", label: "Portfolio optimisation methods incl. HRP", color: "#14b8a6" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#0d0d10", padding: "32px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 700, color: s.color, letterSpacing: "2px", marginBottom: 10 }}>{s.value}</div>
              <div style={{ fontSize: 11, letterSpacing: "1px", textTransform: "uppercase", color: "#6b7585" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <span className="section-label" style={{ textAlign: "center", display: "block" }}>EARLY ACCESS</span>
        <h2 style={{ fontSize: "clamp(22px, 3.5vw, 42px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: "0 0 16px" }}>
          FOUNDING MEMBER PRICING
        </h2>
        <p style={{ fontSize: 14, color: "#6b7585", lineHeight: 1.9, marginBottom: 12, maxWidth: 500, margin: "0 auto 12px" }}>
          First 100 users on each product get founding member pricing — locked for life as long as your subscription stays active.
        </p>
        <p style={{ fontSize: 12, color: "#f0a500", letterSpacing: "0.5px", marginBottom: 36 }}>
          Axiom Analyst: ₹599/mo (Regular ₹999) &nbsp;|&nbsp; Tara Lens Pro: ₹299/mo (Regular ₹499) &nbsp;|&nbsp; Pendulum: ₹299/mo (Regular ₹499)
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/checkout" style={{ background: "#f0a500", color: "#080809", fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", padding: "12px 28px", borderRadius: 2, textDecoration: "none" }}>
            CLAIM FOUNDING PRICE →
          </Link>
          <Link href="/waitlist" className="btn-ghost" style={{ textDecoration: "none" }}>HAVE DOUBTS? LET&apos;S TALK</Link>
        </div>
        <p style={{ marginTop: 28, fontSize: 11, color: "#3a4050", letterSpacing: "0.3px" }}>
          Not financial advice. Data tools for research purposes only. Past performance does not guarantee future results.
        </p>
      </section>
    </div>
  )
}
