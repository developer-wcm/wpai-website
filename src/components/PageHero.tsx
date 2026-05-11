/* Reusable page hero — matches IPC Hebron Mission page style:
   Full-width background photo, large bold white title, gold breadcrumb */

interface PageHeroProps {
  title: string;
  breadcrumb: string;
  /** Unsplash or local image URL */
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
        height: "280px",
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
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          animation: "none",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.52)",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, padding: "0 16px" }}>
        {/* Title — large, bold, white, Montserrat */}
        <h1
          style={{
            fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
            fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            lineHeight: 1.1,
            marginBottom: "12px",
            textShadow: "0 2px 12px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </h1>

        {/* Breadcrumb — gold, small */}
        <p
          style={{
            fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
            fontSize: "0.82rem",
            color: "#c8a84b",
            letterSpacing: "0.04em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <a href="/" style={{ color: "#c8a84b", textDecoration: "none" }}>
            Home
          </a>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem" }}>»</span>
          <span style={{ color: "#ffffff" }}>{breadcrumb}</span>
        </p>
      </div>
    </section>
  );
}
