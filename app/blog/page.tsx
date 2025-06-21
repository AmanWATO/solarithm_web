
"use client"

import { useState, useMemo, Suspense } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BlogCard from "@/components/blog-card"
import BlogSearch from "@/components/blog-search"
import { getAllBlogPosts } from "@/lib/blog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import AnimatedPageWrapper from "@/components/animated-page-wrapper"
import LoadingSpinner, { SkeletonLoader } from "@/components/loading-spinner"

export default function BlogPage() {
  const allBlogPosts = getAllBlogPosts()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Extract unique categories
  const categories = useMemo(() => {
    const categorySet = new Set(allBlogPosts.map((post) => post.category))
    return Array.from(categorySet)
  }, [allBlogPosts])

  // Filter blog posts based on search query and selected category
  const filteredBlogPosts = useMemo(() => {
    return allBlogPosts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === null || post.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [allBlogPosts, searchQuery, selectedCategory])

  // Featured post (most recent)
  const featuredPost = allBlogPosts[0]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AnimatedPageWrapper>
        {/* Header Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 pt-32 pb-20 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-slate-900/20" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-solar-500/20 to-sky-500/20 rounded-full text-sm font-medium text-solar-300 border border-solar-500/30">
                Latest Insights
              </span>
            </motion.div>
            
            <h1 className="text-responsive-xl font-display font-bold text-white mb-6">
              Solar Intelligence{" "}
              <span className="gradient-text">Insights</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Explore our latest thoughts on the solar industry, data analysis, and market trends.
            </p>
          </motion.div>
        </section>

        {/* Featured Post */}
        <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-responsive-md font-display font-bold gradient-text mb-8">
                Featured Article
              </h2>
              
              <div className="card-modern overflow-hidden hover-lift">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative h-64 md:h-auto">
                    <Suspense fallback={<SkeletonLoader className="absolute inset-0" />}>
                      <img
                        src={featuredPost.coverImage || "/placeholder.svg"}
                        alt={featuredPost.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </Suspense>
                  </div>
                  <div className="md:col-span-3 p-8 flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime} min read</span>
                    </div>
                    <div>
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="btn-primary inline-flex items-center group"
                      >
                        Read Article
                        <motion.svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </motion.svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid with Search and Filtering */}
        <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <BlogSearch
                categories={categories}
                onSearch={setSearchQuery}
                onCategoryFilter={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            </motion.div>

            {filteredBlogPosts.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredBlogPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <BlogCard
                        title={post.title}
                        excerpt={post.excerpt}
                        date={post.date}
                        imageUrl={post.coverImage}
                        category={post.category}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33m0 0l-.829 2.496A1 1 0 006.012 16H9m-3-6.301a7.962 7.962 0 016.301 5.301v0a7.962 7.962 0 01-6.301-5.301z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">No articles found</h3>
                  <p className="text-muted-foreground mb-6">
                    No articles match your search criteria. Try adjusting your filters.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory(null)
                    }}
                    className="btn-primary"
                  >
                    Clear Filters
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-glass p-12 text-center"
            >
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-solar-400 to-solar-600 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-responsive-md font-display font-bold text-foreground mb-4">
                  Stay Updated with{" "}
                  <span className="gradient-text">Solar Insights</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Subscribe to our newsletter to receive the latest articles, industry news, and Solarithm updates.
                </p>

                <form className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 h-12 bg-background/50 border-border focus:border-primary"
                    />
                    <Button
                      type="submit"
                      className="btn-primary h-12 px-6 whitespace-nowrap"
                    >
                      Subscribe
                    </Button>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    We care about your data. Read our{" "}
                    <Link href="/privacy" className="text-primary hover:underline font-medium">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedPageWrapper>
      <Footer />
    </div>
  )
}
