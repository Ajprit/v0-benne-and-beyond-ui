"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Handshake, ArrowRight } from "lucide-react"

export function Franchise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="franchise" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Handshake className="text-primary-foreground" size={40} />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Partner with Benne & Beyond
          </h2>

          <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Join our growing family of cafe partners. Bring the authentic taste of South India to your city with our proven business model, comprehensive training, and ongoing support.
          </p>

          <motion.a
            href="mailto:franchise@benneandbeyond.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground rounded-full font-medium text-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/20"
          >
            Apply Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
