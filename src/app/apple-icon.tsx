import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "linear-gradient(135deg, #2563eb 0%, #14b8a6 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="100" height="100" viewBox="0 0 24 24" fill="white">
          <path d="M12 21s-9-6.5-9-12.5C3 5.42 5.42 3 8.5 3c1.74 0 3.31.81 3.5 1 .19-.19 1.76-1 3.5-1C18.58 3 21 5.42 21 8.5 21 14.5 12 21 12 21z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
