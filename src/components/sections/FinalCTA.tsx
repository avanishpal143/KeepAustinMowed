import React from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { MessageSquare } from "lucide-react"

export const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Glow */}
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-16 text-center border border-primary/20 shadow-[0_0_50px_rgba(223,0,255,0.15)]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Ready For A Better <br className="hidden md:block"/> Looking Lawn?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            Get reliable premium lawn care with fast response times and professional service.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button href="#contact" size="lg" className="w-full sm:w-auto text-lg px-10 shadow-[8px_8px_0px_rgba(223,0,255,0.4)]">
              Get My Quote
            </Button>
            
            <a href="sms:5128883417" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 h-14 bg-white text-black font-semibold hover:bg-gray-200 transition-colors skew-x-[-10deg]">
              <div className="skew-x-[10deg] flex items-center gap-2">
                <MessageSquare size={20} />
                Text Us
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
