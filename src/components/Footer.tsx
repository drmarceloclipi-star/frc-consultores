import Link from "next/link"
import { Globe } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/translations"

interface FooterProps {
  locale?: Locale
  path?: "" | "/about" | "/cases" | "/impressum" | "/services"
}

export function Footer({ locale = "en", path = "" }: FooterProps) {
  const t = getTranslations(locale)
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 py-6 text-center md:flex-row md:justify-between md:text-left">
        {/* Left Section: Copyright */}
        <div className="min-w-0">
          <p className="text-sm font-normal text-gray-600">
            {t.footer.copyright}
          </p>
        </div>

        {/* Right Section: Site links & Language Selector */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:flex-shrink-0 md:gap-8">
          <Link
            href={`/${locale}/services`}
            className="text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            {t.header.solutions}
          </Link>

          <Link
            href={`/${locale}/cases`}
            className="text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            {t.header.cases}
          </Link>

          {/* Imprint Link */}
          <Link
            href={`/${locale}/impressum`}
            className="text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            {t.footer.imprint}
          </Link>

          {/* Language Selector */}
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-5 flex-shrink-0 text-gray-600" />
            <div className="flex gap-3 text-sm font-normal">
              <Link
                href={`/en${path}`}
                className={`transition-colors duration-200 ${
                  locale === "en"
                    ? "text-gray-900 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                English
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href={`/pt${path}`}
                className={`transition-colors duration-200 ${
                  locale === "pt"
                    ? "text-gray-900 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Português
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}
