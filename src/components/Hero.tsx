import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "560px",
        overflow: "hidden",
        background: "#0a1628",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Hero"
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://www.wpai.org/wp-content/uploads/2018/01/WPA_FeaturedNew.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center",
          animation: "none",
        }}
        loading="eager"
      />

      {/* Overlay — same dark blue tint as Vriesland */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(8,18,45,0.55)",
      }} />

      {/* Centered content */}
      <div style={{
        position: "relative", zIndex: 2,
        textAlign: "center", color: "#fff",
        padding: "0 24px",
        maxWidth: "820px", width: "100%",
      }}>
        {/* "Welcome to" */}
        <p className="hero-sub" style={{
          fontSize: "clamp(0.9rem,2vw,1.1rem)",
          fontWeight: 400,
          color: "rgba(255,255,255,0.88)",
          letterSpacing: "0.04em",
          marginBottom: "10px",
        }}>
          Welcome to
        </p>

        {/* Church name */}
        <h1 className="hero-title" style={{
          fontFamily: "var(--font-montserrat),'Montserrat',sans-serif",
          fontSize: "clamp(2.2rem,6.5vw,5rem)",
          fontWeight: 900,
          color: "#ffffff",
          lineHeight: 1.0,
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
          marginBottom: "22px",
          textShadow: "0 2px 20px rgba(0,0,0,0.35)",
        }}>
          Washington Pentecostal Assembly
        </h1>

        {/* Taglines */}
        <div className="hero-sub" style={{ marginBottom: "40px" }}>
          {["Christ-Centered.", "Bible-Believing.", "Spirit-Filled."].map(line => (
            <p key={line} style={{
              fontFamily: "var(--font-montserrat),'Montserrat',sans-serif",
              fontSize: "clamp(0.82rem,1.8vw,1rem)",
              fontWeight: 700,
              color: "rgba(255,255,255,0.88)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              lineHeight: 1.8,
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* Buttons — Vriesland style */}
        <div className="hero-btns" style={{
          display: "flex", flexWrap: "wrap",
          gap: "12px", justifyContent: "center",
        }}>
          <Link href="/services" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "13px 28px", borderRadius: "6px",
            background: "#ffffff", color: "#0f2347",
            fontFamily: "var(--font-montserrat),'Montserrat',sans-serif",
            fontWeight: 700, fontSize: "0.82rem",
            letterSpacing: "0.08em", textTransform: "uppercase",
            textDecoration: "none",
            boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
            transition: "all 0.2s ease",
          }}>
            Service Times
          </Link>
          <Link href="/live-stream" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "13px 28px", borderRadius: "6px",
            background: "transparent", color: "#ffffff",
            fontFamily: "var(--font-montserrat),'Montserrat',sans-serif",
            fontWeight: 700, fontSize: "0.82rem",
            letterSpacing: "0.08em", textTransform: "uppercase",
            textDecoration: "none",
            border: "2px solid rgba(255,255,255,0.65)",
            transition: "all 0.2s ease",
          }}>
            Watch Online
          </Link>
          <Link href="/about" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "13px 28px", borderRadius: "6px",
            background: "transparent", color: "#ffffff",
            fontFamily: "var(--font-montserrat),'Montserrat',sans-serif",
            fontWeight: 700, fontSize: "0.82rem",
            letterSpacing: "0.08em", textTransform: "uppercase",
            textDecoration: "none",
            border: "2px solid rgba(255,255,255,0.65)",
            transition: "all 0.2s ease",
          }}>
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
