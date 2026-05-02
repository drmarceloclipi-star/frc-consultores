"use client"

import { useState } from "react"
import { SubscribeModal } from "@/components/SubscribeModal"

interface BlogPost {
  title: string
  author: string
  date: string
  excerpt: string
  content: string
}

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <article className="w-full bg-white py-20 md:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <header className="mb-12">
              <h1 className="mb-6 text-4xl font-bold text-[#2f4858] md:text-5xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-[#6b8393]">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="mb-8 text-lg text-[#6b8393] leading-relaxed">
                {post.excerpt}
              </p>

              <p className="mb-8 text-base text-[#6b8393] leading-relaxed">
                {post.content}
              </p>

              <div className="mt-12 border-t border-gray-200 pt-8">
                <div className="flex items-center justify-between">
                  <a
                    href="/en/blog"
                    className="text-[#c9a961] hover:text-[#b39550] transition-colors"
                  >
                    ← Back to blog
                  </a>
                  <button
                    onClick={() => setIsSubscribeOpen(true)}
                    className="px-6 py-2 bg-[#c9a961] text-[#2f4858] font-semibold rounded-lg hover:bg-[#b8985a] transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <SubscribeModal isOpen={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} />
    </div>
  )
}
