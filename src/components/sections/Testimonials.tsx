import React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah H",
    area: "Top Rated",
    title: "Reliable and Professional Service!",
    text: "Michael has done an excellent job maintaining and improving our yard. He cuts, edges and clears the sidewalks/driveway consistently. More importantly, he's helped with routine fertilizing and weed killing - I trust his recommendations and applications, and our turf has seen significant improvements through the summer season.",
    initials: "SH"
  },
  {
    name: "James L",
    area: "Top Rated",
    title: "A Beautiful Lawn Every Time!",
    text: "Very happy with the service. The mowing, edging, and cleanup are always done well, and the lawn looks much better staying on a regular schedule.",
    initials: "JL"
  },
  {
    name: "Rachel B",
    area: "Top Rated",
    title: "Amazing Results and Friendly Service!",
    text: "Michael has always done an excellent job. He is always willing to do extra including fertilizing the lawn, handling the weeds, mulching and trimming trees. He always is well mannered and pleasant young man. I highly recommend him. Very conscientious about his work.",
    initials: "RB"
  }
]

export const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Trusted By Your Neighbors
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-2xl relative"
            >
              <div className="flex text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{review.title}</h4>
              <p className="text-gray-300 text-lg mb-8 italic">"{review.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold border border-primary/30">
                  {review.initials}
                </div>
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.area}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
