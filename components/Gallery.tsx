'use client'

import { useRef, useState } from 'react'
import GalleryItem from './GalleryItem'
import { Performance, Visual, DesignProject } from '@/data/types'

interface GalleryProps {
  items: (Performance | Visual | DesignProject)[]
  type: 'performance' | 'design' | 'visual'
}

// Gallery wall size patterns - creates varied, organic layout
const sizePatterns = [
  'col-span-2 row-span-2', // large feature
  'col-span-1 row-span-1', // standard
  'col-span-1 row-span-2', // tall
  'col-span-1 row-span-1', // standard
  'col-span-2 row-span-1', // wide
  'col-span-1 row-span-1', // standard
  'col-span-1 row-span-1', // standard
  'col-span-1 row-span-2', // tall
  'col-span-2 row-span-1', // wide
  'col-span-1 row-span-1', // standard
  'col-span-1 row-span-1', // standard
  'col-span-2 row-span-2', // large feature
  'col-span-1 row-span-1', // standard
  'col-span-1 row-span-1', // standard
]

export default function Gallery({ items, type }: GalleryProps) {
  const [scrollOffset, setScrollOffset] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (scrollRef.current) {
      const offset = scrollRef.current.scrollLeft
      setScrollOffset(offset)
    }
  }

  const opacity = Math.max(0, 1 - scrollOffset / 200)
  const translateX = -scrollOffset

  return (
    <div className="relative">
      {/* Swipe indicator - animates with scroll */}
      <div
        className="md:hidden text-center text-text-muted text-sm mb-4 flex items-center justify-center gap-2 transition-transform pointer-events-none"
        style={{
          opacity: opacity,
          transform: `translateX(${translateX}px)`,
        }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
        Swipe to explore
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto gap-4 md:gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
      >
      {items.map((item, index) => {
        const isDesign = 'heroImage' in item
        const image = isDesign ? (item as DesignProject).heroImage : (item as Performance | Visual).image
        const description = isDesign
          ? `${(item as DesignProject).date} · ${(item as DesignProject).description}`
          : (item as Performance | Visual).description

        let href: string | undefined
        if (!('placeholder' in item && item.placeholder)) {
          if (type === 'performance') {
            href = `/performance/${item.id}`
          } else if (type === 'design') {
            href = `/design/${item.id}`
          }
        }

        return (
          <GalleryItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={description}
            image={image}
            placeholder={'placeholder' in item ? item.placeholder : false}
            href={href}
            sizeClass="h-[400px] md:h-[450px] lg:h-[500px] snap-center flex-shrink-0"
          />
        )
      })}
      </div>

      {/* Gradient fade indicator on right edge (mobile only) */}
      <div className="md:hidden absolute top-12 right-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a12] via-[#0a0a12]/50 to-transparent pointer-events-none" />
    </div>
  )
}
