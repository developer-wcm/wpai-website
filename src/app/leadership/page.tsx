import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Washington Pentecostal Assembly Leadership — Pastor James Mulavana (Jaimson Babu), Pastor and President of WPA.",
};

const PASTOR = {
  name: "Pastor James Mulavana (Jaimson Babu)",
  role: "Pastor and President of WPA",
};

const BOARD = [
  { name: "Bro. Moses Devaprakasam", role: "Board Member"   },
  { name: "Bro. Daniel Joy",         role: "Board Member"   },
  { name: "Bro. Melvin Mathew",      role: "Board Member"   },
  { name: "Bro. Babychan P",         role: "Vice President" },
  { name: "Bro. Thomas John",        role: "Secretary"      },
  { name: "Bro. Sam Chonai",         role: "Treasurer"      },
  { name: "Pr. James Mulavana (Jaimson Babu)", role: "Senior Pastor" },
];

/* Initials avatar */
function Avatar({ name, size = 140 }: { name: string; size?: number }) {
  const initials = name
    .split(" ")
    .filter(w => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map(w => w[0])
    .join("");

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "#1a2e4a",
        color: "#c8a84b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.28,
        fontWeight: 900,
        margin: "0 auto 14px",
        flexShrink: 0,
        letterSpacing: "0.05em",
      }}
    >
      {initials}
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f2347 0%, #1a3a6b 100%)",
          padding: "72px 16px 56px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginBottom: "16px", letterSpacing: "0.05em" }}>
          Home &rsaquo; Leadership
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, marginBottom: "12px" }}>
          Leadership
        </h1>
        <div style={{ width: "48px", height: "3px", background: "#c8a84b", borderRadius: "2px", margin: "0 auto" }} />
      </section>

      {/* ── Content ── */}
      <section style={{ background: "#fff", padding: "64px 16px 80px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>

          {/* Heading */}
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#111", marginBottom: "6px" }}>
            Washington Pentecostal Assembly Leadership
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#333", marginBottom: "2px" }}>
            {PASTOR.name}
          </p>
          <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#333", marginBottom: "36px" }}>
            {PASTOR.role}
          </p>

          {/* Senior pastor avatar — large */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "52px" }}>
            <Avatar name={PASTOR.name} size={180} />
          </div>

          {/* Board grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: "32px 20px",
              justifyItems: "center",
            }}
          >
            {BOARD.map(m => (
              <div key={m.name} style={{ textAlign: "center" }}>
                <Avatar name={m.name} size={120} />
                <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111", marginBottom: "3px", lineHeight: 1.3 }}>
                  {m.name}
                </p>
                <p style={{ fontSize: "0.8rem", fontStyle: "italic", color: "#cc2222" }}>
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
