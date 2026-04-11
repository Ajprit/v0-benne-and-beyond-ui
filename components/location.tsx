"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Car, Navigation, Landmark } from "lucide-react"

export function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="location" className="py-24 lg:py-32 bg-secondary">
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
            Find Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Visit Benne & Beyond
          </h2>
          <p className="text-lg text-muted-foreground">
            We are conveniently located with easy access and ample parking. Come visit us!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7533.403312758599!2d73.13585614314484!3d19.25182990685083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBeene%20%26%20beyond%20kalyan!5e0!3m2!1sen!2sin!4v1775853865113!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Benne & Beyond Location"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Address Card */}
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    Our Address
                  </h3>
                  <p className="text-muted-foreground">
                    Mangeshi Crystal, 6, Birla College Rd<br />
                     Kalyan, Maharashtra 421301
                  </p>
                </div>
              </div>
            </div>

            {/* Landmarks */}
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Landmark className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    Nearby Landmarks
                  </h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Opposite Prem Auto Petrol Pump</li>
                    <li>Near Mahavir Car Deccor</li>
                    <li>Behind Central Library</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Car className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    Parking Details
                  </h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Two-Wheeler & Four-Wheeler:</li>
                    <li> Free parking available</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <motion.a
              href="https://maps.app.goo.gl/Jg58fobb6Vpjioos5"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-lg"
            >
              <Navigation size={20} />
              Get Directions on Google Maps
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
