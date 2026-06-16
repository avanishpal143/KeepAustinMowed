import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useSEO } from '../lib/seo'
import { Button } from '../components/ui/Button'
import { Phone, Mail, FileText, CheckCircle, Info } from 'lucide-react'
import { CONFIG } from '../config'

export const ContactPage: React.FC = () => {
  useSEO(
    "Contact Us | Get a Free evaluation",
    "Request your custom lawn evaluation. Contact Michael Giebelhaus via phone at 512-888-3417, email, or through our Jobber-linked request form."
  )

  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated submission / backup email link trigger
    setSubmitted(true)
    
    // As a premium fallback: construct mailto link to prevent leads getting lost
    const subject = encodeURIComponent("Lawn Care Evaluation Request")
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Address: ${formData.address}\n\n` +
      `Message: ${formData.message}`
    )
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-black text-gray-100">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 bg-white/5 border-l-4 border-primary text-xs font-black tracking-[0.2em] text-primary uppercase">
            Start Your Estimate
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            Get My Quote
          </h1>
          <div className="h-1.5 bg-primary w-24 mx-auto skew-x-[-20deg] mb-6" />
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Fill out the form below or text us directly to set up your custom yard evaluation.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Contact Details box (Focused on Phone/Email) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-1"
          >
            <div className="bg-[#0f0f0f] border border-white/5 p-8 rounded-3xl h-full flex flex-col justify-between" style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 90% 100%, 0 100%)" }}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                    Let's Connect
                  </h3>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">
                    Choose the contact method that works best for you. Texting is usually fastest!
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <a href={`tel:${CONFIG.phone}`} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Phone</p>
                      <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                        {CONFIG.phoneFormatted}
                      </p>
                    </div>
                  </a>

                  {/* Text Quote */}
                  <a href={`sms:${CONFIG.phone}?&body=QUOTE`} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Text Quote</p>
                      <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                        Text <span className="text-primary font-black">QUOTE</span> to {CONFIG.phoneFormatted}
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a href={`mailto:${CONFIG.email}`} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Email</p>
                      <p className="text-lg font-bold text-white group-hover:text-primary transition-colors break-all">
                        {CONFIG.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Informational tip */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-start gap-3 text-gray-500 text-xs">
                <Info size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">
                  Tip: Provide any specific gates, pets, or lawn health issues in the request notes for a more accurate evaluation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-[1.5]"
          >
            {CONFIG.jobberRequestUrl ? (
              /* Embedded Jobber client hub iframe */
              <div className="bg-[#0f0f0f] border border-white/5 p-4 rounded-3xl overflow-hidden shadow-2xl min-h-[600px]">
                <iframe 
                  src={CONFIG.jobberRequestUrl} 
                  title="Jobber Quote Request Form"
                  width="100%" 
                  height="650px" 
                  style={{ border: "none", background: "transparent" }}
                  className="rounded-2xl"
                />
              </div>
            ) : (
              /* Fallback custom premium form */
              <form onSubmit={handleSubmit} className="bg-[#0f0f0f] border border-white/5 p-8 md:p-10 rounded-3xl space-y-6 relative overflow-hidden shadow-2xl" style={{ clipPath: "polygon(4% 0, 100% 0, 100% 96%, 96% 100%, 0 100%, 0 4%)" }}>
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-primary/20 text-primary border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={36} className="animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">Request Initiated!</h3>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed font-semibold">
                      Your email client has been opened to send this request directly to Michael. We'll be in touch shortly!
                    </p>
                    <div className="pt-4">
                      <Button href="/" variant="outline" size="sm">Back to Home</Button>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm font-semibold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(512) 555-0123"
                          className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm font-semibold"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Address / City</label>
                      <input 
                        type="text" 
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="123 Main St, Cedar Park"
                        className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm font-semibold"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message / Details</label>
                      <textarea 
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Tell us about your grass type, gate size, or specific yard requirements..."
                        className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none text-sm font-semibold"
                      ></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full text-lg font-bold uppercase tracking-wider">
                      Request evaluation
                    </Button>
                    
                    {/* Dev helper note */}
                    <div className="text-[10px] text-gray-600 text-center leading-relaxed">
                      Developer info: To connect this form directly to Jobber, paste your Jobber integration embed link inside CONFIG.jobberRequestUrl in src/config.ts.
                    </div>
                  </>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
