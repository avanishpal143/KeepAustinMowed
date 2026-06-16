import React from "react"
import { motion, Variants } from "framer-motion"
import { Scissors, Sprout, ShieldCheck } from "lucide-react"
import { CONFIG } from "../../config"

const services = [
  {
    icon: <Scissors size={40} />,
    title: CONFIG.services.mowing.title,
    description: CONFIG.services.mowing.description
  },
  {
    icon: <ShieldCheck size={40} />,
    title: CONFIG.services.treatments.title,
    description: CONFIG.services.treatments.description
  },
  {
    icon: <Sprout size={40} />,
    title: CONFIG.services.maintenance.title,
    description: CONFIG.services.maintenance.description
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
}

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-2 bg-primary mx-auto mb-6 skew-x-[-20deg]"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-[1.1]"
          >
            Premium Services for a <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Perfect Lawn
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-base md:text-lg font-medium"
          >
            We handle the hard work so you can simply enjoy your outdoor space. Professional, reliable, and detailed.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative bg-white/[0.02] p-10 border-t-4 border-l-4 border-white/10 hover:border-primary transition-all duration-300 group"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)" }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full pointer-events-none group-hover:bg-primary/20 transition-colors"></div>
              
              <div className="w-20 h-20 bg-black border-2 border-white/10 flex items-center justify-center mb-8 text-gray-300 group-hover:text-primary group-hover:border-primary transition-all duration-500 shadow-[0_0_0_rgba(223,0,255,0)] group-hover:shadow-[0_0_30px_rgba(223,0,255,0.4)] skew-x-[-10deg]">
                <div className="skew-x-[10deg]">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-4 text-white uppercase tracking-wide group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
