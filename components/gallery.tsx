"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2940&auto=format&fit=crop",
    alt: "Crispy Dosa",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2940&auto=format&fit=crop",
    alt: "Filter Coffee",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=2940&auto=format&fit=crop",
    alt: "South Indian Breakfast",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2940&auto=format&fit=crop",
    alt: "Coffee Being Poured",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop",
    alt: "Cafe Interior",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=2940&auto=format&fit=crop",
    alt: "Cozy Ambiance",
    span: "col-span-1 row-span-1",
  },
]

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background">
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
            Gallery
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            A Glimpse of Our World
          </h2>
          <p className="text-lg text-muted-foreground">
            From mouth-watering dishes to our warm, inviting ambiance - experience Benne & Beyond.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${image.span} relative rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-card font-medium">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
