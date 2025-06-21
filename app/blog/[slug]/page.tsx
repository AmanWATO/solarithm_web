import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BlogCard from "@/components/blog-card"
import { getBlogPost, getRelatedPosts } from "@/lib/blog"
import AnimatedPageWrapper from "@/components/animated-page-wrapper"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  const relatedPosts = getRelatedPosts(slug, 3)

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <AnimatedPageWrapper>
          <div className="flex flex-1 flex-col items-center justify-center py-20">
            <h1 className="text-3xl font-bold gradient-text">Blog Post Not Found</h1>
            <p className="mt-4 text-lg text-muted-foreground">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="mt-8 btn-primary inline-flex items-center">
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
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 pt-32 pb-20 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-20" />
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src={post.coverImage || "/placeholder.svg?height=600&width=1200"}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-block rounded-full bg-solar-500/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-solar-300 border border-solar-500/30">
              {post.category}
            </div>
            <h1 className="text-responsive-xl font-display font-bold tracking-tight text-white mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300">
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
        <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <article className="card-modern overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={post.coverImage || "/placeholder.svg?height=600&width=1200"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-primary">
                  {post.content.map((section, index) => {
                    if (section.type === "paragraph") {
                      return (
                        <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                          {section.content}
                        </p>
                      )
                    } else if (section.type === "heading") {
                      return (
                        <h2 key={index} className="mt-12 mb-6 text-2xl md:text-3xl font-display font-bold text-foreground">
                          {section.content}
                        </h2>
                      )
                    } else if (section.type === "list") {
                      return (
                        <ul key={index} className="my-6 space-y-2 list-disc pl-6">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-muted-foreground leading-relaxed">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )
                    } else if (section.type === "image") {
                      return (
                        <div key={index} className="my-12">
                          <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
                            <Image
                              src={section.src || "/placeholder.svg?height=400&width=800"}
                              alt={section.alt || "Blog image"}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 800px"
                            />
                          </div>
                          {section.caption && (
                            <p className="mt-4 text-center text-sm italic text-muted-foreground">{section.caption}</p>
                          )}
                        </div>
                      )
                    } else if (section.type === "quote") {
                      return (
                        <blockquote
                          key={index}
                          className="my-8 border-l-4 border-primary bg-muted/30 p-6 italic text-foreground rounded-r-lg"
                        >
                          <p className="text-lg">{section.content}</p>
                          {section.author && (
                            <footer className="mt-3 text-right text-sm text-muted-foreground">
                              — {section.author}
                            </footer>
                          )}
                        </blockquote>
                      )
                    }
                    return null
                  })}
                </div>

                {/* Tags */}
                <div className="mt-12 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Share */}
                <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
                  <Link href="/blog" className="btn-outline inline-flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back to Blog
                  </Link>
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">Share:</span>
                    <div className="flex gap-2">
                      <button
                        className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors focus-ring"
                        aria-label="Share on Twitter"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                        </svg>
                      </button>
                      <button
                        className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors focus-ring"
                        aria-label="Copy link"
                      >
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Author Bio */}
            <div className="mt-12 card-modern p-8">
              <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-solar-400 to-solar-600 p-0.5">
                  <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-display font-bold text-foreground">{post.author}</h3>
                  <p className="text-sm text-primary font-medium">{post.authorRole}</p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{post.authorBio}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-responsive-lg font-display font-bold gradient-text">
              Related Articles
            </h2>
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
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-responsive-lg font-display font-bold text-white mb-6">
              Ready to transform your solar business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join our waitlist to be among the first to experience Solarithm's powerful features.
            </p>
            <Link href="/waitlist" className="btn-primary inline-flex items-center text-lg px-8 py-4">
              Join the Waitlist
            </Link>
          </div>
        </section>
      </AnimatedPageWrapper>
      <Footer />
    </div>
  )
}