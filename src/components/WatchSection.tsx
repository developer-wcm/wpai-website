import Link from "next/link";

const SERMONS = [
  { title: "The Comeback — Week 3", speaker: "Pastor Thomas", date: "Apr 27", dur: "42 min" },
  { title: "Walking in the Spirit",  speaker: "Pastor Sarah",  date: "Apr 20", dur: "38 min" },
  { title: "Faith Over Fear",        speaker: "Guest Speaker", date: "Apr 13", dur: "45 min" },
  { title: "Generations United",     speaker: "Pastor Thomas", date: "Apr 6",  dur: "40 min" },
];

export default function WatchSection() {
  return (
    <section className="sec" style={{ background: "var(--blue-dark)" }} aria-labelledby="watch-h">
      <div className="wrap">
        {/* header */}
        <div className="text-center mb-12">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>Sermons & Messages</span>
          <h2 id="watch-h" className="h2 text-white">
            Watch the <span style={{ color: "var(--gold)" }}>Latest Service</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* main video — 2/3 */}
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer group"
              style={{ background: "linear-gradient(135deg,#0a1628 0%,#1a3a6b 50%,#0f2347 100%)" }}>
              <div className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: "radial-gradient(circle,white 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl"
                  style={{ background: "var(--gold)" }}>
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--blue-dark)" }}>
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white font-black text-xl mb-1">The Comeback — Week 3</p>
                <p className="text-white/50 text-sm">Pastor Thomas · April 27, 2026 · 42 min</p>
              </div>
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Live Sundays 10 AM
              </div>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                Watch More on YouTube
              </a>
              <Link href="/membership#livestream" className="btn btn-white-outline">Join Live Stream</Link>
            </div>
          </div>

          {/* sidebar — 1/3 */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "var(--gold)" }}>
              Recent Messages
            </p>
            {SERMONS.map((s, i) => (
              <a key={s.title} href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg group transition-all"
                style={{
                  background: i === 0 ? "rgba(200,168,75,0.1)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${i === 0 ? "rgba(200,168,75,0.28)" : "rgba(255,255,255,0.07)"}`,
                }}>
                <div className="w-14 h-10 rounded flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,255,255,0.08)" }}>
                  <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs font-bold truncate leading-snug">{s.title}</p>
                  <p className="text-white/40 text-[10px] mt-0.5">{s.speaker} · {s.date}</p>
                </div>
                <span className="text-[10px] text-white/35 shrink-0">{s.dur}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
