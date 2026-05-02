import { Header } from "@/components/Header"
import { LocaleProvider } from "@/lib/locale-context"
import type { ReactNode } from "react"

export default function PtLayout({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider locale="pt">
      <>
        <Header locale="pt" />
        {children}
      </>
    </LocaleProvider>
  )
}
