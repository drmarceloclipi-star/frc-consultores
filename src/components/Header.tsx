"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ContactFormModal } from "./ContactFormModal"
import { getTranslations, type Locale } from "@/lib/translations"

interface HeaderProps {
  locale?: Locale
}

export function Header({ locale = "en" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const router = useRouter()
  const t = getTranslations(locale)

  const navItems = [
    { label: t.header.whyNow, href: "#", scrollToTop: true },
    { label: t.header.solutions, href: "#solutions" },
    { label: t.header.about, href: `/${locale}/about` },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleWhyNowClick = () => {
    const localePaths = new RegExp(`^/(en|pt)/?$`)
    const isHomePage =
      window.location.pathname === "/" || localePaths.test(window.location.pathname)

    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push(`/${locale}`)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto max-w-6xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center flex-shrink-0 mr-auto">
          <span className="text-lg md:text-xl font-bold text-[#2f4858]">
            FRC Consultores
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (item.scrollToTop) {
                  e.preventDefault()
                  handleWhyNowClick()
                }
              }}
              className="text-base font-medium text-[#2f4858] hover:text-[#c9a961] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <button
          onClick={() => setIsContactModalOpen(true)}
          className="hidden md:inline-block ml-6 lg:ml-8 px-5 py-2.5 bg-[#c9a961] text-[#2f4858] font-semibold text-sm md:text-base rounded-md hover:bg-[#b39550] transition-colors duration-200"
        >
          {t.header.contact}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden ml-auto p-2 text-[#2f4858] hover:bg-gray-100 rounded-md transition-colors duration-200"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 md:hidden">
          <div className="flex flex-col py-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.scrollToTop) {
                    e.preventDefault()
                    handleWhyNowClick()
                  }
                  closeMenu()
                }}
                className="px-6 py-3 text-base text-[#2f4858] hover:bg-gray-50 border-b border-gray-100 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <button
              onClick={() => {
                setIsContactModalOpen(true)
                closeMenu()
              }}
              className="mx-4 my-3 px-4 py-2.5 bg-[#c9a961] text-[#2f4858] font-semibold text-sm rounded-md hover:bg-[#b39550] transition-colors duration-200 text-center w-auto"
            >
              {t.header.contact}
            </button>
          </div>
        </nav>
      )}

      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} locale={locale} />
    </header>
  )
}
