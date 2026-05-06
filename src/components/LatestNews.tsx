import Link from "next/link";

const FEATURED = [
  {
    tag: "This Week at WPAI", date: "May 11, 2026",
    title: "Sunday Service & Community Fellowship",
    excerpt: "Join us this Sunday for a powerful bilingual worship service followed by a community fellowship lunch. All are welcome — bring a friend!",
    href: "/resources#events",
    bg: "linear-gradient(160deg,#0f2347 0%,#1a3a6b 80%)",
    icon: "⛪",
  },
  {
    tag: "Sermon Series", date: "May 5, 2026",
    title: "The Comeback — New Series",
    excerpt: "Our new sermon series explores powerful stories of restoration and renewal from Scripture. Watch the latest message on our YouTube channel.",
    href: "/resources#sermons",
    bg: "linear-gradient(160deg,#1e3a5f 0%,#2d5aa0 80%)",
    icon: "🎬",
  },
];

const SMALL = [
  { type: "Announcement",     date: "Apr 28", title: "Summer Youth Camp Registration Open",         color: "#7c3aed" },
  { type: "Community",        date: "Apr 20", title: "Food Drive — 500+ lbs Collected. Thank You!", color: "#059669" },
  { type: "Women's Ministry", date: "Apr 14", title: "Women's Brunch — June 7th · 11:00 AM",        color: "#be185d" },
];

export default function LatestNews() {
  return (
    <section className="sec bg-white" aria-labelledby="news-h">
      <div className="wrap">
        {/* header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow">News & Events</span>
            <h2 id="news-h" className="h2">The Latest at WPAI</h2>
          </div>
          <Link href="/resources#events" className="btn btn-blue-outline self-start md:self-auto">
            Explore More Events
          </Link>
        </div>

        {/* 2 large overlay cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          {FEATURED.map(item => (
            <Link key={item.title} href={item.href} className="ov-card group" style={{ minHeight: "320px" }}>
              <div className="ov-bg absolute inset-0" style={{ background: item.bg }} />
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none select-none">
                <span className="text-[10rem]">{item.icon}</span>
              </div>
              <div className="ov-body">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded"
                    style={{ background: "var(--gold)", color: "var(--blue-dark)" }}>
                    {item.tag}
                  </span>
                  <span className="text-white/45 text-xs">{item.date}</span>
                </div>
                <h3 className="text-white font-black text-xl md:text-2xl mb-2 leading-tight">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{item.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest"
                  style={{ color: "var(--gold-light)" }}>
                  Read more
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* 3 small cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SMALL.map(item => (
            <Link key={item.title} href="/resources#events"
              className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-white lift group">
              <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: item.color }} />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black uppercase tracking-wide" style={{ color: item.color }}>{item.type}</span>
                  <span className="text-gray-300 text-xs">·</span>
                  <span className="text-gray-400 text-xs">{item.date}</span>
                </div>
                <p className="text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors leading-snug">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
