"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { useState } from "react"
import type { Locale } from "@/lib/translations"

const ContactFormModal = dynamic(
  () =>
    import("./ContactFormModal").then((module) => module.ContactFormModal),
  { ssr: false }
)

interface MobileNavigationProps {
  closeLabel: string
  contactLabel: string
  locale: Locale
  navigationLabel: string
  navItems: ReadonlyArray<{ href: string; label: string }>
  openLabel: string
}

export function MobileNavigation({
  closeLabel,
  contactLabel,
  locale,
  navigationLabel,
  navItems,
  openLabel,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="ml-auto rounded-md p-2 text-[#2f4858] transition-colors duration-200 hover:bg-gray-100"
        aria-label={isOpen ? closeLabel : openLabel}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        <svg
          aria-hidden="true"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {isOpen ? (
            <>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </>
          ) : (
            <>
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </>
          )}
        </svg>
      </button>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          className="absolute left-0 right-0 top-16 border-b border-gray-200 bg-white"
          aria-label={navigationLabel}
        >
          <div className="flex flex-col py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-gray-100 px-6 py-3 text-base text-[#2f4858] transition-colors duration-200 hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              className="mx-4 my-3 w-auto rounded-md bg-frc-gold px-4 py-2.5 text-center text-sm font-semibold text-frc-ink transition-colors duration-200 hover:bg-[#d3b674]"
              onClick={() => {
                setIsOpen(false)
                setIsContactOpen(true)
              }}
            >
              {contactLabel}
            </button>
          </div>
        </nav>
      ) : null}

      {isContactOpen ? (
        <ContactFormModal
          isOpen
          locale={locale}
          onClose={() => setIsContactOpen(false)}
        />
      ) : null}
    </div>
  )
}
