"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Meghana Gore",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2940&auto=format&fit=crop",
    content: "Hello guys just wanted to share the food here at beyond benne is amazing we went there yesterday had Thatte podi idli podi benne dosa and plain benne dosa and filter coffee it was just amazing plz visit them for very good experience ❤️😍",
    rating: 5,
  },
  {
    name: "ABDULLAH MIRSINGE",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop",
    content: "being a dosa lover this was probably one of the best one’s I have ever eaten and that podi masala was🤌😋 Filter coffee was also Amazing . Would definitely recommend other to visit",
    rating: 5,
  },
  {
    name: "Girija",
    role: "Food Enthusiast",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop",
    content: "Went there for the second time and their dosas are soo soo good. Loved their garlic plain dosa(if you love spice go for it) filter coffee along with dosa is sucha vibe..highly recommended",
    rating: 5,
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium tracking-wider uppercase mb-6">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real reviews from our valued customers who love the Benne & Beyond experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Quote className="text-accent" size={18} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-card rounded-full px-6 py-3 shadow-sm border border-border/50">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">4.8</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
            </div>
            <div className="w-px h-6 bg-border" />
            <span className="text-muted-foreground text-sm">Based on 500+ reviews on Google</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
