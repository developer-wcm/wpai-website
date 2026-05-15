"use client";
import { useEffect, useRef, useState } from "react";

interface Sub { label: string; text: string; }
interface Props {
  number: string;
  title: string;
  content: string;
  sub: Sub[];
  image: string;
  imageAlt: string;
  flip: boolean;
}

export default function DoctrineItem({ number, title, content, sub, image, imageAlt, flip }: Props) {
  const imgRef  = useRef<HTMLDivElement>(null);
  const txtRef  = useRef<HTMLDivElement>(null);
  const [imgIn, setImgIn]  = useState(false);
  const [txtIn, setTxtIn]  = useState(false);

  useEffect(() => {
    const observe = (el: HTMLDivElement | null, set: (v: boolean) => void) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { set(true); obs.unobserve(el); } },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };
    const c1 = observe(imgRef.current, setImgIn);
    const c2 = observe(txtRef.current, setTxtIn);
    return () => { c1?.(); c2?.(); };
  }, []);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "64px",
      alignItems: "center",
      padding: "72px 0",
      borderBottom: "1px solid #f3f4f6",
    }} className="doctrine-row">

      {/* Image */}
      <div ref={imgRef} style={{
        order: flip ? 2 : 1,
        borderRadius: "16px",
        overflow: "hidden",
        aspectRatio: "4/3",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        opacity: imgIn ? 1 : 0,
        transform: imgIn
          ? "translateX(0) scale(1)"
          : `translateX(${flip ? "60px" : "-60px"}) scale(0.97)`,
        transition: "opacity 0.75s cubic-bezier(0.4,0,0.2,1), transform 0.75s cubic-bezier(0.4,0,0.2,1)",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={imageAlt} style={{
          width: "100%", height: "100%",
          objectFit: "cover", display: "block",
          transition: "transform 0.5s ease",
          animation: "none",
        }} loading="lazy" />
      </div>

      {/* Text */}
      <div ref={txtRef} style={{
        order: flip ? 1 : 2,
        opacity: txtIn ? 1 : 0,
        transform: txtIn ? "translateX(0)" : `translateX(${flip ? "-40px" : "40px"})`,
        transition: "opacity 0.75s cubic-bezier(0.4,0,0.2,1) 0.1s, transform 0.75s cubic-bezier(0.4,0,0.2,1) 0.1s",
      }}>
        {/* Number */}
        <div style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: "40px", height: "40px", borderRadius: "50%",
          background: "#0f2347", color: "#c8a84b",
          fontSize: "0.85rem", fontWeight: 900,
          fontFamily: "var(--font-montserrat),'Montserrat',sans-serif",
          marginBottom: "16px",
        }}>{number}</div>

        {/* Title */}
        <h3 style={{
          fontFamily: "var(--font-montserrat),'Montserrat',sans-serif",
          fontSize: "1.1rem", fontWeight: 800,
          color: "#0f2347", textTransform: "uppercase",
          letterSpacing: "0.06em", marginBottom: "12px",
        }}>{title}</h3>

        {/* Gold line */}
        <div style={{ width: "36px", height: "3px", background: "#c8a84b", borderRadius: "2px", marginBottom: "16px" }} />

        {/* Content */}
        {content && (
          <p style={{ fontSize: "0.92rem", color: "#4b5563", lineHeight: "1.85", marginBottom: sub.length ? "16px" : 0 }}>
            {content}
          </p>
        )}

        {/* Sub-points */}
        {sub.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {sub.map(s => (
              <div key={s.label} style={{
                padding: "12px 14px", background: "#f9fafb",
                borderRadius: "8px", borderLeft: "3px solid #c8a84b",
              }}>
                <span style={{ fontWeight: 700, color: "#0f2347", fontSize: "0.82rem" }}>{s.label}: </span>
                <span style={{ fontSize: "0.88rem", color: "#4b5563", lineHeight: "1.8" }}>{s.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .doctrine-row { grid-template-columns: 1fr !important; gap: 24px !important; }
          .doctrine-row > div { order: unset !important; }
        }
      `}</style>
    </div>
  );
}
