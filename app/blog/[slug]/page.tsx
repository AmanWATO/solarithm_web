import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BlogCard from "@/components/blog-card"
import { getBlogPost, getRelatedPosts } from "@/lib/blog"
// Import the AnimatedPageWrapper
import AnimatedPageWrapper from "@/components/animated-page-wrapper"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Wrap the content with AnimatedPageWrapper
export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)
  const relatedPosts = getRelatedPosts(params.slug, 3)

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <AnimatedPageWrapper>
          <div className="flex flex-1 flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-[#FFC857]">Blog Post Not Found</h1>
            <p className="mt-4 text-lg text-[#121212]">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="mt-8 inline-flex items-center text-[#FF6B35] hover:text-[#2EC4B6]">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Blog
            </Link>
          </div>
        </AnimatedPageWrapper>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AnimatedPageWrapper>
        {/* Rest of the content remains the same */}
        {/* Hero Section */}
        <section className="relative bg-[#1A1A2E] px-4 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src={post.coverImage || "/placeholder.svg?height=600&width=1200"}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-block rounded-full bg-[#1A1A2E]/50 px-4 py-1.5 text-sm font-medium text-[#EAEAEA] backdrop-blur-sm">
              {post.category}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#FFC857] sm:text-5xl md:text-6xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[#EAEAEA]">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="bg-[#F9F9F9] dark:bg-[#1A1A2E]/30 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-xl bg-[#F9F9F9] dark:bg-[#1A1A2E]/50 shadow-lg">
              <div className="relative aspect-video">
                <Image
                  src={post.coverImage || "/placeholder.svg?height=600&width=1200"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="prose prose-lg max-w-none prose-headings:text-[#1A1A2E] dark:prose-headings:text-[#EAEAEA] prose-a:text-[#FF6B35] dark:prose-invert">
                  {post.content.map((section, index) => {
                    if (section.type === "paragraph") {
                      return (
                        <p key={index} className="text-[#121212]">
                          {section.content}
                        </p>
                      )
                    } else if (section.type === "heading") {
                      return (
                        <h2 key={index} className="mt-8 mb-4 text-2xl font-bold text-[#1A1A2E]">
                          {section.content}
                        </h2>
                      )
                    } else if (section.type === "list") {
                      return (
                        <ul key={index} className="my-4 list-disc pl-6">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-[#121212]">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )
                    } else if (section.type === "image") {
                      return (
                        <div key={index} className="my-8">
                          <div className="relative aspect-video overflow-hidden rounded-lg">
                            <Image
                              src={section.src || "/placeholder.svg?height=400&width=800"}
                              alt={section.alt || "Blog image"}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {section.caption && (
                            <p className="mt-2 text-center text-sm italic text-[#121212]/70">{section.caption}</p>
                          )}
                        </div>
                      )
                    } else if (section.type === "quote") {
                      return (
                        <blockquote
                          key={index}
                          className="my-6 border-l-4 border-solar-gold bg-[#EAEAEA]/30 p-4 italic text-[#121212]"
                        >
                          {section.content}
                          {section.author && <footer className="mt-2 text-right text-sm">— {section.author}</footer>}
                        </blockquote>
                      )
                    }
                    return null
                  })}
                </div>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#EAEAEA] px-3 py-1 text-sm font-medium text-[#121212]">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Share */}
                <div className="mt-8 flex items-center justify-between border-t border-cloud-gray pt-6">
                  <div>
                    <Link href="/blog" className="inline-flex items-center text-[#FF6B35] hover:text-[#2EC4B6]">
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Back to Blog
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-[#121212]">Share:</span>
                    <div className="flex space-x-2">
                      <button
                        className="rounded-full bg-[#EAEAEA] p-2 text-[#121212] transition-colors hover:bg-[#FF6B35] hover:text-[#F9F9F9]"
                        aria-label="Share on Twitter"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </button>
                      <button
                        className="rounded-full bg-[#EAEAEA] p-2 text-[#121212] transition-colors hover:bg-[#FF6B35] hover:text-[#F9F9F9]"
                        aria-label="Share on Facebook"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </button>
                      <button
                        className="rounded-full bg-[#EAEAEA] p-2 text-[#121212] transition-colors hover:bg-[#FF6B35] hover:text-[#F9F9F9]"
                        aria-label="Share on LinkedIn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </button>
                      <button
                        className="rounded-full bg-[#EAEAEA] p-2 text-[#121212] transition-colors hover:bg-[#FF6B35] hover:text-[#F9F9F9]"
                        aria-label="Copy link"
                      >
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 rounded-xl bg-[#EAEAEA] p-6">
              <div className="flex flex-col items-center sm:flex-row sm:items-start">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={post.authorImage || "/placeholder.svg?height=80&width=80"}
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 text-center sm:ml-6 sm:mt-0 sm:text-left">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">{post.author}</h3>
                  <p className="text-sm text-[#2EC4B6]">{post.authorRole}</p>
                  <p className="mt-2 text-[#121212]">{post.authorBio}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="bg-[#EAEAEA] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#FFC857]">Related Articles</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <BlogCard
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    imageUrl={post.coverImage}
                    category={post.category}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1A1A2E] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#FFC857] sm:text-4xl">
              Ready to transform your solar business?
            </h2>
            <p className="mt-4 text-xl text-[#EAEAEA]">
              Join our waitlist to be among the first to experience Solarithm's powerful features.
            </p>
            <div className="mt-8">
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center rounded-full bg-[#FFC857] px-8 py-3 text-lg font-medium text-[#121212] transition-all hover:bg-[#FFC857]/90 focus:outline-none focus:ring-2 focus:ring-solar-gold focus:ring-offset-2 focus:ring-offset-midnight-blue"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </section>
      </AnimatedPageWrapper>
      <Footer />
    </div>
  )
}
