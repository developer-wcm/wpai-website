import type { Metadata } from "next";
import YoutubeSection from "@/components/YoutubeSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Live Stream",
  description: "Watch Washington Pentecostal Assembly live stream services online. Join us every Sunday at 10:00 AM.",
};

const CHANNEL_ID = "UCH4Y_txbKRQ5JXw_e8qUqOw";

export default function LiveStreamPage() {
  return (
    <>
      <PageHero title="Live Stream" breadcrumb="Live Stream" image="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1600&q=80&auto=format&fit=crop" />

      {/* ── Live embed ── */}
      <section style={{ background: "#0a1628", padding: "48px 16px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{
            fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#c8a84b",
            textAlign: "center", marginBottom: "20px",
          }}>
            🔴 Live — When Active
          </p>
          {/* Live stream embed — shows live when channel is broadcasting */}
          <div style={{
            position: "relative", paddingBottom: "56.25%",
            height: 0, borderRadius: "10px", overflow: "hidden", background: "#000",
          }}>
            <iframe
              src={`https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}&autoplay=1&rel=0`}
              title="WPAI Live Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute", top: 0, left: 0,
                width: "100%", height: "100%", border: "none",
              }}
            />
          </div>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", textAlign: "center", marginTop: "12px" }}>
            When not live, the latest uploaded video will play automatically.
          </p>
        </div>
      </section>

      {/* ── Latest videos (auto-updated from RSS) ── */}
      <YoutubeSection />

      {/* ── Schedule ── */}
      <section style={{ background: "#fff", padding: "64px 16px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1a2e4a", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
            Service Schedule
          </h2>
          <div style={{ width: "48px", height: "3px", background: "#c8a84b", borderRadius: "2px", margin: "0 auto 36px" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { day: "Sunday",    service: "Worship Service",  time: "10:15 AM – 12:30 PM" },
              { day: "Sunday",    service: "Sunday School",    time: "9:30 – 10:15 AM" },
              { day: "Tuesday",   service: "Cottage Meeting",  time: "7:30 – 9:00 PM" },
              { day: "Thursday",  service: "Cottage Meeting",  time: "7:30 – 9:00 PM" },
              { day: "Saturday",  service: "Cottage Meeting",  time: "6:30 – 8:30 PM" },
            ].map((s, i, arr) => (
              <div
                key={`${s.day}-${s.service}`}
                style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "14px 20px", flexWrap: "wrap", gap: "8px",
                  background: i % 2 === 0 ? "#f9fafb" : "#fff",
                  border: "1px solid #e5e7eb",
                  borderTop: i === 0 ? "1px solid #e5e7eb" : "none",
                  borderRadius: i === 0 ? "6px 6px 0 0" : i === arr.length - 1 ? "0 0 6px 6px" : "0",
                }}
              >
                <div>
                  <span style={{ fontWeight: 700, color: "#1a2e4a", fontSize: "0.9rem" }}>{s.day}</span>
                  <span style={{ color: "#888", fontSize: "0.85rem", marginLeft: "10px" }}>{s.service}</span>
                </div>
                <span style={{
                  fontSize: "0.85rem", fontWeight: 700, color: "#1a2e4a",
                  background: "rgba(200,168,75,0.12)", padding: "4px 12px",
                  borderRadius: "20px", whiteSpace: "nowrap",
                }}>
                  {s.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
