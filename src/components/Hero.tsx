export default function Hero() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{ height: "calc(100vh - 72px)", minHeight: "380px", maxHeight: "800px" }}
      aria-label="Hero"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1600&q=80&auto=format&fit=crop"
        alt="Open Bible"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        style={{ animation: "none" }} /* skip img animation for hero bg */
      />
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.52)" }} />

      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <h1
          className="hero-title font-black uppercase leading-tight mb-5"
          style={{
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            letterSpacing: "0.03em",
            textShadow: "2px 4px 16px rgba(0,0,0,0.8)",
          }}
        >
          WPA WELCOMES YOU
        </h1>
        <p
          className="hero-sub"
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.85)",
            textShadow: "1px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          4318 Baltimore Ave, Bladensburg, MD, 20710
        </p>
      </div>
    </section>
  );
}
