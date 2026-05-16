import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export const About = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/[0.01]">
      {/* Dynamic angled background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 pointer-events-none" style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex-1 w-full relative"
          >
            {/* Augusta Style Image Shape */}
            <div className="relative overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square border-l-[12px] border-b-[12px] border-primary" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)" }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10 mix-blend-overlay"></div>
              <motion.img 
                style={{ y: yImage, scale: 1.15 }}
                src="/images/about_lawn.png" 
                alt="Expert Lawn Care Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 z-20">
                <div className="w-16 h-2 bg-primary mb-4 skew-x-[-20deg]"></div>
                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">Expert Team</h3>
                <p className="text-gray-300 font-medium">Dedicated to your property's perfection.</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 blur-2xl rounded-full -z-10"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="flex-1"
          >
            <h2 className="inline-block px-4 py-1 mb-4 bg-white/5 border-l-4 border-primary text-sm font-black tracking-[0.2em] text-primary uppercase">Our Story</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-[1.1] uppercase tracking-tighter">
              Your Premier Lawn Care Solution in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Austin, TX</span>
            </h3>
            <div className="space-y-6 text-base text-gray-400 font-light">
              <p>
                Our expert team is committed to keeping your outdoor space lush and inviting year-round. From regular mowing to seasonal maintenance, we've got you covered.
              </p>
              <p>
                We know that your time is valuable. That's why we emphasize reliability, transparent communication, and exceptional results with every visit. No excuses, just a perfect lawn.
              </p>
              <p className="font-bold text-white text-lg border-l-2 border-primary pl-4 uppercase tracking-wide">
                Experience the difference with KeepAustinMowed.com — book now!
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
