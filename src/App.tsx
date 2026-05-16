import React from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { TrustBar } from './components/sections/TrustBar'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Comparison } from './components/sections/Comparison'
import { Process } from './components/sections/Process'
import { ServiceAreas } from './components/sections/ServiceAreas'
import { Gallery } from './components/sections/Gallery'
import { Testimonials } from './components/sections/Testimonials'
import { FinalCTA } from './components/sections/FinalCTA'
import { Contact } from './components/sections/Contact'
import { GoToTop } from './components/ui/GoToTop'

function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-gray-100 selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Comparison />
        <Process />
        <Gallery />
        <ServiceAreas />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <GoToTop />
    </div>
  )
}

export default App
