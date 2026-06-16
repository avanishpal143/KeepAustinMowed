import React from "react"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { Link } from "../ui/Link"
import { CONFIG } from "../../config"

export const ServiceAreas = () => {
  const areas = CONFIG.cities

  return (
    <section id="locations" className="py-20 border-y border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Service Areas</h2>
            <p className="text-gray-400">Click a city below to view local premium yard care services.</p>
          </div>
          
          <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-4">
            {areas.map((area, index) => {
              const urlPath = `/${area.toLowerCase().replace(/\s+/g, "-")}-lawn-mowing`
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={urlPath}
                    className="flex items-center gap-2 glass px-6 py-3 rounded-full hover:border-primary/50 hover:text-primary transition-all cursor-pointer border border-white/5"
                  >
                    <MapPin size={18} className="text-primary" />
                    <span className="font-semibold text-gray-200">{area}</span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
