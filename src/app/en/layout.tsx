import { Header } from "@/components/Header"
import { LocaleProvider } from "@/lib/locale-context"
import type { ReactNode } from "react"

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider locale="en">
      <>
        {/* Root layout renders lang="pt-BR"; hreflang/canonical carry the SEO signal */}
        <script
          dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang="en"' }}
        />
        <Header locale="en" />
        {children}
      </>
    </LocaleProvider>
  )
}
