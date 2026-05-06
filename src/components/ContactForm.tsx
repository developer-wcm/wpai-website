"use client";
import { useState } from "react";

type F = { name: string; email: string; phone: string; subject: string; message: string };
const INIT: F = { name: "", email: "", phone: "", subject: "general", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<F>(INIT);
  const [sent, setSent]   = useState(false);
  const [busy, setBusy]   = useState(false);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    await new Promise(r => setTimeout(r, 900));
    setBusy(false);
    setSent(true);
  };

  if (sent) return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4"
        style={{ background: "rgba(26,58,107,0.07)" }}>✅</div>
      <h3 className="text-2xl font-black mb-2" style={{ color: "var(--blue)" }}>Message Sent!</h3>
      <p className="text-gray-500 mb-6 max-w-xs">Our team will get back to you within 1–2 business days.</p>
      <button onClick={() => { setForm(INIT); setSent(false); }} className="btn btn-blue-outline">
        Send Another
      </button>
    </div>
  );

  const field = "w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all bg-white";

  return (
    <div>
      <span className="eyebrow">Send a Message</span>
      <h2 className="h2 mb-2">We&apos;d Love to Hear From You</h2>
      <div className="rule" />
      <form onSubmit={submit} noValidate className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1" style={{ color: "var(--blue)" }}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input id="name" name="name" type="text" required value={form.name} onChange={change}
            placeholder="Your full name" className={field} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1" style={{ color: "var(--blue)" }}>
              Email <span className="text-red-500">*</span>
            </label>
            <input id="email" name="email" type="email" required value={form.email} onChange={change}
              placeholder="your@email.com" className={field} />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-1" style={{ color: "var(--blue)" }}>Phone</label>
            <input id="phone" name="phone" type="tel" value={form.phone} onChange={change}
              placeholder="(xxx) xxx-xxxx" className={field} />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold mb-1" style={{ color: "var(--blue)" }}>
            Subject <span className="text-red-500">*</span>
          </label>
          <select id="subject" name="subject" required value={form.subject} onChange={change} className={field}>
            <option value="general">General Inquiry</option>
            <option value="membership">Membership Information</option>
            <option value="prayer">Prayer Request</option>
            <option value="visit">Planning a Visit</option>
            <option value="ministry">Ministry Involvement</option>
            <option value="giving">Giving & Tithes</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-1" style={{ color: "var(--blue)" }}>
            Message <span className="text-red-500">*</span>
          </label>
          <textarea id="message" name="message" required rows={5} value={form.message} onChange={change}
            placeholder="How can we help you?" className={`${field} resize-none`} />
        </div>
        <button type="submit" disabled={busy}
          className="btn btn-gold w-full justify-center py-3.5 text-sm disabled:opacity-60 disabled:cursor-not-allowed">
          {busy ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Sending…
            </span>
          ) : "Send Message"}
        </button>
      </form>
    </div>
  );
}
