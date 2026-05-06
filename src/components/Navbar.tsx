"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV = [
  { href: "/",                 label: "Home"            },
  { href: "/about",            label: "About Us"        },
  { href: "/prayer-requests",  label: "Prayer Requests" },
  { href: "/services",         label: "Service"         },
  { href: "/live-stream",      label: "Live Stream"     },
  { href: "/leadership",       label: "Leadership"      },
  { href: "/women",            label: "Women"           },
  { href: "/contact",          label: "Contact"         },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{ boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "0 1px 0 #e5e7eb" }}
    >
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "center", height: "72px", gap: "24px" }}>

          {/* ── Logo ── */}
          <Link href="/" aria-label="WPAI Home" style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0, textDecoration: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wpai-logo.png"
              alt="Washington Pentecostal Assembly"
              style={{ height: "52px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* ── Desktop nav — right side ── */}
          <nav
            aria-label="Main navigation"
            style={{ marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}
            className="hidden lg:flex"
          >
            {/* Small red cross above nav */}
            <div style={{ color: "#cc2222", fontSize: "1rem", lineHeight: 1, marginBottom: "2px" }}>✝</div>

            {/* Nav links row */}
            <ul style={{ display: "flex", alignItems: "center", gap: "0", listStyle: "none", margin: 0, padding: 0 }}>
              {NAV.map(({ href, label }) => {
                const active = isActive(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      style={{
                        display: "block",
                        padding: "4px 12px",
                        fontSize: "0.78rem",
                        fontWeight: active ? 700 : 500,
                        color: active ? "#111" : "#333",
                        textDecoration: "none",
                        letterSpacing: "0.02em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                        borderBottom: active ? "2px solid #111" : "2px solid transparent",
                        transition: "color 0.15s, border-color 0.15s",
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        if (!active) el.style.color = "#000";
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        if (!active) el.style.color = "#333";
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ── Hamburger — mobile only ── */}
          <button
            className="lg:hidden"
            style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", padding: "8px" }}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <svg width="22" height="22" fill="none" stroke="#333" strokeWidth="2" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-nav"
        className="lg:hidden"
        style={{
          maxHeight: open ? "520px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          background: "#fff",
          borderTop: open ? "1px solid #e5e7eb" : "none",
        }}
      >
        <ul style={{ listStyle: "none", margin: 0, padding: "8px 0 16px" }}>
          {NAV.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 20px",
                    fontSize: "0.875rem",
                    fontWeight: active ? 700 : 500,
                    color: active ? "#111" : "#444",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    background: active ? "#f5f5f5" : "transparent",
                  }}
                >
                  {label}
                  {active && <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#cc2222" }} />}
                </Link>
              </li>
            );
          })}
        </ul>
        <div style={{ padding: "0 20px 16px", borderTop: "1px solid #f0f0f0", marginTop: "4px" }}>
          <p style={{ fontSize: "0.75rem", color: "#999", marginTop: "12px" }}>
            📍 4318 Baltimore Ave, Bladensburg, MD 20710
          </p>
          <p style={{ fontSize: "0.75rem", color: "#999", marginTop: "4px" }}>
            📞 (240) 909-6289
          </p>
        </div>
      </div>
    </header>
  );
}
