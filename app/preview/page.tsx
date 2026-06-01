import Link from "next/link"

const WHATSAPP = "919492052201"

export default function PreviewPage() {
  return (
    <div style={{ background: "#06060a", fontFamily: "var(--font-jetbrains), monospace" }}>

      {/* Top status bar */}
      <div style={{ background: "#06060a", borderBottom: "0.5px solid #12121e", padding: "0 32px", height: 36, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <span style={{ fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: "#e84040" }}>● MARKET CLOSED</span>
          <span style={{ fontSize: 9, letterSpacing: "1px", color: "#2a2a40" }}>NIFTY 24,832.65 ▼ −0.34%</span>
          <span style={{ fontSize: 9, letterSpacing: "1px", color: "#2a2a40" }}>BANKNIFTY 53,241.10 ▲ +0.12%</span>
        </div>
        <span style={{ fontSize: 9, letterSpacing: "1px", color: "#2a2a40" }}>NSE // IST 15:32:47</span>
      </div>

      {/* Hero */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 48px 80px" }}>

        {/* Eyebrow */}
        <div style={{ marginBottom: 32, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 32, height: 0.5, background: "#f0a500" }} />
          <span style={{ fontSize: 9, letterSpacing: "4px", textTransform: "uppercase", color: "#f0a500" }}>
            TARA CAPITAL // QUANT RESEARCH
          </span>
        </div>

        {/* Main headline */}
        <div style={{ maxWidth: 900, marginBottom: 48 }}>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 700, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-2px", margin: "0 0 24px" }}>
            The research tools
            <br />
            <span style={{ color: "#f0a500" }}>institutions use.</span>
            <br />
            <span style={{ color: "#2a2a40" }}>At 1% of the price.</span>
          </h1>
          <p style={{ fontSize: 16, color: "#6b7090", lineHeight: 1.8, maxWidth: 560, margin: 0 }}>
            Beneish M-Score. HMM Regime Detection. HRP Portfolio Optimizer.
            Real-time F&O OI Intelligence. Built for Indian markets by someone
            who trades them.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 80 }}>
          <a
            href="/waitlist"
            style={{ background: "#f0a500", color: "#06060a", fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", padding: "14px 32px", borderRadius: 2, textDecoration: "none" }}
          >
            REQUEST ACCESS
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "transparent", border: "0.5px solid #1db954", color: "#1db954", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", padding: "14px 32px", borderRadius: 2, textDecoration: "none" }}
          >
            WHATSAPP US →
          </a>
          <Link href="/pricing" style={{ color: "#2a2a40", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", marginLeft: 8 }}>
            VIEW PRICING →
          </Link>
        </div>

        {/* The math section — signals depth */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, background: "#12121e", border: "0.5px solid #12121e", borderRadius: 2, overflow: "hidden" }}>
          {/* Beneish formula */}
          <div style={{ background: "#0a0a12", padding: "32px" }}>
            <div style={{ fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: "#e84040", marginBottom: 20 }}>
              EARNINGS MANIPULATION DETECTION
            </div>
            <div style={{ fontSize: 10, color: "#3a3a5a", lineHeight: 2, fontFamily: "inherit" }}>
              <span style={{ color: "#6b7090" }}>M =</span> −4.84<br />
              <span style={{ color: "#6b7090" }}> +</span> 0.920 × <span style={{ color: "#e84040" }}>DSRI</span><br />
              <span style={{ color: "#6b7090" }}> +</span> 0.528 × <span style={{ color: "#e84040" }}>GMI</span><br />
              <span style={{ color: "#6b7090" }}> +</span> 0.404 × <span style={{ color: "#e84040" }}>AQI</span><br />
              <span style={{ color: "#6b7090" }}> +</span> 4.679 × <span style={{ color: "#e84040" }}>TATA</span>
            </div>
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: "0.5px solid #12121e" }}>
              <span style={{ fontSize: 9, color: "#3a3a5a", letterSpacing: "1px" }}>M {">"} −1.78 → </span>
              <span style={{ fontSize: 9, color: "#e84040", letterSpacing: "1px" }}>MANIPULATION LIKELY</span>
            </div>
            <div style={{ marginTop: 8 }}>
              <span style={{ fontSize: 9, color: "#3a3a5a", letterSpacing: "0.5px" }}>Run across 2,000+ NSE stocks daily</span>
            </div>
          </div>

          {/* HMM regime */}
          <div style={{ background: "#0a0a12", padding: "32px" }}>
            <div style={{ fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: "#3a8fff", marginBottom: 20 }}>
              MARKET REGIME — TODAY
            </div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: "#ffffff", marginBottom: 4 }}>BULL TREND</div>
              <div style={{ fontSize: 10, color: "#3a8fff", letterSpacing: "1px" }}>HMM STATE 2 OF 5 // P=0.847</div>
            </div>
            <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
              {[
                { label: "STR BULL", color: "#1db954", active: false },
                { label: "BULL", color: "#3a8fff", active: true },
                { label: "SIDEWAY", color: "#f0a500", active: false },
                { label: "BEAR", color: "#e84040", active: false },
                { label: "STR BEAR", color: "#8b0000", active: false },
              ].map((s) => (
                <div key={s.label} style={{ flex: 1, height: 4, background: s.active ? s.color : "#12121e", borderRadius: 1 }} />
              ))}
            </div>
            <div style={{ fontSize: 9, color: "#3a3a5a", letterSpacing: "0.5px" }}>
              Trained on 10 years of NSE data. Updated daily.
            </div>
          </div>

          {/* OI live */}
          <div style={{ background: "#0a0a12", padding: "32px" }}>
            <div style={{ fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: "#f0a500", marginBottom: 20 }}>
              TOP OI SPURTS — LIVE
            </div>
            {[
              { sym: "NIFTY 22500 CE", oi: "+4.1L", dir: "BUILDUP", color: "#1db954" },
              { sym: "HDFCBANK 1700 CE", oi: "+2.4L", dir: "BUILDUP", color: "#1db954" },
              { sym: "RELIANCE 3200 PE", oi: "+1.8L", dir: "SHORT", color: "#e84040" },
              { sym: "BANKNIFTY 49K PE", oi: "+3.2L", dir: "HEDGE", color: "#f0a500" },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 10, color: "#ffffff", fontWeight: 600 }}>{r.sym}</div>
                  <div style={{ fontSize: 9, color: "#3a3a5a" }}>OI {r.oi}</div>
                </div>
                <span style={{ fontSize: 8, letterSpacing: "1px", color: r.color, border: `0.5px solid ${r.color}44`, padding: "2px 7px", borderRadius: 2 }}>
                  {r.dir}
                </span>
              </div>
            ))}
            <div style={{ marginTop: 8, fontSize: 9, color: "#3a3a5a", letterSpacing: "0.5px" }}>
              Refreshes every 3 minutes // 9:15–15:30 IST
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "0.5px solid #12121e" }} />

      {/* Three products — architectural grid */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 48px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
          <div>
            <div style={{ width: 24, height: 0.5, background: "#f0a500", marginBottom: 16 }} />
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 44px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-1px", margin: 0, lineHeight: 1.1 }}>
              Three tools.
              <br />
              <span style={{ color: "#2a2a40" }}>One edge.</span>
            </h2>
          </div>
          <Link href="/pricing" style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#3a3a5a", textDecoration: "none" }}>
            SEE PRICING →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#12121e" }}>
          {[
            {
              sym: "◈", name: "AXIOM TERMINAL", tag: "F&O INTELLIGENCE",
              color: "#f0a500", href: "/products/axiom-terminal",
              desc: "Real-time OI spurts. Greeks dashboard. Sector rotation. The only intraday F&O intelligence platform built specifically for NSE.",
              price: "₹599", priceNote: "/mo — founding rate",
              stats: [{ label: "Data refresh", val: "3 min" }, { label: "Contracts tracked", val: "All NSE" }],
            },
            {
              sym: "◎", name: "TARA LENS", tag: "EQUITY RESEARCH",
              color: "#3a8fff", href: "/products/tara-lens",
              desc: "Beneish M-Score. Piotroski F-Score. HRP Optimizer. HMM Regime. The quant research stack that Indian retail investors have never had access to.",
              price: "₹499", priceNote: "/mo — founding rate (₹999 regular)",
              stats: [{ label: "Stocks screened", val: "2,000+" }, { label: "Forensic models", val: "3 active" }],
            },
            {
              sym: "◉", name: "TARA PENDULUM", tag: "SWING ANALYTICS",
              color: "#14b8a6", href: "/products/tara-pendulum",
              desc: "Multi-timeframe swing intelligence for NSE equities and futures. Technicals with fundamentals overlay. Mean reversion identification.",
              price: "₹299", priceNote: "/mo — founding rate",
              stats: [{ label: "Swing setups", val: "Daily scan" }, { label: "Timeframes", val: "Daily + Weekly" }],
            },
          ].map((p, i) => (
            <div key={i} style={{ background: "#0a0a12", padding: "40px 32px", position: "relative", display: "flex", flexDirection: "column" }}>
              {/* Number */}
              <div style={{ fontSize: 11, color: "#12121e", fontWeight: 700, position: "absolute", top: 32, right: 32 }}>
                0{i + 1}
              </div>

              {/* Symbol + name */}
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 24, color: p.color, display: "block", marginBottom: 10 }}>{p.sym}</span>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: p.color, marginBottom: 3 }}>{p.name}</div>
                <div style={{ fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: "#2a2a40" }}>{p.tag}</div>
              </div>

              {/* Description */}
              <p style={{ fontSize: 13, color: "#6b7090", lineHeight: 1.8, margin: "0 0 28px", flexGrow: 1 }}>
                {p.desc}
              </p>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28, paddingTop: 20, borderTop: "0.5px solid #12121e" }}>
                {p.stats.map((s, j) => (
                  <div key={j}>
                    <div style={{ fontSize: 9, color: "#2a2a40", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 4 }}>{s.label}</div>
                    <div style={{ fontSize: 13, color: "#ffffff", fontWeight: 600 }}>{s.val}</div>
                  </div>
                ))}
              </div>

              {/* Price + CTA */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: 22, fontWeight: 700, color: p.color }}>{p.price}</span>
                  <span style={{ fontSize: 10, color: "#3a3a5a", marginLeft: 4 }}>{p.priceNote}</span>
                </div>
                <Link
                  href={p.href}
                  style={{ fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: p.color, border: `0.5px solid ${p.color}`, padding: "7px 16px", borderRadius: 2, textDecoration: "none" }}
                >
                  EXPLORE →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid #12121e" }} />

      {/* Why section — very different treatment */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
          <div>
            <div style={{ width: 24, height: 0.5, background: "#3a8fff", marginBottom: 16 }} />
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 36px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.5px", margin: "0 0 20px", lineHeight: 1.2 }}>
              What makes this different.
            </h2>
            <p style={{ fontSize: 13, color: "#6b7090", lineHeight: 1.8 }}>
              Not another screener. Not a prettier Tickertape. Something analytically ahead of every Indian retail tool available today.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#12121e" }}>
            {[
              { title: "India-native data", desc: "NSE OI, F&O expiry logic, sector mapping — not a US tool retrofitted for India.", color: "#f0a500" },
              { title: "Validated methodology", desc: "Walk-forward out-of-sample backtesting. HMM with proper calibration. Not curve-fitting.", color: "#3a8fff" },
              { title: "No competitors have this", desc: "Beneish + F-Score + Altman Z on full NSE universe. JdK RRG. HRP optimizer. Zero Indian equivalents.", color: "#14b8a6" },
              { title: "You're shipping first", desc: "These models exist in institutional desks. Not in Indian retail. You're early. That matters.", color: "#f0a500" },
            ].map((e, i) => (
              <div key={i} style={{ background: "#0a0a12", padding: "28px 24px" }}>
                <div style={{ width: 2, height: 20, background: e.color, marginBottom: 16, borderRadius: 1 }} />
                <h3 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.5px", color: "#ffffff", margin: "0 0 10px", textTransform: "uppercase" }}>
                  {e.title}
                </h3>
                <p style={{ fontSize: 12, color: "#6b7090", lineHeight: 1.8, margin: 0 }}>
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid #12121e" }} />

      {/* Stats — large number treatment */}
      <section style={{ background: "#0a0a12", padding: "64px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "#12121e" }}>
          {[
            { num: "45M+", label: "F&O traders in India", sub: "Total addressable market", color: "#f0a500" },
            { num: "₹0", label: "Comparable Indian tools", sub: "With this feature set", color: "#3a8fff" },
            { num: "97%", label: "Gross margin", sub: "Near-zero infra cost", color: "#14b8a6" },
            { num: "< ₹500", label: "Customer acquisition", sub: "Organic content only", color: "#f0a500" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#0a0a12", padding: "36px 32px" }}>
              <div style={{ fontSize: "clamp(28px, 3vw, 48px)", fontWeight: 700, color: s.color, letterSpacing: "-1px", marginBottom: 8 }}>
                {s.num}
              </div>
              <div style={{ fontSize: 12, color: "#ffffff", fontWeight: 600, marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 10, color: "#3a3a5a", letterSpacing: "0.5px" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#12121e" }}>
          {/* Left — form CTA */}
          <div style={{ background: "#0a0a12", padding: "48px 40px" }}>
            <div style={{ width: 24, height: 0.5, background: "#f0a500", marginBottom: 20 }} />
            <h2 style={{ fontSize: "clamp(20px, 2.5vw, 32px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.5px", margin: "0 0 16px", lineHeight: 1.2 }}>
              Join the founding
              <br />member waitlist.
            </h2>
            <p style={{ fontSize: 13, color: "#6b7090", lineHeight: 1.8, marginBottom: 28 }}>
              First 100 users per tool get founding member pricing — locked for life. Axiom Analyst at ₹599/mo. Tara Lens Pro at ₹499/mo.
            </p>
            <Link
              href="/waitlist"
              style={{ background: "#f0a500", color: "#06060a", fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", padding: "14px 28px", borderRadius: 2, textDecoration: "none", display: "inline-block" }}
            >
              REQUEST EARLY ACCESS →
            </Link>
          </div>

          {/* Right — direct contact */}
          <div style={{ background: "#0d2e1a", padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: "#1db954", marginBottom: 20 }}>
              ● PREFER DIRECT CONTACT?
            </div>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#ffffff", letterSpacing: "-0.5px", marginBottom: 8 }}>
              +91 94920 52201
            </div>
            <p style={{ fontSize: 13, color: "#6b7090", lineHeight: 1.8, marginBottom: 28 }}>
              WhatsApp or call for immediate access, billing queries, or to schedule a demo.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#1db954", color: "#06060a", fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", padding: "12px 20px", borderRadius: 2, textDecoration: "none" }}
              >
                WHATSAPP
              </a>
              <a
                href={`tel:${WHATSAPP}`}
                style={{ background: "transparent", border: "0.5px solid #1db954", color: "#1db954", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", padding: "12px 20px", borderRadius: 2, textDecoration: "none" }}
              >
                CALL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Preview notice */}
      <div style={{ background: "#f0a500", padding: "12px 48px", textAlign: "center" }}>
        <span style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#06060a", fontWeight: 700 }}>
          ● DESIGN PREVIEW — NOT LIVE YET // Approve to replace homepage
        </span>
      </div>

    </div>
  )
}
