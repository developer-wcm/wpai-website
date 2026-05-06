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
    <>
      <Hero />
      <YoutubeSection />

      {/* ══════════════════════════════════════
          WELCOME SECTION
          Uses CSS animation class — plays on load,
          no JS observer needed for above-fold content
      ══════════════════════════════════════ */}
      <section
        style={{
          padding: "72px 16px 88px",
          background: "linear-gradient(160deg, #eef2fb 0%, #f0edf8 50%, #e8f4fb 100%)",
        }}
      >
        {/* Top gold accent */}
        <div style={{
          width: "56px", height: "4px",
          background: "linear-gradient(90deg, #c8a84b, #e8c86b)",
          borderRadius: "2px", margin: "0 auto 48px",
        }} />

        {/* Card — uses auto-play CSS animation, not scroll observer */}
        <div
          className="welcome-card"
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            background: "#ffffff",
            border: "1px solid #e8e0f0",
            borderTop: "4px solid #c8a84b",
            borderRadius: "8px",
            padding: "44px 48px",
            textAlign: "center",
            boxShadow: "0 4px 24px rgba(26,46,74,0.08)",
          }}
        >
          

          <h2 style={{
            fontSize: "1.4rem", fontWeight: 700,
            color: "#1a2e4a", marginBottom: "12px", lineHeight: 1.3,
          }}>
            Welcome to Washington Pentecostal Assembly.
          </h2>

          <div style={{
            width: "48px", height: "3px",
            background: "#c8a84b", borderRadius: "2px",
            margin: "0 auto 16px",
          }} />

          <p style={{ fontSize: "1rem", fontWeight: 700, color: "#1a2e4a", marginBottom: "10px" }}>
            4318 Baltimore Ave, Bladensburg, MD, 20710.
          </p>

          <p style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: "20px" }}>
            A Malayalam/English church in the Washington DC, MD, VA region
          </p>

          <p style={{ fontSize: "0.92rem", color: "#374151", lineHeight: "1.9" }}>
            Christ-centered, Bible-believing, Born-again church living by the
            Holy Spirit. From the wisdom of the gray-haired to the wits of the
            youth, generations have worshipped in unity, respect and love.{" "}
            We believe that you found us not by chance, but it was Gods great
            plan and purpose in your life. We invite you to join us as we come
            together as one church family to celebrate His selfless sacrifice
            and unending grace.
          </p>
        </div>

        {/* Bottom gold accent */}
        <div style={{
          width: "56px", height: "4px",
          background: "linear-gradient(90deg, #c8a84b, #e8c86b)",
          borderRadius: "2px", margin: "48px auto 0",
        }} />
      </section>
    </>
  );
}
