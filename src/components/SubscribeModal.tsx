"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/translations"

interface SubscribeModalProps {
  isOpen: boolean
  onClose: () => void
  locale?: Locale
}

export function SubscribeModal({ isOpen, onClose, locale = "en" }: SubscribeModalProps) {
  const t = getTranslations(locale)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  const [privacyAccepted, setPrivacyAccepted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription:", { ...formData, privacyAccepted })
    setFormData({ name: "", email: "" })
    setPrivacyAccepted(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[#6b8393] hover:text-[#2f4858]"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <h2 className="mb-2 text-2xl font-bold text-[#2f4858]">{t.subscribeForm.heading}</h2>
        <p className="mb-6 text-sm text-[#6b8393]">
          {t.subscribeForm.description}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#2f4858] mb-1">
              {t.subscribeForm.nameLabel}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded border border-[#e5e7eb] px-3 py-2 text-sm text-[#2f4858] focus:border-[#c9a961] focus:outline-none focus:ring-1 focus:ring-[#c9a961]"
              placeholder={t.subscribeForm.namePlaceholder}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2f4858] mb-1">
              {t.subscribeForm.emailLabel}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded border border-[#e5e7eb] px-3 py-2 text-sm text-[#2f4858] focus:border-[#c9a961] focus:outline-none focus:ring-1 focus:ring-[#c9a961]"
              placeholder={t.subscribeForm.emailPlaceholder}
            />
          </div>

          {/* Privacy Notice Checkbox */}
          <div className="flex items-start pt-4 border-t border-[#e5e7eb]">
            <input
              type="checkbox"
              id="privacyAccepted"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              required
              className="h-4 w-4 rounded border border-[#e5e7eb] cursor-pointer mt-1"
            />
            <label htmlFor="privacyAccepted" className="ml-2 text-sm text-[#6b8393] cursor-pointer">
              {t.subscribeForm.privacyLabel} <a href={`/${locale}/impressum`} target="_blank" rel="noopener noreferrer" className="text-[#c9a961] hover:underline">{t.subscribeForm.privacyLink}</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#c9a961] px-6 py-3 text-sm font-semibold text-[#2f4858] transition-colors duration-200 hover:bg-[#b8985a]"
          >
            {t.subscribeForm.subscribe}
          </button>
        </form>
      </div>
    </div>
  )
}
