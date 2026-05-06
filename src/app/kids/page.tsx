import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kids Corner",
  description: "WPA Kids Corner — Sunday School every Sunday at 10am. PYPA program every 3rd Sunday.",
};

export default function KidsPage() {
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
          Home &rsaquo; Kids Corner
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, marginBottom: "12px" }}>
          Kids Corner
        </h1>
        <div style={{ width: "48px", height: "3px", background: "#c8a84b", borderRadius: "2px", margin: "0 auto" }} />
      </section>

      {/* ── Content ── */}
      <section style={{ background: "#fff", padding: "64px 16px 80px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* Section heading */}
          <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1a2e4a", marginBottom: "6px" }}>
            Kids Corner
          </h2>
          <div style={{ width: "48px", height: "3px", background: "#c8a84b", borderRadius: "2px", margin: "0 0 28px" }} />

          {/* Anniversary story */}
          <div
            style={{
              background: "#f5f0f5",
              border: "1px solid #e0dce8",
              borderLeft: "4px solid #c8a84b",
              borderRadius: "4px",
              padding: "24px 28px",
              marginBottom: "32px",
            }}
          >
            <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#1a2e4a", marginBottom: "14px" }}>
              WPA Sunday School Anniversary: March 10th 2018
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.85", marginBottom: "14px" }}>
              On March 10th WPA Sunday School Kids enthusiastically celebrated
              their Sunday School Anniversary. We were blessed by the presence of
              Pastor Samuel Thomas, who mesmerized the kids and adults with the
              word of God in a fun filled session.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.85", marginBottom: "14px" }}>
              Skits, Songs, stories, all performances made by kids to the awe and
              pride of their parents and the congregation. Music from the young
              lips, was angelic and soothing to the restless hearts. Tears of joy
              filled the rooms as every eye eagerly cheered on each child. A
              Musical Art skit left the audience speechless as they portrayed the
              pain and love of Jesus through stage art.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.85", marginBottom: "14px" }}>
              The Sunday School teachers, the guides and pillars to our students,
              put together a very creative and fun-filled skit, that left every
              member thinking about the true meaning of being a believer, through
              their skit <em>Athmeeya Darshanam</em>.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.85", fontStyle: "italic" }}>
              This was a day to remember, each child put forth their best. It was
              a day for every child of God, young at age and young at heart …
              Join us next time!
            </p>
          </div>

          {/* Sunday School card */}
          <div
            style={{
              background: "#f5f0f5",
              border: "1px solid #e0dce8",
              borderLeft: "4px solid #c8a84b",
              borderRadius: "4px",
              padding: "24px 28px",
              marginBottom: "20px",
            }}
          >
            <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#1a2e4a", marginBottom: "14px" }}>
              Sunday School : Every Sunday Morning at 10am
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.85" }}>
              In our community, we strive to encourage our children to nurture and
              explore their spiritual faith, amongst the perils and temptations of
              the materialistic world. WPA are proud to claim that we are able to
              do just that. We have a great team of dedicated and passionate Sunday
              school teachers who strive hard to instill the word of God in our
              younger generation, but in a fun and interactive way. It gives us
              immense pleasure to state that WPA kids have bagged the most prizes
              in the Regional examinations. We also are fortunate to have Mrs.
              Happy Geevar, who received the Best Teacher Award 2017, in the
              Regionals.
            </p>
          </div>

          {/* PYPA card */}
          <div
            style={{
              background: "#f5f0f5",
              border: "1px solid #e0dce8",
              borderLeft: "4px solid #c8a84b",
              borderRadius: "4px",
              padding: "24px 28px",
            }}
          >
            <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#1a2e4a", marginBottom: "14px" }}>
              PYPA program: Every 3rd Sunday
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.85" }}>
              We encourage kids of all ages to share the word of God through
              programs like quizzes, stories, songs, skits, psalms readings etc.
              This gives every child an opportunity to conquer inner fears, helps
              them to gain a sense of confidence, realize the love and support the
              community has for them and above all, sense the unconditional Love
              of God.
            </p>
          </div>

          {/* Convention photo */}
          <div style={{ marginTop: "40px", borderRadius: "8px", overflow: "hidden", border: "1px solid #e5e7eb" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/kids-convention.jpg"
              alt="WPA Kids at Annual Convention New York — children receiving awards on stage"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div style={{ padding: "12px 16px", background: "#f9f8fc", borderTop: "1px solid #e5e7eb" }}>
              <p style={{ fontSize: "0.8rem", color: "#888", textAlign: "center", fontStyle: "italic" }}>
                WPA Kids at the Annual Convention — New York
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
