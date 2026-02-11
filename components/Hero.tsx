import { siteConfig } from '@/data/siteConfig'

export default function Hero() {
  return (
    <div id="home" className="h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Animated overlay */}
      <div className="absolute inset-0 hero-overlay animate-pulse-overlay" />

      {/* Headshot - Mobile full screen background */}
      <div className="absolute inset-0 md:hidden z-10">
        <div
          className="w-full h-full"
          style={{
            maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, transparent 100%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, transparent 100%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, transparent 100%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in'
          }}
        >
          <img
            src="/images/HeadshotCropped.png"
            alt="William René Bryant"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'left 20%' }}
          />
        </div>
      </div>

      {/* Content - Fixed max width */}
      <div className="z-20 w-full max-w-[1280px] mx-auto h-full flex items-center">
        <div className="w-full px-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-12 lg:gap-16 mt-[40vh] md:mt-0">
          {/* Headshot - Desktop - Aligned to left edge of container */}
          <div className="hidden md:block relative flex-shrink-0 -mt-8 -ml-8">
            <div
              className="w-96 lg:w-[28rem] h-[80vh] rounded-2xl overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, transparent 100%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.5) 85%, transparent 100%), radial-gradient(ellipse 600px 400px at bottom right, transparent 0%, rgba(0,0,0,1) 60%), radial-gradient(ellipse 600px 400px at bottom left, transparent 0%, rgba(0,0,0,1) 60%)',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, transparent 100%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.5) 85%, transparent 100%), radial-gradient(ellipse 600px 400px at bottom right, transparent 0%, rgba(0,0,0,1) 60%), radial-gradient(ellipse 600px 400px at bottom left, transparent 0%, rgba(0,0,0,1) 60%)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in'
              }}
            >
              <img
                src="/images/HeadshotCropped.png"
                alt="William René Bryant"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'left top' }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.3rem] mb-4 gradient-text drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {siteConfig.name}
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-text-primary tracking-[0.2rem] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {siteConfig.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
