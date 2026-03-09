import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Curlie Girlie Collective — Podcast & Community";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #E0218A 0%, #FF69B4 30%, #FFB6C1 60%, #FFF0F5 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px 60px",
            background: "rgba(255, 255, 255, 0.12)",
            borderRadius: "32px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "white",
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            Curlie Girlie
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#FFD700",
              lineHeight: 1,
              marginBottom: 24,
              textShadow: "0 0 40px rgba(255, 215, 0, 0.4)",
            }}
          >
            Collective
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: 600,
              textAlign: "center",
            }}
          >
            Celebrating curly hair culture through conversations, community, and confidence.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 32,
          }}
        >
          {["Spotify", "Apple Podcasts", "YouTube"].map((p) => (
            <div
              key={p}
              style={{
                padding: "8px 20px",
                background: "rgba(255, 255, 255, 0.15)",
                borderRadius: 9999,
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: 14,
                fontWeight: 600,
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
