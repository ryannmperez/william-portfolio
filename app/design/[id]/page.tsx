import { designs } from '@/data/designs'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface Props {
  params: { id: string }
}

export function generateStaticParams() {
  return designs.map((project) => ({
    id: project.id,
  }))
}

export function generateMetadata({ params }: Props) {
  const project = designs.find((p) => p.id === params.id)
  return {
    title: project ? `${project.title} - William René Bryant` : 'Not Found',
  }
}

export default function DesignPage({ params }: Props) {
  const project = designs.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  const allImages = [
    ...(project.heroImage ? [project.heroImage] : []),
    ...(project.galleryImages || []),
  ]

  return (
    <main className="min-h-screen bg-dark-primary pt-24 pb-16">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Back Button */}
        <Link
          href="/#design"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent-orange transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-light mb-4 text-accent-orange text-center">
          {project.title}
        </h1>

        {/* Date & Description */}
        <p className="text-center text-text-muted mb-12 text-lg max-w-3xl mx-auto">
          {project.date} · {project.description}
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg aspect-video"
            >
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
