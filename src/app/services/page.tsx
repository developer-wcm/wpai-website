import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service",
  description: "WPA Regular Services — Sunday schedule, worship services, Sunday school, and cottage meetings.",
};

export default function ServicesPage() {
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
          Home &rsaquo; Service
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, marginBottom: "12px" }}>
          Service
        </h1>
        <div style={{ width: "48px", height: "3px", background: "#c8a84b", borderRadius: "2px", margin: "0 auto" }} />
      </section>

      {/* ── Content ── */}
      <section style={{ background: "#fff", padding: "64px 16px 80px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* Page heading */}
          <h2
            style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              color: "#1a2e4a",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "8px",
            }}
          >
            WPA Regular Services
          </h2>
          <div style={{ width: "48px", height: "3px", background: "#c8a84b", borderRadius: "2px", margin: "0 auto 48px" }} />

          {/* SUNDAY SCHEDULE */}
          <div style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontSize: "0.85rem",
                fontWeight: 800,
                color: "#c8a84b",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                marginBottom: "20px",
                paddingBottom: "10px",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              Sunday Schedule
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {/* Worship Services header */}
              <div
                style={{
                  padding: "14px 20px",
                  background: "#1a2e4a",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  borderRadius: "6px 6px 0 0",
                }}
              >
                Worship Services
              </div>

              {/* Sunday School */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 20px",
                  background: "#f9fafb",
                  borderLeft: "1px solid #e5e7eb",
                  borderRight: "1px solid #e5e7eb",
                  borderBottom: "1px solid #e5e7eb",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "0.9rem", color: "#333", fontWeight: 500 }}>
                  Sunday School
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#1a2e4a",
                    background: "rgba(200,168,75,0.12)",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  9:30 – 10:15 AM
                </span>
              </div>

              {/* Sunday Worship */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 20px",
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderTop: "none",
                  borderRadius: "0 0 6px 6px",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "0.9rem", color: "#333", fontWeight: 500 }}>
                  Sunday Worship
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#1a2e4a",
                    background: "rgba(200,168,75,0.12)",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  10:15 AM – 12:30 PM
                </span>
              </div>
            </div>
          </div>

          {/* COTTAGE MEETINGS */}
          <div>
            <h3
              style={{
                fontSize: "0.85rem",
                fontWeight: 800,
                color: "#c8a84b",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                marginBottom: "20px",
                paddingBottom: "10px",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              Cottage Meetings
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { day: "Tuesday",  time: "7:30 – 9:00 PM" },
                { day: "Thursday", time: "7:30 – 9:00 PM" },
                { day: "Saturday", time: "6:30 – 8:30 PM" },
              ].map((item, i, arr) => (
                <div
                  key={item.day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 20px",
                    background: i % 2 === 0 ? "#f9fafb" : "#fff",
                    border: "1px solid #e5e7eb",
                    borderTop: i === 0 ? "1px solid #e5e7eb" : "none",
                    borderRadius: i === 0 ? "6px 6px 0 0" : i === arr.length - 1 ? "0 0 6px 6px" : "0",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <span style={{ fontSize: "0.9rem", color: "#333", fontWeight: 500 }}>
                    {item.day}
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "#1a2e4a",
                      background: "rgba(200,168,75,0.12)",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
