"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MapPin, UtensilsCrossed } from "lucide-react"
import Link from "next/link"

const heroVideos = [
  "/Images/Dosavideo.mp4",
  "/Images/Dosaanimatev.mp4",
  "/Images/DosavideoP2.mp4",
]

export function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length)
    }, 4000) // change every 6 sec

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video Slider */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <video
            key={heroVideos[currentVideo]}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroVideos[currentVideo]} type="video/mp4" />
          </video>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-card/90 text-sm font-medium tracking-wider uppercase">
            Welcome to
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-card mb-6 leading-tight"
        >
          Benne & Beyond
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl text-card/90 font-light mb-4 tracking-wide"
        >
          Authentic South Indian Flavors
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-xl text-card/80 font-light mb-12 tracking-wide"
        >
          Dosa, Idli, Vada & Filter Coffee
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#menu"
            className="group flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium text-lg transition-all duration-300 hover:bg-accent/90 hover:scale-105 hover:shadow-xl"
          >
            <UtensilsCrossed
              size={20}
              className="group-hover:rotate-12 transition-transform"
            />
            Explore Menu
          </Link>

          <Link
            href="#location"
            className="group flex items-center gap-2 px-8 py-4 bg-card/10 backdrop-blur-sm text-card border border-card/30 rounded-full font-medium text-lg transition-all duration-300 hover:bg-card/20 hover:scale-105"
          >
            <MapPin
              size={20}
              className="group-hover:bounce transition-transform"
            />
            Get Directions
          </Link>
        </motion.div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroVideos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentVideo === index
                ? "bg-white scale-125"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-card/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-card rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}