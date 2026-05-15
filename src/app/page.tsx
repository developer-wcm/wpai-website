import type { Metadata } from "next";
import Hero from "@/components/Hero";
import YoutubeSection from "@/components/YoutubeSection";

export const metadata: Metadata = {
  title: "Home — Washington Pentecostal Assembly International",
  description:
    "Welcome to WPAI — A Christ-centered, Bible-believing, Born-again church in the Washington DC, MD, VA region.",
};

export default function Home() {
  return (
    <div style={{ marginTop: "-70px" }}>
      <Hero />

      {/* ══════════════════════════════════════
          WELCOME SECTION
      ══════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "80px 16px 96px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>

          {/* Eyebrow — animates in after hero */}
          <p style={{
            fontFamily: "var(--font-montserrat),'Montserrat',sans-serif",
            fontSize: "0.68rem", fontWeight: 800,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "#c8a84b", marginBottom: "16px",
            animation: "fadeUp 0.6s ease 0.1s both",
          }}>
            Washington DC · Maryland · Virginia
          </p>

          {/* Heading */}
          <h2 style={{
            fontFamily: "var(--font-montserrat),'Montserrat',sans-serif",
            fontSize: "clamp(1.6rem,3.5vw,2.4rem)",
            fontWeight: 900, color: "#0f2347",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: "20px",
            animation: "fadeUp 0.6s ease 0.2s both",
          }}>
            Welcome to Washington<br />Pentecostal Assembly
          </h2>

          {/* Gold divider */}
          <div style={{
            width: "48px", height: "3px", background: "#c8a84b",
            borderRadius: "2px", margin: "0 auto 24px",
            animation: "fadeUp 0.6s ease 0.3s both",
          }} />

          {/* Address */}
          <p style={{
            fontSize: "0.95rem", fontWeight: 700,
            color: "#0f2347", marginBottom: "8px",
            animation: "fadeUp 0.6s ease 0.35s both",
          }}>
            4318 Baltimore Ave, Bladensburg, MD, 20710.
          </p>

          {/* Sub */}
          <p style={{
            fontSize: "0.875rem", color: "#9ca3af",
            marginBottom: "28px",
            animation: "fadeUp 0.6s ease 0.4s both",
          }}>
            A Malayalam/English church in the Washington DC, MD, VA region
          </p>

          {/* Body */}
          <p style={{
            fontSize: "0.95rem", color: "#4b5563",
            lineHeight: "1.9", maxWidth: "640px",
            margin: "0 auto 40px",
            animation: "fadeUp 0.6s ease 0.45s both",
          }}>
            Christ-centered, Bible-believing, Born-again church living by the
            Holy Spirit. From the wisdom of the gray-haired to the wits of the
            youth, generations have worshipped in unity, respect and love.{" "}
            We believe that you found us not by chance, but it was Gods great
            plan and purpose in your life. We invite you to join us as we come
            together as one church family to celebrate His selfless sacrifice
            and unending grace.
          </p>

          {/* Service time chips */}
          <div style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "center", gap: "12px",
            animation: "fadeUp 0.6s ease 0.55s both",
          }}>
            {[
              { label: "Sunday Worship", time: "10:15 AM" },
              { label: "Bible Study",    time: "Wed · 7:30 PM" },
              { label: "Prayer Night",   time: "Fri · 7:30 PM" },
            ].map(c => (
              <div key={c.label} style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "10px 18px", borderRadius: "6px",
                background: "#f9fafb", border: "1px solid #e5e7eb",
              }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#c8a84b", flexShrink: 0 }} />
                <span style={{ fontSize: "0.8rem", color: "#6b7280", fontWeight: 600 }}>{c.label}</span>
                <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#0f2347" }}>{c.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          YOUTUBE / LATEST SERMONS
      ══════════════════════════════════════ */}
      <YoutubeSection />
    </div>
  );
}
