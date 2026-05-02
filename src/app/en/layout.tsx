import { Header } from "@/components/Header"
import { LocaleProvider } from "@/lib/locale-context"
import type { ReactNode } from "react"

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider locale="en">
      <>
        <Header locale="en" />
        {children}
      </>
    </LocaleProvider>
  )
}
