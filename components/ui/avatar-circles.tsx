"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface Avatar {
  imageUrl: string
  profileUrl: string
}
interface AvatarCirclesProps {
  className?: string
  numPeople?: number
  avatarUrls: Avatar[]
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => {
        const isLink = url.profileUrl && url.profileUrl !== "#"
        const content = (
          <Image
            className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
            src={url.imageUrl}
            width={40}
            height={40}
            alt={`Avatar do criador ${index + 1}`}
            loading="lazy"
          />
        )
        return isLink ? (
          <a
            key={index}
            href={url.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver perfil do criador ${index + 1}`}
          >
            {content}
          </a>
        ) : (
          <div key={index} className="inline-block">
            {content}
          </div>
        )
      })}
      {(numPeople ?? 0) > 0 && (
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white dark:border-gray-800 dark:bg-white dark:text-black select-none"
        >
          +{numPeople}
        </div>
      )}
    </div>
  )
}
