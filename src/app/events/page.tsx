import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events at Washington Pentecostal Assembly International.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero title="Events" breadcrumb="Events" image="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1600&q=80&auto=format&fit=crop" />

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
