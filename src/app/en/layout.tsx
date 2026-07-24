import type { Metadata } from "next"
import { LocalizedRootLayout } from "@/components/LocalizedRootLayout"
import { BASE_URL } from "@/lib/seo"
import type { ReactNode } from "react"
import "../globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "FRC Consultores Associados — Custom Software Development",
    template: "%s | FRC Consultores",
  },
}

export default function EnLayout({ children }: { children: ReactNode }) {
  return <LocalizedRootLayout locale="en">{children}</LocalizedRootLayout>
}
