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
  sizeClass?: string
}

export default function GalleryItem({ id, title, description, image, placeholder, href, sizeClass }: GalleryItemProps) {
  // Helper to check if a file is a video
  const isVideo = (src: string) => {
    return src.match(/\.(mp4|mov|webm|ogg)$/i)
  }

  const content = (
    <>
      {/* Image or Placeholder - edge to edge, no borders */}
      <div className="w-full h-full overflow-hidden flex items-center justify-center">
        {placeholder ? (
          <PlaceholderImage />
        ) : image ? (
          isVideo(image) ? (
            <video
              src={image}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              muted
              playsInline
              loop
            />
          ) : (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )
        ) : (
          <PlaceholderImage />
        )}
      </div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" style={{
        background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.8) 85%, transparent 100%)'
      }} />

      {/* Info panel that slides up */}
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
        <h3 className="text-lg font-semibold mb-1 text-text-primary drop-shadow-lg">{title}</h3>
        {description && <p className="text-sm text-text-muted drop-shadow-lg line-clamp-2">{description}</p>}
      </div>
    </>
  )

  const className = `${sizeClass || ''} relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-[0_20px_60px_rgba(180,60,0,0.3)] hover:z-10 group block bg-black`

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
