import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import ProjectShowcase from '@/components/ProjectShowcase'
import About from '@/components/About'
import Contact from '@/components/Contact'
import { performances } from '@/data/performances'
import { designs } from '@/data/designs'
import { visuals } from '@/data/visuals'

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Performance Section */}
      <section id="performance" className="py-24 px-8 max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-12 text-center tracking-[0.2rem] text-text-primary">
          PERFORMANCE
        </h2>
        <Gallery items={performances} />
      </section>

      {/* Design Section */}
      <section id="design" className="py-24 px-8 max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-12 text-center tracking-[0.2rem] text-text-primary">
          DESIGN
        </h2>
        {designs.map((project) => (
          <ProjectShowcase key={project.id} project={project} />
        ))}
      </section>

      {/* Visuals Section */}
      <section id="visuals" className="py-24 px-8 max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-12 text-center tracking-[0.2rem] text-text-primary">
          VISUALS
        </h2>
        <Gallery items={visuals} />
      </section>

      <About />
      <Contact />
    </main>
  )
}
