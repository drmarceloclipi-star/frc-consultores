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
    title: "O Momento App Store da IA",
    author: "Matthias Lübken",
    date: "6 de outubro de 2024",
    excerpt: "Sam Altman revelou o AppSDK da OpenAI, permitindo que desenvolvedores embutam Aplicativos completos diretamente no ChatGPT. Se você pensa sobre a transformação que a App Store do iPhone trouxe, combinada com a taxa de adoção do ChatGPT, as implicações são massivas.",
  },
  {
    slug: "coding-agents-beyond-coding",
    title: "Compreensão Técnica Profunda: Agentes de Código Além de Código",
    author: "Matthias Lübken",
    date: "Novembro de 2024",
    excerpt: "Entendemos arquiteturas de agentes do mundo da codificação. Sabemos como eles planejam, executam, lidam com erros e se adaptam.",
  },
  {
    slug: "microsoft-copilot-cowork-coding-agents-enterprise",
    title: "Microsoft Copilot Cowork: Agentes de Código para Empresa",
    author: "Ivan Pedrazas",
    date: "Outubro de 2024",
    excerpt: "Experiência prática com Claude Cowork e Microsoft Copilot Cowork. Sabemos o que eles podem (e não podem) fazer.",
  },
  {
    slug: "ai-native-companies-german-tech-firms",
    title: "Empresas Nativas de IA: Lições de Firmas de Tecnologia Alemã",
    author: "Dra. Anna Maria Gajda",
    date: "Setembro de 2024",
    excerpt: "O cenário evolui semanalmente. Ajudamos você a experimentar rápido, aprender o que funciona e se adaptar.",
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
                Inscrever-se
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
                      <span>3 min de leitura</span>
                    </div>

                    <h2 className="text-2xl font-bold text-[#2f4858] mb-4">
                      {post.title}
                    </h2>

                    <p className="text-base text-gray-700 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/pt/blog/${post.slug}`}
                      className="inline-flex items-center text-[#c9a961] font-semibold hover:underline"
                    >
                      Leia mais →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SubscribeModal isOpen={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} locale="pt" />
    </div>
  )
}
