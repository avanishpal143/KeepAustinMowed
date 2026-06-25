import React from 'react'
import { motion } from 'framer-motion'
import { useSEO } from '../lib/seo'
import { Button } from '../components/ui/Button'
import { CheckCircle2, User, Trophy, Heart } from 'lucide-react'
import { CONFIG } from '../config'

export const AboutPage: React.FC = () => {
  useSEO(
    "My Story | Keep Austin Mowed",
    "Meet Michael Giebelhaus, founder of Keep Austin Mowed. A Rouse High School student who graduated early to build a local, reliable lawn care business built on precision."
  )

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-black text-gray-100">
      {/* Background glow */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 bg-white/5 border-l-4 border-primary text-xs font-black tracking-[0.2em] text-primary uppercase">
            Meet the Owner
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            My Story
          </h1>
          <div className="h-1.5 bg-primary w-24 mx-auto skew-x-[-20deg] mb-6" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
          {/* Visual element */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 w-full relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border-l-[12px] border-b-[12px] border-primary" style={{ clipPath: "polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)" }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
              <img 
                src="/images/IMG_1240.jpeg" 
                alt="Michael Giebelhaus - Owner of Keep Austin Mowed" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-xs font-bold text-primary tracking-widest uppercase mb-1">FOUNDER & OPERATOR</p>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Michael Giebelhaus</h3>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 blur-2xl rounded-full -z-10" />
          </motion.div>

          {/* Biography text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 space-y-6 text-gray-300 text-lg leading-relaxed font-light"
          >
            <h2 className="text-2xl font-black text-white uppercase tracking-tight">
              Hi, I'm Michael.
            </h2>
            <p>
              I am a Rouse High School student who chose to graduate early in my junior year to focus fully on my passion: running a detailed, professional landscaping company.
            </p>
            <p>
              My journey began at just 8 years old, helping neighbors and family members with their yards. I quickly discovered a deep satisfaction in the meticulous details of lawn maintenance—precision edging, clean cuts, and the visual transformation of a beautifully kept property.
            </p>
            <p>
              Over the last decade, I have committed myself to refining this craft. To me, lawn care is not just about cut grass; it's about establishing order, bringing out property beauty, and building lasting relationships with our community members.
            </p>
            <p className="font-bold text-white italic border-l-2 border-primary pl-4 uppercase tracking-wide">
              "Let’s grow something great together!"
            </p>
          </motion.div>
        </div>

        {/* Brand pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-white/5"
          >
            <User className="text-primary mb-4" size={36} />
            <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Personalized Care</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Every yard is treated as if it were my own. I listen carefully to your needs and customize the service parameters to guarantee satisfaction.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-8 rounded-2xl border border-white/5"
          >
            <Trophy className="text-primary mb-4" size={36} />
            <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Attention to Detail</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              We focus on clean lines, perfectly blown-off driveways, and detail-oriented weeding. We do not take shortcuts.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-2xl border border-white/5"
          >
            <Heart className="text-primary mb-4" size={36} />
            <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Reliable Scheduling</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              No guesswork. You get consistent, transparent communication, predictable visit dates, and prompt answers.
            </p>
          </motion.div>
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <h3 className="text-2xl font-black text-white mb-6 uppercase">Ready to Experience Professional Yard Care?</h3>
          <Button href="/contact" size="lg">Get My Evaluation</Button>
        </div>
      </div>
    </div>
  )
}
