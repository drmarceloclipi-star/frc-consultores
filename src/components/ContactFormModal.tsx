"use client"

import { useState, useMemo, useEffect } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/translations"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
  solutionType?: string
  locale?: Locale
}

export function ContactFormModal({ isOpen, onClose, solutionType, locale = "en" }: ContactFormModalProps) {
  const t = getTranslations(locale)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [selectedOptions, setSelectedOptions] = useState({
    setupCall: false,
    training: false,
    consulting: false,
    implementation: false,
  })

  const [privacyAccepted, setPrivacyAccepted] = useState(false)

  const preselectedOptions = useMemo(() => {
    const options = {
      setupCall: false,
      training: false,
      consulting: false,
      implementation: false,
    }

    if (solutionType) {
      const lower = solutionType.toLowerCase()
      if (lower.includes("consulting")) {
        options.training = true
      } else if (lower.includes("automation")) {
        options.consulting = true
      } else if (lower.includes("toolkit")) {
        options.implementation = true
      } else {
        options.setupCall = true
      }
    }

    return options
  }, [solutionType])

  const displayedOptions = useMemo(() => {
    return Object.keys(selectedOptions).some((key) => selectedOptions[key as keyof typeof selectedOptions])
      ? selectedOptions
      : preselectedOptions
  }, [selectedOptions, preselectedOptions])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (option: keyof typeof selectedOptions) => {
    setSelectedOptions((prev) => ({ ...prev, [option]: !prev[option] }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const interests = [
      displayedOptions.setupCall && t.contactForm.setupCall,
      displayedOptions.training && t.contactForm.training,
      displayedOptions.consulting && t.contactForm.consulting,
      displayedOptions.implementation && t.contactForm.implementation,
    ].filter(Boolean)
    const subject =
      locale === "pt"
        ? `Contato pelo site — ${formData.name}`
        : `Website contact — ${formData.name}`
    const bodyLines = [
      `${t.contactForm.nameLabel}: ${formData.name}`,
      `${t.contactForm.emailLabel}: ${formData.email}`,
      formData.company && `${t.contactForm.companyLabel}: ${formData.company}`,
      interests.length > 0 && `${t.contactForm.requestMoreInfo} ${interests.join(", ")}`,
      "",
      formData.message,
    ].filter((line): line is string => typeof line === "string")
    window.location.href = `mailto:contato@frcconsultores.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`
    setFormData({ name: "", email: "", company: "", message: "" })
    setSelectedOptions({ setupCall: false, training: false, consulting: false, implementation: false })
    setPrivacyAccepted(false)
    onClose()
  }

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[90dvh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-6 sm:p-8 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[#6b8393] hover:text-[#2f4858]"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <h2 className="mb-2 text-2xl font-bold text-[#2f4858]">{t.contactForm.heading}</h2>
        <p className="mb-6 text-sm text-[#6b8393]">
          {t.contactForm.description}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#2f4858] mb-1">
              {t.contactForm.nameLabel}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded border border-[#e5e7eb] px-3 py-2 text-sm text-[#2f4858] focus:border-[#c9a961] focus:outline-none focus:ring-1 focus:ring-[#c9a961]"
              placeholder={t.contactForm.namePlaceholder}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2f4858] mb-1">
              {t.contactForm.emailLabel}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded border border-[#e5e7eb] px-3 py-2 text-sm text-[#2f4858] focus:border-[#c9a961] focus:outline-none focus:ring-1 focus:ring-[#c9a961]"
              placeholder={t.contactForm.emailPlaceholder}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2f4858] mb-1">
              {t.contactForm.companyLabel}
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded border border-[#e5e7eb] px-3 py-2 text-sm text-[#2f4858] focus:border-[#c9a961] focus:outline-none focus:ring-1 focus:ring-[#c9a961]"
              placeholder={t.contactForm.companyPlaceholder}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2f4858] mb-1">
              {t.contactForm.messageLabel}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full rounded border border-[#e5e7eb] px-3 py-2 text-sm text-[#2f4858] focus:border-[#c9a961] focus:outline-none focus:ring-1 focus:ring-[#c9a961]"
              placeholder={t.contactForm.messagePlaceholder}
            />
          </div>

          {/* Interest Checkboxes */}
          <div className="space-y-3 pt-4 border-t border-[#e5e7eb]">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="setupCall"
                checked={displayedOptions.setupCall}
                onChange={() => handleCheckboxChange("setupCall")}
                className="h-4 w-4 rounded border border-[#e5e7eb] cursor-pointer"
              />
              <label htmlFor="setupCall" className="ml-2 text-sm text-[#2f4858] cursor-pointer">
                {t.contactForm.setupCall}
              </label>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#2f4858]">{t.contactForm.requestMoreInfo}</p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="training"
                    checked={displayedOptions.training}
                    onChange={() => handleCheckboxChange("training")}
                    className="h-4 w-4 rounded border border-[#e5e7eb] cursor-pointer"
                  />
                  <label htmlFor="training" className="ml-2 text-sm text-[#2f4858] cursor-pointer">
                    {t.contactForm.training}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consulting"
                    checked={displayedOptions.consulting}
                    onChange={() => handleCheckboxChange("consulting")}
                    className="h-4 w-4 rounded border border-[#e5e7eb] cursor-pointer"
                  />
                  <label htmlFor="consulting" className="ml-2 text-sm text-[#2f4858] cursor-pointer">
                    {t.contactForm.consulting}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="implementation"
                    checked={displayedOptions.implementation}
                    onChange={() => handleCheckboxChange("implementation")}
                    className="h-4 w-4 rounded border border-[#e5e7eb] cursor-pointer"
                  />
                  <label htmlFor="implementation" className="ml-2 text-sm text-[#2f4858] cursor-pointer">
                    {t.contactForm.implementation}
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Notice Checkbox */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="privacyAccepted"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              required
              className="h-4 w-4 rounded border border-[#e5e7eb] cursor-pointer mt-1"
            />
            <label htmlFor="privacyAccepted" className="ml-2 text-sm text-[#6b8393] cursor-pointer">
              {t.contactForm.privacyLabel} <a href={`/${locale}/impressum`} target="_blank" rel="noopener noreferrer" className="text-[#c9a961] hover:underline">{t.contactForm.privacyLink}</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#c9a961] px-6 py-3 text-sm font-semibold text-[#2f4858] transition-colors duration-200 hover:bg-[#b8985a]"
          >
            {t.contactForm.sendMessage}
          </button>
        </form>
      </div>
    </div>,
    document.body
  )
}
