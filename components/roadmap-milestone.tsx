import Image from "next/image"

interface RoadmapMilestoneProps {
  date: string
  title: string
  description: string
  features: string[]
  status: "Completed" | "In Progress" | "Upcoming"
  isHighlighted?: boolean
  imageUrl: string
}

export default function RoadmapMilestone({
  date,
  title,
  description,
  features,
  status,
  isHighlighted = false,
  imageUrl,
}: RoadmapMilestoneProps) {
  const getStatusColor = () => {
    switch (status) {
      case "Completed":
        return "bg-green-500"
      case "In Progress":
        return "bg-amber-500"
      case "Upcoming":
        return "bg-gray-300"
      default:
        return "bg-gray-300"
    }
  }

  return (
    <div className="relative">
      <div
        className={`absolute left-1/2 h-8 w-8 -translate-x-1/2 transform rounded-full border-4 border-white ${
          isHighlighted ? "bg-amber-600" : getStatusColor()
        }`}
      ></div>

      <div className="ml-12 md:ml-0 md:pl-12 lg:pl-0">
        <div className={`md:ml-12 lg:ml-0 lg:flex lg:items-center ${isHighlighted ? "lg:flex-row-reverse" : ""}`}>
          <div className={`lg:w-1/2 ${isHighlighted ? "lg:pl-20" : "lg:pr-20 lg:text-right"}`}>
            <div
              className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
                isHighlighted
                  ? "bg-amber-100 text-amber-800"
                  : status === "Completed"
                    ? "bg-green-100 text-green-800"
                    : status === "In Progress"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-gray-100 text-gray-800"
              }`}
            >
              {date}
            </div>
            <h3 className="mt-2 text-xl font-bold text-gray-900">{title}</h3>
            <p className="mt-1 text-gray-600">{description}</p>
            <ul className={`mt-4 space-y-2 ${isHighlighted ? "" : "lg:text-right"}`}>
              {features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className={`mt-6 lg:mt-0 lg:w-1/2 ${isHighlighted ? "lg:pr-20" : "lg:pl-20"}`}>
            <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="relative aspect-video">
                <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
