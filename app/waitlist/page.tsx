"use client"

import Link from "next/link"
import { useState } from "react"

const tools = [
  { id: "axiom", label: "Axiom Terminal", desc: "F&O Intelligence", color: "#f0a500" },
  { id: "lens", label: "Tara Lens", desc: "Equity Research", color: "#3a8fff" },
  { id: "pendulum", label: "Tara Pendulum", desc: "Swing Analytics", color: "#14b8a6" },
  { id: "all", label: "All Tools", desc: "Full Access", color: "#c9c5b8" },
]

export default function WaitlistPage() {
  const [selected, setSelected] = useState<string[]>([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const handleSubmit = () => {
    if (!name || !email) return
    const toolList = selected.length > 0 ? selected.join(", ") : "not specified"
    const subject = encodeURIComponent(`Early Access Request — Tara Capital`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRole: ${role || "not specified"}\nTools interested in: ${toolList}\n\n---\nSent from taracapital.in waitlist form`
    )
    window.location.href = `mailto:saipavansaahu1008@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div style={{ background: "#080809", minHeight: "100vh" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "64px 24px" }}>

        {!submitted ? (
          <>
            {/* Header */}
            <div style={{ marginBottom: 40 }}>
              <span style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#6b7585", display: "block", marginBottom: 16 }}>
                EARLY ACCESS
              </span>
              <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#c9c5b8", lineHeight: 1.2, margin: "0 0 16px" }}>
                REQUEST FOUNDING
                <br />
                <span style={{ color: "#f0a500" }}>MEMBER ACCESS</span>
              </h1>
              <p style={{ fontSize: 14, color: "#6b7585", lineHeight: 1.9, margin: 0 }}>
                First 100 users on each tool get founding member pricing — locked for life.
                Tell us about yourself and we will reach out within 24 hours.
              </p>
            </div>

            {/* Founding rates callout */}
            <div style={{ background: "#2e220022", border: "0.5px solid #f0a500", borderRadius: 2, padding: "16px 20px", marginBottom: 36 }}>
              <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#f0a500", marginBottom: 10 }}>● FOUNDING MEMBER RATES</div>
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

              {/* Name */}
              <div>
                <label style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#6b7585", display: "block", marginBottom: 8 }}>
                  FULL NAME *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  style={{ width: "100%", background: "#0d0d10", border: "0.5px solid #252530", borderRadius: 2, padding: "12px 16px", color: "#c9c5b8", fontSize: 13, fontFamily: "inherit", outline: "none", boxSizing: "border-box" }}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#6b7585", display: "block", marginBottom: 8 }}>
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={{ width: "100%", background: "#0d0d10", border: "0.5px solid #252530", borderRadius: 2, padding: "12px 16px", color: "#c9c5b8", fontSize: 13, fontFamily: "inherit", outline: "none", boxSizing: "border-box" }}
                />
              </div>

              {/* Role */}
              <div>
                <label style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#6b7585", display: "block", marginBottom: 8 }}>
                  YOUR ROLE (optional)
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  style={{ width: "100%", background: "#0d0d10", border: "0.5px solid #252530", borderRadius: 2, padding: "12px 16px", color: role ? "#c9c5b8" : "#3a4050", fontSize: 13, fontFamily: "inherit", outline: "none", boxSizing: "border-box", appearance: "none" }}
                >
                  <option value="">Select your role...</option>
                  <option value="Retail F&O Trader">Retail F&O Trader</option>
                  <option value="Equity Investor / Researcher">Equity Investor / Researcher</option>
                  <option value="Swing / Positional Trader">Swing / Positional Trader</option>
                  <option value="SEBI Registered Investment Advisor">SEBI Registered Investment Advisor</option>
                  <option value="Smallcase Manager">Smallcase Manager</option>
                  <option value="Prop Desk Analyst">Prop Desk Analyst</option>
                  <option value="Student / Learning">Student / Learning</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Tool selection */}
              <div>
                <label style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#6b7585", display: "block", marginBottom: 12 }}>
                  INTERESTED IN (select all that apply)
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
                  {tools.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => toggle(t.id)}
                      style={{
                        background: selected.includes(t.id) ? `${t.color}22` : "#0d0d10",
                        border: `0.5px solid ${selected.includes(t.id) ? t.color : "#252530"}`,
                        borderRadius: 2,
                        padding: "12px 16px",
                        cursor: "pointer",
                        textAlign: "left",
                        fontFamily: "inherit",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <div style={{ fontSize: 12, fontWeight: 600, color: selected.includes(t.id) ? t.color : "#c9c5b8", marginBottom: 3 }}>
                        {t.label}
                      </div>
                      <div style={{ fontSize: 10, color: "#6b7585", textTransform: "uppercase", letterSpacing: "0.5px" }}>{t.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div style={{ paddingTop: 8 }}>
                <button
                  onClick={handleSubmit}
                  disabled={!name || !email}
                  style={{
                    width: "100%",
                    background: name && email ? "#2e220066" : "#111116",
                    border: `0.5px solid ${name && email ? "#f0a500" : "#252530"}`,
                    borderRadius: 2,
                    color: name && email ? "#f0a500" : "#3a4050",
                    fontSize: 12,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "14px 24px",
                    cursor: name && email ? "pointer" : "not-allowed",
                    fontFamily: "inherit",
                    transition: "all 0.15s ease",
                  }}
                >
                  SUBMIT REQUEST →
                </button>
                <p style={{ fontSize: 11, color: "#3a4050", marginTop: 10, letterSpacing: "0.3px" }}>
                  This will open your email client with your details pre-filled. We respond within 24 hours.
                </p>
              </div>
            </div>

            <hr style={{ border: "none", borderTop: "0.5px solid #1c1c24", margin: "40px 0" }} />

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/" style={{ fontSize: 11, color: "#6b7585", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase" }}>
                ← BACK TO HOME
              </Link>
              <Link href="/pricing" style={{ fontSize: 11, color: "#6b7585", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase" }}>
                VIEW PRICING →
              </Link>
            </div>
          </>
        ) : (
          /* Success state */
          <div style={{ textAlign: "center", paddingTop: 48 }}>
            <div style={{ fontSize: 32, marginBottom: 20, color: "#1db954" }}>✓</div>
            <h2 style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 700, color: "#c9c5b8", margin: "0 0 16px" }}>
              EMAIL CLIENT OPENED
            </h2>
            <p style={{ fontSize: 13, color: "#6b7585", lineHeight: 1.9, marginBottom: 32, maxWidth: 440, margin: "0 auto 32px" }}>
              Your email client should have opened with your request pre-filled.
              Hit send to complete your application. We respond within 24 hours.
            </p>
            <p style={{ fontSize: 12, color: "#3a4050", marginBottom: 32 }}>
              If the email didn&apos;t open, write directly to{" "}
              <a href="mailto:saipavansaahu1008@gmail.com" style={{ color: "#f0a500", textDecoration: "none" }}>saipavansaahu1008@gmail.com</a>
            </p>
            <Link href="/" style={{ fontSize: 11, color: "#6b7585", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase", border: "0.5px solid #252530", padding: "10px 20px", borderRadius: 2 }}>
              ← BACK TO HOME
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
