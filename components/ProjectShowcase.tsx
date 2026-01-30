import { DesignProject } from '@/data/types'
import PlaceholderImage from './PlaceholderImage'

interface ProjectShowcaseProps {
  project: DesignProject
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <div className="mb-24">
      {/* Hero Image */}
      <div className="w-full mb-12 rounded-xl overflow-hidden">
        {project.heroImage ? (
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-auto"
          />
        ) : (
          <div className="w-full aspect-video">
            <PlaceholderImage icon="🎭" />
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-3xl font-normal mb-4 text-accent-orange text-center">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-center text-text-muted mb-12 text-lg">
        {project.date} · {project.description}
      </p>

      {/* Image Grid */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {project.galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg"
            >
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
