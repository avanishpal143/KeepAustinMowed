import React from "react"
import { motion, Variants } from "framer-motion"

export const Gallery = () => {
  const images = [
    "/images/gallery_1.png",
    "/images/gallery_2.png",
    "/images/gallery_3.png",
    "/images/gallery_4.png",
    "/images/gallery_5.png",
    "/images/gallery_6.png"
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  }

  return (
    <section id="gallery" className="py-24 relative bg-black border-t-8 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter"
          >
            Our Recent Work
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-2 bg-primary mx-auto mb-6 skew-x-[-20deg]"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium"
          >
            See the difference professional lawn care makes for homeowners across the Austin area.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              className="relative aspect-[4/5] overflow-hidden cursor-pointer border-4 border-white/5 hover:border-primary transition-colors duration-300"
              style={{ clipPath: "polygon(5% 0, 100% 0, 100% 95%, 95% 100%, 0 100%, 0 5%)" }}
            >
              <div className="absolute inset-0 bg-primary/40 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
              <img 
                src={src} 
                alt={`Lawn Care Project ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
