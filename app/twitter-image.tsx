import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          backgroundColor: "#2C2A26",
          color: "#F5F2EB",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 24,
              height: 24,
              backgroundColor: "#F5F2EB",
              transform: "rotate(45deg)",
              borderRadius: 4,
            }}
          />
          <div style={{ fontSize: 72, fontWeight: 800, fontFamily: "serif" }}>
            Conflict Resolution
          </div>
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 44,
            fontWeight: 600,
            lineHeight: 1.15,
            fontFamily: "serif",
          }}
        >
          Instant AI Mediation
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 28,
            fontWeight: 500,
            color: "rgba(245, 242, 235, 0.75)",
            fontFamily: "sans-serif",
          }}
        >
          Texts / Emails / Disputes
        </div>
      </div>
    ),
    size,
  );
}

