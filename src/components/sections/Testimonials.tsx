import React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah H.",
    area: "Cedar Park, TX",
    title: "Reliable and Professional Service!",
    text: "Michael has done an excellent job maintaining and improving our yard. He cuts, edges and clears the sidewalks/driveway consistently. More importantly, he's helped with routine fertilizing and weed killing - I trust his recommendations and applications, and our turf has seen significant improvements through the summer season.",
    initials: "SH",
    date: "2 weeks ago"
  },
  {
    name: "James L.",
    area: "Leander, TX",
    title: "A Beautiful Lawn Every Time!",
    text: "Very happy with the service. The mowing, edging, and cleanup are always done well, and the lawn looks much better staying on a regular schedule. The responses are super fast whenever I have questions.",
    initials: "JL",
    date: "1 month ago"
  },
  {
    name: "Rachel B.",
    area: "Georgetown, TX",
    title: "Amazing Results and Friendly Service!",
    text: "Michael has always done an excellent job. He is always willing to do extra including fertilizing the lawn, handling the weeds, mulching and trimming trees. He always is well mannered and pleasant young man. I highly recommend him. Very conscientious about his work.",
    initials: "RB",
    date: "3 weeks ago"
  }
]

export const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 relative bg-black/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto mb-6 skew-x-[-20deg]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#0f0f0f] border border-white/5 p-8 rounded-2xl relative shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex text-[#FFC107]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  {/* Google Logo SVG */}
                  <svg className="w-5 h-5 opacity-60" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{review.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">"{review.text}"</p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm border border-primary/20">
                  {review.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="font-bold text-white text-sm">{review.name}</p>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" title="Verified Customer" />
                  </div>
                  <p className="text-xs text-gray-500 font-medium">{review.area} • {review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
