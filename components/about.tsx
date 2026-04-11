"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Images/Bennelogo.jpg"
                alt="South Indian coffee being poured"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium tracking-wider uppercase mb-6">
              Our Story
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              A Taste of Tradition, Served with Love
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Benne & Beyond, we believe that every meal tells a story. Our journey began with a simple mission: to bring the authentic flavors of South India to your table, crafted with recipes passed down through generations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From the crispy perfection of our dosas to the aromatic filter coffee brewed just right, every dish is prepared with premium ingredients and an unwavering commitment to quality. Step into our cozy space and experience the warmth of South Indian hospitality.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-primary">10+</span>
                <span className="text-sm text-muted-foreground">Years of Legacy</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-primary">50+</span>
                <span className="text-sm text-muted-foreground">Authentic Dishes</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-primary">1000+</span>
                <span className="text-sm text-muted-foreground">Happy Customers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
