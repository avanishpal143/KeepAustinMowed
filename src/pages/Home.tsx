import React from 'react'
import { Hero } from '../components/sections/Hero'
import { TrustBar } from '../components/sections/TrustBar'
import { About } from '../components/sections/About'
import { Services } from '../components/sections/Services'
import { Comparison } from '../components/sections/Comparison'
import { Process } from '../components/sections/Process'
import { Gallery } from '../components/sections/Gallery'
import { ServiceAreas } from '../components/sections/ServiceAreas'
import { Testimonials } from '../components/sections/Testimonials'
import { FinalCTA } from '../components/sections/FinalCTA'
import { Button } from '../components/ui/Button'
import { useSEO } from '../lib/seo'

export const Home: React.FC = () => {
  useSEO(
    "Keep Austin Mowed | Premium Local Lawn Care & Mowing",
    "Detailed lawn care and mowing services in Leander, Cedar Park, Round Rock, Georgetown, and Liberty Hill. Fast, reliable responses and clean yard edging."
  )

  return (
    <>
      <Hero />
      <TrustBar />
      
      {/* About Section Preview */}
      <div className="relative">
        <About />
        <div className="container mx-auto px-4 md:px-6 pb-16 flex justify-center -mt-8 relative z-20">
          <Button href="/about" variant="outline" size="md">
            Read My Full Story
          </Button>
        </div>
      </div>

      {/* Services Section Preview */}
      <div className="relative">
        <Services />
        <div className="container mx-auto px-4 md:px-6 pb-16 flex flex-col sm:flex-row justify-center items-center gap-6 relative z-20">
          <Button href="/services" variant="outline" size="md">
            View All Services
          </Button>
          <Button href="/custom-landscaping" variant="primary" size="md">
            Large Landscaping Projects
          </Button>
        </div>
      </div>

      <Comparison />
      <Process />

      {/* Gallery Preview */}
      <div className="relative">
        <Gallery />
        <div className="container mx-auto px-4 md:px-6 pb-16 flex justify-center -mt-8 relative z-20">
          <Button href="/gallery" variant="outline" size="md">
            View Full Project Gallery
          </Button>
        </div>
      </div>

      <ServiceAreas />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
