import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — Everyday skincare in Pakistan`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social-share preview image (shown when the link is shared on WhatsApp, Facebook, etc.). */
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
          padding: "80px",
          background: "#faf6f1",
          color: "#3a2a33",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 8, color: "#a4626a", textTransform: "uppercase", fontFamily: "sans-serif" }}>
          Skincare · Pakistan
        </div>
        <div style={{ fontSize: 104, marginTop: 24, lineHeight: 1 }}>GloomBloomBeauty</div>
        <div style={{ fontSize: 40, marginTop: 28, color: "#5c4852" }}>Everyday skincare, beautifully within reach.</div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            alignSelf: "flex-start",
            background: "#a4626a",
            color: "#fff",
            padding: "18px 36px",
            borderRadius: 999,
            fontSize: 28,
            fontFamily: "sans-serif",
          }}
        >
          Order on WhatsApp
        </div>
      </div>
    ),
    size,
  );
}
