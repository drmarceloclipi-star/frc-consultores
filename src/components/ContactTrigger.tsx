"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import type { Locale } from "@/lib/translations"

const ContactFormModal = dynamic(
  () =>
    import("./ContactFormModal").then((module) => module.ContactFormModal),
  { ssr: false }
)

interface ContactTriggerProps {
  children: React.ReactNode
  className: string
  locale: Locale
  product?: {
    name: string
    startingPrice: string
  }
  solutionType?: string
}

export function ContactTrigger({
  children,
  className,
  locale,
  product,
  solutionType,
}: ContactTriggerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setIsOpen(true)}
      >
        {children}
      </button>
      {isOpen ? (
        <ContactFormModal
          isOpen
          locale={locale}
          product={product}
          solutionType={solutionType}
          onClose={() => setIsOpen(false)}
        />
      ) : null}
    </>
  )
}
