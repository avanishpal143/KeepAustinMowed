import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export const WhyUs = () => {
  const reasons = [
    "Dependable Service You Can Count On",
    "Easy & Transparent Communication",
    "Fast Quote Turnaround",
    "Clean, Professional Results Every Time",
    "Proudly Serving Local Texas Communities"
  ]

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-transparent to-white/[0.02]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/10] lg:aspect-square">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
              <img 
                src="/images/why_us_lawn.png" 
                alt="Professional Lawn Mowing" 
                className="w-full h-full object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-72 glass p-4 rounded-xl z-20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-lg text-white">5★</span>
                </div>
                <div>
                  <p className="font-bold text-white leading-tight">Top Rated</p>
                  <p className="text-sm text-gray-300">By Texas Homeowners</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">
              Why Local Homeowners <br/> Choose Us
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
              I know how frustrating it is to deal with unreliable lawn care companies. That's why I've built a service focused entirely on consistent scheduling, clean edges, and fast responses.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 glass p-4 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="text-primary" size={24} />
                  </div>
                  <span className="text-lg font-medium text-gray-200">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
