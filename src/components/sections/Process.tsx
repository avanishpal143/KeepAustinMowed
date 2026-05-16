import React from "react"
import { motion, Variants } from "framer-motion"
import { MessageSquareText, CalendarCheck, Sun } from "lucide-react"

export const Process = () => {
  const steps = [
    {
      icon: <MessageSquareText size={40} />,
      title: "01. Text Your Address",
      description: "Send us your address and any photos."
    },
    {
      icon: <CalendarCheck size={40} />,
      title: "02. Get Your Price",
      description: "We'll text you a custom quote within 24 hours."
    },
    {
      icon: <Sun size={40} />,
      title: "03. We Schedule & Mow",
      description: "Pick a day and we'll handle the rest."
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  }

  return (
    <section id="process" className="py-32 relative bg-black border-y border-white/5">
      {/* Augusta style slants */}
      <div className="absolute top-0 right-0 w-1/3 h-1 bg-primary"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl font-medium"
          >
            A simple, seamless process designed to get your lawn looking great without the headache.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Timeline connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-white/10 z-0">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-black border-4 border-white/20 flex items-center justify-center mb-8 text-white group-hover:border-primary group-hover:text-primary transition-all duration-500 shadow-[0_0_0_rgba(223,0,255,0)] group-hover:shadow-[0_0_40px_rgba(223,0,255,0.3)] skew-x-[10deg]">
                  <div className="skew-x-[-10deg]">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">{step.title}</h3>
                <p className="text-gray-400 text-lg font-medium max-w-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
