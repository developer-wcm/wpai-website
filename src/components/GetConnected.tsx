import Link from "next/link";

const CARDS = [
  {
    title: "Worship Services",
    desc: "Spirit-filled bilingual worship every Sunday. Come experience the presence of God with our community.",
    href: "/services",
    bg: "linear-gradient(160deg,#0f2347 0%,#1a3a6b 100%)",
    icon: "⛪",
  },
  {
    title: "Outreach",
    desc: "We are the hands and feet of Jesus. Join us as we serve our local community and beyond.",
    href: "/services#outreach",
    bg: "linear-gradient(160deg,#14532d 0%,#166534 100%)",
    icon: "🌍",
  },
  {
    title: "Life Stages",
    desc: "From children and youth to seniors — every generation has a home and a ministry at WPAI.",
    href: "/services#life-stages",
    bg: "linear-gradient(160deg,#3b0764 0%,#6d28d9 100%)",
    icon: "👨‍👩‍👧‍👦",
  },
];

export default function GetConnected() {
  return (
    <section className="sec" style={{ background: "var(--off)" }} aria-labelledby="connected-h">
      <div className="wrap">
        <div className="text-center mb-12">
          <span className="eyebrow">Ministries & Programs</span>
          <h2 id="connected-h" className="h2">Get Connected</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map(c => (
            <Link key={c.title} href={c.href} className="ov-card group" style={{ minHeight: "380px" }}>
              <div className="ov-bg absolute inset-0" style={{ background: c.bg }} />
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none select-none">
                <span className="text-[9rem]">{c.icon}</span>
              </div>
              <div className="ov-body">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center text-2xl mb-4"
                  style={{ background: "rgba(200,168,75,0.22)" }}>
                  {c.icon}
                </div>
                <h3 className="text-white font-black text-2xl mb-2">{c.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-4">{c.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest"
                  style={{ color: "var(--gold-light)" }}>
                  Learn more
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
