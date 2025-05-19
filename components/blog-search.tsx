"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface BlogSearchProps {
  categories: string[]
  onSearch: (query: string) => void
  onCategoryFilter: (category: string | null) => void
  selectedCategory: string | null
}

export default function BlogSearch({ categories, onSearch, onCategoryFilter, selectedCategory }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="relative">
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Button
          type="submit"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 px-3 bg-[#FF6B35] hover:bg-[#FF6B35]/90"
        >
          Search
        </Button>
      </form>

      <div className="flex flex-wrap gap-2">
        <Badge
          variant={selectedCategory === null ? "default" : "outline"}
          className={`cursor-pointer ${selectedCategory === null ? "bg-[#FF6B35] hover:bg-[#FF6B35]/90" : ""}`}
          onClick={() => onCategoryFilter(null)}
        >
          All
        </Badge>
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={`cursor-pointer ${selectedCategory === category ? "bg-[#FF6B35] hover:bg-[#FF6B35]/90" : ""}`}
            onClick={() => onCategoryFilter(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  )
}
