import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, AlertCircle } from "lucide-react"

export const Comparison = () => {
  const weeklyBenefits = [
    "Best curb appeal year-round",
    "Cleaner, sharper cut",
    "Easier on the lawn's root system",
    "More consistent, reliable schedule",
    "Prevents turf overgrowth & weeds",
    "Ideal during peak growing season"
  ]

  const biweeklyBenefits = [
    "Budget-friendly entry point",
    "Best for slower winter growth periods"
  ]

  return (
    <section id="comparison" className="py-24 bg-gradient-to-b from-transparent to-white/[0.02]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight"
          >
            Mowing Frequency
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            We highly recommend weekly service for the healthiest turf and best visual appeal.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Weekly (Highly Recommended) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full bg-white/[0.03] p-8 md:p-12 rounded-3xl border-2 border-primary shadow-[0_0_30px_rgba(223,0,255,0.15)] relative overflow-hidden group hover:shadow-[0_0_40px_rgba(223,0,255,0.25)] transition-all duration-300"
          >
            {/* Highly Recommended Badge */}
            <div className="absolute top-6 right-6 bg-primary text-white text-xs font-black tracking-widest px-4 py-1.5 skew-x-[-10deg] uppercase shadow-lg select-none">
              <span className="inline-block skew-x-[10deg]">Best Choice</span>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full pointer-events-none"></div>
            
            <h3 className="text-3xl font-black mb-2 text-white uppercase tracking-tight">Weekly Mowing</h3>
            <p className="text-xs text-primary font-bold tracking-widest uppercase mb-8">Recommended Plan</p>
            
            <div className="space-y-6">
              {weeklyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="text-primary animate-pulse" size={24} />
                  </div>
                  <span className="text-lg font-semibold text-gray-100">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Biweekly */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full bg-white/[0.01] p-8 md:p-12 rounded-3xl border border-white/5 hover:border-white/10 opacity-80 hover:opacity-100 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-black mb-2 text-gray-200 uppercase tracking-tight">Biweekly Mowing</h3>
              <p className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-8">Budget Alternative</p>
              
              <div className="space-y-6 mb-8">
                {biweeklyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="text-gray-500" size={24} />
                    </div>
                    <span className="text-lg font-medium text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-4 rounded-xl flex items-start gap-3 border border-white/5">
              <AlertCircle size={20} className="text-gray-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-400 leading-relaxed">
                Biweekly cuts can result in taller grass clippings and potential thatch buildup during fast-growth spring months.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
