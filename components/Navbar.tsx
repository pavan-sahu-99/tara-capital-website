"use client"

import Link from "next/link"
import { useState } from "react"

const products = [
  {
    name: "Axiom Terminal",
    tag: "F&O Intelligence",
    href: "/products/axiom-terminal",
    color: "#f0a500",
    symbol: "◈",
  },
  {
    name: "Tara Lens",
    tag: "Equity Research",
    href: "/products/tara-lens",
    color: "#3a8fff",
    symbol: "◎",
  },
  {
    name: "Tara Pendulum",
    tag: "Coming Soon",
    href: "/products/tara-pendulum",
    color: "#3a4050",
    symbol: "◉",
  },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header
      style={{
        background: "#0d0d10",
        borderBottom: "0.5px solid #1c1c24",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <img
            src="/logo.png"
            alt="Tara Capitals"
            style={{
              height: 32,
              width: "auto",
              objectFit: "contain",
              imageRendering: "crisp-edges",
            }}
          />
          <span
            style={{
              color: "#c9c5b8",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            TARA CAPITALS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hidden md:flex"
        >
          {/* Products dropdown */}
          <div style={{ position: "relative" }}>
            <button
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#4a5060",
                fontSize: 9,
                letterSpacing: "2px",
                textTransform: "uppercase",
                cursor: "pointer",
                padding: "4px 0",
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontFamily: "inherit",
              }}
              className="hover:text-[#c9c5b8] transition-colors"
            >
              PRODUCTS
              <span style={{ fontSize: 7 }}>▼</span>
            </button>

            {productsOpen && (
              <div
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: -16,
                  background: "#0d0d10",
                  border: "0.5px solid #1c1c24",
                  borderRadius: 2,
                  padding: 8,
                  minWidth: 220,
                  boxShadow: "0 8px 32px -8px rgba(0,0,0,0.8)",
                }}
              >
                {products.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    style={{ textDecoration: "none" }}
                    onClick={() => setProductsOpen(false)}
                  >
                    <div
                      style={{
                        padding: "10px 12px",
                        borderRadius: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        transition: "background 0.1s ease",
                      }}
                      className="hover:bg-[#111116]"
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ color: p.color, fontSize: 11 }}>{p.symbol}</span>
                        <span
                          style={{
                            color: "#c9c5b8",
                            fontSize: 9,
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            fontWeight: 600,
                          }}
                        >
                          {p.name}
                        </span>
                      </div>
                      <span
                        style={{
                          color: "#4a5060",
                          fontSize: 8,
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          paddingLeft: 20,
                        }}
                      >
                        {p.tag}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            style={{
              color: "#4a5060",
              fontSize: 9,
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
            className="hover:text-[#c9c5b8] transition-colors"
          >
            PRICING
          </Link>

          <a
            href="/waitlist"
            style={{
              background: "#2e220066",
              border: "0.5px solid #f0a500",
              color: "#f0a500",
              fontSize: 8,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: 2,
              textDecoration: "none",
              transition: "all 0.15s ease",
            }}
            className="hover:bg-[#f0a500] hover:text-[#080809] transition-all"
          >
            REQUEST ACCESS
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "transparent",
            border: "none",
            color: "#4a5060",
            cursor: "pointer",
            padding: 4,
            fontFamily: "inherit",
          }}
          className="flex md:hidden flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: "block",
              width: 20,
              height: 0.5,
              background: menuOpen ? "#c9c5b8" : "#4a5060",
              transition: "background 0.15s",
            }}
          />
          <span
            style={{
              display: "block",
              width: 14,
              height: 0.5,
              background: menuOpen ? "#c9c5b8" : "#4a5060",
              transition: "background 0.15s",
            }}
          />
          <span
            style={{
              display: "block",
              width: 18,
              height: 0.5,
              background: menuOpen ? "#c9c5b8" : "#4a5060",
              transition: "background 0.15s",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            borderTop: "0.5px solid #1c1c24",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
          className="md:hidden"
        >
          <span
            style={{
              fontSize: 8,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#2e3040",
            }}
          >
            PRODUCTS
          </span>
          {products.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 10,
                paddingLeft: 8,
              }}
              onClick={() => setMenuOpen(false)}
            >
              <span style={{ color: p.color, fontSize: 12 }}>{p.symbol}</span>
              <div>
                <div
                  style={{
                    color: "#c9c5b8",
                    fontSize: 9,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    color: "#4a5060",
                    fontSize: 8,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  {p.tag}
                </div>
              </div>
            </Link>
          ))}
          <hr style={{ border: "none", borderTop: "0.5px solid #1c1c24" }} />
          <Link
            href="/pricing"
            style={{
              color: "#4a5060",
              fontSize: 9,
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
            onClick={() => setMenuOpen(false)}
          >
            PRICING
          </Link>
          <a
            href="/waitlist"
            style={{
              background: "#2e220066",
              border: "0.5px solid #f0a500",
              color: "#f0a500",
              fontSize: 8,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "8px 16px",
              borderRadius: 2,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            REQUEST ACCESS
          </a>
        </div>
      )}
    </header>
  )
}
