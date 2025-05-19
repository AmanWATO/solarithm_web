"use client"

import { useState, useMemo } from "react"
import Link from "next/link"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BlogCard from "@/components/blog-card"
import BlogSearch from "@/components/blog-search"
import { getAllBlogPosts } from "@/lib/blog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// Import the AnimatedPageWrapper
import AnimatedPageWrapper from "@/components/animated-page-wrapper"

// Wrap the content with AnimatedPageWrapper
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
        {/* Rest of the content remains the same */}
        {/* Header Section */}
        <section className="bg-gradient-to-br from-midnight-blue via-midnight-blue/90 to-midnight-blue/80 dark:from-jet-black dark:via-jet-black/90 dark:to-jet-black/80 px-4 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-[#FFC857] sm:text-5xl md:text-6xl">
                Solar Intelligence Insights
              </h1>
              <p className="mt-6 text-xl text-[#EAEAEA]">
                Explore our latest thoughts on the solar industry, data analysis, and market trends.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="bg-[#F9F9F9] dark:bg-[#1A1A2E]/30 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-[#121212] dark:text-[#EAEAEA] mb-6">Featured Article</h2>
            <div className="grid md:grid-cols-5 gap-6 rounded-xl overflow-hidden bg-white dark:bg-[#1A1A2E]/50 shadow-lg">
              <div className="md:col-span-2 h-64 md:h-auto relative">
                <img
                  src={featuredPost.coverImage || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-3 p-6 flex flex-col">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#FF6B35]/10 text-[#FF6B35]">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#121212] dark:text-[#EAEAEA] mb-2">{featuredPost.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{featuredPost.excerpt}</p>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  {featuredPost.date} • {featuredPost.readTime} min read
                </div>
                <div className="mt-auto">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center text-[#FF6B35] hover:text-[#2EC4B6]"
                  >
                    Read article
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid with Search and Filtering */}
        <section className="bg-[#F9F9F9] dark:bg-[#1A1A2E]/30 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <BlogSearch
                categories={categories}
                onSearch={setSearchQuery}
                onCategoryFilter={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            </div>

            {filteredBlogPosts.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredBlogPosts.map((post) => (
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
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  No articles found matching your search criteria.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory(null)
                  }}
                  className="mt-4 bg-[#FF6B35] hover:bg-[#FF6B35]/90"
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-[#EAEAEA] dark:bg-[#1A1A2E]/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-xl bg-[#1A1A2E]/5 dark:bg-[#F9F9F9]/5 p-8 shadow-md sm:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-2xl font-bold tracking-tight text-[#1A1A2E] dark:text-[#EAEAEA] sm:text-3xl">
                  Stay updated with solar insights
                </h2>
                <p className="mt-4 text-lg text-[#121212] dark:text-[#EAEAEA]">
                  Subscribe to our newsletter to receive the latest articles, industry news, and Solarithm updates.
                </p>
              </div>

              <div className="mt-8 sm:mx-auto sm:max-w-lg">
                <form className="sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="block w-full rounded-md border-cloud-gray bg-[#F9F9F9] dark:bg-[#1A1A2E]/30 px-4 py-3 text-base shadow-sm focus:border-ember-orange focus:ring-ember-orange"
                    />
                  </div>
                  <div className="mt-3 sm:ml-3 sm:mt-0">
                    <Button
                      type="submit"
                      className="block w-full rounded-md bg-[#FF6B35] px-4 py-3 font-medium text-[#F9F9F9] shadow hover:bg-[#FF6B35]/90 focus:outline-none focus:ring-2 focus:ring-ember-orange focus:ring-offset-2"
                    >
                      Subscribe
                    </Button>
                  </div>
                </form>
                <p className="mt-3 text-center text-sm text-[#121212]/70 dark:text-[#EAEAEA]/70">
                  We care about your data. Read our{" "}
                  <Link href="/privacy" className="font-medium text-[#FF6B35] hover:text-[#2EC4B6]">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedPageWrapper>
      <Footer />
    </div>
  )
}
