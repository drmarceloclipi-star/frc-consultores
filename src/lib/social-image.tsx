import { ImageResponse } from "next/og"

export const socialImageSize = { width: 1200, height: 630 }
export const socialImageContentType = "image/png"

export function createSocialImage(locale: "pt" | "en") {
  const content =
    locale === "pt"
      ? {
          eyebrow: "// SOFTWARE SOB MEDIDA",
          services:
            "Desenvolvimento de software · Consultoria em TI · Hospedagem e dados",
          locations: "Recife · Joinville · desde 2015",
        }
      : {
          eyebrow: "// CUSTOM SOFTWARE",
          services: "Software development · IT consulting · Hosting and data",
          locations: "Recife · Joinville · since 2015",
        }

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
          backgroundColor: "#22333f",
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 50% 120%, rgba(201, 169, 97, 0.25), transparent 70%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.25em",
            color: "#6b8393",
            marginBottom: 32,
          }}
        >
          {content.eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
          }}
        >
          FRC Consultores
        </div>
        <div
          style={{
            display: "flex",
            width: 140,
            height: 6,
            borderRadius: 3,
            backgroundColor: "#c9a961",
            margin: "36px 0",
          }}
        />
        <div style={{ display: "flex", fontSize: 32, color: "#9db2bf" }}>
          {content.services}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#c9a961",
            marginTop: 48,
          }}
        >
          {content.locations}
        </div>
      </div>
    ),
    socialImageSize
  )
}
