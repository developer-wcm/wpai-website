import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { MINISTRY_EMAIL, MINISTRY_NAME } from "@/config/email";

/* ── Helpers ── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Strip HTML tags to prevent XSS in email body */
function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

/* ── Gmail SMTP transporter ── */
function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    /* ── Parse body ── */
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const { name, email, request, isPrivate } = body as Record<string, unknown>;

    /* ── Server-side validation ── */
    const nameStr    = typeof name    === "string" ? name.trim()    : "";
    const emailStr   = typeof email   === "string" ? email.trim().toLowerCase() : "";
    const requestStr = typeof request === "string" ? request.trim() : "";

    if (!nameStr || nameStr.length < 2)
      return NextResponse.json({ error: "Name must be at least 2 characters." }, { status: 400 });
    if (nameStr.length > 100)
      return NextResponse.json({ error: "Name must be 100 characters or fewer." }, { status: 400 });

    if (!emailStr)
      return NextResponse.json({ error: "Email address is required." }, { status: 400 });
    if (!EMAIL_RE.test(emailStr))
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });

    if (!requestStr || requestStr.length < 10)
      return NextResponse.json({ error: "Prayer request must be at least 10 characters." }, { status: 400 });
    if (requestStr.length > 2000)
      return NextResponse.json({ error: "Prayer request must be 2000 characters or fewer." }, { status: 400 });

    /* ── Check env vars ── */
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS in .env.local");
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    /* ── Sanitize for HTML email ── */
    const safeName    = sanitize(nameStr);
    const safeEmail   = sanitize(emailStr);
    const safeRequest = sanitize(requestStr);
    const isPrivateBool = isPrivate === true;

    const transporter = createTransporter();

    /* ══════════════════════════════════════
       EMAIL 1 — Notify church admin
    ══════════════════════════════════════ */
    await transporter.sendMail({
      from:    `"${MINISTRY_NAME}" <${process.env.EMAIL_USER}>`,
      to:      MINISTRY_EMAIL,
      replyTo: emailStr,
      subject: `New Prayer Request from ${safeName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#0f2347;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h1 style="color:#c8a84b;font-size:1.3rem;margin:0;">
              New Prayer Request — ${MINISTRY_NAME}
            </h1>
          </div>
          <div style="background:#f9f8fc;padding:28px 32px;border:1px solid #e8e4f0;border-top:none;border-radius:0 0 8px 8px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0;font-weight:bold;color:#555;width:130px;vertical-align:top;">Name:</td>
                <td style="padding:8px 0;color:#111;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:bold;color:#555;vertical-align:top;">Email:</td>
                <td style="padding:8px 0;">
                  <a href="mailto:${safeEmail}" style="color:#0f2347;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:bold;color:#555;vertical-align:top;">Confidential:</td>
                <td style="padding:8px 0;color:#111;">${isPrivateBool ? "Yes — keep private" : "No"}</td>
              </tr>
            </table>
            <hr style="border:none;border-top:1px solid #e0dce8;margin:20px 0;"/>
            <p style="font-weight:bold;color:#555;margin:0 0 8px;">Prayer Request:</p>
            <p style="color:#333;line-height:1.7;white-space:pre-wrap;margin:0;">${safeRequest}</p>
            <hr style="border:none;border-top:1px solid #e0dce8;margin:24px 0 16px;"/>
            <p style="font-size:0.8rem;color:#999;margin:0;">
              Submitted via wpai.org · Hit Reply to respond directly to ${safeName}.
            </p>
          </div>
        </div>
      `,
      text: `New Prayer Request\n\nName: ${nameStr}\nEmail: ${emailStr}\nConfidential: ${isPrivateBool ? "Yes" : "No"}\n\n${requestStr}`,
    });

    /* ══════════════════════════════════════
       EMAIL 2 — Confirmation to the user
    ══════════════════════════════════════ */
    await transporter.sendMail({
      from:    `"${MINISTRY_NAME}" <${process.env.EMAIL_USER}>`,
      to:      emailStr,
      subject: `We received your prayer request — ${MINISTRY_NAME}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#0f2347;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h1 style="color:#c8a84b;font-size:1.3rem;margin:0;">${MINISTRY_NAME}</h1>
          </div>
          <div style="background:#ffffff;padding:28px 32px;border:1px solid #e8e4f0;border-top:none;border-radius:0 0 8px 8px;">
            <p style="color:#333;font-size:1rem;margin:0 0 16px;">Dear ${safeName},</p>
            <p style="color:#333;line-height:1.7;margin:0 0 16px;">
              Thank you for reaching out to us. We have received your prayer request
              and our pastoral team will be praying for you faithfully.
            </p>
            <div style="background:#f5f0f5;border-left:4px solid #c8a84b;padding:16px 20px;border-radius:4px;margin:20px 0;">
              <p style="font-style:italic;color:#444;line-height:1.7;margin:0 0 10px;">
                "Do not be anxious about anything, but in every situation, by prayer
                and petition, with thanksgiving, present your requests to God."
              </p>
              <p style="font-weight:bold;color:#0f2347;margin:0;">— Philippians 4:6</p>
            </div>
            <p style="color:#333;line-height:1.7;margin:16px 0 0;">
              God bless you.<br/>
              <strong>${MINISTRY_NAME}</strong><br/>
              4318 Baltimore Ave, Bladensburg, MD 20710<br/>
              <a href="https://www.wpai.org" style="color:#0f2347;">www.wpai.org</a>
            </p>
          </div>
        </div>
      `,
      text: `Dear ${nameStr},\n\nThank you for your prayer request. Our pastoral team will be praying for you.\n\n"Do not be anxious about anything..." — Philippians 4:6\n\nGod bless you.\n${MINISTRY_NAME}\n4318 Baltimore Ave, Bladensburg, MD 20710\nwww.wpai.org`,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json(
      { error: "Failed to send. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
