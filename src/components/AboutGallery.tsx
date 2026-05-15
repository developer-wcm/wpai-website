"use client";
import { useEffect, useRef, useState } from "react";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1438232992991-995b671e4668?w=800&q=80&auto=format&fit=crop", alt: "Sunday worship service",  caption: "Sunday Worship" },
  { src: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=600&q=80&auto=format&fit=crop", alt: "Community fellowship",     caption: "Community" },
  { src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&q=80&auto=format&fit=crop", alt: "Praise and worship",       caption: "Praise & Worship" },
  { src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&q=80&auto=format&fit=crop", alt: "Prayer and discipleship",  caption: "Prayer" },
  { src: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80&auto=format&fit=crop", alt: "Bible study",              caption: "Bible Study" },
];

function GalleryImage({ src, alt, caption, delay }: { src: string; alt: string; caption: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="gal-wrap" style={{
      position: "relative", borderRadius: "16px", overflow: "hidden",
      aspectRatio: "4/3", boxShadow: "0 8px 32px rgba(15,35,71,0.12)",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
      transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease", animation: "none" }} />
      <div className="gal-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,35,71,0.75) 0%, transparent 60%)", opacity: 0, transition: "opacity 0.3s ease", display: "flex", alignItems: "flex-end", padding: "16px 18px" }}>
        <span style={{ color: "#fff", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{caption}</span>
      </div>
    </div>
  );
}

export default function AboutGallery() {
  return (
    <section style={{ background: "linear-gradient(180deg,#f8f9fc 0%,#fff 100%)", padding: "64px 16px 72px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 14px", background: "rgba(200,168,75,0.1)", border: "1px solid rgba(200,168,75,0.25)", borderRadius: "999px", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#c8a84b", marginBottom: "12px" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#c8a84b", display: "inline-block" }} />
            Our Community
          </span>
          <h2 style={{ fontFamily: "var(--font-montserrat),'Montserrat',sans-serif", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "#0f2347", letterSpacing: "-0.01em" }}>
            Life at Washington Pentecostal Assembly
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }}>
          <div style={{ gridColumn: "1/3" }}><GalleryImage {...IMAGES[0]} delay={0} /></div>
          <div><GalleryImage {...IMAGES[1]} delay={100} /></div>
          <div><GalleryImage {...IMAGES[2]} delay={200} /></div>
          <div><GalleryImage {...IMAGES[3]} delay={300} /></div>
          <div><GalleryImage {...IMAGES[4]} delay={400} /></div>
        </div>
      </div>
      <style>{`.gal-wrap:hover img{transform:scale(1.06)}.gal-wrap:hover .gal-overlay{opacity:1!important}@media(max-width:600px){.gal-wrap{aspect-ratio:3/2}}`}</style>
    </section>
  );
}
