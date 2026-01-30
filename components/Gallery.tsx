import GalleryItem from './GalleryItem'
import { Performance, Visual } from '@/data/types'

interface GalleryProps {
  items: (Performance | Visual)[]
}

export default function Gallery({ items }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 mt-12">
      {items.map((item) => (
        <GalleryItem
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          placeholder={item.placeholder}
        />
      ))}
    </div>
  )
}
