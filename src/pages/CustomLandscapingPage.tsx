import React from 'react'
import { motion } from 'framer-motion'
import { useSEO } from '../lib/seo'
import { Button } from '../components/ui/Button'
import { Check, ClipboardList, TreePine, Shovel, Layers } from 'lucide-react'
import { CONFIG } from '../config'

export const CustomLandscapingPage: React.FC = () => {
  useSEO(
    "Custom Landscaping in Round Rock, TX | Keep Austin Mowed",
    "Looking for landscape renovations? We offer rock and mulch installs, garden bed redesigns, and complete cleanup projects in Round Rock, Leander, Cedar Park, and nearby cities."
  )

  const capabilities = [
    {
      title: "Mulch Installations",
      desc: "Fresh, premium hardwood mulch to conserve soil moisture, prevent weed growth, and give your garden beds a clean, cohesive look.",
      icon: <Layers size={28} />
    },
    {
      title: "Rock & Gravel Installs",
      desc: "Installation of river rock, limestone gravel, granite, or custom stone borders for low-maintenance, modern garden beds and paths.",
      icon: <Shovel size={28} />
    },
    {
      title: "Bed Redesigns & Plantings",
      desc: "Removing outdated shrubs, preparing native soil, and planting Texas-tough perennials and ornamental grasses for a stunning redesign.",
      icon: <ClipboardList size={28} />
    },
    {
      title: "Complete Property Cleanups",
      desc: "Overgrown yard restorations, extensive leaf cleanups, branch clipping, vine removal, and general landscaping bed rehabilitation.",
      icon: <TreePine size={28} />
    }
  ]

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-black text-gray-100">
      {/* Background glow */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 bg-white/5 border-l-4 border-primary text-xs font-black tracking-[0.2em] text-primary uppercase">
            Premium Design & Install
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            Custom Landscaping & Renovations
          </h1>
          <h2 className="text-lg md:text-xl text-primary font-bold tracking-widest uppercase mb-6">
            Servicing Round Rock, TX & Surrounding Areas
          </h2>
          <div className="h-1.5 bg-primary w-24 mx-auto skew-x-[-20deg] mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            We transform ordinary yards into beautiful, premium outdoor spaces with rock, mulch, plant designs, and complete bed cleanups.
          </p>
        </motion.div>

        {/* Feature section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[16/10] md:aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden border-r-[12px] border-b-[12px] border-primary" style={{ clipPath: "polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)" }}>
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
              <img 
                src="/images/IMG_1846.jpeg" 
                alt="Custom landscaping bed and mulch installation" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6 text-gray-300"
          >
            <h3 className="text-2xl font-black text-white uppercase tracking-wide">
              A Custom Approach for Serious Property Transformations
            </h3>
            <p className="font-medium text-gray-400">
              Larger landscaping jobs require professional planning, quality materials, and meticulous execution. We avoid quick temporary fixes and instead install long-lasting rock, plant, and bed improvements.
            </p>
            <div className="space-y-3">
              {[
                "Careful plant selection matching local Texas soil and climate",
                "High-quality commercial landscape weed fabrics and borders",
                "Clean lawn edges and perfect stone layouts",
                "Full post-job cleanup — no dirt or mulch left behind"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm font-semibold">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0f0f0f] border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-primary/20 transition-all duration-300 flex items-start gap-6"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)" }}
            >
              <div className="w-14 h-14 bg-black border-2 border-white/10 flex items-center justify-center text-primary group-hover:border-primary transition-all duration-300 flex-shrink-0 skew-x-[-10deg]">
                <div className="skew-x-[10deg]">{cap.icon}</div>
              </div>
              <div>
                <h4 className="text-lg font-black text-white uppercase tracking-wide mb-2 group-hover:text-primary transition-colors">
                  {cap.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0f0f0f] border-2 border-primary/30 p-10 md:p-14 rounded-3xl text-center shadow-2xl relative"
          style={{ clipPath: "polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 10%)" }}
        >
          <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
            Schedule a Custom evaluation
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8 font-semibold">
            Michael will visit your property to measure beds, discuss stone/mulch types, evaluate plant selections, and provide a comprehensive proposal.
          </p>
          <Button href="/contact" size="lg">
            Request Consultation
          </Button>
        </motion.div>

      </div>
    </div>
  )
}
