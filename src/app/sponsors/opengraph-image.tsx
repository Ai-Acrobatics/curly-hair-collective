import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sponsors — Curlie Girlie Collective";
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
          background:
            "linear-gradient(160deg, #E0218A 0%, #FF69B4 30%, #FFB6C1 60%, #FFF0F5 100%)",
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
              fontSize: 56,
              fontWeight: 900,
              color: "white",
              lineHeight: 1,
              marginBottom: 4,
            }}
          >
            Curlie Girlie
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 900,
              color: "#FFD700",
              lineHeight: 1,
              marginBottom: 20,
              textShadow: "0 0 40px rgba(255, 215, 0, 0.4)",
            }}
          >
            Collective
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "white",
              marginBottom: 12,
            }}
          >
            Sponsors
          </div>
          <div
            style={{
              fontSize: 18,
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: 600,
              textAlign: "center",
            }}
          >
            Partner with the curly hair community. Reach engaged listeners.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
