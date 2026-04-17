"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative group"
          >
            {/* Background Decoration */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-2xl blur-2xl z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0" />

            {/* Premium Image Card */}
            <motion.div
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <motion.img
                src="/Images/Bennelogo.jpg"
                alt="Benne & Beyond Logo"
                className="w-full h-full object-cover"
                initial={{ scale: 1.15 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.4 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

              {/* Shine Effect */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={isInView ? { x: "220%" } : {}}
                transition={{
                  delay: 1,
                  duration: 1.6,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-1/3 h-full bg-white/20 blur-xl rotate-12"
              />
            </motion.div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block px-5 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium tracking-wider uppercase mb-6">
              Our Story
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              A Taste of Tradition,
              <br />
              Served with Love
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Benne & Beyond, every meal tells a story. Our journey began
              with one simple mission — to bring authentic South Indian flavors
              to your table, crafted with timeless recipes passed through
              generations.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              From crispy dosas to aromatic filter coffee, every dish is made
              with premium ingredients and heartfelt hospitality. Step into our
              cozy world and experience the warmth of South India.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h3 className="font-serif text-4xl font-bold text-primary">
                  10+
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Years Legacy
                </p>
              </div>

              <div>
                <h3 className="font-serif text-4xl font-bold text-primary">
                  50+
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Authentic Dishes
                </p>
              </div>

              <div>
                <h3 className="font-serif text-4xl font-bold text-primary">
                  1000+
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Happy Customers
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}