import React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Clock, Zap, Star } from "lucide-react"

export const TrustBar = () => {
  const trustItems = [
    { icon: <ShieldCheck size={24} className="text-primary" />, text: "Locally Owned" },
    { icon: <Clock size={24} className="text-primary" />, text: "Reliable Scheduling" },
    { icon: <Zap size={24} className="text-primary" />, text: "Fast Responses" },
    { icon: <Star size={24} className="text-primary" />, text: "Professional Service" },
  ]

  return (
    <section className="relative z-30 -mt-20 md:-mt-16 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="glass rounded-2xl p-4 md:p-6 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 divide-x-0 md:divide-x divide-white/10">
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center justify-center gap-3 p-2 group"
              >
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                  {item.icon}
                </div>
                <span className="font-medium text-sm md:text-base text-gray-200 group-hover:text-white transition-colors">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
