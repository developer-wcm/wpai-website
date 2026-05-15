import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

/* ── IPC Hebron-style fonts ── */

/* Montserrat — headings, nav, buttons (bold, wide tracking) */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

/* Open Sans — body text (clean, highly readable) */
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wpai.org"),
  title: {
    default: "WPAI — Washington Pentecostal Assembly International",
    template: "%s | WPAI",
  },
  description:
    "Washington Pentecostal Assembly International — A Christ-centered, Bible-believing, Born-again church serving the Malayalam and English speaking community in Washington DC, Maryland, and Virginia.",
  keywords: [
    "WPAI",
    "Washington Pentecostal Assembly",
    "Malayalam church DC",
    "Pentecostal church Maryland",
    "church Bladensburg MD",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.wpai.org",
    siteName: "Washington Pentecostal Assembly International",
    title: "WPAI — Washington Pentecostal Assembly International",
    description:
      "A Christ-centered, Bible-believing, Born-again church in the Washington DC, MD, VA region.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "WPAI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WPAI — Washington Pentecostal Assembly International",
    description:
      "A Christ-centered, Bible-believing, Born-again church in the Washington DC, MD, VA region.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#1a2e4a] focus:rounded-lg focus:shadow-lg focus:ring-2 focus:ring-[#c8a84b]"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" style={{ paddingTop: "70px" }}>{children}</main>
        <Footer />
        <ScrollAnimator />
      </body>
    </html>
  );
}
