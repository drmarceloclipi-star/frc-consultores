"use client"

import { useState } from "react"
import Link from "next/link"
import { SubscribeModal } from "@/components/SubscribeModal"

interface BlogPost {
  title: string
  author: string
  date: string
  excerpt: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    slug: "the-app-store-moment-of-ai",
    title: "The App-Store Moment of AI",
    author: "Matthias Lübken",
    date: "October 6, 2024",
    excerpt: "Sam Altman revealed OpenAI's AppSDK, allowing developers to embed full-fledged Apps directly into ChatGPT. If you think about the transformation the iPhone App Store brought, combined with ChatGPT's adoption pace, the implications are massive.",
  },
  {
    slug: "coding-agents-beyond-coding",
    title: "Deep Technical Understanding: Coding Agents Beyond Coding",
    author: "Matthias Lübken",
    date: "November 2024",
    excerpt: "We understand agent architectures from the coding world. We know how they plan, execute, handle errors, and adapt.",
  },
  {
    slug: "microsoft-copilot-cowork-coding-agents-enterprise",
    title: "Microsoft Copilot Cowork: Coding Agents for Enterprise",
    author: "Ivan Pedrazas",
    date: "October 2024",
    excerpt: "Hands-on experience with Claude Cowork and Microsoft Copilot Cowork. We know what they can (and can't) do.",
  },
  {
    slug: "ai-native-companies-german-tech-firms",
    title: "AI-Native Companies: Lessons from German Tech Firms",
    author: "Dr. Anna Maria Gajda",
    date: "September 2024",
    excerpt: "The landscape evolves weekly. We help you experiment fast, learn what works, and adapt.",
  },
]

export default function Blog() {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full bg-white py-20 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-16">
              <h1 className="text-4xl font-bold text-[#2f4858] md:text-5xl">
                Blog
              </h1>
              <button
                onClick={() => setIsSubscribeOpen(true)}
                className="px-6 py-2 bg-[#c9a961] text-[#2f4858] font-semibold rounded-lg hover:bg-[#b8985a] transition-colors"
              >
                Subscribe
              </button>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 gap-8">
              {blogPosts.map((post) => (
                <article key={post.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Featured Image */}
                  <div className="w-full h-64 bg-black relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-white text-4xl font-bold">
                          AI Engineer
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>3 min read</span>
                    </div>

                    <h2 className="text-2xl font-bold text-[#2f4858] mb-4">
                      {post.title}
                    </h2>

                    <p className="text-base text-gray-700 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#c9a961] font-semibold hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SubscribeModal isOpen={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} />
    </div>
  )
}
