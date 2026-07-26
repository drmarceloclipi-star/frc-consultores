import Link from "next/link"
import { getTranslations, type Locale } from "@/lib/translations"
import { ContactTrigger } from "./ContactTrigger"
import { MobileNavigation } from "./MobileNavigation"

interface HeaderProps {
  locale?: Locale
}

export function Header({ locale = "en" }: HeaderProps) {
  const t = getTranslations(locale)

  const navItems = [
    { label: t.header.solutions, href: `/${locale}/services` },
    { label: t.header.apps, href: `/${locale}/apps` },
    { label: t.header.cases, href: `/${locale}/cases` },
    { label: t.header.about, href: `/${locale}/about` },
  ]

  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto max-w-6xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center flex-shrink-0 mr-auto"
          aria-label="FRC"
        >
          {/* Pre-optimized static asset avoids a dynamic image backend on Firebase Hosting. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/frc-logo.webp"
            alt="FRC"
            width={96}
            height={32}
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8"
          aria-label={t.header.navigationLabel}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base font-medium text-frc-slate hover:text-frc-bronze transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <ContactTrigger
          locale={locale}
          className="hidden md:inline-block ml-6 lg:ml-8 px-5 py-2.5 bg-frc-gold text-frc-ink font-semibold text-sm md:text-base rounded-md hover:bg-[#d3b674] transition-colors duration-200"
        >
          {t.header.contact}
        </ContactTrigger>

        <MobileNavigation
          closeLabel={t.header.closeMenuLabel}
          contactLabel={t.header.contact}
          locale={locale}
          navigationLabel={t.header.navigationLabel}
          navItems={navItems}
          openLabel={t.header.openMenuLabel}
        />
      </div>
    </header>
  )
}
