"use client"

import { useState, useMemo } from "react"
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
      if (lower.includes("training") || lower.includes("workshop") || lower.includes("webinar") || lower.includes("academy")) {
        options.training = true
      } else if (lower.includes("consulting")) {
        options.consulting = true
      } else if (lower.includes("implementation")) {
        options.implementation = true
      } else if (lower.includes("automation") || lower.includes("toolkit")) {
        options.consulting = true
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
    console.log("Form submitted:", { ...formData, options: displayedOptions, privacyAccepted, solutionType })
    setFormData({ name: "", email: "", company: "", message: "" })
    setSelectedOptions({ setupCall: false, training: false, consulting: false, implementation: false })
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
    </div>
  )
}
