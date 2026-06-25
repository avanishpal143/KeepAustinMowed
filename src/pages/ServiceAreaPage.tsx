import React from 'react'
import { motion } from 'framer-motion'
import { useSEO } from '../lib/seo'
import { Button } from '../components/ui/Button'
import { Link } from '../components/ui/Link'
import { CheckCircle2, Scissors, ShieldAlert, Heart, Calendar } from 'lucide-react'
import { CONFIG } from '../config'

interface CitySEOData {
  title: string
  description: string
  h1: string
  firstParagraph: string
  keyword: string
  bgImage: string
  localWording: string
}

const CITY_DATA_MAP: Record<string, CitySEOData> = {
  "/leander-lawn-mowing": {
    keyword: "Premium Lawn Mowing in Leander, TX",
    title: "Premium Lawn Mowing in Leander, TX | Keep Austin Mowed",
    description: "Professional lawn mowing, trimming, and mechanical edging for yards in Leander, TX. Fast responses, detail-focused service, and consistent weekly scheduling.",
    h1: "Premium Lawn Mowing in Leander, TX",
    firstParagraph: "Keeping your lawn manicured in Leander requires regular attention, consistent mowing schedules, and precise mechanical edging. At Keep Austin Mowed, we serve Leander neighborhoods with detail-oriented lawn cutting that elevates your property's curb appeal week after week. No excuses, just a perfect cut.",
    bgImage: "/images/IMG_0010.jpeg",
    localWording: "Serving families across Crystal Falls, Travisso, and Leander neighborhoods with fast responses and consistent weekly scheduling."
  },
  "/cedar-park-lawn-mowing": {
    keyword: "Lawn Care in Cedar Park, TX",
    title: "Lawn Care in Cedar Park, TX | Keep Austin Mowed",
    description: "Detailed local lawn care and mowing services in Cedar Park, TX. Reliable scheduling, bush trimming, and mechanical edging from a local specialist.",
    h1: "Reliable Lawn Care & Mowing in Cedar Park, TX",
    firstParagraph: "Homeowners in Cedar Park value reliable, high-quality yard maintenance that stays on a predictable schedule. We provide professional lawn cutting, sharp mechanical sidewalk edging, and thorough blow-offs that ensure your Cedar Park yard stands out. Experience the difference a detail-focused local specialist makes.",
    bgImage: "/images/IMG_1260.jpeg",
    localWording: "Proudly cutting and edging yards in Bella Vista, Ranch at Brushy Creek, and throughout the Cedar Park community."
  },
  "/georgetown-lawn-mowing": {
    keyword: "Lawn Treatments in Georgetown, TX",
    title: "Lawn Treatments & Mowing in Georgetown, TX | Keep Austin Mowed",
    description: "Top-rated mowing, edging, and seasonal lawn treatments in Georgetown, TX. Weed control, fertilization, and complete lawn health maintenance.",
    h1: "Lawn Treatments & Premium Mowing in Georgetown, TX",
    firstParagraph: "A lush, green turf in Georgetown demands balanced lawn treatments, timely weed control, and precise mowing. Keep Austin Mowed offers custom seasonal fertilization alongside our premium weekly mowing services to ensure your Georgetown property stays healthy, vibrant, and weed-free year-round.",
    bgImage: "/images/IMG_3791.jpeg",
    localWording: "Providing seasonal treatments and custom mowing solutions for homeowners in Sun City and local Georgetown communities."
  },
  "/round-rock-lawn-mowing": {
    keyword: "Custom Landscaping in Round Rock, TX",
    title: "Lawn Mowing & Landscaping in Round Rock, TX | Keep Austin Mowed",
    description: "Professional lawn mowing and detailed landscape bed maintenance in Round Rock, TX. Rock and mulch installations, clean edging, and quick responses.",
    h1: "Professional Lawn Mowing in Round Rock, TX",
    firstParagraph: "From regular premium mowing and mechanical edging to mulch laying, we provide Round Rock properties with comprehensive, high-end yard care. Our team is focused on detail, consistent schedule execution, and responsive communication, making us the top choice for Round Rock homeowners.",
    bgImage: "/images/IMG_1202.jpeg",
    localWording: "Delivering clean lawn borders, mulch layers, and detailed grass care for properties across Round Rock's suburban residential blocks."
  },
  "/liberty-hill-lawn-mowing": {
    keyword: "Premium Lawn Care in Liberty Hill, TX",
    title: "Premium Lawn Care in Liberty Hill, TX | Keep Austin Mowed",
    description: "Detailed yard care, mowing, and garden maintenance in Liberty Hill, TX. Reliable scheduling, thick bed mulch, and mechanical edging for large lawns.",
    h1: "Premium Lawn Care & Edging in Liberty Hill, TX",
    firstParagraph: "The large, beautiful lawns of Liberty Hill deserve professional care that handles high growth periods without falloff. We specialize in consistent, detailed mowing and mechanical borders for Liberty Hill properties, keeping your grass healthy and your landscaping beds perfectly defined and manicured.",
    bgImage: "/images/IMG_1395.jpeg",
    localWording: "Specializing in large-acreage yard maintenance and clean border cuts for properties throughout Liberty Hill's acreage developments."
  }
}

export const ServiceAreaPage: React.FC = () => {
  const path = window.location.pathname
  const data = CITY_DATA_MAP[path]

  if (!data) {
    // Fallback if city path is missing
    return (
      <div className="pt-32 pb-24 text-center text-white min-h-[50vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-black mb-4">LOCATION NOT FOUND</h1>
        <p className="text-gray-400 mb-8">We couldn't locate that specific service area page.</p>
        <Button href="/">Back to Home</Button>
      </div>
    )
  }

  // Set the city-specific metadata dynamically
  useSEO(data.title, data.description)

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      {/* City Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10" />
          <img 
            src={data.bgImage} 
            alt={data.h1} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 border-l-4 border-primary bg-black/60 backdrop-blur-md"
          >
            <span className="text-xs font-bold text-gray-200 tracking-[0.2em] uppercase">
              Local Yard Service: {data.keyword}
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto"
          >
            {data.h1}
          </motion.h1>
          <div className="h-1.5 bg-primary w-20 mx-auto skew-x-[-20deg]" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 bg-black" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
      </section>

      {/* Main Body Description */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p className="font-semibold text-white text-xl">
                {data.firstParagraph}
              </p>
              <p>
                Our crew takes pride in providing top-tier residential mowing services. Every visit includes thorough mechanical edging of walkways, weed eating around obstacles, blowing off debris, and mowing the turf to appropriate heights depending on grass variety and weather conditions.
              </p>
              <p>
                We maintain our equipment meticulously, keeping our lawn mower blades razor-sharp so they slice through grass cleanly instead of tearing it, which prevents grass tip browning and keeps your turf green and disease-resistant.
              </p>
              
              <div className="p-6 bg-white/[0.02] border-l-4 border-primary rounded-r-2xl border border-white/5 mt-8">
                <p className="text-sm font-semibold text-white mb-1">Local Focus</p>
                <p className="text-sm text-gray-400">{data.localWording}</p>
              </div>
            </div>

            {/* Quick Facts Panel */}
            <div className="bg-[#0f0f0f] border border-white/5 p-8 rounded-3xl space-y-6" style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 90% 100%, 0 100%)" }}>
              <h3 className="text-xl font-black text-white uppercase tracking-tight">Our Standards</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-white uppercase">Vibrant Color</p>
                    <p className="text-xs text-gray-500 font-medium">Sharp blades preserve turf color.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-white uppercase">Consistent Scheduling</p>
                    <p className="text-xs text-gray-500 font-medium">Mowing on the same day every week.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-white uppercase">Detailed Edging</p>
                    <p className="text-xs text-gray-500 font-medium">Clean vertical borders along walkway concrete.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Button href="/contact" className="w-full">Get Quote</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlight Section */}
      <section className="py-20 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase mb-4">Lawn Cut Frequency Recommendations</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-12 font-medium">
            Texas summer heat and fast bermuda/zoysia growth require correct cutting parameters to maintain deep root structures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="glass p-8 rounded-2xl border border-white/5">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-black text-white uppercase">Weekly Service Plan</h4>
                <span className="bg-primary/20 text-primary text-[10px] font-black tracking-widest px-2 py-0.5 rounded uppercase">Highly Recommended</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                Perfect for peak growing season. It keeps grass length short, prevents weeds from seeding, and yields the cleanest cuts. Easier on turf roots and provides peak curb appeal.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl border border-white/5">
              <h4 className="text-lg font-black text-white uppercase mb-4">Biweekly Service Plan</h4>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                Ideal for slower winter growth periods or drought seasons. Budget-friendly, but can result in heavier clipping accumulation during rapid spring growth.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/locations" className="text-xs font-black uppercase text-gray-400 hover:text-primary transition-colors">
              ← View Other Service Locations
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
