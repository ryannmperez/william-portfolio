import GalleryItem from './GalleryItem'
import { Performance, Visual, DesignProject } from '@/data/types'

interface GalleryProps {
  items: (Performance | Visual | DesignProject)[]
  type: 'performance' | 'design' | 'visual'
}

export default function Gallery({ items, type }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {items.map((item) => {
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
          />
        )
      })}
    </div>
  )
}
