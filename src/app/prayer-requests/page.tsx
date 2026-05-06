"use client";
import { useState } from "react";

export default function PrayerRequestsPage() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", request: "" });

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    await new Promise(r => setTimeout(r, 900));
    setBusy(false);
    setSent(true);
  };

  const field: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid #d1d5db",
    borderRadius: "4px",
    fontSize: "0.9rem",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    color: "#333",
    background: "#fff",
  };

  return (
    <>
      {/* ── Breadcrumb hero ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f2347 0%, #1a3a6b 100%)",
          padding: "72px 16px 56px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginBottom: "16px", letterSpacing: "0.05em" }}>
          Home &rsaquo; Prayer Requests
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, marginBottom: "12px" }}>
          Prayer Requests
        </h1>
        <div style={{ width: "48px", height: "3px", background: "#c8a84b", borderRadius: "2px", margin: "0 auto" }} />
      </section>

      {/* ── Content ── */}
      <section style={{ background: "#fff", padding: "64px 16px 80px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* Section heading */}
          <h2
            style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              color: "#1a2e4a",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "28px",
            }}
          >
            Prayer Requests
          </h2>

          {/* Scripture — exact from wpai.org */}
          <div
            style={{
              background: "#f5f0f5",
              border: "1px solid #e0dce8",
              borderLeft: "4px solid #c8a84b",
              borderRadius: "4px",
              padding: "24px 28px",
              marginBottom: "36px",
            }}
          >
            <p
              style={{
                fontSize: "0.95rem",
                color: "#333",
                lineHeight: "1.85",
                fontStyle: "italic",
                marginBottom: "10px",
              }}
            >
              The Lord is at hand; do not be anxious about anything, but in
              everything by prayer and supplication with thanksgiving let your
              requests be made known to God. And the peace of God, which surpasses
              all understanding, will guard your hearts and your minds in Christ
              Jesus.
            </p>
            <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1a2e4a" }}>
              Philippians 4:5–7
            </p>
          </div>

          {/* Instruction — exact from wpai.org */}
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "#555",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              textAlign: "center",
              marginBottom: "32px",
              lineHeight: "1.7",
            }}
          >
            Let us know how we can pray for you by filling out the form below.
            <br />
            All prayer requests will be kept as confidential.
          </p>

          {/* Form */}
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🙏</div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#1a2e4a", marginBottom: "10px" }}>
                Thank You
              </h3>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Your prayer request has been received. Our pastoral team will
                pray for you faithfully.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", request: "" }); }}
                style={{
                  marginTop: "24px", padding: "10px 24px",
                  border: "2px solid #1a2e4a", borderRadius: "4px",
                  background: "transparent", color: "#1a2e4a",
                  fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em",
                  textTransform: "uppercase", cursor: "pointer",
                }}
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

              {/* Your name */}
              <div>
                <label
                  htmlFor="name"
                  style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#333", marginBottom: "6px" }}
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={change}
                  placeholder="Your full name"
                  style={field}
                />
              </div>

              {/* Email address */}
              <div>
                <label
                  htmlFor="email"
                  style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#333", marginBottom: "6px" }}
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={change}
                  placeholder="your@email.com"
                  style={field}
                />
              </div>

              {/* Prayer Requests */}
              <div>
                <label
                  htmlFor="request"
                  style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#333", marginBottom: "6px" }}
                >
                  Prayer Requests
                </label>
                <textarea
                  id="request"
                  name="request"
                  rows={6}
                  required
                  value={form.request}
                  onChange={change}
                  placeholder="Share your prayer request here..."
                  style={{ ...field, resize: "vertical" }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={busy}
                style={{
                  padding: "13px 32px",
                  background: busy ? "#888" : "#1a2e4a",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: busy ? "not-allowed" : "pointer",
                  transition: "background 0.2s",
                  alignSelf: "flex-start",
                }}
              >
                {busy ? "Submitting…" : "Submit"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
