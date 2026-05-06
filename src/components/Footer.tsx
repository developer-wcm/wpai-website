import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a1a", color: "#ccc" }}>
      <div className="wrap" style={{ paddingTop: "56px", paddingBottom: "40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
          }}
        >

          {/* ── Col 1: Verse of the Day ── */}
          <div>
            <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "20px" }}>
              Verse Of The Day
            </h3>
            <p style={{ fontSize: "0.875rem", lineHeight: "1.75", color: "#aaa" }}>
              &ldquo;Trouble and distress have come upon me, but your commands give me delight.&rdquo;
              {" "}—{" "}
              <a
                href="https://www.biblegateway.com/passage/?search=Psalm+119:143&version=NIV"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#aaa", textDecoration: "underline" }}
              >
                Psalm 119:143
              </a>
            </p>
            <p style={{ fontSize: "0.8rem", color: "#777", marginTop: "10px" }}>
              Powered by{" "}
              <a
                href="https://www.biblegateway.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#777", textDecoration: "underline" }}
              >
                BibleGateway.com
              </a>
              .
            </p>
          </div>

          {/* ── Col 2: Contact Us ── */}
          <div>
            <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "20px" }}>
              Contact Us
            </h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: "#e05252", marginTop: "2px", fontSize: "0.9rem" }}>📍</span>
                <span style={{ fontSize: "0.875rem", color: "#aaa" }}>
                  4318 Baltimore Ave, Bladensburg, MD, 20710 .
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "#e05252", fontSize: "0.9rem" }}>📞</span>
                <a href="tel:2409096289" style={{ fontSize: "0.875rem", color: "#aaa", textDecoration: "none" }}>
                  (240) 909-6289
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "#e05252", fontSize: "0.9rem" }}>🌐</span>
                <a href="https://www.wpai.org" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "0.875rem", color: "#aaa", textDecoration: "none" }}>
                  www.wpai.org
                </a>
              </li>
            </ul>
          </div>

          {/* ── Col 3: Useful Links ── */}
          <div>
            <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "20px" }}>
              Useful Links
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px" }}>
              {[
                { href: "/leadership",         label: "Leadership" },
                { href: "/services",           label: "Service"    },
                { href: "/events",             label: "Events"     },
                { href: "/women",              label: "Women"      },
                { href: "/youth",              label: "Youth"      },
                { href: "/kids",               label: "Kids Corner"},
                { href: "/contact",            label: "Contact"    },
              ].map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="footer-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.875rem",
                    color: "#aaa",
                    textDecoration: "none",
                  }}
                >
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#e05252" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid #2a2a2a" }}>
        <div
          className="wrap"
          style={{
            paddingTop: "16px",
            paddingBottom: "16px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px",
          }}
        >
          <p style={{ fontSize: "0.78rem", color: "#555" }}>
            © {new Date().getFullYear()} Washington Pentecostal Assembly International. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/resources#privacy" style={{ fontSize: "0.78rem", color: "#555", textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <Link href="/resources#terms" style={{ fontSize: "0.78rem", color: "#555", textDecoration: "none" }}>
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
