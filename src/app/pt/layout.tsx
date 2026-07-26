import type { Metadata } from "next"
import { LocalizedRootLayout } from "@/components/LocalizedRootLayout"
import { BASE_URL } from "@/lib/seo"
import type { ReactNode } from "react"
import "../globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "FRC — Desenvolvimento de Software",
    template: "%s | FRC",
  },
}

export default function PtLayout({ children }: { children: ReactNode }) {
  return <LocalizedRootLayout locale="pt">{children}</LocalizedRootLayout>
}
