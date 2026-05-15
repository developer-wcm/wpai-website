/* Reusable page hero — full-width background photo with title + breadcrumb */

interface PageHeroProps {
  title: string;
  breadcrumb: string;
  image?: string;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1600&q=80&auto=format&fit=crop";

export default function PageHero({ title, breadcrumb, image }: PageHeroProps) {
  const bg = image ?? DEFAULT_IMAGE;

  return (
    <section
      style={{
        position: "relative",
        /* Taller hero — accounts for fixed navbar (70px) already offset by layout padding */
        height: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        textAlign: "center",
      }}
      aria-label={`${title} page hero`}
    >
      {/* Background photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center",
          animation: "none",
        }}
      />

      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(8,18,45,0.58)",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, padding: "0 16px" }}>
        {/* Title */}
        <h1 style={{
          fontFamily: "var(--font-montserrat),'Montserrat',sans-serif",
          fontSize: "clamp(2rem,5.5vw,3.5rem)",
          fontWeight: 900,
          color: "#ffffff",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          lineHeight: 1.1,
          marginBottom: "14px",
          textShadow: "0 2px 16px rgba(0,0,0,0.5)",
        }}>
          {title}
        </h1>

        {/* Breadcrumb */}
        <p style={{
          fontFamily: "var(--font-open-sans),'Open Sans',sans-serif",
          fontSize: "0.82rem",
          color: "#c8a84b",
          letterSpacing: "0.04em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
        }}>
          <a href="/" style={{ color: "#c8a84b", textDecoration: "none" }}>Home</a>
          <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.7rem" }}>»</span>
          <span style={{ color: "#ffffff" }}>{breadcrumb}</span>
        </p>
      </div>
    </section>
  );
}
