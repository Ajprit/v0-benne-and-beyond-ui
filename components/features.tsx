"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Wifi, Armchair, Leaf, Car } from "lucide-react"

const features = [
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "Stay connected while you savor your meal with our complimentary high-speed WiFi.",
  },
  {
    icon: Armchair,
    title: "Comfortable Seating",
    description: "Relax in our cozy, thoughtfully designed seating arrangements perfect for any occasion.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source only the freshest, premium ingredients to ensure authentic taste in every bite.",
  },
  {
    icon: Car,
    title: "Parking Available",
    description: "Convenient parking space for both two-wheelers and four-wheelers right at our doorstep.",
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 bg-background">
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
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Experience the Best of South Indian Hospitality
          </h2>
          <p className="text-lg text-muted-foreground">
            We go beyond just serving food. Every visit to Benne & Beyond is designed to be a memorable experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon
                  size={28}
                  className="text-accent group-hover:text-accent-foreground transition-colors"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
