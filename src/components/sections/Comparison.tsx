import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export const Comparison = () => {
  const weeklyBenefits = [
    "Best curb appeal year-round",
    "Easier on the grass",
    "Predictable schedule",
    "Never overgrown"
  ]

  const biweeklyBenefits = [
    "Lower overall cost",
    "Great for slower growth seasons",
    "Flexible timing options",
    "Budget-friendly"
  ]

  return (
    <section id="comparison" className="py-24 bg-gradient-to-b from-transparent to-white/[0.02]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 uppercase"
          >
            Weekly vs Biweekly
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Not sure? We'll recommend the best frequency based on your yard.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full glass p-8 md:p-12 rounded-3xl border border-white/10 hover:border-primary/50 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full pointer-events-none"></div>
            <h3 className="text-3xl font-black mb-8 text-white uppercase tracking-tight">Weekly</h3>
            <div className="space-y-6">
              {weeklyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="text-primary" size={24} />
                  </div>
                  <span className="text-lg font-medium text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full glass p-8 md:p-12 rounded-3xl border border-white/5 hover:border-white/20 transition-colors"
          >
            <h3 className="text-3xl font-black mb-8 text-white uppercase tracking-tight">Biweekly</h3>
            <div className="space-y-6">
              {biweeklyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="text-gray-500" size={24} />
                  </div>
                  <span className="text-lg font-medium text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
