import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Refund Policy — Tara Capitals",
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 40 }}>
    <h2 style={{ fontSize: 16, fontWeight: 700, color: "#c9c5b8", letterSpacing: "1px", textTransform: "uppercase", margin: "0 0 16px", borderBottom: "0.5px solid #1c1c24", paddingBottom: 10 }}>
      {title}
    </h2>
    <div style={{ fontSize: 14, color: "#6b7585", lineHeight: 2 }}>{children}</div>
  </div>
)

export default function RefundPolicyPage() {
  return (
    <div style={{ background: "#080809", minHeight: "100vh" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ marginBottom: 48 }}>
          <span style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#6b7585" }}>LEGAL</span>
          <h1 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#c9c5b8", margin: "12px 0 8px" }}>Refund Policy</h1>
          <p style={{ fontSize: 12, color: "#3a4050" }}>Last updated: June 2026</p>
        </div>

        <Section title="Overview">
          <p>Tara Capitals provides subscription-based access to quantitative research tools for Indian equity and derivatives markets. This policy governs all refunds and cancellations.</p>
        </Section>

        <Section title="7-Day Refund Guarantee">
          <p>If you are not satisfied with your subscription within <strong style={{ color: "#c9c5b8" }}>7 days of purchase</strong>, you may request a full refund. No questions asked.</p>
          <p style={{ marginTop: 12 }}>To request a refund within 7 days:</p>
          <ul style={{ paddingLeft: 20, marginTop: 8 }}>
            <li style={{ marginBottom: 8 }}>Email us at <a href="mailto:hello@taracapitals.in" style={{ color: "#f0a500" }}>hello@taracapitals.in</a> with your registered email and order ID</li>
            <li style={{ marginBottom: 8 }}>Or WhatsApp us at <a href="https://wa.me/919492052201" style={{ color: "#1db954" }}>+91 94920 52201</a></li>
            <li>Refunds are processed within 5–7 business days to your original payment method</li>
          </ul>
        </Section>

        <Section title="After 7 Days">
          <p>Subscriptions are non-refundable after the 7-day window. However, you may cancel at any time and retain access until the end of your current billing period.</p>
          <p style={{ marginTop: 12 }}>Annual plan cancellations after 7 days will not receive a pro-rated refund for unused months.</p>
        </Section>

        <Section title="Founding Member Plans">
          <p>Founding member rates are non-refundable after 7 days given the heavily discounted pricing. The 7-day refund window applies to all plans including founding member rates.</p>
        </Section>

        <Section title="Starter Plan (₹100)">
          <p>The ₹100/month Starter plan is eligible for a full refund within 7 days. Given the low cost, we encourage you to reach out to us for support before requesting a refund.</p>
        </Section>

        <Section title="Cancellations">
          <p>You may cancel your subscription at any time from your account or by contacting us. Cancellation takes effect at the end of the current billing period. Your access continues until then.</p>
        </Section>

        <Section title="Contact">
          <p>
            Email: <a href="mailto:hello@taracapitals.in" style={{ color: "#f0a500" }}>hello@taracapitals.in</a><br />
            WhatsApp: <a href="https://wa.me/919492052201" style={{ color: "#1db954" }}>+91 94920 52201</a>
          </p>
        </Section>

        <div style={{ borderTop: "0.5px solid #1c1c24", paddingTop: 24, marginTop: 24 }}>
          <Link href="/" style={{ fontSize: 11, color: "#6b7585", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase" }}>← BACK TO HOME</Link>
          <span style={{ color: "#1c1c24", margin: "0 12px" }}>|</span>
          <Link href="/terms" style={{ fontSize: 11, color: "#6b7585", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase" }}>TERMS OF SERVICE →</Link>
        </div>
      </div>
    </div>
  )
}
