export const runtime = "edge";
export const alt = "Farpy — Distributed GPU power for everyone.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

import { ImageResponse } from "next/og";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "radial-gradient(60% 40% at 50% 0%, rgba(59,130,246,.25), rgba(0,0,0,1))",
          color: "white",
          padding: 64,
          fontSize: 56,
          fontWeight: 800,
        }}
      >
        <div>Farpy</div>
        <div style={{ fontSize: 36, fontWeight: 600, opacity: 0.9, marginTop: 8 }}>
          Distributed GPU power for everyone.
        </div>
        <div style={{ fontSize: 24, opacity: 0.7, marginTop: 12 }}>
          Tiny taps. Big compute.
        </div>
      </div>
    ),
    { ...size }
  );
}