import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women",
  description: "WPA Women — WPA Woman Warriors prayer line and ladies meeting information.",
};

export default function WomenPage() {
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
          Home &rsaquo; Women
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, marginBottom: "12px" }}>
          Women
        </h1>
        <div style={{ width: "48px", height: "3px", background: "#c8a84b", borderRadius: "2px", margin: "0 auto" }} />
      </section>

      {/* ── Content ── */}
      <section style={{ background: "#fff", padding: "64px 16px 80px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* Section heading */}
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 800,
              color: "#1a2e4a",
              marginBottom: "20px",
            }}
          >
            Women :
          </h2>

          {/* Main description — exact from wpai.org */}
          <p
            style={{
              fontSize: "0.95rem",
              color: "#333",
              lineHeight: "1.85",
              marginBottom: "36px",
            }}
          >
            Originated from the Man&apos;s rib, she is the backbone to a family, the
            spiritual task master in a family. WPA ladies are a group of smart,
            dedicated, spiritual beings that provide great support to the church.
          </p>

          {/* Prayer Line card */}
          <div
            style={{
              background: "#f5f0f5",
              border: "1px solid #e0dce8",
              borderLeft: "4px solid #c8a84b",
              borderRadius: "4px",
              padding: "24px 28px",
              marginBottom: "20px",
            }}
          >
            <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.85" }}>
              Please join the <strong>WPA Woman Warriors</strong> Every Day on the
              Prayer Line at <strong>5am</strong> and <strong>9pm</strong> :{" "}
              Dial{" "}
              <a
                href="tel:4104527846"
                style={{ color: "#1a2e4a", fontWeight: 700, textDecoration: "none" }}
              >
                410-452-7846
              </a>{" "}
              and experience group prayers in the privacy of your home
            </p>
          </div>

          {/* Ladies meeting card */}
          <div
            style={{
              background: "#f5f0f5",
              border: "1px solid #e0dce8",
              borderLeft: "4px solid #c8a84b",
              borderRadius: "4px",
              padding: "24px 28px",
            }}
          >
            <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.85" }}>
              <strong>Ladies meeting :</strong> Join the WPA ladies on the{" "}
              <strong>last Saturday of every Month.</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
