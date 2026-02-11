'use client'

import { useState, useEffect } from 'react'

interface LightboxGalleryProps {
  images: string[]
  title: string
  sizePatterns: string[]
}

export default function LightboxGallery({ images, title, sizePatterns }: LightboxGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null)
      }
    }

    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleEscape)
      return () => window.removeEventListener('keydown', handleEscape)
    }
  }, [lightboxIndex])

  return (
    <>
      {/* Mobile: Vertical stack */}
      <div className="md:hidden flex flex-col gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setLightboxIndex(index)}
          >
            <img
              src={image}
              alt={`${title} - Image ${index + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Desktop: Two-Column Masonry */}
      <div className="hidden md:block columns-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setLightboxIndex(index)}
          >
            <img
              src={image}
              alt={`${title} - Image ${index + 1}`}
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-6xl leading-none hover:text-accent-orange transition-colors z-10 bg-black/50 rounded-full w-14 h-14 flex items-center justify-center hover:bg-black/70"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            ×
          </button>

          {/* Image container with navigation */}
          <div className="relative flex items-center justify-center max-w-[90vw] max-h-[90vh] animate-zoom-in">
            {/* Left arrow */}
            {lightboxIndex > 0 && (
              <button
                className="absolute -left-16 text-white text-6xl hover:text-accent-orange transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex(lightboxIndex - 1)
                }}
              >
                ‹
              </button>
            )}

            {/* Image */}
            <img
              src={images[lightboxIndex]}
              alt={`${title} - Image ${lightboxIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Right arrow */}
            {lightboxIndex < images.length - 1 && (
              <button
                className="absolute -right-16 text-white text-6xl hover:text-accent-orange transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex(lightboxIndex + 1)
                }}
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}
