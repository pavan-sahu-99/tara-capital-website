import Link from "next/link"

const products = [
  { name: "Axiom Terminal", href: "/products/axiom-terminal", color: "#f0a500" },
  { name: "Tara Lens", href: "/products/tara-lens", color: "#3a8fff" },
  { name: "Tara Pendulum", href: "/products/tara-pendulum", color: "#14b8a6" },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0d0d10",
        borderTop: "0.5px solid #1c1c24",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "48px 24px 32px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              <span style={{ color: "#f0a500", fontSize: 14 }}>◈</span>
              <span
                style={{
                  color: "#c9c5b8",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                TARA CAPITAL
              </span>
            </div>
            <p
              style={{
                color: "#4a5060",
                fontSize: 9,
                lineHeight: 1.8,
                letterSpacing: "0.5px",
                maxWidth: 240,
              }}
            >
              Institutional-grade quantitative research tools for Indian equity
              and derivatives markets. Built for researchers. Not for beginners.
            </p>
            <div style={{ marginTop: 16 }}>
              <span
                style={{
                  fontSize: 7,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#2e3040",
                  padding: "2px 6px",
                  border: "0.5px solid #1c1c24",
                  borderRadius: 2,
                }}
              >
                NSE DATA // INDIA-FIRST
              </span>
            </div>
          </div>

          {/* Products */}
          <div>
            <span
              style={{
                fontSize: 8,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#2e3040",
                display: "block",
                marginBottom: 16,
              }}
            >
              PRODUCTS
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {products.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  style={{
                    color: "#4a5060",
                    fontSize: 9,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "color 0.15s ease",
                  }}
                  className="hover:text-[#c9c5b8]"
                >
                  <span style={{ color: p.color, fontSize: 8 }}>●</span>
                  {p.name}
                </Link>
              ))}
              <span
                style={{
                  color: "#2e3040",
                  fontSize: 9,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 4,
                }}
              >
                <span style={{ color: "#2e3040", fontSize: 8 }}>●</span>
                Tara Pendulum
                <span style={{ fontSize: 6, letterSpacing: "1px", color: "#2e3040", border: "0.5px solid #2e3040", padding: "1px 4px", borderRadius: 2, textTransform: "uppercase" }}>
                  Q3 2026
                </span>
              </span>
            </div>
          </div>

          {/* Company */}
          <div>
            <span
              style={{
                fontSize: 8,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#2e3040",
                display: "block",
                marginBottom: 16,
              }}
            >
              COMPANY
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link
                href="/pricing"
                style={{
                  color: "#4a5060",
                  fontSize: 9,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
                className="hover:text-[#c9c5b8] transition-colors"
              >
                Pricing
              </Link>
              <a
                href="mailto:hello@taracapitals.in"
                style={{ color: "#4a5060", fontSize: 9, letterSpacing: "1px", textTransform: "uppercase", textDecoration: "none" }}
                className="hover:text-[#c9c5b8] transition-colors"
              >
                Contact
              </a>
              <Link href="/terms" style={{ color: "#4a5060", fontSize: 9, letterSpacing: "1px", textTransform: "uppercase", textDecoration: "none" }} className="hover:text-[#c9c5b8] transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund-policy" style={{ color: "#4a5060", fontSize: 9, letterSpacing: "1px", textTransform: "uppercase", textDecoration: "none" }} className="hover:text-[#c9c5b8] transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <span
              style={{
                fontSize: 8,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#2e3040",
                display: "block",
                marginBottom: 16,
              }}
            >
              LEGAL
            </span>
            <p
              style={{
                color: "#2e3040",
                fontSize: 8,
                lineHeight: 1.8,
                letterSpacing: "0.3px",
                maxWidth: 240,
              }}
            >
              Data provided for research purposes only. Not SEBI-registered
              investment advice. Past performance does not guarantee future results.
              Tara Capitals is a research tool provider, not a financial advisor.
            </p>
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "0.5px solid #1c1c24", marginBottom: 24 }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              color: "#2e3040",
              fontSize: 8,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            © 2025–2026 TARA CAPITALS // ALL RIGHTS RESERVED
          </span>
          <span
            style={{
              color: "#2e3040",
              fontSize: 8,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            NSE INDIA // DATA RESEARCH PLATFORM
          </span>
        </div>
      </div>
    </footer>
  )
}
