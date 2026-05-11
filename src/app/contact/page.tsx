import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Washington Pentecostal Assembly — 4318 Baltimore Ave, Bladensburg, MD 20710. (240) 909-6289.",
};

const CONTACT_ITEMS = [
  {
    label: "ADDRESS",
    value: "4318 Baltimore Ave, Bladensburg, MD, 20710",
    href: "https://maps.google.com/?q=4318+Baltimore+Ave+Bladensburg+MD+20710",
    icon: (
      <svg width="18" height="18" fill="none" stroke="#1a2e4a" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    label: "PHONE",
    value: "(240) 909-6289",
    href: "tel:2409096289",
    icon: (
      <svg width="18" height="18" fill="none" stroke="#1a2e4a" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
  },
  {
    label: "WEBSITE",
    value: "www.wpai.org",
    href: "https://www.wpai.org",
    icon: (
      <svg width="18" height="18" fill="none" stroke="#1a2e4a" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" breadcrumb="Contact" image="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1600&q=80&auto=format&fit=crop" />

      {/* ── Content ── */}
      <section style={{ background: "#fff", padding: "64px 16px 80px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>

          {/* Description */}
          <p style={{ fontSize: "0.95rem", color: "#444", lineHeight: "1.85", marginBottom: "40px" }}>
            We are just few miles away from Washington DC. If you need a ride or
            any assistance please feel free to call us. Looking forward to Worship
            with you.
          </p>

          {/* Contact cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
            {CONTACT_ITEMS.map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-hover-lift reveal"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "18px 22px",
                  background: "#f9f8fc",
                  border: "1px solid #e8e4f0",
                  borderLeft: "4px solid #c8a84b",
                  borderRadius: "4px",
                  textDecoration: "none",
                }}
              >
                {/* Icon box */}
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "6px",
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <p style={{
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#c8a84b",
                    marginBottom: "3px",
                  }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: "0.92rem", fontWeight: 600, color: "#1a2e4a" }}>
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid #e5e7eb", marginBottom: "32px" }} />

          {/* Google Maps embed */}
          <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #e5e7eb", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.5!2d-76.9344!3d38.9401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6b1b1b1b1b1%3A0x1!2s4318+Baltimore+Ave%2C+Bladensburg%2C+MD+20710!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="320"
              style={{ border: "none", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WPAI Location — 4318 Baltimore Ave, Bladensburg, MD"
            />
          </div>

          {/* Directions link */}
          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <a
              href="https://maps.google.com/?q=4318+Baltimore+Ave+Bladensburg+MD+20710"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#1a2e4a",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
