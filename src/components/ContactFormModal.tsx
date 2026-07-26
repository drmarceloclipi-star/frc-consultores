"use client"

import { useState, useMemo, useEffect, useId, useRef } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/translations"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
  product?: {
    name: string
    startingPrice: string
  }
  solutionType?: string
  locale?: Locale
}

export function ContactFormModal({
  isOpen,
  onClose,
  product,
  solutionType,
  locale = "en",
}: ContactFormModalProps) {
  const t = getTranslations(locale)
  const id = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const headingId = `${id}-heading`
  const descriptionId = `${id}-description`
  const nameId = `${id}-name`
  const emailId = `${id}-email`
  const companyId = `${id}-company`
  const messageId = `${id}-message`
  const setupCallId = `${id}-setup-call`
  const trainingId = `${id}-training`
  const consultingId = `${id}-consulting`
  const implementationId = `${id}-implementation`
  const privacyId = `${id}-privacy`
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: product
      ? locale === "pt"
        ? `Tenho interesse no pacote ${product.name}, a partir de ${product.startingPrice}.`
        : `I am interested in the ${product.name} package, starting at ${product.startingPrice}.`
      : "",
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
        ? `Diagnóstico de app — ${product?.name ?? formData.name}`
        : `App diagnosis — ${product?.name ?? formData.name}`
    const bodyLines = [
      `${t.contactForm.nameLabel}: ${formData.name}`,
      `${t.contactForm.emailLabel}: ${formData.email}`,
      formData.company && `${t.contactForm.companyLabel}: ${formData.company}`,
      product &&
        `${t.contactForm.selectedProductLabel}: ${product.name} (${t.contactForm.startingPriceLabel} ${product.startingPrice})`,
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

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        onClose()
        return
      }

      if (e.key !== "Tab" || !dialogRef.current) return

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      )

      if (focusableElements.length === 0) {
        e.preventDefault()
        dialogRef.current.focus()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus()
    })

    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"

    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
      if (previousFocusRef.current && document.contains(previousFocusRef.current)) {
        previousFocusRef.current.focus()
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="relative max-h-[90dvh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-6 sm:p-8 shadow-lg"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        aria-describedby={descriptionId}
        tabIndex={-1}
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md p-1 text-frc-muted transition-colors hover:bg-gray-100 hover:text-frc-slate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frc-bronze focus-visible:ring-offset-2"
          aria-label={t.contactForm.closeLabel}
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <h2 id={headingId} className="mb-2 pr-10 text-2xl font-bold text-frc-slate">
          {t.contactForm.heading}
        </h2>
        <p id={descriptionId} className="mb-6 text-sm text-frc-muted">
          {t.contactForm.description}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor={nameId} className="mb-1 block text-sm font-medium text-frc-slate">
              {t.contactForm.nameLabel}
            </label>
            <input
              id={nameId}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded border border-[#e5e7eb] px-3 py-2 text-sm text-frc-slate placeholder:text-frc-muted focus:border-frc-bronze focus:outline-none focus:ring-1 focus:ring-frc-bronze"
              placeholder={t.contactForm.namePlaceholder}
            />
          </div>

          <div>
            <label htmlFor={emailId} className="mb-1 block text-sm font-medium text-frc-slate">
              {t.contactForm.emailLabel}
            </label>
            <input
              id={emailId}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded border border-[#e5e7eb] px-3 py-2 text-sm text-frc-slate placeholder:text-frc-muted focus:border-frc-bronze focus:outline-none focus:ring-1 focus:ring-frc-bronze"
              placeholder={t.contactForm.emailPlaceholder}
            />
          </div>

          <div>
            <label htmlFor={companyId} className="mb-1 block text-sm font-medium text-frc-slate">
              {t.contactForm.companyLabel}
            </label>
            <input
              id={companyId}
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded border border-[#e5e7eb] px-3 py-2 text-sm text-frc-slate placeholder:text-frc-muted focus:border-frc-bronze focus:outline-none focus:ring-1 focus:ring-frc-bronze"
              placeholder={t.contactForm.companyPlaceholder}
            />
          </div>

          <div>
            <label htmlFor={messageId} className="mb-1 block text-sm font-medium text-frc-slate">
              {t.contactForm.messageLabel}
            </label>
            <textarea
              id={messageId}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full rounded border border-[#e5e7eb] px-3 py-2 text-sm text-frc-slate placeholder:text-frc-muted focus:border-frc-bronze focus:outline-none focus:ring-1 focus:ring-frc-bronze"
              placeholder={t.contactForm.messagePlaceholder}
            />
          </div>

          {/* Interest Checkboxes */}
          <div className="space-y-3 pt-4 border-t border-[#e5e7eb]">
            <div className="flex items-center">
              <input
                type="checkbox"
                id={setupCallId}
                checked={displayedOptions.setupCall}
                onChange={() => handleCheckboxChange("setupCall")}
                className="h-4 w-4 rounded border border-[#e5e7eb] cursor-pointer"
              />
              <label htmlFor={setupCallId} className="ml-2 cursor-pointer text-sm text-frc-slate">
                {t.contactForm.setupCall}
              </label>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-frc-slate">{t.contactForm.requestMoreInfo}</p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={trainingId}
                    checked={displayedOptions.training}
                    onChange={() => handleCheckboxChange("training")}
                    className="h-4 w-4 rounded border border-[#e5e7eb] cursor-pointer"
                  />
                  <label htmlFor={trainingId} className="ml-2 cursor-pointer text-sm text-frc-slate">
                    {t.contactForm.training}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={consultingId}
                    checked={displayedOptions.consulting}
                    onChange={() => handleCheckboxChange("consulting")}
                    className="h-4 w-4 rounded border border-[#e5e7eb] cursor-pointer"
                  />
                  <label htmlFor={consultingId} className="ml-2 cursor-pointer text-sm text-frc-slate">
                    {t.contactForm.consulting}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={implementationId}
                    checked={displayedOptions.implementation}
                    onChange={() => handleCheckboxChange("implementation")}
                    className="h-4 w-4 rounded border border-[#e5e7eb] cursor-pointer"
                  />
                  <label htmlFor={implementationId} className="ml-2 cursor-pointer text-sm text-frc-slate">
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
              id={privacyId}
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              required
              className="h-4 w-4 rounded border border-[#e5e7eb] cursor-pointer mt-1"
            />
            <label htmlFor={privacyId} className="ml-2 cursor-pointer text-sm text-frc-muted">
              {t.contactForm.privacyLabel}{" "}
              <a
                href={`/${locale}/impressum`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-frc-bronze underline decoration-1 underline-offset-4 hover:text-frc-ink"
              >
                {t.contactForm.privacyLink}
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-frc-gold px-6 py-3 text-sm font-semibold text-frc-ink transition-colors duration-200 hover:bg-[#d3b674] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frc-bronze focus-visible:ring-offset-2"
          >
            {t.contactForm.sendMessage}
          </button>
        </form>
      </div>
    </div>,
    document.body
  )
}
