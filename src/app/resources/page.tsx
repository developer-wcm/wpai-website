import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description: "Access WPAI's resources including sermon archives, event calendar, church policies, and downloadable documents.",
};

const EVENTS = [
  { day: "11", mon: "May", title: "Sunday Worship Service",    time: "10:00 AM", loc: "Main Sanctuary",  type: "Weekly" },
  { day: "14", mon: "May", title: "Wednesday Bible Study",     time: "7:00 PM",  loc: "Fellowship Hall", type: "Weekly" },
  { day: "16", mon: "May", title: "Friday Prayer Meeting",     time: "7:00 PM",  loc: "Main Sanctuary",  type: "Weekly" },
  { day: "24", mon: "May", title: "Youth Ministry Night",      time: "6:30 PM",  loc: "Youth Room",      type: "Monthly" },
  { day: "31", mon: "May", title: "Community Outreach Day",    time: "9:00 AM",  loc: "Community Center",type: "Special" },
  { day: "07", mon: "Jun", title: "Women's Ministry Brunch",   time: "11:00 AM", loc: "Fellowship Hall", type: "Special" },
];

const DOCS = [
  { icon: "📄", title: "Statement of Faith",          desc: "Our core beliefs and doctrinal positions as a Pentecostal church." },
  { icon: "📋", title: "Church Constitution & Bylaws", desc: "The governing documents of Washington Pentecostal Assembly International." },
  { icon: "🙏", title: "Tenets of Faith",              desc: "The foundational tenets that guide our worship and community life." },
  { icon: "👶", title: "Child Safety Policy",          desc: "Our comprehensive policy for the safety and protection of children." },
  { icon: "📅", title: "Annual Church Calendar",       desc: "Full calendar of services, events, and programs for the current year." },
  { icon: "💝", title: "Giving & Stewardship Guide",   desc: "Information about tithes, offerings, and financial stewardship at WPAI." },
];

const SERIES = [
  { title: "The Comeback",          count: "8 messages", desc: "Stories of restoration and renewal from Scripture.", current: true },
  { title: "Walking in the Spirit", count: "6 messages", desc: "A deep dive into Spirit-filled living for every believer.", current: false },
  { title: "Faith Over Fear",       count: "5 messages", desc: "Overcoming anxiety and doubt through trust in God.", current: false },
  { title: "Generations United",    count: "4 messages", desc: "How different generations can worship and serve together.", current: false },
];

const typeColor = (t: string) =>
  t === "Weekly" ? "var(--blue)" : t === "Monthly" ? "#7c3aed" : "var(--gold-dark)";

export default function ResourcesPage() {
  return (
    <>
      <section className="py-24 text-white text-center" style={{ background: "linear-gradient(135deg,var(--blue-dark) 0%,var(--blue) 100%)" }}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--gold-light)" }}>Library & Documents</span>
          <h1 className="text-4xl md:text-6xl font-black mt-1 mb-4">Resources</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Sermons, events, policies, and documents — everything you need from WPAI in one place.
          </p>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="sec bg-white">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="eyebrow">Upcoming Events</span>
              <h2 className="h2">Events Calendar</h2>
            </div>
            <Link href="/contact" className="btn btn-blue-outline self-start md:self-auto">Add to Calendar</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EVENTS.map(e => (
              <div key={`${e.day}-${e.title}`} className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white lift">
                <div className="w-14 h-14 rounded-xl flex flex-col items-center justify-center shrink-0 text-white"
                  style={{ background: "var(--blue)" }}>
                  <span className="text-xl font-black leading-none">{e.day}</span>
                  <span className="text-[10px] uppercase tracking-wide opacity-80">{e.mon}</span>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wide px-2 py-0.5 rounded inline-block mb-1"
                    style={{ background: `${typeColor(e.type)}15`, color: typeColor(e.type) }}>
                    {e.type}
                  </span>
                  <h3 className="font-bold text-sm text-gray-800">{e.title}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{e.time} · {e.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sermons */}
      <section id="sermons" className="sec" style={{ background: "var(--off)" }}>
        <div className="wrap">
          <div className="text-center mb-12">
            <span className="eyebrow">Sermon Archive</span>
            <h2 className="h2">Message Series</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERIES.map(s => (
              <div key={s.title} className="bg-white rounded-xl p-6 lift flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0"
                  style={{ background: "var(--blue-dark)" }}>🎬</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-black text-base" style={{ color: "var(--blue)" }}>{s.title}</h3>
                    {s.current && (
                      <span className="text-[10px] font-black px-2 py-0.5 rounded"
                        style={{ background: "rgba(200,168,75,0.18)", color: "var(--gold-dark)" }}>Current</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mb-1">{s.count}</p>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </div>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"
                  className="text-xs font-black uppercase tracking-wide shrink-0" style={{ color: "var(--blue)" }}>
                  Watch →
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-blue">
              View All on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section id="policies" className="sec bg-white">
        <div className="wrap">
          <div className="text-center mb-12">
            <span className="eyebrow">Documents & Policies</span>
            <h2 className="h2">Church Documents</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DOCS.map(d => (
              <div key={d.title} className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-white lift cursor-pointer group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
                  style={{ background: "rgba(26,58,107,0.07)" }}>{d.icon}</div>
                <div>
                  <h3 className="font-black text-sm mb-1 group-hover:underline" style={{ color: "var(--blue)" }}>{d.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-2">{d.desc}</p>
                  <span className="text-xs font-black uppercase tracking-wide" style={{ color: "var(--gold-dark)" }}>Download PDF →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="news" className="sec" style={{ background: "var(--off)" }}>
        <div className="wrap max-w-2xl mx-auto text-center">
          <span className="eyebrow">Stay Connected</span>
          <h2 className="h2 mb-4">Never Miss an Update</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Follow us on social media and subscribe to our newsletter to stay up to date with the latest
            news, events, and announcements from WPAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn btn-blue">Subscribe to Newsletter</Link>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-blue-outline">
              Follow on YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
