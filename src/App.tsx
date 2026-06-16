import React from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { GoToTop } from './components/ui/GoToTop'
import { useLocation } from './lib/seo'

// Pages
import { Home } from './pages/Home'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { LocationsPage } from './pages/LocationsPage'
import { GalleryPage } from './pages/GalleryPage'
import { ContactPage } from './pages/ContactPage'
import { CustomLandscapingPage } from './pages/CustomLandscapingPage'
import { ServiceAreaPage } from './pages/ServiceAreaPage'

function App() {
  const currentPath = useLocation()

  // Dynamic route dispatcher
  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return <Home />
      case '/about':
      case '/my-story':
        return <AboutPage />
      case '/services':
        return <ServicesPage />
      case '/locations':
        return <LocationsPage />
      case '/gallery':
        return <GalleryPage />
      case '/contact':
        return <ContactPage />
      case '/custom-landscaping':
        return <CustomLandscapingPage />
      case '/leander-lawn-mowing':
      case '/cedar-park-lawn-mowing':
      case '/georgetown-lawn-mowing':
      case '/round-rock-lawn-mowing':
      case '/liberty-hill-lawn-mowing':
        return <ServiceAreaPage />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-black font-sans text-gray-100 selection:bg-primary selection:text-white overflow-x-hidden flex flex-col justify-between">
      <div>
        <Navbar />
        <main>
          {renderContent()}
        </main>
      </div>
      <Footer />
      <GoToTop />
    </div>
  )
}

export default App
