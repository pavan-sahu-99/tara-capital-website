import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Tara Capitals — Quant Research Tools for Indian Markets",
  description:
    "Institutional-grade quantitative research tools for Indian equity and derivatives markets. Axiom Terminal, Tara Lens, Tara Pendulum.",
  openGraph: {
    title: "Tara Capitals — Quant Research Tools for Indian Markets",
    description: "Beneish M-Score. Real-time OI Spurts. Smart Portfolio Builder. Tools that hedge funds pay ₹2L+/month for — at ₹599/month.",
    url: "https://taracapitals.in",
    siteName: "Tara Capitals",
    images: [{ url: "https://taracapitals.in/logo.png", width: 800, height: 200 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tara Capitals — Quant Research Tools for Indian Markets",
    description: "Institutional quant tools for Indian equity and F&O traders. From ₹599/month.",
    images: ["https://taracapitals.in/logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#080809] text-[#c9c5b8] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
