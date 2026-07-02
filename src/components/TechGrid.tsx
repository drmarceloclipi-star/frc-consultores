function PlusMark({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`absolute h-3 w-3 text-[#2f4858]/25 ${className}`}
      aria-hidden
    >
      <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export function TechGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 mx-auto hidden max-w-6xl px-4 sm:px-6 lg:block lg:px-8"
      aria-hidden
    >
      <div className="relative h-full border-l border-r border-[#2f4858]/[0.07]">
        <div className="absolute inset-y-0 left-1/2 w-px bg-[#2f4858]/[0.05]" />
        <PlusMark className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
        <PlusMark className="right-0 top-0 translate-x-1/2 -translate-y-1/2" />
        <PlusMark className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
        <PlusMark className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  )
}
