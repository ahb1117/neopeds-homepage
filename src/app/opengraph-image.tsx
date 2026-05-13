import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const logoData = readFileSync(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #e0f2fe 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(59,130,246,0.12)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(20,184,166,0.10)",
            filter: "blur(60px)",
          }}
        />

        {/* Logo + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 36 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt="NeoPeds logo"
            width={110}
            height={110}
            style={{ borderRadius: 24 }}
          />
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-2px",
              color: "#0f172a",
            }}
          >
            Neo
            <span style={{ color: "#2563eb" }}>Peds</span>
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#475569",
            marginBottom: 40,
            letterSpacing: "-0.5px",
          }}
        >
          Clinical tools for Neonate &amp; Pediatric patients
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: 16 }}>
          {["TPN Calculator", "Peds Reference", "Evidence-Based", "Free"].map(
            (label) => (
              <div
                key={label}
                style={{
                  background: "white",
                  border: "1.5px solid #bfdbfe",
                  borderRadius: 99,
                  padding: "10px 24px",
                  fontSize: 20,
                  color: "#2563eb",
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            )
          )}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 20,
            color: "#94a3b8",
            fontWeight: 500,
            letterSpacing: "0.5px",
          }}
        >
          neopeds.org
        </div>
      </div>
    ),
    { ...size }
  );
}
