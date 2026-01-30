'use client'

import PlaceholderImage from './PlaceholderImage'

interface GalleryItemProps {
  title: string
  description: string
  image?: string
  placeholder?: boolean
}

export default function GalleryItem({ title, description, image, placeholder }: GalleryItemProps) {
  return (
    <div className="relative aspect-square bg-[#1a1a1a] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(180,60,0,0.5)] group">
      {/* Image or Placeholder */}
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

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Info panel that slides up */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
        <h3 className="text-xl font-semibold mb-2 text-text-primary">{title}</h3>
        <p className="text-sm text-text-muted">{description}</p>
      </div>
    </div>
  )
}
