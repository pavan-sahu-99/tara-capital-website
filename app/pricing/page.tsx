import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing — Tara Capital",
  description:
    "Per-tool and bundle pricing for Axiom Terminal, Tara Lens, and Tara Pendulum. Founding member rates for early access.",
}

const tools = [
  {
    symbol: "◈",
    name: "AXIOM TERMINAL",
    tag: "F&O INTELLIGENCE",
    color: "#f0a500",
    colorDim: "#2e220033",
    href: "/products/axiom-terminal",
    tiers: [
      {
        name: "OBSERVER",
        monthly: "₹0",
        annual: "Free forever",
        features: ["End-of-day OI — 15 min delay", "Index OI (prev. day)", "Basic option chain"],
        highlight: false,
      },
      {
        name: "ANALYST",
        monthly: "₹999/mo",
        annual: "₹9,999/yr",
        foundingMonthly: "₹599/mo",
        foundingAnnual: "₹5,999/yr",
        features: [
          "Real-time OI spurts — 3 min refresh",
          "Stock + Index OI dashboard",
          "F&O Greeks dashboard",
          "Sector OI rotation",
          "Volume ratio + OI comparator",
          "Option chain analysis",
          "Signal Lab + Momentum Radar",
        ],
        highlight: true,
        badge: "MOST POPULAR",
      },
      {
        name: "PRO",
        monthly: "₹1,999/mo",
        annual: "₹19,999/yr",
        features: [
          "Everything in Analyst",
          "Broker integration — Kite / Upstox",
          "Custom OI alerts — Telegram / WhatsApp",
          "30-day historical OI patterns",
          "Breakout Beacon — advanced",
          "Priority support — 24 hr SLA",
        ],
        highlight: false,
      },
      {
        name: "INSTITUTIONAL",
        monthly: "₹7,999/mo",
        annual: "₹79,999/yr",
        features: ["5 seats", "Everything in Pro", "White-label option", "Custom exports", "Dedicated support"],
        highlight: false,
        badge: "PROP DESKS",
      },
    ],
  },
  {
    symbol: "◎",
    name: "TARA LENS",
    tag: "EQUITY RESEARCH",
    color: "#3a8fff",
    colorDim: "#0d2a5533",
    href: "/products/tara-lens",
    tiers: [
      {
        name: "EXPLORER",
        monthly: "₹0",
        annual: "Free forever",
        features: ["Market Pulse — limited", "Screener: 25 results only", "Scores teaser view", "Watchlist: 5 stocks"],
        highlight: false,
      },
      {
        name: "PRO",
        monthly: "₹499/mo",
        annual: "₹4,499/yr",
        foundingMonthly: "₹299/mo",
        foundingAnnual: "₹2,999/yr",
        features: [
          "Full screener — 2,000+ stocks",
          "All forensic scores: M / F / Z",
          "4-pillar conviction scoring",
          "Sector Rotation Map (JdK RRG)",
          "Smart Portfolio Builder — 5 methods",
          "Portfolio Analyser + Monte Carlo",
          "Smart Rebalancer",
          "Market Regime Detection",
          "Unlimited watchlist",
        ],
        highlight: true,
        badge: "MOST POPULAR",
      },
      {
        name: "INSTITUTIONAL",
        monthly: "₹2,999/mo",
        annual: "₹24,999/yr",
        features: [
          "Everything in Pro",
          "Historical Stress Testing",
          "ROIC vs. WACC Spread Analysis",
          "Insider Intelligence feed",
          "PDF portfolio reports",
          "Data export API",
          "Tax-Aware Rebalancing — coming soon",
          "Priority support — 48 hr SLA",
        ],
        highlight: false,
        badge: "SEBI RIAS",
      },
    ],
  },
  {
    symbol: "◉",
    name: "TARA PENDULUM",
    tag: "SWING ANALYTICS — COMING SOON",
    color: "#3a4050",
    colorDim: "#0d0d1033",
    href: "/products/tara-pendulum",
    comingSoon: true,
    tiers: [
      {
        name: "OBSERVER",
        monthly: "₹0",
        annual: "Free forever",
        features: ["Basic swing screener", "Chart viewer — limited", "No technical indicators"],
        highlight: false,
      },
      {
        name: "RESEARCHER",
        monthly: "₹499/mo",
        annual: "₹4,499/yr",
        foundingMonthly: "₹299/mo",
        foundingAnnual: "₹2,999/yr",
        features: [
          "Swing Technicals Dashboard",
          "Swing Fundamentals Overlay",
          "Mean Reversion Identification",
          "NSE Futures Swing Setups",
          "Multi-Chart Analysis Suite",
          "Sector Swing Scanner",
          "Daily + Weekly timeframes",
        ],
        highlight: true,
        badge: "ALL FEATURES",
      },
    ],
  },
]

export default function PricingPage() {
  return (
    <div style={{ background: "#080809" }}>
      {/* Header */}
      <section style={{ borderBottom: "0.5px solid #1c1c24", padding: "64px 24px 48px", maxWidth: 1280, margin: "0 auto" }}>
        <span className="section-label">PRICING</span>
        <h1 style={{ fontSize: "clamp(26px, 4vw, 46px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: "0 0 16px" }}>
          PER-TOOL PRICING.
          <br /><span style={{ color: "#f0a500" }}>PAY FOR WHAT YOU USE.</span>
        </h1>
        <p style={{ fontSize: 14, color: "#6b7585", lineHeight: 1.9, maxWidth: 580, marginBottom: 28 }}>
          Each tool is priced independently. Buy only what you need. Annual plans
          save 2 months — equivalent to 16% off monthly billing. Founding member pricing
          locks in your rate for life — available to the first 100 users per tool.
        </p>
        <div style={{ background: "#2e220022", border: "0.5px solid #f0a500", borderRadius: 2, padding: "20px 24px", maxWidth: 560 }}>
          <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#f0a500", marginBottom: 14 }}>
            ● FOUNDING MEMBER RATES — EARLY ACCESS
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {[
              { tool: "Axiom Analyst", normal: "₹999/mo", founding: "₹599/mo" },
              { tool: "Tara Lens Pro", normal: "₹499/mo", founding: "₹299/mo" },
              { tool: "Tara Pendulum", normal: "₹499/mo", founding: "₹299/mo" },
            ].map((r) => (
              <div key={r.tool}>
                <div style={{ fontSize: 10, color: "#6b7585", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 4 }}>{r.tool}</div>
                <div style={{ fontSize: 16, color: "#f0a500", fontWeight: 700 }}>
                  {r.founding}
                  <span style={{ fontSize: 11, color: "#6b7585", textDecoration: "line-through", marginLeft: 8 }}>{r.normal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Per-tool pricing */}
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {tools.map((tool, ti) => (
          <section key={tool.name} style={{ padding: "56px 24px", borderBottom: ti < tools.length - 1 ? "0.5px solid #1c1c24" : "none" }}>
            {/* Tool header */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
              <span style={{ color: tool.color, fontSize: 22 }}>{tool.symbol}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: tool.color }}>{tool.name}</div>
                <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#3a4050" }}>{tool.tag}</div>
              </div>
              <Link href={tool.href} style={{ marginLeft: "auto", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: tool.color, border: `0.5px solid ${tool.color}44`, padding: "5px 14px", borderRadius: 2, textDecoration: "none" }}>
                VIEW PRODUCT →
              </Link>
            </div>

            {/* Tiers */}
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${tool.tiers.length}, minmax(200px, 1fr))`, gap: 1, background: "#1c1c24", border: "0.5px solid #1c1c24", borderRadius: 2, overflow: "hidden" }}>
              {tool.tiers.map((tier) => (
                <div key={tier.name} style={{ background: tier.highlight ? `${tool.colorDim}` : "#080809", padding: "28px 22px", display: "flex", flexDirection: "column", position: "relative", borderTop: tier.highlight ? `1px solid ${tool.color}` : "none" }}>
                  {"badge" in tier && tier.badge && (
                    <span style={{ position: "absolute", top: 12, right: 12, fontSize: 9, letterSpacing: "1px", textTransform: "uppercase", color: tier.highlight ? tool.color : "#6b7585", border: `0.5px solid ${tier.highlight ? tool.color : "#252530"}`, padding: "3px 6px", borderRadius: 2 }}>
                      {tier.badge}
                    </span>
                  )}

                  <div style={{ fontSize: 10, letterSpacing: "2.5px", textTransform: "uppercase", color: "#6b7585", marginBottom: 14 }}>{tier.name}</div>

                  {/* Pricing display */}
                  <div style={{ marginBottom: 18 }}>
                    {"foundingMonthly" in tier && tier.foundingMonthly ? (
                      <>
                        <div style={{ fontSize: 11, color: "#6b7585", textDecoration: "line-through", marginBottom: 2 }}>{tier.monthly}</div>
                        <div style={{ fontSize: 22, fontWeight: 700, color: tool.color }}>{tier.foundingMonthly}</div>
                        <div style={{ fontSize: 11, color: "#6b7585", marginTop: 4 }}>
                          <span style={{ textDecoration: "line-through" }}>{"annual" in tier ? tier.annual : ""}</span>
                          {" "}<span style={{ color: tool.color }}>{"foundingAnnual" in tier ? tier.foundingAnnual : ""}</span> /year
                        </div>
                        <div style={{ fontSize: 10, color: tool.color, letterSpacing: "1px", marginTop: 6, textTransform: "uppercase" }}>FOUNDING RATE</div>
                      </>
                    ) : (
                      <>
                        <div style={{ fontSize: 22, fontWeight: 700, color: tier.highlight ? tool.color : "#c9c5b8" }}>{tier.monthly}</div>
                        {"annual" in tier && tier.annual !== "Free forever" && (
                          <div style={{ fontSize: 11, color: "#6b7585", marginTop: 4 }}>{tier.annual} /year</div>
                        )}
                        {tier.annual === "Free forever" && (
                          <div style={{ fontSize: 11, color: "#3a4050", marginTop: 4 }}>Free forever</div>
                        )}
                      </>
                    )}
                  </div>

                  <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 9, marginBottom: 24 }}>
                    {tier.features.map((f, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <span style={{ color: f.includes("coming soon") ? "#3a4050" : tier.highlight ? tool.color : "#3a4050", fontSize: 10, marginTop: 2 }}>▸</span>
                        <span style={{ fontSize: 12, color: f.includes("coming soon") ? "#3a4050" : tier.highlight ? "#c9c5b8" : "#6b7585", lineHeight: 1.6 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={"comingSoon" in tool ? "/waitlist" : tier.monthly === "₹0" ? "/waitlist" : "/checkout"}
                    style={{ background: tier.highlight ? `${tool.color}22` : "transparent", border: `0.5px solid ${tier.highlight ? tool.color : "#252530"}`, color: tier.highlight ? tool.color : "#6b7585", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", padding: "9px 14px", borderRadius: 2, textDecoration: "none", textAlign: "center", display: "block" }}
                  >
                    {"comingSoon" in tool ? "NOTIFY ME" : tier.monthly === "₹0" ? "START FREE" : "GET ACCESS"} →
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <hr style={{ border: "none", borderTop: "0.5px solid #1c1c24" }} />

      {/* FAQ */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 24px" }}>
        <span className="section-label">COMMON QUESTIONS</span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 1, background: "#1c1c24", border: "0.5px solid #1c1c24", borderRadius: 2, overflow: "hidden" }}>
          {[
            { q: "Is this financial advice?", a: "No. Tara Capital is a data research platform. All tools provide quantitative analysis and screening. All investment decisions remain yours. We are not SEBI-registered investment advisors." },
            { q: "What data sources do you use?", a: "NSE official data feeds for OI and options data. Public financial data sources for fundamental screeners. All data is India-native — not a US tool retrofitted for India." },
            { q: "Is founding member pricing really locked?", a: "Yes. The first 100 users on each paid tier get that rate locked for life — as long as their subscription stays active. Cancel and resubscribe means standard rate." },
            { q: "Can I get a free trial?", a: "Each product has a free Observer/Explorer tier with no payment required. Paid tiers require early access approval — request access and we will onboard you." },
            { q: "What payment methods are accepted?", a: "Razorpay — UPI, net banking, credit and debit cards, EMI. All Indian payment methods. Subscriptions auto-renew monthly or annually." },
            { q: "Can I upgrade or switch plans?", a: "Yes. Upgrade any time. Downgrades take effect at the end of your billing period. Annual plans can be cancelled for a pro-rated refund within 7 days." },
          ].map((faq, i) => (
            <div key={i} style={{ background: "#080809", padding: "28px 24px" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#c9c5b8", marginBottom: 12, lineHeight: 1.5 }}>{faq.q}</div>
              <p style={{ fontSize: 13, color: "#6b7585", lineHeight: 1.9, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0d0d10", borderTop: "0.5px solid #1c1c24", padding: "64px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(20px, 3vw, 38px)", fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", margin: "0 0 16px" }}>
          JOIN THE FOUNDING MEMBER WAITLIST
        </h2>
        <p style={{ fontSize: 14, color: "#6b7585", maxWidth: 440, margin: "0 auto 36px", lineHeight: 1.8 }}>
          First 100 users on each tool get lifetime-locked founding member pricing. The market is waiting.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/waitlist" className="btn-primary" style={{ textDecoration: "none" }}>REQUEST EARLY ACCESS →</a>
          <Link href="/" className="btn-ghost" style={{ textDecoration: "none" }}>EXPLORE PRODUCTS</Link>
        </div>
      </section>
    </div>
  )
}
