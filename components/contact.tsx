"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@benneandbeyond.com",
    href: "mailto:hello@benneandbeyond.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "6, Mangeshi Crystal Opp. Prem Auto Petrol Pump<br />Birla College Road Kalyan- 421301.",
    href: "#location",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "5:30 AM - 11:30 PM (All Days)",
    href: null,
  },
]

const actionButtons = [
  {
    label: "Call Now",
    href: "tel:+919876543210",
    variant: "primary",
  },
  {
    label: "Get Directions",
    href: "https://maps.app.goo.gl/Jg58fobb6Vpjioos5",
    variant: "secondary",
  },
  {
    label: "Zomato",
    href: "https://www.zomato.com/mumbai/benne-beyond-kalyan-thane/order",
    variant: "outline",
    icon: "https://b.zmtcdn.com/images/logo/zomato_logo_2017.png",
  },
  {
    label: "Swiggy",
    href: "https://www.swiggy.com/city/mumbai/benne-and-beyond-kalyan-rest1311185?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder",
    variant: "outline",
    icon: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg",
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
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
            Contact Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? We&apos;d love to hear from you. Reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border/50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-medium text-foreground mb-2">{info.label}</h3>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-muted-foreground text-sm">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {actionButtons.map((button) => (
            <motion.a
              key={button.label}
              href={button.href}
              target={button.href.startsWith("http") ? "_blank" : undefined}
              rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                button.variant === "primary"
                  ? "bg-primary text-primary-foreground hover:shadow-lg"
                  : button.variant === "secondary"
                  ? "bg-accent text-accent-foreground hover:shadow-lg"
                  : "bg-card border border-border text-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {button.label}
              {button.href.startsWith("http") && <ExternalLink size={16} />}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
