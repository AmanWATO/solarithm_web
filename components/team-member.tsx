import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  imageUrl: string
}

export default function TeamMember({ name, role, bio, imageUrl }: TeamMemberProps) {
  return (
    <div className="group text-center">
      <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold text-[#EAEAEA]">{name}</h3>
      <p className="mb-2 text-[#2EC4B6]">{role}</p>
      <p className="text-[#121212]">{bio}</p>
    </div>
  )
}
