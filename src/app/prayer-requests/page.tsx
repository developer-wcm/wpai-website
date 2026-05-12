"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";

/* ── Client-side validation rules ── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: { name: string; email: string; request: string }) {
  if (!form.name.trim() || form.name.trim().length < 2)
    return "Please enter your full name (at least 2 characters).";
  if (form.name.trim().length > 100)
    return "Name must be 100 characters or fewer.";
  if (!form.email.trim())
    return "Please enter your email address.";
  if (!EMAIL_RE.test(form.email.trim()))
    return "Please enter a valid email address (e.g. name@example.com).";
  if (!form.request.trim() || form.request.trim().length < 10)
    return "Please describe your prayer request (at least 10 characters).";
  if (form.request.trim().length > 2000)
    return "Prayer request must be 2000 characters or fewer.";
  return null; // valid
}

const inputStyle: React.CSSProperties = {
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
  transition: "border-color 0.15s",
};

const inputErrorStyle: React.CSSProperties = {
  ...inputStyle,
  border: "1px solid #cc2222",
  background: "#fff8f8",
};

export default function PrayerRequestsPage() {
  const [sent,    setSent]    = useState(false);
  const [busy,    setBusy]    = useState(false);
  const [error,   setError]   = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [form,    setForm]    = useState({
    name: "", email: "", request: "", isPrivate: false,
  });

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const blur = (field: string) =>
    setTouched(p => ({ ...p, [field]: true }));

  /* Per-field inline errors (shown after user touches the field) */
  const fieldError = (field: "name" | "email" | "request") => {
    if (!touched[field]) return null;
    const v = form[field] as string;
    if (field === "name") {
      if (!v.trim() || v.trim().length < 2) return "Enter your full name (min 2 characters).";
      if (v.trim().length > 100) return "Max 100 characters.";
    }
    if (field === "email") {
      if (!v.trim()) return "Email address is required.";
      if (!EMAIL_RE.test(v.trim())) return "Enter a valid email (e.g. name@example.com).";
    }
    if (field === "request") {
      if (!v.trim() || v.trim().length < 10) return "Please describe your request (min 10 characters).";
      if (v.trim().length > 2000) return "Max 2000 characters.";
    }
    return null;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, request: true });
    setError("");

    const validationError = validate(form);
    if (validationError) {
      setError(validationError);
      return;
    }

    setBusy(true);
    try {
      const res  = await fetch("/api/prayer-request", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          name:      form.name.trim(),
          email:     form.email.trim().toLowerCase(),
          request:   form.request.trim(),
          isPrivate: form.isPrivate,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send.");
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <PageHero
        title="Prayer Requests"
        breadcrumb="Prayer Requests"
        image="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1600&q=80&auto=format&fit=crop"
      />

      <section style={{ background: "#fff", padding: "64px 16px 80px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1a2e4a", marginBottom: "28px", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Prayer Requests
          </h2>

          {/* Scripture */}
          <div style={{ background: "#f5f0f5", border: "1px solid #e0dce8", borderLeft: "4px solid #c8a84b", borderRadius: "4px", padding: "24px 28px", marginBottom: "36px" }}>
            <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.85", fontStyle: "italic", marginBottom: "10px" }}>
              The Lord is at hand; do not be anxious about anything, but in
              everything by prayer and supplication with thanksgiving let your
              requests be made known to God. And the peace of God, which surpasses
              all understanding, will guard your hearts and your minds in Christ Jesus.
            </p>
            <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1a2e4a" }}>Philippians 4:5–7</p>
          </div>

          <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#555", textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "center", marginBottom: "32px", lineHeight: "1.7" }}>
            Let us know how we can pray for you by filling out the form below.
            <br />All prayer requests will be kept as confidential.
          </p>

          {/* ── Success ── */}
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#1a2e4a", marginBottom: "10px" }}>
                Thank You
              </h3>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Your prayer request has been received and sent to our pastoral team.
                A confirmation has been sent to your email. They will pray for you faithfully.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", request: "", isPrivate: false }); setTouched({}); }}
                style={{ marginTop: "24px", padding: "10px 24px", border: "2px solid #1a2e4a", borderRadius: "4px", background: "transparent", color: "#1a2e4a", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

              {/* Name */}
              <div>
                <label htmlFor="name" style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", fontWeight: 600, color: "#333", marginBottom: "6px" }}>
                  <span>Your name <span style={{ color: "#cc2222" }}>*</span></span>
                  <span style={{ fontWeight: 400, color: "#999", fontSize: "0.78rem" }}>max 100 chars</span>
                </label>
                <input
                  id="name" name="name" type="text" autoComplete="name"
                  value={form.name} onChange={change} onBlur={() => blur("name")}
                  placeholder="Full name"
                  maxLength={100}
                  style={fieldError("name") ? inputErrorStyle : inputStyle}
                  aria-describedby={fieldError("name") ? "name-err" : undefined}
                  aria-invalid={!!fieldError("name")}
                />
                {fieldError("name") && (
                  <p id="name-err" role="alert" style={{ fontSize: "0.78rem", color: "#cc2222", marginTop: "4px" }}>
                    {fieldError("name")}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#333", marginBottom: "6px" }}>
                  Email address <span style={{ color: "#cc2222" }}>*</span>
                </label>
                <input
                  id="email" name="email" type="email" autoComplete="email"
                  value={form.email} onChange={change} onBlur={() => blur("email")}
                  placeholder="your@email.com"
                  style={fieldError("email") ? inputErrorStyle : inputStyle}
                  aria-describedby={fieldError("email") ? "email-err" : undefined}
                  aria-invalid={!!fieldError("email")}
                />
                {fieldError("email") && (
                  <p id="email-err" role="alert" style={{ fontSize: "0.78rem", color: "#cc2222", marginTop: "4px" }}>
                    {fieldError("email")}
                  </p>
                )}
              </div>

              {/* Prayer request */}
              <div>
                <label htmlFor="request" style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", fontWeight: 600, color: "#333", marginBottom: "6px" }}>
                  <span>Prayer Requests <span style={{ color: "#cc2222" }}>*</span></span>
                  <span style={{ fontWeight: 400, color: form.request.length > 1800 ? "#cc2222" : "#999", fontSize: "0.78rem" }}>
                    {form.request.length}/2000
                  </span>
                </label>
                <textarea
                  id="request" name="request" rows={6}
                  value={form.request} onChange={change} onBlur={() => blur("request")}
                  placeholder="Share your prayer request here..."
                  maxLength={2000}
                  style={{ ...(fieldError("request") ? inputErrorStyle : inputStyle), resize: "vertical" }}
                  aria-describedby={fieldError("request") ? "request-err" : undefined}
                  aria-invalid={!!fieldError("request")}
                />
                {fieldError("request") && (
                  <p id="request-err" role="alert" style={{ fontSize: "0.78rem", color: "#cc2222", marginTop: "4px" }}>
                    {fieldError("request")}
                  </p>
                )}
              </div>

              {/* Private checkbox */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <input
                  type="checkbox" id="isPrivate" name="isPrivate"
                  checked={form.isPrivate}
                  onChange={e => setForm(p => ({ ...p, isPrivate: e.target.checked }))}
                  style={{ marginTop: "3px", cursor: "pointer" }}
                />
                <label htmlFor="isPrivate" style={{ fontSize: "0.875rem", color: "#555", cursor: "pointer" }}>
                  Keep my request private (shared only with the pastoral team)
                </label>
              </div>

              {/* Global error */}
              {error && (
                <p role="alert" style={{ fontSize: "0.875rem", color: "#cc2222", background: "#fff5f5", border: "1px solid #fecaca", borderRadius: "4px", padding: "10px 14px" }}>
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={busy}
                style={{ padding: "13px 32px", background: busy ? "#888" : "#1a2e4a", color: "#fff", border: "none", borderRadius: "4px", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: busy ? "not-allowed" : "pointer", transition: "background 0.2s", alignSelf: "flex-start" }}
              >
                {busy ? "Sending…" : "Submit"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
