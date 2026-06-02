import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service — Tara Capitals",
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 40 }}>
    <h2 style={{ fontSize: 16, fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", textTransform: "uppercase", margin: "0 0 16px", borderBottom: "0.5px solid #1c1c24", paddingBottom: 10 }}>
      {title}
    </h2>
    <div style={{ fontSize: 14, color: "#6b7585", lineHeight: 2 }}>{children}</div>
  </div>
)

export default function TermsPage() {
  return (
    <div style={{ background: "#080809", minHeight: "100vh" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ marginBottom: 48 }}>
          <span style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#6b7585" }}>LEGAL</span>
          <h1 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#c9c5b8", margin: "12px 0 8px" }}>Terms of Service</h1>
          <p style={{ fontSize: 12, color: "#3a4050" }}>Last updated: June 2026</p>
        </div>

        <Section title="1. Acceptance">
          <p>By accessing or using any Tara Capitals product (Axiom Terminal, Tara Lens, Tara Pendulum), you agree to these Terms of Service. If you do not agree, do not use the services.</p>
        </Section>

        <Section title="2. Not Financial Advice">
          <p style={{ color: "#e84040", fontWeight: 600 }}>Tara Capitals is a data research platform. Nothing on this platform constitutes financial advice, investment recommendations, or tips.</p>
          <p style={{ marginTop: 12 }}>All tools provide quantitative data and analysis for research purposes only. All investment decisions are solely your own. Past performance does not guarantee future results. Tara Capitals is not a SEBI Registered Investment Advisor.</p>
        </Section>

        <Section title="3. Subscription & Payment">
          <p>Subscriptions are billed monthly or annually via Razorpay. By subscribing, you authorise recurring charges to your payment method. You may cancel at any time — access continues until the end of the billing period.</p>
        </Section>

        <Section title="4. Access & Credentials">
          <p>Upon successful payment, login credentials are sent to your registered email. You are responsible for keeping your credentials secure. Do not share your login with others. Each subscription is for individual use only.</p>
        </Section>

        <Section title="5. Data & Privacy">
          <p>We collect your name, email, and phone number for account management. We do not sell your data to third parties. Market data shown on the platform is sourced from NSE and other public Indian market data providers.</p>
        </Section>

        <Section title="6. Acceptable Use">
          <p>You may not: reverse-engineer our tools, scrape data from the platform, resell access, or use the platform for automated trading without explicit written permission.</p>
        </Section>

        <Section title="7. Intellectual Property">
          <p>All analytical models, scoring systems, algorithms, and platform code are the intellectual property of Tara Capitals. The Beneish M-Score, Piotroski F-Score, and Altman Z-Score are publicly known academic models — our specific implementations and integrations are proprietary.</p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>Tara Capitals shall not be liable for any financial losses arising from use of our tools. The platform is provided "as is." We do not guarantee accuracy of data, uptime, or specific analytical outcomes.</p>
        </Section>

        <Section title="9. Changes to Terms">
          <p>We may update these terms at any time. Continued use of the platform after changes constitutes acceptance of the new terms.</p>
        </Section>

        <Section title="10. Contact">
          <p>
            Email: <a href="mailto:hello@taracapitals.in" style={{ color: "#f0a500" }}>hello@taracapitals.in</a><br />
            WhatsApp: <a href="https://wa.me/919492052201" style={{ color: "#1db954" }}>+91 94920 52201</a>
          </p>
        </Section>

        <div style={{ borderTop: "0.5px solid #1c1c24", paddingTop: 24, marginTop: 24 }}>
          <Link href="/" style={{ fontSize: 11, color: "#6b7585", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase" }}>← BACK TO HOME</Link>
          <span style={{ color: "#1c1c24", margin: "0 12px" }}>|</span>
          <Link href="/refund-policy" style={{ fontSize: 11, color: "#6b7585", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase" }}>REFUND POLICY →</Link>
        </div>
      </div>
    </div>
  )
}
