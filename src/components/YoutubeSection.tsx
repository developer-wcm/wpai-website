/* Server Component — fetches YouTube RSS feed at request time (no API key needed) */
import { parseStringPromise } from "xml2js";

const CHANNEL_ID = "UCH4Y_txbKRQ5JXw_e8qUqOw";
const FEED_URL   = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

type VideoEntry = {
  id:        string;
  title:     string;
  published: string;
  thumbnail: string;
  author:    string;
};

async function getLatestVideos(): Promise<VideoEntry[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: 3600 }, // re-fetch every hour
    });
    if (!res.ok) return [];
    const xml  = await res.text();
    const data = await parseStringPromise(xml, { explicitArray: false });
    const entries = data?.feed?.entry ?? [];
    const list = Array.isArray(entries) ? entries : [entries];

    return list.slice(0, 6).map((e: Record<string, unknown>) => {
      const mediaGroup = e["media:group"] as Record<string, unknown> | undefined;
      const mediaThumbnail = mediaGroup?.["media:thumbnail"] as Record<string, unknown> | undefined;
      const mediaTitle = mediaGroup?.["media:title"] as string | undefined;
      const ytVideoId = e["yt:videoId"] as string | undefined;
      const author = e["author"] as Record<string, unknown> | undefined;

      return {
        id:        ytVideoId ?? "",
        title:     (mediaTitle ?? (e.title as string) ?? "").toString(),
        published: ((e.published as string) ?? "").slice(0, 10),
        thumbnail: (mediaThumbnail?.["$"] as Record<string, string>)?.url
                   ?? `https://i.ytimg.com/vi/${ytVideoId}/hqdefault.jpg`,
        author:    (author?.name as string) ?? "WPAI",
      };
    });
  } catch {
    return [];
  }
}

export default async function YoutubeSection() {
  const videos = await getLatestVideos();
  const latest = videos[0];
  const rest   = videos.slice(1);

  if (!latest) return null;

  return (
    <section style={{ background: "#0f2347", padding: "64px 16px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{
            fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#c8a84b", marginBottom: "8px",
          }}>
            Sermons &amp; Messages
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#fff" }}>
            Watch the Latest Service
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "28px",
        }}
          className="yt-grid"
        >
          {/* ── Main video embed ── */}
          <div>
            <div style={{
              position: "relative", paddingBottom: "56.25%",
              height: 0, borderRadius: "10px", overflow: "hidden",
              background: "#000",
            }}>
              <iframe
                src={`https://www.youtube.com/embed/${latest.id}?rel=0&modestbranding=1`}
                title={latest.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute", top: 0, left: 0,
                  width: "100%", height: "100%", border: "none",
                }}
              />
            </div>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", marginTop: "12px" }}>
              {latest.title}
            </p>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", marginTop: "4px" }}>
              {latest.published}
            </p>
          </div>

          {/* ── Recent videos sidebar ── */}
          {rest.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <p style={{
                fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#c8a84b", marginBottom: "4px",
              }}>
                Recent Messages
              </p>
              {rest.map(v => (
                <a
                  key={v.id}
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    padding: "10px 12px", borderRadius: "8px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    textDecoration: "none", transition: "background 0.2s",
                  }}
                >
                  {/* Thumbnail */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    style={{ width: "80px", height: "45px", objectFit: "cover", borderRadius: "4px", flexShrink: 0 }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      color: "#fff", fontSize: "0.8rem", fontWeight: 600,
                      overflow: "hidden", textOverflow: "ellipsis",
                      display: "-webkit-box", WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical", lineHeight: 1.4,
                    }}>
                      {v.title}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", marginTop: "3px" }}>
                      {v.published}
                    </p>
                  </div>
                </a>
              ))}

              {/* Watch all */}
              <a
                href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  marginTop: "8px", padding: "10px 20px",
                  background: "#c8a84b", color: "#0f2347",
                  borderRadius: "6px", fontWeight: 700, fontSize: "0.78rem",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                ▶ Watch More on YouTube
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Responsive grid: side-by-side on desktop */}
      <style>{`
        @media (min-width: 900px) {
          .yt-grid {
            grid-template-columns: 2fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
