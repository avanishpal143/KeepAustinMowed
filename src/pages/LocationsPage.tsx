import React from 'react'
import { motion } from 'framer-motion'
import { useSEO } from '../lib/seo'
import { Link } from '../components/ui/Link'
import { MapPin, Compass, CheckCircle } from 'lucide-react'
import { CONFIG } from '../config'

export const LocationsPage: React.FC = () => {
  useSEO(
    "Service Locations | Keep Austin Mowed",
    "We offer premium lawn care and mowing services across Leander, Cedar Park, Round Rock, Georgetown, and Liberty Hill. Click to view local yard maintenance details."
  )

  const cityDetails = [
    {
      name: "Leander",
      desc: "Premium mowing and edging for families in Leander's growing communities.",
      path: "/leander-lawn-mowing",
      tagline: "Local & Detail-Focused"
    },
    {
      name: "Cedar Park",
      desc: "Vibrant grass treatments, weed control, and garden bed cleanups for local homes.",
      path: "/cedar-park-lawn-mowing",
      tagline: "Reliable Scheduling"
    },
    {
      name: "Georgetown",
      desc: "Lawn care and shrub trimming designed for Georgetown's beautiful residential tracts.",
      path: "/georgetown-lawn-mowing",
      tagline: "Voted 5-Stars"
    },
    {
      name: "Round Rock",
      desc: "Detail-focused mowing, trimming, and mulch installations for lawns in Round Rock.",
      path: "/round-rock-lawn-mowing",
      tagline: "Premium Lawn Mowing"
    },
    {
      name: "Liberty Hill",
      desc: "Professional mowing and clean borders in Liberty Hill's expansive yards.",
      path: "/liberty-hill-lawn-mowing",
      tagline: "Custom Yard Solutions"
    }
  ]

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-black text-gray-100">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 bg-white/5 border-l-4 border-primary text-xs font-black tracking-[0.2em] text-primary uppercase">
            Areas We Serve
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            Our Locations
          </h1>
          <div className="h-1.5 bg-primary w-24 mx-auto skew-x-[-20deg] mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We focus our premium yard maintenance in these specific cities to guarantee consistent scheduling and rapid responses.
          </p>
        </motion.div>

        {/* City Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 justify-center">
          {cityDetails.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#0f0f0f] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)" }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
              
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="text-primary" size={24} />
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">{city.tagline}</span>
                </div>
                
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                  {city.name}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
                  {city.desc}
                </p>
              </div>

              <Link 
                href={city.path} 
                className="inline-flex items-center text-white text-xs font-black uppercase tracking-wider hover:text-primary transition-colors mt-auto group/btn"
              >
                View Local Services 
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform inline-block">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Service standard callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl border border-white/5 text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center text-primary mb-4">
            <Compass size={36} />
          </div>
          <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Serving Local Texas Neighborhoods</h4>
          <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed font-medium">
            By limiting our range to Leander, Cedar Park, Round Rock, Georgetown, and Liberty Hill, we ensure our mowers are on time, our fuel costs are low, and our clients receive fast responses.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
