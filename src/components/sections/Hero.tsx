import React, { useRef } from "react"
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { Button } from "../ui/Button"
import { Phone, MessageSquare } from "lucide-react"

export const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Parallax effect for the background
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const titleWords = ["LAWN", "MOWING", "IN"]
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  }
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  }

  return (
    <section id="top" ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black z-10" />
        <img 
          src="/images/hero_lawn.png" 
          alt="Premium Lawn Care" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Glow effect */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 -right-64 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border-l-4 border-primary bg-black/50 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-gray-200 tracking-[0.2em] uppercase">Premium Service in Texas</span>
          </motion.div>

          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.1] uppercase"
          >
            {titleWords.map((word, i) => (
              <motion.span key={i} variants={itemVariants} className="inline-block mr-4">
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span variants={itemVariants} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              LEANDER, CEDAR PARK, <br/> ROUND ROCK & GEORGETOWN
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
            className="text-lg md:text-xl text-primary font-black mb-12 max-w-2xl tracking-[0.2em]"
          >
            MOW • EDGE • TRIM • BLOW-OFF
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <Button href="#contact" size="lg" className="w-full sm:w-auto text-lg group shadow-[8px_8px_0px_rgba(223,0,255,0.4)] hover:shadow-[12px_12px_0px_rgba(223,0,255,0.6)]">
              Get My Quote
              <motion.span 
                className="ml-2 inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </Button>

            <a href="sms:5128883417" className="w-full sm:w-auto group">
              <div className="flex items-center justify-center w-full sm:w-auto px-8 h-16 border-2 border-white/20 hover:border-primary bg-black/40 backdrop-blur-md transition-all duration-300 cursor-pointer skew-x-[-10deg]">
                <div className="skew-x-[10deg] flex items-center">
                  <MessageSquare className="text-primary mr-3 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-sm md:text-base font-bold text-gray-300 group-hover:text-white transition-colors uppercase tracking-wider">
                    Text <strong className="text-primary">QUOTE</strong> to <br className="sm:hidden" />
                    512-888-3417
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Augusta-style angled bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-black" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
    </section>
  )
}
