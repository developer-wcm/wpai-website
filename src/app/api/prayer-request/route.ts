import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { MINISTRY_EMAIL, MINISTRY_NAME, FROM_EMAIL } from "@/config/email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, request, isPrivate } = body as {
      name: string;
      email: string;
      request: string;
      isPrivate?: boolean;
    };

    /* ── Basic validation ── */
    if (!name?.trim() || !email?.trim() || !request?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and prayer request are required." },
        { status: 400 }
      );
    }

    /* ── Send email to ministry ── */
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to:   MINISTRY_EMAIL,
      replyTo: email,
      subject: `🙏 Prayer Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0f2347; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #c8a84b; font-size: 1.4rem; margin: 0;">
              Prayer Request — ${MINISTRY_NAME}
            </h1>
          </div>
          <div style="background: #f9f8fc; padding: 28px 32px; border: 1px solid #e8e4f0; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px; vertical-align: top;">Name:</td>
                <td style="padding: 8px 0; color: #111;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Email:</td>
                <td style="padding: 8px 0; color: #111;">
                  <a href="mailto:${email}" style="color: #0f2347;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Confidential:</td>
                <td style="padding: 8px 0; color: #111;">${isPrivate ? "Yes — keep private" : "No"}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e0dce8; margin: 20px 0;" />
            <p style="font-weight: bold; color: #555; margin: 0 0 8px;">Prayer Request:</p>
            <p style="color: #333; line-height: 1.7; white-space: pre-wrap; margin: 0;">${request}</p>
            <hr style="border: none; border-top: 1px solid #e0dce8; margin: 24px 0 16px;" />
            <p style="font-size: 0.8rem; color: #999; margin: 0;">
              Submitted via wpai.org prayer request form.<br/>
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
