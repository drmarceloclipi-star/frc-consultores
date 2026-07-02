import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
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
          backgroundColor: "#22333f",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 110,
            fontWeight: 600,
            color: "#c9a961",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
          }}
        >
          F
        </div>
        <div
          style={{
            display: "flex",
            width: 76,
            height: 8,
            borderRadius: 4,
            backgroundColor: "#c9a961",
            marginTop: 12,
            opacity: 0.85,
          }}
        />
      </div>
    ),
    size
  )
}
