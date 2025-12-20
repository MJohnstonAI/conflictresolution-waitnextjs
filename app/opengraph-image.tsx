import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
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
          backgroundColor: "#F5F2EB",
          color: "#2C2A26",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 24,
              height: 24,
              backgroundColor: "#2C2A26",
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
          AI Mediation for Calm &amp; Difficult Conversations
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            fontWeight: 500,
            color: "#5D5A53",
            fontFamily: "sans-serif",
          }}
        >
          Peacekeeper / Barrister / Defense
        </div>
      </div>
    ),
    size,
  );
}

