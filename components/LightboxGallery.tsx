'use client'

import { useState, useEffect } from 'react'

interface LightboxGalleryProps {
  images: string[]
  title: string
  sizePatterns: string[]
}

export default function LightboxGallery({ images, title, sizePatterns }: LightboxGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Helper to check if a file is a video
  const isVideo = (src: string) => {
    return src.match(/\.(mp4|mov|webm|ogg)$/i)
  }

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
            {isVideo(image) ? (
              <video
                src={image}
                className="w-full h-auto object-contain"
                controls
                playsInline
              />
            ) : (
              <img
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            )}
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
            {isVideo(image) ? (
              <video
                src={image}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                controls
                playsInline
              />
            ) : (
              <img
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            )}
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
            className="absolute top-4 md:top-24 left-4 md:left-24 text-white text-4xl hover:text-accent-orange transition-colors z-10"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            ×
          </button>

          {/* Left arrow - positioned relative to viewport */}
          {lightboxIndex > 0 && (
            <button
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white text-5xl md:text-6xl hover:text-accent-orange transition-colors z-10 p-4"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex(lightboxIndex - 1)
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          {/* Image or Video */}
          <div className="flex items-center justify-center max-w-[90vw] max-h-[90vh] animate-zoom-in">
            {isVideo(images[lightboxIndex]) ? (
              <video
                src={images[lightboxIndex]}
                className="max-h-[90vh] max-w-[90vw] object-contain"
                controls
                autoPlay
                playsInline
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={images[lightboxIndex]}
                alt={`${title} - Image ${lightboxIndex + 1}`}
                className="max-h-[90vh] max-w-[90vw] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>

          {/* Right arrow - positioned relative to viewport */}
          {lightboxIndex < images.length - 1 && (
            <button
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white text-5xl md:text-6xl hover:text-accent-orange transition-colors z-10 p-4"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex(lightboxIndex + 1)
              }}
              aria-label="Next image"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  )
}
