import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Youth",
  description: "WPA Youth Corner — Ready to Fly! Youth Sunday every 4th Sunday at Washington Pentecostal Assembly.",
};

export default function YouthPage() {
  return (
    <>
      <PageHero title="Youth" breadcrumb="Youth" image="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1600&q=80&auto=format&fit=crop" />

      {/* ── Content ── */}
      <section style={{ background: "#fff", padding: "64px 16px 80px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* Section heading */}
          <h2
            style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              color: "#1a2e4a",
              marginBottom: "6px",
            }}
          >
            Youth Corner : Ready to Fly!
          </h2>
          <div style={{ width: "48px", height: "3px", background: "#c8a84b", borderRadius: "2px", margin: "0 0 28px" }} />

          {/* Bible Museum paragraph */}
          <p
            style={{
              fontSize: "0.95rem",
              color: "#333",
              lineHeight: "1.85",
              marginBottom: "28px",
            }}
          >
            To start off the New Year, our young adults coined in the idea of a
            trip to the Bible Museum in DC as an educational trip for the WPA
            Church community. The Youth, led and organized this visit, which was
            welcomed by all and was a big success, thanks to a warm winter weather
            and an energetic group of members. With more places to explore and
            things to learn, our church looks forward to have many more such
            educational trips throughout the year.
          </p>

          {/* Museum of the Bible photo */}
          <div style={{ marginBottom: "36px", borderRadius: "8px", overflow: "hidden", border: "1px solid #e5e7eb" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/museum-of-the-bible.jpg"
              alt="Museum of the Bible — Washington DC"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div style={{ padding: "10px 16px", background: "#f9f8fc", borderTop: "1px solid #e5e7eb" }}>
              <p style={{ fontSize: "0.8rem", color: "#888", textAlign: "center", fontStyle: "italic" }}>
                Museum of the Bible — Washington DC
              </p>
            </div>
          </div>

          {/* Youth Sunday card */}
          <div
            style={{
              background: "#f5f0f5",
              border: "1px solid #e0dce8",
              borderLeft: "4px solid #c8a84b",
              borderRadius: "4px",
              padding: "24px 28px",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 800,
                color: "#1a2e4a",
                marginBottom: "14px",
              }}
            >
              Youth Sunday – Every 4th Sunday
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#333",
                lineHeight: "1.85",
              }}
            >
              We are proud of our youth, who have exhibited time and again that
              they honor the word of God. They are very energetic and have great
              leadership skills. We feel they are more than ready to carry the
              torch of our community values and family morals forward into the
              world. We dedicate one Sunday a month for English worship, which
              is co-ordinated by the Youth.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
