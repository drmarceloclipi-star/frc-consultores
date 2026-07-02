export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto" aria-hidden>
      <svg
        viewBox="0 0 520 420"
        fill="none"
        className="w-full h-auto"
        role="img"
      >
        {/* Desktop code window */}
        <g className="frc-float-slow">
          <rect x="20" y="30" width="360" height="260" rx="14" fill="#2f4858" />
          <rect x="20" y="30" width="360" height="36" rx="14" fill="#22333f" />
          <rect x="20" y="52" width="360" height="14" fill="#22333f" />
          <circle cx="44" cy="48" r="5" fill="#c9a961" />
          <circle cx="62" cy="48" r="5" fill="#6b8393" />
          <circle cx="80" cy="48" r="5" fill="#3d5a6e" />

          {/* Code lines */}
          <rect x="48" y="92" width="90" height="10" rx="5" fill="#c9a961" />
          <rect x="150" y="92" width="140" height="10" rx="5" fill="#46647a" />
          <rect x="68" y="118" width="120" height="10" rx="5" fill="#6b8393" />
          <rect x="200" y="118" width="80" height="10" rx="5" fill="#46647a" />
          <rect x="68" y="144" width="180" height="10" rx="5" fill="#46647a" />
          <rect x="260" y="144" width="60" height="10" rx="5" fill="#c9a961" />
          <rect x="88" y="170" width="100" height="10" rx="5" fill="#6b8393" />
          <rect x="88" y="196" width="150" height="10" rx="5" fill="#46647a" />
          <rect x="48" y="222" width="70" height="10" rx="5" fill="#c9a961" />
          <rect x="130" y="222" width="110" height="10" rx="5" fill="#46647a" />
          <rect x="48" y="248" width="200" height="10" rx="5" fill="#3d5a6e" />
        </g>

        {/* Phone overlapping */}
        <g className="frc-float-fast">
          <rect
            x="330"
            y="120"
            width="150"
            height="280"
            rx="24"
            fill="#ffffff"
            stroke="#22333f"
            strokeWidth="6"
          />
          <rect x="330" y="120" width="150" height="280" rx="24" fill="#fafbfc" />
          <rect
            x="330"
            y="120"
            width="150"
            height="280"
            rx="24"
            fill="none"
            stroke="#22333f"
            strokeWidth="6"
          />
          <rect x="382" y="134" width="46" height="6" rx="3" fill="#22333f" />

          {/* App UI */}
          <rect x="352" y="160" width="106" height="52" rx="10" fill="#2f4858" />
          <rect x="362" y="174" width="56" height="8" rx="4" fill="#c9a961" />
          <rect x="362" y="190" width="80" height="7" rx="3.5" fill="#6b8393" />

          <rect x="352" y="224" width="50" height="50" rx="10" fill="#eef1f3" />
          <rect x="408" y="224" width="50" height="50" rx="10" fill="#eef1f3" />
          <rect x="352" y="280" width="106" height="10" rx="5" fill="#dfe5e9" />
          <rect x="352" y="298" width="76" height="10" rx="5" fill="#dfe5e9" />

          <rect x="352" y="330" width="106" height="38" rx="10" fill="#c9a961" />
          <rect x="378" y="344" width="54" height="10" rx="5" fill="#2f4858" />
        </g>

        {/* Gold orbit dot */}
        <circle cx="60" cy="330" r="8" fill="#c9a961" className="frc-float-fast" />
        <circle cx="470" cy="60" r="6" fill="#c9a961" opacity="0.6" className="frc-float-slow" />
      </svg>
    </div>
  )
}
