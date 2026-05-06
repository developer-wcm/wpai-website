import Link from "next/link";

const CHECKS = [
  "Bilingual Malayalam & English services",
  "Kids' ministry available during service",
  "Accessible parking and facilities",
  "Welcoming community for all ages",
];

const CARDS = [
  { icon: "🕊️", title: "Sunday Worship",  sub: "10:00 AM every Sunday", bg: "var(--blue)" },
  { icon: "📖", title: "Bible Study",      sub: "Wednesday · 7:00 PM",   bg: "#1e5c3a" },
  { icon: "👨‍👩‍👧‍👦", title: "Family Ministry", sub: "Kids, Youth & Adults",  bg: "#4c1d95" },
  { icon: "🙏", title: "Prayer Night",     sub: "Friday · 7:00 PM",      bg: "#7c2d12" },
];

export default function PlanVisit() {
  return (
    <section className="sec bg-white" aria-labelledby="visit-h">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* text */}
          <div>
            <span className="eyebrow">Plan Your Visit / Join WPAI</span>
            <h2 id="visit-h" className="h2">
              We&apos;re Excited to<br />
              <span style={{ color: "var(--blue)" }}>Welcome You!</span>
            </h2>
            <div className="rule" />
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              Whether it&apos;s your first time, returning after a break, or searching
              for a church home — we want you to feel welcomed and cared for.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              From parking and kids&apos; ministry to accessibility and what to wear,
              here&apos;s everything you need. We believe you found us not by chance,
              but by God&apos;s great plan and purpose in your life.
            </p>
            <ul className="space-y-3 mb-10">
              {CHECKS.map(c => (
                <li key={c} className="flex items-center gap-3 text-gray-600 text-sm">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0"
                    style={{ background: "var(--gold)", color: "var(--blue-dark)" }}>✓</span>
                  {c}
                </li>
              ))}
            </ul>
            <Link href="/membership" className="btn btn-blue">Visit Us Now</Link>
          </div>

          {/* 2×2 cards */}
          <div className="grid grid-cols-2 gap-4">
            {CARDS.map(c => (
              <div key={c.title} className="rounded-xl p-6 text-white lift" style={{ background: c.bg }}>
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-black text-sm mb-1">{c.title}</h3>
                <p className="text-white/55 text-xs">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
