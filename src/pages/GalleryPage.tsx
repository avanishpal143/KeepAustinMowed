import React from 'react'
import { motion } from 'framer-motion'
import { useSEO } from '../lib/seo'
import { CONFIG } from '../config'

export const GalleryPage: React.FC = () => {
  useSEO(
    "Project Gallery | Keep Austin Mowed",
    "View photos of our real work in Leander, Cedar Park, Georgetown, and Round Rock. Premium mowing, clean edges, and landscape bed maintenance."
  )

  const projects = [
    { src: "/images/IMG_1240.jpeg", alt: "Sharp mechanical sidewalk edging along concrete walkway", title: "Sharp Sidewalk Edging", city: "Cedar Park" },
    { src: "/images/IMG_2515.jpeg", alt: "Freshly cut green lawn stripes with clean borders", title: "Premium Weekly Mowing", city: "Leander" },
    { src: "/images/IMG_8369.jpeg", alt: "Trimming and edging along landscaped brick border", title: "Clean Bed Borders", city: "Georgetown" },
    { src: "/images/IMG_1306.jpeg", alt: "Lawn mowing and edging backyard lawn", title: "Detail-focused Mowing", city: "Round Rock" },
    { src: "/images/IMG_8668.jpeg", alt: "Fresh dark hardwood mulch installation in garden bed", title: "Premium Mulch Bed Install", city: "Leander" },
    { src: "/images/IMG_5293.jpeg", alt: "Limestone gravel and river rock landscaping bed renovation", title: "River Rock Bed Design", city: "Cedar Park" },
    { src: "/images/IMG_3792.jpeg", alt: "Trimming grass around residential brick house foundation", title: "Detailed Foundation Trimming", city: "Round Rock" },
    { src: "/images/IMG_1040.jpeg", alt: "Freshly edged concrete driveway showing clean vertical cut", title: "Walkway Border Edging", city: "Georgetown" },
    { src: "/images/IMG_3618.jpeg", alt: "Removing weeds and clean up of garden beds and native soil", title: "Garden Bed Weeding & Cleanup", city: "Liberty Hill" },
    { src: "/images/IMG_8616.jpeg", alt: "Laying stone pathway border along landscaping layout", title: "Custom Stone Pathways", city: "Cedar Park" },
    { src: "/images/IMG_1390.jpeg", alt: "Clearing driveways and paths with powerful leaf blower", title: "Final Blow-off & Sweep", city: "Round Rock" },
    { src: "/images/IMG_9843.jpeg", alt: "Lawn cutting showing uniform stripes on green turf grass", title: "Lawn Stripe Definition", city: "Leander" }
  ]

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-black text-gray-100">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1 mb-4 bg-white/5 border-l-4 border-primary text-xs font-black tracking-[0.2em] text-primary uppercase">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            Real Project Gallery
          </h1>
          <div className="h-1.5 bg-primary w-24 mx-auto skew-x-[-20deg] mb-6" />
          <p className="text-gray-400 text-lg">
            No stock photos here. See actual lawns, edging, and garden maintenance performed by our team in local neighborhoods.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
              className="relative aspect-[4/5] overflow-hidden cursor-pointer border-4 border-white/5 hover:border-primary transition-all duration-300 group shadow-lg"
              style={{ clipPath: "polygon(5% 0, 100% 0, 100% 95%, 95% 100%, 0 100%, 0 5%)" }}
            >
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1.5 block">
                    {project.city}, TX
                  </span>
                  <h3 className="text-xl font-black text-white uppercase tracking-wide mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.alt}
                  </p>
                </div>
              </div>
              
              <img 
                src={project.src} 
                alt={project.alt} 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
