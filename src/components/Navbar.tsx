"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV = [
  { href: "/",                label: "Home"            },
  { href: "/about",           label: "About Us"        },
  { href: "/prayer-requests", label: "Prayer Requests" },
  { href: "/services",        label: "Service"         },
  { href: "/live-stream",     label: "Live Stream"     },
  { href: "/leadership",      label: "Leadership"      },
  { href: "/women",           label: "Women"           },
  { href: "/contact",         label: "Contact"         },
];

const BP = 1100;

export default function Navbar() {
  const pathname    = usePathname();
  const [open,      setOpen]    = useState(false);
  const [scrolled,  setScrolled]= useState(false);
  const [desktop,   setDesktop] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    const onResize = () => setDesktop(window.innerWidth >= BP);
    onScroll(); onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  /* Transparent only on homepage before scroll */
  const transparent = isHome && !scrolled;

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: transparent
        ? "transparent"
        : scrolled
          ? "rgba(255,255,255,0.97)"
          : "#ffffff",
      backdropFilter: !transparent && scrolled ? "blur(12px)" : "none",
      borderBottom: transparent ? "none" : "1px solid rgba(229,231,235,0.8)",
      boxShadow: transparent ? "none" : scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
      transition: "background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
    }}>
      <div className="wrap" style={{
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
      }}>

        {/* ── Logo ── */}
        <Link href="/" aria-label="WPAI" style={{
          display: "flex", alignItems: "center", gap: "10px",
          textDecoration: "none", flexShrink: 0,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/wpai-logo.png"
            alt="WPAI"
            style={{
              height: "44px", width: "auto", objectFit: "contain",
              transition: "opacity 0.3s ease",
              opacity: transparent ? 0.92 : 1,
            }}
          />
          {!transparent && (
            <div style={{ lineHeight: 1 }}>
              <div style={{
                fontFamily: "var(--font-montserrat),'Montserrat',sans-serif",
                fontWeight: 900, fontSize: "0.88rem",
                color: "#0f2347", letterSpacing: "-0.01em",
              }}>WPAI</div>
              <div style={{
                fontSize: "0.6rem", color: "#9ca3af",
                fontWeight: 600, letterSpacing: "0.05em", marginTop: "2px",
              }}>Washington Pentecostal Assembly</div>
            </div>
          )}
        </Link>

        {/* ── Desktop nav ── */}
        {desktop && (
          <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {NAV.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    padding: "6px 13px",
                    borderRadius: "6px",
                    fontSize: "0.78rem",
                    fontWeight: active ? 700 : 500,
                    color: transparent
                      ? "#ffffff"
                      : active ? "#0f2347" : "#6b7280",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    background: active && !transparent ? "#f3f4f6" : "transparent",
                    borderBottom: active && !transparent ? "2px solid #c8a84b" : "2px solid transparent",
                    transition: "all 0.18s ease",
                    textShadow: transparent ? "0 1px 4px rgba(0,0,0,0.4)" : "none",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    if (!active) {
                      el.style.color = transparent ? "#ffffff" : "#0f2347";
                      el.style.background = transparent ? "rgba(255,255,255,0.12)" : "#f9fafb";
                    }
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    if (!active) {
                      el.style.color = transparent ? "#ffffff" : "#6b7280";
                      el.style.background = "transparent";
                    }
                  }}
                >
                  {label}
                </Link>
              );
            })}

            {/* end nav links */}
          </nav>
        )}

        {/* ── Hamburger ── */}
        {!desktop && (
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "8px", borderRadius: "6px",
              display: "flex", flexDirection: "column", gap: "5px",
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: "22px", height: "2px",
                background: transparent ? "#ffffff" : "#0f2347",
                borderRadius: "2px",
                transition: "all 0.22s ease",
                transform: open
                  ? i === 0 ? "translateY(7px) rotate(45deg)"
                  : i === 2 ? "translateY(-7px) rotate(-45deg)"
                  : "scaleX(0)"
                  : "none",
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        )}
      </div>

      {/* ── Mobile drawer ── */}
      {!desktop && (
        <div style={{
          maxHeight: open ? "580px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          background: "#ffffff",
          borderTop: open ? "1px solid #e5e7eb" : "none",
        }}>
          <div className="wrap" style={{ paddingTop: "10px", paddingBottom: "20px" }}>
            {NAV.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <Link key={href} href={href} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "12px 14px", borderRadius: "8px", marginBottom: "2px",
                  fontSize: "0.875rem", fontWeight: active ? 700 : 500,
                  color: active ? "#0f2347" : "#374151",
                  textDecoration: "none",
                  background: active ? "#f3f4f6" : "transparent",
                }}>
                  {label}
                  {active && <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c8a84b" }} />}
                </Link>
              );
            })}
            <div style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #f3f4f6" }}>
              <p style={{ fontSize: "0.72rem", color: "#9ca3af" }}>📍 4318 Baltimore Ave, Bladensburg, MD 20710</p>
              <p style={{ fontSize: "0.72rem", color: "#9ca3af", marginTop: "4px" }}>📞 (240) 909-6289</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
