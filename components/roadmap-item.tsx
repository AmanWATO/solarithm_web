interface RoadmapItemProps {
  date: string
  title: string
  description: string
  isActive: boolean
  isHighlighted?: boolean
}

export default function RoadmapItem({ date, title, description, isActive, isHighlighted = false }: RoadmapItemProps) {
  return (
    <div className="relative">
      <div
        className={`absolute left-1/2 h-8 w-8 -translate-x-1/2 transform rounded-full border-4 border-sky-white ${
          isHighlighted ? "bg-[#FF6B35]" : isActive ? "bg-[#2EC4B6]" : "bg-[#EAEAEA]"
        }`}
      ></div>

      <div className="ml-12 md:ml-0 md:pl-12 lg:pl-0">
        <div className={`md:ml-12 lg:ml-0 lg:flex lg:items-center ${isHighlighted ? "lg:flex-row-reverse" : ""}`}>
          <div className={`lg:w-1/2 ${isHighlighted ? "lg:pl-20" : "lg:pr-20 lg:text-right"}`}>
            <div
              className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
                isHighlighted
                  ? "bg-[#FF6B35]/10 text-[#FF6B35]"
                  : isActive
                    ? "bg-[#2EC4B6]/10 text-[#2EC4B6]"
                    : "bg-[#EAEAEA] text-[#121212]"
              }`}
            >
              {date}
            </div>
            <h3 className="mt-2 text-xl font-bold text-[#FF6B35]">{title}</h3>
            <p className="mt-1 text-[#121212]">{description}</p>
          </div>

          <div className={`mt-6 hidden lg:mt-0 lg:block lg:w-1/2 ${isHighlighted ? "lg:pr-20" : "lg:pl-20"}`}>
            <div className="aspect-video overflow-hidden rounded-xl bg-[#EAEAEA]">
              <div className="flex h-full items-center justify-center text-gray-400">{isHighlighted ? "🚀" : "📅"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
