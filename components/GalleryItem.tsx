'use client'

import Link from 'next/link'
import PlaceholderImage from './PlaceholderImage'

interface GalleryItemProps {
  id: string
  title: string
  description: string
  image?: string
  placeholder?: boolean
  href?: string
}

export default function GalleryItem({ id, title, description, image, placeholder, href }: GalleryItemProps) {
  const content = (
    <>
      {/* Image or Placeholder */}
      <div className="w-full h-full rounded-md overflow-hidden">
        {placeholder ? (
          <PlaceholderImage />
        ) : image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <PlaceholderImage />
        )}
      </div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-3 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-md" />

      {/* Info panel that slides up */}
      <div className="absolute bottom-3 left-3 right-3 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
        <h3 className="text-xl font-semibold mb-2 text-text-primary">{title}</h3>
        <p className="text-sm text-text-muted">{description}</p>
      </div>
    </>
  )

  const className = "relative aspect-square bg-gradient-to-br from-[#2e2e2e] to-[#1f1f1f] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(180,60,0,0.5)] group block p-3"

  if (href && !placeholder) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <div className={className}>
      {content}
    </div>
  )
}
