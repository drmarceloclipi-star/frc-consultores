import { enTranslations } from "./en"
import { ptTranslations } from "./pt"

export type Locale = "en" | "pt"

export function getTranslations(locale: Locale) {
  const translations = {
    en: enTranslations,
    pt: ptTranslations,
  }
  return translations[locale]
}

export { enTranslations, ptTranslations }
