import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membership",
  description: "Join the WPAI family. Learn about membership benefits, how to become a member, and the support available to our congregation.",
};

const BENEFITS = [
  { icon: "🙏", title: "Spiritual Community",    desc: "Be part of a warm family of believers who walk alongside you in your faith journey." },
  { icon: "📖", title: "Bible Study",             desc: "Access weekly Bible studies, discipleship programs, and spiritual growth resources." },
  { icon: "👨‍👩‍👧‍👦", title: "Family Programs",       desc: "Dedicated ministries for children, youth, young adults, families, and seniors." },
  { icon: "🎵", title: "Worship & Arts",          desc: "Participate in our vibrant worship team, choir, and creative arts ministries." },
  { icon: "🌍", title: "Outreach",                desc: "Serve your community through organized outreach events, missions, and charitable programs." },
  { icon: "💝", title: "Pastoral Care",           desc: "Receive personal pastoral support, counseling, and prayer during life's important moments." },
  { icon: "📺", title: "Live Stream Access",      desc: "Watch services live or on-demand from anywhere through our YouTube channel." },
  { icon: "🤝", title: "Fellowship Events",       desc: "Regular fellowship gatherings, cultural celebrations, and community events year-round." },
];

const STEPS = [
  { n: "01", title: "Attend a Service",       desc: "Visit us on any Sunday at 10:00 AM. Experience our worship and community firsthand." },
  { n: "02", title: "Connect With Us",        desc: "Fill out a connection card or speak with a pastor after service. We'd love to get to know you." },
  { n: "03", title: "New Members Class",      desc: "Join our New Members Orientation to learn about WPAI's beliefs, vision, and community life." },
  { n: "04", title: "Welcome to the Family!", desc: "Be officially welcomed into the WPAI family during a Sunday service. Your journey begins here!" },
];

export default function MembershipPage() {
  return (
    <>
      <section className="py-24 text-white text-center" style={{ background: "linear-gradient(135deg,var(--blue-dark) 0%,var(--blue) 100%)" }}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--gold-light)" }}>Join Our Family</span>
          <h1 className="text-4xl md:text-6xl font-black mt-1 mb-4">Membership</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed mb-8">
            We believe you found us not by chance, but by God&apos;s great plan and purpose in your life.
          </p>
          <Link href="#how-to-join" className="btn btn-gold px-8 py-3.5">How to Join</Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="sec bg-white">
        <div className="wrap">
          <div className="text-center mb-12">
            <span className="eyebrow">Member Benefits</span>
            <h2 className="h2">Why Join WPAI?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map(b => (
              <div key={b.title} className="rounded-xl border border-gray-100 p-5 lift bg-white">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3"
                  style={{ background: "rgba(26,58,107,0.07)" }}>{b.icon}</div>
                <h3 className="font-black text-sm mb-1.5" style={{ color: "var(--blue)" }}>{b.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to join */}
      <section id="how-to-join" className="sec" style={{ background: "var(--off)" }}>
        <div className="wrap">
          <div className="text-center mb-12">
            <span className="eyebrow">Getting Started</span>
            <h2 className="h2">How to Become a Member</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(s => (
              <div key={s.n} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4"
                  style={{ background: "var(--blue)", color: "var(--gold)" }}>{s.n}</div>
                <h3 className="font-black text-sm mb-2" style={{ color: "var(--blue)" }}>{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="btn btn-blue px-8 py-3.5">Contact Us to Get Started</Link>
          </div>
        </div>
      </section>

      {/* Giving */}
      <section id="giving" className="sec bg-white">
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
          <div>
            <span className="eyebrow">Tithes & Offerings</span>
            <h2 className="h2 mb-2">Give & Support the Ministry</h2>
            <div className="rule" />
            <p className="text-gray-500 leading-relaxed mb-4">
              Your generous giving enables WPAI to continue its ministry, outreach, and community programs.
              Every gift makes a difference in the lives of people in our congregation and community.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 italic">
              &ldquo;God loves a cheerful giver.&rdquo; — 2 Corinthians 9:7
            </p>
            <Link href="/contact#giving" className="btn btn-gold">Give Online</Link>
          </div>
          <div className="rounded-2xl p-8 text-white" style={{ background: "linear-gradient(135deg,var(--blue) 0%,var(--blue-mid) 100%)" }}>
            <h3 className="font-black text-lg mb-4">Ways to Give</h3>
            <ul className="space-y-3 text-sm text-white/80">
              {["💳 Online giving via our secure portal","🏦 Bank transfer / ACH","✉️ Mail a check to our office","🙏 In-person during Sunday service"].map(i => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Livestream */}
      <section id="livestream" className="sec" style={{ background: "var(--off)" }}>
        <div className="wrap max-w-2xl mx-auto text-center">
          <span className="eyebrow">Member Support</span>
          <h2 className="h2 mb-4">We&apos;re Here for You</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Our pastoral team is available for counseling, prayer, and support. Whether you&apos;re facing
            a challenge or celebrating a milestone, WPAI is here to walk with you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact#prayer" className="btn btn-blue">Submit a Prayer Request</Link>
            <Link href="/contact"        className="btn btn-blue-outline">Contact a Pastor</Link>
          </div>
        </div>
      </section>
    </>
  );
}
