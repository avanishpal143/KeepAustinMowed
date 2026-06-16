import React from 'react'
import { motion } from 'framer-motion'
import { useSEO } from '../lib/seo'
import { Button } from '../components/ui/Button'
import { Scissors, Sprout, Leaf, ArrowRight, ShieldCheck } from 'lucide-react'
import { CONFIG } from '../config'

export const ServicesPage: React.FC = () => {
  useSEO(
    "Our Services | Premium Lawn Care & Maintenance",
    "Detailed services offered by Keep Austin Mowed: Premium Lawn Mowing, Weed Control & Fertilization Lawn Treatments, Garden Bed Maintenance, and Custom Landscaping."
  )

  const items = [
    {
      icon: <Scissors size={32} />,
      title: CONFIG.services.mowing.title,
      description: CONFIG.services.mowing.description,
      details: [
        "Regular mowing at proper heights for turf health",
        "Clean, mechanical edging along driveways, patios, and curbs",
        "Trimming around obstacles, fences, and walls",
        "Thorough blow-off of all hard surfaces before we leave",
        "Clippings bagged or mulched based on lawn needs"
      ]
    },
    {
      icon: <ShieldCheck size={32} />,
      title: CONFIG.services.treatments.title,
      description: CONFIG.services.treatments.description,
      details: [
        "Targeted weed control to maintain clean turf",
        "Balanced granular fertilization for optimal growth",
        "Pre-emergent applications to prevent seasonal weeds",
        "Lawn health evaluations and advice",
        "Seasonal treatment scheduling for year-round vigor"
      ]
    },
    {
      icon: <Sprout size={32} />,
      title: CONFIG.services.maintenance.title,
      description: CONFIG.services.maintenance.description,
      details: [
        "Shrub and bush trimming and shaping",
        "Mulch delivery, preparation, and professional laying",
        "Complete landscape bed weeding and cleanup",
        "Edging of flower beds for a distinct border",
        "Seasonal cleanups (leaves, small debris removal)"
      ]
    }
  ]

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-black text-gray-100">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1 mb-4 bg-white/5 border-l-4 border-primary text-xs font-black tracking-[0.2em] text-primary uppercase">
            Service Details
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            Lawn & Garden Services
          </h1>
          <div className="h-1.5 bg-primary w-24 mx-auto skew-x-[-20deg] mb-6" />
          <p className="text-gray-400 text-lg">
            We deliver reliable, professional, and detailed property maintenance tailored to your lawn.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-12 max-w-4xl mx-auto mb-24">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#0f0f0f] border border-white/5 p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-primary/20 transition-all duration-300"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 96% 100%, 0 100%)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Icon box */}
                <div className="w-16 h-16 bg-black border-2 border-white/10 flex items-center justify-center text-primary skew-x-[-10deg] flex-shrink-0 group-hover:border-primary transition-colors duration-300">
                  <div className="skew-x-[10deg]">{item.icon}</div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 font-semibold text-lg mb-6 leading-snug">
                    {item.description}
                  </p>
                  
                  <ul className="space-y-3 text-sm text-gray-400">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3">
                        <Leaf size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Landscaping Leads Capture Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 via-purple-900/20 to-black border-2 border-primary/30 p-10 md:p-14 rounded-3xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
          style={{ clipPath: "polygon(4% 0, 100% 0, 100% 90%, 96% 100%, 0 100%, 0 10%)" }}
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-3">
              Need Larger Landscaping Projects?
            </h3>
            <p className="text-gray-300 text-sm md:text-base max-w-xl font-medium leading-relaxed">
              From fresh mulch and rock installations to bed redesigns and custom plantings, we handle major landscape renovations to completely elevate your property's value.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Button href="/custom-landscaping" className="group shadow-lg hover:shadow-primary/30">
              Custom Landscaping
              <ArrowRight size={18} className="ml-2 inline-block group-hover:translate-x-1.5 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
