import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tara Lens — Equity Research Platform | Tara Capitals",
  description:
    "Institutional quant analytics for Indian equity researchers. Beneish M-Score, HMM regime detection, HRP portfolio optimizer, sector RRG.",
}

const features = [
  {
    title: "Market Regime Detection",
    desc: "Know what phase the market is in before it shows up in price. Tara Lens detects 5 distinct market states — Strong Bull, Weak Bull, Sideways, Weak Bear, Strong Bear — using a statistical model trained on NSE data. Used in your Portfolio Builder and Analyser to help you position correctly for the current regime.",
    icon: "HMM",
    badge: "PORTFOLIO TOOL",
    color: "#3a8fff",
  },
  {
    title: "Earnings Manipulation Detector",
    desc: "The Beneish M-Score flags companies that may be inflating their earnings. Eight financial ratios combined into one score. Stocks scoring above -1.78 are in the warning zone. Run across the entire NSE universe automatically — so you know which popular stocks to stay away from.",
    icon: "M",
    badge: "FORENSIC SCREEN",
    color: "#e84040",
  },
  {
    title: "Business Quality Score (F-Score)",
    desc: "Nine fundamental signals across profitability, leverage, and operating efficiency — combined into a single quality score from 0 to 9. Score 7 or above: strong buy signal. Score 2 or below: weak business. Every stock in your screener results shows this score at a glance.",
    icon: "F",
    badge: "QUALITY FILTER",
    color: "#3a8fff",
  },
  {
    title: "Financial Health Score (Z-Score)",
    desc: "Identifies companies at risk of financial distress before it becomes news. A score below 1.81 means the company is in the distress zone. Essential for avoiding blow-up stocks before they blow up. Applied to every stock in your screener — visible as a simple Safe / Warning / Distress label.",
    icon: "Z",
    badge: "RISK SCREEN",
    color: "#f0a500",
  },
  {
    title: "Smart Portfolio Builder",
    desc: "Tell Tara Lens your stocks and how much capital you have. It automatically calculates how much to invest in each stock — mathematically balancing risk across your holdings. Five methods available, including the same approach used by institutional fund managers. No spreadsheets. No guessing.",
    icon: "HRP",
    badge: "5 METHODS",
    color: "#3a8fff",
  },
  {
    title: "Conviction Scoring (4-Pillar)",
    desc: "Every stock gets a composite conviction score built from four pillars: Fundamentals (F-Score, M-Score, Z-Score), Valuation (relative to historical bands), Technicals (trend + momentum), and Management Quality. Filter your entire screener by conviction score. Find the best opportunities, not just the most talked-about stocks.",
    icon: "4P",
    badge: "PROPRIETARY",
    color: "#f0a500",
  },
  {
    title: "Sector Momentum Map (RRG)",
    desc: "A Relative Rotation Graph shows which sectors are gaining momentum (Leading), fading (Weakening), underperforming (Lagging), or recovering (Improving) — relative to the benchmark. Daily and weekly timeframes. Visual, clear, and mathematically accurate. Know where the money is rotating before it rotates.",
    icon: "RRG",
    badge: "JDK STANDARD",
    color: "#3a8fff",
  },
  {
    title: "Advanced Factor Screener",
    desc: "Search 2,000+ NSE stocks using any combination of quality scores, valuation, technicals, market cap, sector, and financial metrics. Filter by conviction threshold, forensic score zone, or RRG quadrant. The most sophisticated stock screener available for Indian equities — made simple.",
    icon: "SCR",
    badge: "2000+ STOCKS",
    color: "#3a8fff",
  },
  {
    title: "Portfolio Risk Analyser",
    desc: "Full risk breakdown of your portfolio: Sharpe ratio, Sortino ratio, maximum drawdown, and correlation heatmap across your holdings. See exactly where your risk is concentrated. Run a Monte Carlo simulation to understand the range of possible outcomes over the next year.",
    icon: "PA",
    badge: "RISK ANALYTICS",
    color: "#1db954",
  },
  {
    title: "Smart Rebalancer",
    desc: "Automatically identify which stocks in your portfolio have drifted from their target allocation and by how much. Set your threshold — when a stock drifts beyond it, Tara Lens flags it and shows you exactly what to buy and sell to get back on track. Calendar and drift-based rebalancing modes available.",
    icon: "RB",
    badge: "AUTO-REBALANCE",
    color: "#3a8fff",
  },
  {
    title: "Market Pulse Dashboard",
    desc: "Your morning dashboard before any investment decision. Market breadth, advance-decline ratio, new highs vs. new lows, sector heat map, current market regime state, and a composite market health score — all in one view. Start every day informed.",
    icon: "MP",
    badge: "MORNING VIEW",
    color: "#f0a500",
  },
]

const pricingTiers = [
  {
    name: "EXPLORER",
    price: "₹0",
    period: "FREE FOREVER",
    color: "#4a5060",
    features: [
      "Market Pulse — breadth data only",
      "Screener: top 25 results only",
      "Quality scores visible — not full detail",
      "Basic stock data",
      "Watchlist: 5 stocks max",
    ],
    cta: "Start Free",
    ctaHref: "/waitlist",
    highlight: false,
    note: "Conviction scores and M-Score warnings are shown as teaser — upgrade to see full analysis.",
  },
  {
    name: "PRO",
    price: "₹499",
    period: "per month  |  ₹4,499/year",
    foundingPrice: "₹299",
    color: "#3a8fff",
    features: [
      "Full screener — 2,000+ NSE stocks",
      "All forensic scores: M-Score, F-Score, Z-Score",
      "4-pillar conviction scoring",
      "Sector RRG — daily and weekly",
      "Smart Portfolio Builder — 5 methods",
      "Portfolio Analyser with Monte Carlo",
      "Smart Rebalancer — drift and calendar modes",
      "Market Regime Detection",
      "Unlimited watchlist",
    ],
    cta: "Get Pro Access",
    ctaHref: "/waitlist",
    highlight: true,
    badge: "MOST POPULAR",
    note: "For the serious retail investor who wants more than just stock data.",
  },
  {
    name: "INSTITUTIONAL",
    price: "₹2,999",
    period: "per month  |  ₹24,999/year",
    color: "#3a8fff",
    features: [
      "Everything in Pro",
      "Historical Stress Testing — 5 Indian market crises",
      "ROIC vs. WACC Spread Analysis",
      "Insider Intelligence — bulk and block deals feed",
      "PDF Portfolio Reports — client-ready and branded",
      "Data Export API — JSON and CSV",
      "Priority support — 48-hour response SLA",
      "Tax-Aware Rebalancing — coming soon",
    ],
    cta: "Get Institutional Access",
    ctaHref: "/waitlist",
    highlight: false,
    badge: "FOR SEBI RIAS",
    note: "For SEBI Registered Investment Advisors, Smallcase managers, and professional analysts.",
  },
]

export default function TaraLensPage() {
  return (
    <div style={{ background: "#080809" }}>
      {/* Hero */}
      <section style={{ borderBottom: "0.5px solid #1c1c24", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ color: "#3a8fff", fontSize: 20 }}>◎</span>
              <div>
                <span style={{ fontSize: 10, letterSpacing: "2.5px", textTransform: "uppercase", color: "#3a8fff", display: "block" }}>
                  TARA LENS
                </span>
                <span style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#3a4050" }}>
                  EQUITY RESEARCH // BY TARA CAPITAL
                </span>
              </div>
            </div>

            <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#c9c5b8", lineHeight: 1.2, letterSpacing: "-0.3px", margin: "0 0 20px" }}>
              Institutional Quant Analytics
              <br />
              for Indian Equity Researchers
              <br />
              <span style={{ color: "#3a8fff" }}>and SEBI RIAs.</span>
            </h1>

            <p style={{ fontSize: 14, color: "#6b7585", lineHeight: 1.9, letterSpacing: "0.3px", marginBottom: 16, maxWidth: 600 }}>
              Beneish M-Score. Piotroski F-Score. Altman Z-Score. Market Regime Detection.
              Smart Portfolio Builder. Sector Rotation Map. Tools that hedge funds pay
              ₹2 lakh per month for — available to you for ₹499 per month.
            </p>
            <p style={{ fontSize: 13, color: "#3a8fff", letterSpacing: "0.3px", marginBottom: 36, fontWeight: 600 }}>
              Analytically superior to Screener.in, Tickertape, and Trendlyne — combined.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/waitlist" className="btn-lens" style={{ textDecoration: "none" }}>
                REQUEST ACCESS →
              </a>
              <a href="#pricing" className="btn-ghost" style={{ textDecoration: "none" }}>
                VIEW PRICING
              </a>
            </div>

            <div style={{ marginTop: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
              {[
                { label: "2000+ NSE STOCKS", color: "#3a8fff" },
                { label: "FORENSIC ACCOUNTING", color: "#e84040" },
                { label: "FOR SEBI RIAS", color: "#f0a500" },
              ].map((badge) => (
                <span key={badge.label} style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: badge.color, border: `0.5px solid ${badge.color}44`, padding: "4px 10px", borderRadius: 2 }}>
                  ● {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section style={{ background: "#0d0d10", borderBottom: "0.5px solid #1c1c24", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span className="section-label">RESEARCH INTELLIGENCE</span>
          <div style={{ background: "#080809", border: "0.5px solid #1c1c24", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ background: "#0d0d10", borderBottom: "0.5px solid #1c1c24", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#3a8fff", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>◎ TARA LENS // MARKET PULSE</span>
              <span style={{ color: "#1db954", fontSize: 10 }}>● BULL TREND — REGIME STATE 2</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "#1c1c24" }}>
              {/* Regime panel */}
              <div style={{ background: "#080809", padding: "20px 24px" }}>
                <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#3a4050", marginBottom: 14 }}>MARKET REGIME</div>
                {[
                  { label: "CURRENT STATE", value: "BULL TREND", color: "#1db954" },
                  { label: "HEALTH SCORE", value: "74 / 100", color: "#3a8fff" },
                  { label: "ADVANCE / DECLINE", value: "1,847 / 672", color: "#1db954" },
                  { label: "52-WEEK HIGHS", value: "143 TODAY", color: "#1db954" },
                  { label: "52-WEEK LOWS", value: "12 TODAY", color: "#6b7585" },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #1c1c24", paddingBottom: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 10, color: "#6b7585", textTransform: "uppercase", letterSpacing: "0.5px" }}>{r.label}</span>
                    <span style={{ fontSize: 10, color: r.color, fontWeight: 600 }}>{r.value}</span>
                  </div>
                ))}
              </div>

              {/* M-Score panel */}
              <div style={{ background: "#080809", padding: "20px 24px" }}>
                <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#3a4050", marginBottom: 14 }}>M-SCORE WARNINGS</div>
                {[
                  { sym: "ADANIPORTS", score: "-0.43", zone: "⚠ WARNING", color: "#e84040" },
                  { sym: "GMRAIRPORT", score: "-1.12", zone: "⚠ WARNING", color: "#e84040" },
                  { sym: "ZOMATO", score: "-0.87", zone: "⚠ WARNING", color: "#f0a500" },
                  { sym: "TATAPOWER", score: "-2.14", zone: "✓ SAFE", color: "#1db954" },
                  { sym: "INFY", score: "-3.42", zone: "✓ SAFE", color: "#1db954" },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.5px solid #1c1c24", paddingBottom: 8, marginBottom: 8 }}>
                    <div>
                      <div style={{ fontSize: 11, color: "#c9c5b8", fontWeight: 600 }}>{r.sym}</div>
                      <div style={{ fontSize: 10, color: "#6b7585" }}>M-Score: {r.score}</div>
                    </div>
                    <span style={{ fontSize: 10, color: r.color }}>{r.zone}</span>
                  </div>
                ))}
              </div>

              {/* Portfolio optimizer */}
              <div style={{ background: "#080809", padding: "20px 24px" }}>
                <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#3a4050", marginBottom: 14 }}>SMART PORTFOLIO BUILDER</div>
                {[
                  { stock: "HDFCBANK", alloc: "18.4%", width: "18.4%" },
                  { stock: "INFY", alloc: "14.2%", width: "14.2%" },
                  { stock: "RELIANCE", alloc: "12.8%", width: "12.8%" },
                  { stock: "TATACONSUM", alloc: "11.1%", width: "11.1%" },
                  { stock: "LTIM", alloc: "9.7%", width: "9.7%" },
                ].map((r, i) => (
                  <div key={i} style={{ marginBottom: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 11, color: "#c9c5b8" }}>{r.stock}</span>
                      <span style={{ fontSize: 11, color: "#3a8fff", fontWeight: 600 }}>{r.alloc}</span>
                    </div>
                    <div style={{ background: "#1c1c24", height: 2, borderRadius: 1 }}>
                      <div style={{ background: "#3a8fff", height: 2, borderRadius: 1, width: r.width }} />
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 14, borderTop: "0.5px solid #1c1c24", paddingTop: 10, display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 10, color: "#6b7585" }}>PORTFOLIO SHARPE RATIO</span>
                  <span style={{ fontSize: 10, color: "#1db954", fontWeight: 600 }}>1.82 ▲</span>
                </div>
              </div>

              {/* Conviction scores */}
              <div style={{ background: "#080809", padding: "20px 24px" }}>
                <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#3a4050", marginBottom: 14 }}>TOP CONVICTION SCORES</div>
                {[
                  { sym: "TITAN", conv: "8.4/10", fscore: "F:8", mscore: "Safe" },
                  { sym: "BAJAJFINSV", conv: "8.1/10", fscore: "F:7", mscore: "Safe" },
                  { sym: "HCLTECH", conv: "7.9/10", fscore: "F:8", mscore: "Safe" },
                  { sym: "MARUTI", conv: "7.7/10", fscore: "F:6", mscore: "Safe" },
                ].map((r, i) => (
                  <div key={i} style={{ borderBottom: "0.5px solid #1c1c24", paddingBottom: 9, marginBottom: 9 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 11, color: "#c9c5b8", fontWeight: 600 }}>{r.sym}</span>
                      <span style={{ fontSize: 11, color: "#3a8fff", fontWeight: 700 }}>{r.conv}</span>
                    </div>
                    <div style={{ display: "flex", gap: 10 }}>
                      <span style={{ fontSize: 10, color: "#1db954" }}>{r.fscore}</span>
                      <span style={{ fontSize: 10, color: "#1db954" }}>{r.mscore}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor table */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <span className="section-label">COMPETITIVE ADVANTAGE</span>
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: "0 0 32px" }}>
          WHAT NOBODY ELSE IN INDIA PROVIDES
        </h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "0.5px solid #252530" }}>
                {["FEATURE", "SCREENER.IN", "TICKERTAPE", "TRENDLYNE", "TARA LENS"].map((h, i) => (
                  <th key={i} style={{ padding: "12px 16px", textAlign: i === 0 ? "left" : "center", color: i === 4 ? "#3a8fff" : "#3a4050", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: i === 4 ? 700 : 400 }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Beneish M / F-Score / Altman Z", "✕", "✕", "✕", "✓ All 3"],
                ["Market Regime Detection (5 states)", "✕", "✕", "✕", "✓"],
                ["Smart Portfolio Builder (5 methods)", "✕", "✕", "✕", "✓"],
                ["JdK Sector Rotation Map", "✕", "✕", "Simplified", "✓ Standard"],
                ["4-Pillar Conviction Scoring", "✕", "Partial", "Partial", "✓ Full"],
                ["Historical Stress Testing", "✕", "✕", "✕", "✓ (Institutional)"],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "0.5px solid #1c1c24", background: i % 2 === 0 ? "#080809" : "#0d0d10" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "12px 16px", textAlign: j === 0 ? "left" : "center", color: cell === "✓" || cell.startsWith("✓") ? "#1db954" : cell === "✕" ? "#3a4050" : j === 4 ? "#3a8fff" : "#6b7585", fontSize: j === 0 ? 12 : 12, fontWeight: cell === "✕" || cell.startsWith("✓") ? 700 : 400 }}>
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

      {/* Features */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <span className="section-label">FULL CAPABILITY MAP</span>
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: "0 0 40px" }}>
          WHAT TARA LENS GIVES YOU
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 1, background: "#1c1c24", border: "0.5px solid #1c1c24", borderRadius: 2, overflow: "hidden" }}>
          {features.map((f, i) => (
            <div key={i} style={{ background: "#080809", padding: "28px 24px", position: "relative" }}>
              {f.badge && (
                <span style={{ position: "absolute", top: 14, right: 14, fontSize: 9, letterSpacing: "1px", textTransform: "uppercase", color: f.color, border: `0.5px solid ${f.color}44`, padding: "3px 7px", borderRadius: 2 }}>
                  {f.badge}
                </span>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span style={{ color: f.color, fontSize: 9, fontWeight: 700, letterSpacing: "1px", background: `${f.color}22`, border: `0.5px solid ${f.color}44`, borderRadius: 2, padding: "4px 8px", minWidth: 36, textAlign: "center" }}>
                  {f.icon}
                </span>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#c9c5b8" }}>
                  {f.title}
                </span>
              </div>
              <p style={{ fontSize: 13, color: "#6b7585", lineHeight: 1.9, letterSpacing: "0.2px", margin: 0 }}>
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
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: "0 0 8px" }}>
          TARA LENS PLANS
        </h2>
        <p style={{ fontSize: 13, color: "#6b7585", marginBottom: 40, lineHeight: 1.7 }}>
          Annual billing saves 2 months. Founding member pricing for the first 30 Institutional users — locked for life.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 1, background: "#1c1c24", border: "0.5px solid #1c1c24", borderRadius: 2, overflow: "hidden" }}>
          {pricingTiers.map((tier) => (
            <div key={tier.name} style={{ background: tier.highlight ? "#0d2a5511" : "#080809", padding: "32px 28px", display: "flex", flexDirection: "column", position: "relative", borderTop: tier.highlight ? "1px solid #3a8fff" : "none" }}>
              {tier.badge && (
                <span style={{ position: "absolute", top: 14, right: 14, fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: tier.highlight ? "#3a8fff" : "#6b7585", border: `0.5px solid ${tier.highlight ? "#3a8fff" : "#252530"}`, padding: "3px 7px", borderRadius: 2 }}>
                  {tier.badge}
                </span>
              )}

              <div style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#6b7585", marginBottom: 18 }}>{tier.name}</div>

              <div style={{ marginBottom: 10 }}>
                {tier.foundingPrice && (
                  <div style={{ fontSize: 12, color: "#6b7585", textDecoration: "line-through", marginBottom: 3 }}>{tier.price}/mo</div>
                )}
                <span style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, color: tier.highlight ? "#3a8fff" : "#c9c5b8" }}>
                  {tier.foundingPrice ?? tier.price}
                </span>
                {tier.price !== "₹0" && (
                  <span style={{ fontSize: 11, color: "#6b7585", marginLeft: 8 }}>/{tier.period}</span>
                )}
                {tier.foundingPrice && (
                  <div style={{ fontSize: 10, color: "#3a8fff", letterSpacing: "1px", marginTop: 4, textTransform: "uppercase" }}>FOUNDING MEMBER RATE</div>
                )}
              </div>

              {tier.note && (
                <p style={{ fontSize: 12, color: "#3a4050", marginBottom: 20, marginTop: 6, lineHeight: 1.6 }}>{tier.note}</p>
              )}

              <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {tier.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ color: f.includes("coming soon") ? "#3a4050" : tier.highlight ? "#3a8fff" : "#6b7585", fontSize: 11, marginTop: 2 }}>▸</span>
                    <span style={{ fontSize: 13, color: f.includes("coming soon") ? "#3a4050" : "#c9c5b8", lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>

              <a href={tier.ctaHref} style={{ background: tier.highlight ? "#0d2a5566" : "transparent", border: `0.5px solid ${tier.highlight ? "#3a8fff" : "#252530"}`, color: tier.highlight ? "#3a8fff" : "#6b7585", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", padding: "10px 16px", borderRadius: 2, textDecoration: "none", textAlign: "center", display: "block" }}>
                {tier.cta} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "#0d0d10", borderTop: "0.5px solid #1c1c24", padding: "56px 24px", textAlign: "center" }}>
        <h3 style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: "0 0 16px" }}>
          THE INDIAN VERSION OF PORTFOLIO123 + KOYFIN.
        </h3>
        <p style={{ fontSize: 13, color: "#6b7585", maxWidth: 500, margin: "0 auto 28px", lineHeight: 1.8 }}>
          Analytically superior to every Indian retail platform. The only question is: are you the researcher who uses it first?
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/waitlist" className="btn-lens" style={{ textDecoration: "none" }}>REQUEST EARLY ACCESS →</a>
          <Link href="/pricing" className="btn-ghost" style={{ textDecoration: "none" }}>COMPARE ALL PRODUCTS</Link>
        </div>
      </section>
    </div>
  )
}
