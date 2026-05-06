import Link from "next/link";

const LINKS = [
  { icon: "👥", title: "Membership",         desc: "Join our church family.",       href: "/membership",         cta: "Join Now" },
  { icon: "📋", title: "Beliefs & Policies",  desc: "Our statement of faith.",       href: "/resources#policies", cta: "View Docs" },
  { icon: "📅", title: "Events Calendar",     desc: "Upcoming services & events.",   href: "/resources#events",   cta: "See Events" },
  { icon: "📞", title: "Contact Us",          desc: "Reach our pastoral team.",      href: "/contact",            cta: "Get in Touch" },
  { icon: "🙏", title: "Prayer Requests",     desc: "Let us pray with you.",         href: "/contact#prayer",     cta: "Submit" },
  { icon: "💝", title: "Give / Tithe",        desc: "Support the ministry.",         href: "/membership#giving",  cta: "Give Online" },
];

export default function QuickLinks() {
  return (
    <section className="sec" style={{ background: "var(--off)" }} aria-labelledby="ql-h">
      <div className="wrap">
        <div className="text-center mb-12">
          <span className="eyebrow">Quick Access</span>
          <h2 id="ql-h" className="h2">Important Resources</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LINKS.map(l => (
            <Link key={l.title} href={l.href}
              className="group flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-100 lift">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: "rgba(26,58,107,0.07)" }}>
                {l.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-black text-base mb-0.5" style={{ color: "var(--blue)" }}>{l.title}</h3>
                <p className="text-gray-400 text-xs mb-3">{l.desc}</p>
                <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-widest group-hover:gap-2 transition-all"
                  style={{ color: "var(--gold-dark)" }}>
                  {l.cta}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
