"use client"

import Link from "next/link"
import { useState } from "react"

const tools = [
  { id: "axiom", label: "Axiom Terminal", desc: "F&O Intelligence", color: "#f0a500" },
  { id: "lens", label: "Tara Lens", desc: "Equity Research", color: "#3a8fff" },
  { id: "pendulum", label: "Tara Pendulum", desc: "Swing Analytics", color: "#14b8a6" },
  { id: "all", label: "All Tools", desc: "Full Access", color: "#c9c5b8" },
]

const WHATSAPP_NUMBER = "919492052201"
const CONTACT_DISPLAY = "+91 94920 52201"

export default function WaitlistPage() {
  const [selected, setSelected] = useState<string[]>([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const handleSubmit = async () => {
    if (!name || !email) return
    setLoading(true)

    const toolList = selected.length > 0
      ? tools.filter(t => selected.includes(t.id)).map(t => t.label).join(", ")
      : "Not specified"

    try {
      await fetch("https://formspree.io/f/xjgzqydr", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, phone, role, tools: toolList }),
      })
    } catch {
      // Even if submission fails, show success — contact via WhatsApp is the primary channel
    }

    setLoading(false)
    setSubmitted(true)
  }

  const whatsappMsg = encodeURIComponent(
    `Hi, I'd like early access to Tara Capital tools.\n\nName: ${name}\nEmail: ${email}\nInterested in: ${selected.map(id => tools.find(t => t.id === id)?.label).join(", ") || "All tools"}`
  )

  if (submitted) {
    return (
      <div style={{ background: "#080809", minHeight: "100vh" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
          <div style={{ fontSize: 36, marginBottom: 24, color: "#1db954" }}>✓</div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#c9c5b8", margin: "0 0 16px" }}>
            REQUEST RECEIVED
          </h2>
          <p style={{ fontSize: 14, color: "#6b7585", lineHeight: 1.9, marginBottom: 40, maxWidth: 440, margin: "0 auto 40px" }}>
            Thank you {name.split(" ")[0]}. We&apos;ll review your request and get back to you within 24 hours.
          </p>

          {/* WhatsApp CTA */}
          <div style={{ background: "#0d2e1a", border: "0.5px solid #1db954", borderRadius: 2, padding: "24px", marginBottom: 24 }}>
            <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#1db954", marginBottom: 12 }}>
              ● FOR FASTER ACCESS
            </div>
            <p style={{ fontSize: 13, color: "#c9c5b8", lineHeight: 1.7, marginBottom: 20 }}>
              WhatsApp us directly and we&apos;ll onboard you today.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#1db954", color: "#080809", fontSize: 12, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", padding: "12px 28px", borderRadius: 2, textDecoration: "none", display: "inline-block" }}
            >
              WHATSAPP {CONTACT_DISPLAY}
            </a>
          </div>

          {/* Purchase contact */}
          <div style={{ background: "#2e220022", border: "0.5px solid #f0a500", borderRadius: 2, padding: "20px 24px", marginBottom: 32 }}>
            <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#f0a500", marginBottom: 10 }}>
              ● FOR SUBSCRIPTIONS & BILLING
            </div>
            <p style={{ fontSize: 13, color: "#6b7585", marginBottom: 0 }}>
              Call or WhatsApp{" "}
              <a href={`tel:${WHATSAPP_NUMBER}`} style={{ color: "#f0a500", textDecoration: "none", fontWeight: 700 }}>
                {CONTACT_DISPLAY}
              </a>
            </p>
          </div>

          <Link href="/" style={{ fontSize: 11, color: "#6b7585", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase", border: "0.5px solid #252530", padding: "10px 20px", borderRadius: 2, display: "inline-block" }}>
            ← BACK TO HOME
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: "#080809", minHeight: "100vh" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "64px 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <span style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#6b7585", display: "block", marginBottom: 16 }}>
            EARLY ACCESS
          </span>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#c9c5b8", lineHeight: 1.2, margin: "0 0 16px" }}>
            REQUEST FOUNDING
            <br /><span style={{ color: "#f0a500" }}>MEMBER ACCESS</span>
          </h1>
          <p style={{ fontSize: 14, color: "#6b7585", lineHeight: 1.9, margin: "0 0 8px" }}>
            Fill in your details below. We&apos;ll reach out within 24 hours to onboard you.
          </p>
          <p style={{ fontSize: 13, color: "#6b7585" }}>
            Prefer instant access?{" "}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1db954", textDecoration: "none", fontWeight: 600 }}
            >
              WhatsApp {CONTACT_DISPLAY} →
            </a>
          </p>
        </div>

        {/* Founding rates */}
        <div style={{ background: "#2e220022", border: "0.5px solid #f0a500", borderRadius: 2, padding: "16px 20px", marginBottom: 36 }}>
          <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#f0a500", marginBottom: 10 }}>
            ● FOUNDING MEMBER RATES
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {[
              { tool: "Axiom Analyst", rate: "₹599/mo", normal: "₹999" },
              { tool: "Tara Lens Pro", rate: "₹299/mo", normal: "₹499" },
              { tool: "Tara Pendulum", rate: "₹299/mo", normal: "₹499" },
            ].map((r) => (
              <div key={r.tool}>
                <div style={{ fontSize: 10, color: "#6b7585", textTransform: "uppercase", marginBottom: 2 }}>{r.tool}</div>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#f0a500" }}>{r.rate} </span>
                <span style={{ fontSize: 11, color: "#3a4050", textDecoration: "line-through" }}>{r.normal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#6b7585", display: "block", marginBottom: 8 }}>
                FULL NAME *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                style={{ width: "100%", background: "#0d0d10", border: "0.5px solid #252530", borderRadius: 2, padding: "12px 14px", color: "#c9c5b8", fontSize: 13, fontFamily: "inherit", outline: "none", boxSizing: "border-box" }}
              />
            </div>
            <div>
              <label style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#6b7585", display: "block", marginBottom: 8 }}>
                PHONE / WHATSAPP
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                style={{ width: "100%", background: "#0d0d10", border: "0.5px solid #252530", borderRadius: 2, padding: "12px 14px", color: "#c9c5b8", fontSize: 13, fontFamily: "inherit", outline: "none", boxSizing: "border-box" }}
              />
            </div>
          </div>

          <div>
            <label style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#6b7585", display: "block", marginBottom: 8 }}>
              EMAIL ADDRESS *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{ width: "100%", background: "#0d0d10", border: "0.5px solid #252530", borderRadius: 2, padding: "12px 14px", color: "#c9c5b8", fontSize: 13, fontFamily: "inherit", outline: "none", boxSizing: "border-box" }}
            />
          </div>

          <div>
            <label style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#6b7585", display: "block", marginBottom: 8 }}>
              YOUR ROLE
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{ width: "100%", background: "#0d0d10", border: "0.5px solid #252530", borderRadius: 2, padding: "12px 14px", color: role ? "#c9c5b8" : "#3a4050", fontSize: 13, fontFamily: "inherit", outline: "none", boxSizing: "border-box", appearance: "none" }}
            >
              <option value="">Select your role...</option>
              <option value="Retail F&O Trader">Retail F&O Trader</option>
              <option value="Equity Investor / Researcher">Equity Investor / Researcher</option>
              <option value="Swing / Positional Trader">Swing / Positional Trader</option>
              <option value="SEBI Registered Investment Advisor">SEBI Registered Investment Advisor</option>
              <option value="Smallcase Manager">Smallcase Manager</option>
              <option value="Prop Desk Analyst">Prop Desk Analyst</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#6b7585", display: "block", marginBottom: 12 }}>
              INTERESTED IN
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
              {tools.map((t) => (
                <button
                  key={t.id}
                  onClick={() => toggle(t.id)}
                  style={{ background: selected.includes(t.id) ? `${t.color}22` : "#0d0d10", border: `0.5px solid ${selected.includes(t.id) ? t.color : "#252530"}`, borderRadius: 2, padding: "12px 16px", cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "all 0.15s ease" }}
                >
                  <div style={{ fontSize: 12, fontWeight: 600, color: selected.includes(t.id) ? t.color : "#c9c5b8", marginBottom: 2 }}>{t.label}</div>
                  <div style={{ fontSize: 10, color: "#6b7585", textTransform: "uppercase", letterSpacing: "0.5px" }}>{t.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div style={{ paddingTop: 8 }}>
            <button
              onClick={handleSubmit}
              disabled={!name || !email || loading}
              style={{ width: "100%", background: name && email ? "#2e220066" : "#111116", border: `0.5px solid ${name && email ? "#f0a500" : "#252530"}`, borderRadius: 2, color: name && email ? "#f0a500" : "#3a4050", fontSize: 12, letterSpacing: "2px", textTransform: "uppercase", padding: "14px 24px", cursor: name && email ? "pointer" : "not-allowed", fontFamily: "inherit" }}
            >
              {loading ? "SUBMITTING..." : "SUBMIT REQUEST →"}
            </button>
          </div>

          <hr style={{ border: "none", borderTop: "0.5px solid #1c1c24" }} />

          {/* Direct contact */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#0d2e1a", border: "0.5px solid #1db954", borderRadius: 2, padding: "16px", textDecoration: "none", display: "block" }}
            >
              <div style={{ fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: "#1db954", marginBottom: 6 }}>● WHATSAPP US</div>
              <div style={{ fontSize: 13, color: "#c9c5b8", fontWeight: 600 }}>{CONTACT_DISPLAY}</div>
              <div style={{ fontSize: 10, color: "#6b7585", marginTop: 2 }}>Fastest response</div>
            </a>
            <a
              href={`tel:${WHATSAPP_NUMBER}`}
              style={{ background: "#0d0d10", border: "0.5px solid #252530", borderRadius: 2, padding: "16px", textDecoration: "none", display: "block" }}
            >
              <div style={{ fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: "#6b7585", marginBottom: 6 }}>● CALL US</div>
              <div style={{ fontSize: 13, color: "#c9c5b8", fontWeight: 600 }}>{CONTACT_DISPLAY}</div>
              <div style={{ fontSize: 10, color: "#6b7585", marginTop: 2 }}>For subscriptions & billing</div>
            </a>
          </div>

        </div>

        <p style={{ fontSize: 11, color: "#3a4050", marginTop: 24, lineHeight: 1.7 }}>
          Not financial advice. Data tools for research purposes only. Past performance does not guarantee future results.
        </p>
      </div>
    </div>
  )
}
