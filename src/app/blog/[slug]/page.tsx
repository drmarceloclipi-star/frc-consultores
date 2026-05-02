import { BlogPostContent } from "./blog-post-content"

interface BlogPost {
  title: string
  author: string
  date: string
  excerpt: string
  content: string
}

const blogPosts: Record<string, BlogPost> = {
  "coding-agents-beyond-coding": {
    title: "Deep Technical Understanding: Coding Agents Beyond Coding",
    author: "Matthias Lübken",
    date: "November 2024",
    excerpt: "We understand agent architectures from the coding world. We know how they plan, execute, handle errors, and adapt.",
    content: "Coding agents represent a fundamental shift in how we approach software development and business automation. Understanding their architecture is key to implementing them effectively across your organization.",
  },
  "microsoft-copilot-cowork-coding-agents-enterprise": {
    title: "Microsoft Copilot Cowork: Coding Agents for Enterprise",
    author: "Ivan Pedrazas",
    date: "October 2024",
    excerpt: "Hands-on experience with Claude Cowork and Microsoft Copilot Cowork. We know what they can (and can't) do.",
    content: "Enterprise adoption of coding agents requires deep platform knowledge. We share insights from real-world implementations of both Claude Cowork and Microsoft Copilot Cowork, helping you choose the right tool for your needs.",
  },
  "ai-native-companies-german-tech-firms": {
    title: "AI-Native Companies: Lessons from German Tech Firms",
    author: "Dr. Anna Maria Gajda",
    date: "September 2024",
    excerpt: "The landscape evolves weekly. We help you experiment fast, learn what works, and adapt.",
    content: "German technology companies are leading the charge in building AI-native operations. Learn from their experiences and discover how to transform your organization to leverage AI agents effectively.",
  },
  "the-app-store-moment-of-ai": {
    title: "The App-Store Moment of AI",
    author: "Matthias Lübken",
    date: "October 6, 2024",
    excerpt: "Sam Altman revealed OpenAI's AppSDK, allowing developers to embed full-fledged Apps directly into ChatGPT. If you think about the transformation the iPhone App Store brought, combined with ChatGPT's adoption pace, the implications are massive.",
    content: "Sam Altman revealed OpenAI's AppSDK, allowing developers to embed full-fledged Apps directly into ChatGPT. If you think about the transformation the iPhone App Store brought, combined with ChatGPT's adoption pace, the implications are massive. This marks a fundamental shift in how applications will be distributed and accessed in the age of AI.",
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <main className="flex-1">
          <section className="w-full bg-white py-20 md:py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold text-[#2f4858]">Article not found</h1>
              <p className="mt-4 text-[#6b8393]">
                The blog post you&apos;re looking for doesn&apos;t exist. <a href="/en/blog" className="text-[#c9a961] hover:underline">Return to blog</a>
              </p>
            </div>
          </section>
        </main>
      </div>
    )
  }

  return <BlogPostContent post={post} />
}
