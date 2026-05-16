import React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "../ui/Button"

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 uppercase"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Have a question or ready to schedule your service? Reach out to us today.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
              <div className="space-y-6">
                <a href="tel:512-888-3417" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-lg font-semibold text-white">512-888-3417</p>
                  </div>
                </a>
                
                <a href="mailto:michael@kamtx.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-lg font-semibold text-white">michael@kamtx.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Service Areas</p>
                    <p className="text-lg font-semibold text-white leading-snug">Leander, Cedar Park, <br/>Georgetown, Round Rock</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-[1.5]"
          >
            <form className="glass p-8 md:p-10 rounded-3xl border border-white/5 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="(512) 555-0123"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Address / City</label>
                <input 
                  type="text" 
                  placeholder="123 Main St, Cedar Park"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your lawn care needs..."
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <Button size="lg" className="w-full text-lg font-bold uppercase tracking-wider">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
