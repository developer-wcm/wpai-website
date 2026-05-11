import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "calc(100vh - 72px)",
        minHeight: "420px",
        maxHeight: "820px",
        overflow: "hidden",
        background: "#0f2347", /* fallback if image fails to load */
      }}
      aria-label="Hero"
    >
      {/* Background image — real WPAI hero photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://www.wpai.org/wp-content/uploads/2018/01/WPA_FeaturedNew.png"
        alt="Washington Pentecostal Assembly worship service"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          animation: "none",
        }}
        loading="eager"
      />

      {/* Dark overlay — slightly lighter than IPC Hebron to show the photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
        }}
      />

      {/* Bottom-left gradient — makes text pop without full overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
        }}
      />

      {/* ── Text — bottom-left, IPC Hebron style ── */}
      <div
        className="hero-title"
        style={{
          position: "absolute",
          bottom: "3.5rem",
          left: 0,
          right: 0,
          padding: "0 2rem",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Main headline — massive, ultra-bold, left-aligned */}
        <h1
          style={{
            fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.0,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            margin: 0,
            marginBottom: "1.25rem",
          }}
        >
          WPA WELCOMES YOU
        </h1>

        {/* Two pill buttons — exactly like IPC Hebron */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 22px",
              border: "1.5px solid rgba(255,255,255,0.8)",
              borderRadius: "999px",
              color: "#ffffff",
              fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
              backdropFilter: "blur(4px)",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            Service Times
          </Link>
          <Link
            href="/live-stream"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 22px",
              border: "1.5px solid rgba(255,255,255,0.8)",
              borderRadius: "999px",
              color: "#ffffff",
              fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
              backdropFilter: "blur(4px)",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            Join Us Online
          </Link>
        </div>
      </div>
    </section>
  );
}
