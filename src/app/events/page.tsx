import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events at Washington Pentecostal Assembly International.",
};

export default function EventsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f2347 0%, #1a3a6b 100%)",
          padding: "72px 16px 56px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginBottom: "16px", letterSpacing: "0.05em" }}>
          Home &rsaquo; Events
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, marginBottom: "12px" }}>
          Events
        </h1>
        <div style={{ width: "48px", height: "3px", background: "#c8a84b", borderRadius: "2px", margin: "0 auto" }} />
      </section>

      {/* ── Placeholder ── */}
      <section style={{ background: "#fff", padding: "80px 16px", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#1a2e4a", marginBottom: "12px" }}>
            Coming Soon
          </h2>
          <div style={{ width: "48px", height: "3px", background: "#c8a84b", borderRadius: "2px", margin: "0 auto 20px" }} />
          <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.8" }}>
            Our events calendar is being updated. Please check back soon or
            contact us for information about upcoming services and events.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/contact"
              style={{
                display: "inline-block", padding: "12px 28px",
                background: "#1a2e4a", color: "#fff", borderRadius: "6px",
                fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em",
                textTransform: "uppercase", textDecoration: "none",
              }}
            >
              Contact Us
            </a>
            <a
              href="/services"
              style={{
                display: "inline-block", padding: "12px 28px",
                border: "2px solid #1a2e4a", color: "#1a2e4a", borderRadius: "6px",
                fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em",
                textTransform: "uppercase", textDecoration: "none",
              }}
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
