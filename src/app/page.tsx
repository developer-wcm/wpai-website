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
          WELCOME SECTION — scroll animations
      ══════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "80px 16px 96px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>

          {/* Each element gets .reveal — ScrollAnimator adds .hidden then removes it on scroll */}
          <p className="reveal" style={{
            fontFamily: "var(--font-montserrat),'Montserrat',sans-serif",
            fontSize: "0.68rem", fontWeight: 800,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "#c8a84b", marginBottom: "16px",
          }}>
            Washington DC · Maryland · Virginia
          </p>

          <h2 className="reveal" style={{
            fontFamily: "var(--font-montserrat),'Montserrat',sans-serif",
            fontSize: "clamp(1.6rem,3.5vw,2.4rem)",
            fontWeight: 900, color: "#0f2347",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: "20px",
          }}>
            Welcome to Washington<br />Pentecostal Assembly
          </h2>

          <div className="reveal" style={{
            width: "48px", height: "3px", background: "#c8a84b",
            borderRadius: "2px", margin: "0 auto 24px",
          }} />

          <p className="reveal" style={{
            fontSize: "0.95rem", fontWeight: 700,
            color: "#0f2347", marginBottom: "8px",
          }}>
            4318 Baltimore Ave, Bladensburg, MD, 20710.
          </p>

          <p className="reveal" style={{
            fontSize: "0.875rem", color: "#9ca3af", marginBottom: "28px",
          }}>
            A Malayalam/English church in the Washington DC, MD, VA region
          </p>

          <p className="reveal" style={{
            fontSize: "0.95rem", color: "#4b5563",
            lineHeight: "1.9", maxWidth: "640px",
            margin: "0 auto 40px",
          }}>
            Christ-centered, Bible-believing, Born-again church living by the
            Holy Spirit. From the wisdom of the gray-haired to the wits of the
            youth, generations have worshipped in unity, respect and love.{" "}
            We believe that you found us not by chance, but it was Gods great
            plan and purpose in your life. We invite you to join us as we come
            together as one church family to celebrate His selfless sacrifice
            and unending grace.
          </p>

          <div className="reveal" style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "center", gap: "12px",
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
