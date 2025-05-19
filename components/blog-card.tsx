import Image from "next/image"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  imageUrl: string
  category?: string
}

export default function BlogCard({ title, excerpt, date, imageUrl, category }: BlogCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl bg-[#F9F9F9] shadow-md transition-all hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {category && (
          <div className="absolute top-4 left-4 rounded-full bg-[#1A1A2E]/80 px-3 py-1 text-xs font-medium text-[#EAEAEA] backdrop-blur-sm">
            {category}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="mb-2 text-sm text-[#121212]/70">{date}</div>
        <h3 className="mb-2 text-xl font-bold text-[#FFC857] transition-colors group-hover:text-[#FF6B35]">
          {title}
        </h3>
        <p className="mb-4 text-[#121212]">{excerpt}</p>
        <div className="inline-flex items-center text-sm font-medium text-[#FF6B35] transition-colors group-hover:text-[#2EC4B6]">
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}
