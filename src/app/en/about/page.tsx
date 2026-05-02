"use client"

interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  linkedinUrl: string
}

const teamMembers: TeamMember[] = [
  {
    id: "ml",
    name: "Matthias Lübken",
    role: "",
    description:
      "With years of experience building and scaling developer tools, Matthias helps teams adopt AI agents effectively. He understands the challenges of implementing new technology in real-world business environments and guides you through the practical steps to success.",
    linkedinUrl: "#",
  },
  {
    id: "ip",
    name: "Ivan Pedrazas",
    role: "",
    description:
      "Ivan combines technical depth with practical business insight. He helps organizations build robust AI agent solutions that actually work in production, and trains teams to maintain and evolve them over time.",
    linkedinUrl: "#",
  },
  {
    id: "ag",
    name: "Dr. Anna Maria Gajda",
    role: "Advisory",
    description:
      "Anna brings deep expertise in transforming complex processes into streamlined workflows. She works closely with teams to identify where AI agents can make the biggest impact and ensures smooth enablement and adoption across organizations.",
    linkedinUrl: "#",
  },
]

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* Header */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20 flex flex-col items-center text-center">
              <h1 className="mb-6 text-4xl font-bold text-[#2f4858] md:text-5xl">
                The <span className="text-[#c9a961]">Agent Whisperers</span>
              </h1>

              <p className="mx-auto max-w-2xl text-base font-normal text-[#6b8393] leading-relaxed md:text-lg">
                AI agents are transforming how businesses work. We&apos;ve been deep
                in this space, learning what works and what doesn&apos;t. Now we&apos;re
                here to help you navigate this transformation with confidence.
              </p>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center"
                >
                  {/* Avatar Circle */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2f4858] to-[#6b8393] flex items-center justify-center text-white text-3xl font-bold mb-6">
                    {member.id.toUpperCase()}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-[#2f4858] mb-2">
                    {member.name}
                  </h3>

                  {/* Role */}
                  {member.role && (
                    <p className="text-sm font-semibold text-[#c9a961] mb-4">
                      {member.role}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-[#6b8393] leading-relaxed mb-6 flex-grow">
                    {member.description}
                  </p>

                  {/* LinkedIn Link */}
                  <a
                    href={member.linkedinUrl}
                    className="inline-flex items-center gap-2 text-[#c9a961] font-semibold hover:underline"
                  >
                    <span>🔗</span>
                    Connect on LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-[#3a4d5c] py-20 md:py-32">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Let&apos;s Talk About Your Challenges
            </h2>
            <p className="mb-8 text-base text-gray-100">
              Whether you&apos;re just starting to explore AI agents or are ready to
              implement them, we&apos;re here to help.
            </p>
            <button className="bg-[#c9a961] text-[#2f4858] px-8 py-3 rounded font-semibold hover:bg-[#b0925a] transition">
              Get in Touch
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
