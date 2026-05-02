"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/translations"

interface HeaderContactModalProps {
  isOpen: boolean
  onClose: () => void
  locale?: Locale
}

export function HeaderContactModal({ isOpen, onClose, locale = "en" }: HeaderContactModalProps) {
  const t = getTranslations(locale)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    note: "",
  })

  const [selectedOptions, setSelectedOptions] = useState({
    setupCall: false,
    training: false,
    consulting: false,
    implementation: false,
  })

  const [privacyAccepted, setPrivacyAccepted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (option: keyof typeof selectedOptions) => {
    setSelectedOptions((prev) => ({ ...prev, [option]: !prev[option] }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", { ...formData, options: selectedOptions, privacyAccepted })
    setFormData({ name: "", email: "", note: "" })
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
        <h2 className="mb-2 text-2xl font-bold text-[#2f4858]">{t.headerContactForm.heading}</h2>
        <p className="mb-6 text-sm text-[#6b8393]">
          {t.headerContactForm.description}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#2f4858] mb-1">
              {t.headerContactForm.nameLabel} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded border border-[#e5e7eb] px-3 py-2 text-sm text-[#2f4858] focus:border-[#c9a961] focus:outline-none focus:ring-1 focus:ring-[#c9a961]"
              placeholder={t.headerContactForm.namePlaceholder}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2f4858] mb-1">
              {t.headerContactForm.emailLabel} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded border border-[#e5e7eb] px-3 py-2 text-sm text-[#2f4858] focus:border-[#c9a961] focus:outline-none focus:ring-1 focus:ring-[#c9a961]"
              placeholder={t.headerContactForm.emailPlaceholder}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2f4858] mb-1">
              {t.headerContactForm.noteLabel}
            </label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              rows={3}
              className="w-full rounded border border-[#e5e7eb] px-3 py-2 text-sm text-[#2f4858] focus:border-[#c9a961] focus:outline-none focus:ring-1 focus:ring-[#c9a961]"
              placeholder={t.headerContactForm.notePlaceholder}
            />
          </div>

          {/* Interest Checkboxes */}
          <div className="space-y-3 pt-4 border-t border-[#e5e7eb]">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="setupCall"
                checked={selectedOptions.setupCall}
                onChange={() => handleCheckboxChange("setupCall")}
                className="h-4 w-4 rounded border border-[#e5e7eb] cursor-pointer"
              />
              <label htmlFor="setupCall" className="ml-2 text-sm text-[#2f4858] cursor-pointer">
                {t.headerContactForm.setupCall}
              </label>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#2f4858]">{t.headerContactForm.requestMoreInfo}</p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="training"
                    checked={selectedOptions.training}
                    onChange={() => handleCheckboxChange("training")}
                    className="h-4 w-4 rounded border border-[#e5e7eb] cursor-pointer"
                  />
                  <label htmlFor="training" className="ml-2 text-sm text-[#2f4858] cursor-pointer">
                    {t.headerContactForm.training}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consulting"
                    checked={selectedOptions.consulting}
                    onChange={() => handleCheckboxChange("consulting")}
                    className="h-4 w-4 rounded border border-[#e5e7eb] cursor-pointer"
                  />
                  <label htmlFor="consulting" className="ml-2 text-sm text-[#2f4858] cursor-pointer">
                    {t.headerContactForm.consulting}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="implementation"
                    checked={selectedOptions.implementation}
                    onChange={() => handleCheckboxChange("implementation")}
                    className="h-4 w-4 rounded border border-[#e5e7eb] cursor-pointer"
                  />
                  <label htmlFor="implementation" className="ml-2 text-sm text-[#2f4858] cursor-pointer">
                    {t.headerContactForm.implementation}
                  </label>
                </div>
              </div>
            </div>
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
              {t.headerContactForm.privacyLabel} <a href={`/${locale}/impressum`} target="_blank" rel="noopener noreferrer" className="text-[#c9a961] hover:underline">{t.headerContactForm.privacyLink}</a>
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg border-2 border-[#c9a961] px-6 py-3 text-sm font-semibold text-[#c9a961] transition-colors duration-200 hover:bg-[#c9a961] hover:text-white"
            >
              {t.headerContactForm.cancel}
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-[#c9a961] px-6 py-3 text-sm font-semibold text-[#2f4858] transition-colors duration-200 hover:bg-[#b8985a]"
            >
              {t.headerContactForm.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
