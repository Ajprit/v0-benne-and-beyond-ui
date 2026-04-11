"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
  { href: "#franchise", label: "Franchise" },
]

const socialLinks = [
  { href: "https://www.instagram.com/bennebeyond/", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-card py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <Link href="#home" className="inline-block mb-6">
              <span className="font-serif text-3xl font-bold text-card">
                Benne & Beyond
              </span>
            </Link>
            <p className="text-card/70 leading-relaxed mb-6 max-w-md">
              Experience the authentic taste of South India at Benne & Beyond. From crispy dosas to aromatic filter coffee, we bring you recipes passed down through generations, prepared with love and the finest ingredients.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-card mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold text-card mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-card/70">
                  123, MG Road, Near City Mall<br />
                  Bengaluru, Karnataka 560001
                </span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-card/70 hover:text-accent transition-colors"
                >
                  <Phone size={20} className="text-accent flex-shrink-0" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@benneandbeyond.com"
                  className="flex items-center gap-3 text-card/70 hover:text-accent transition-colors"
                >
                  <Mail size={20} className="text-accent flex-shrink-0" />
                  hello@benneandbeyond.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-card/10 mb-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-card/50 text-sm">
          <p>&copy; {currentYear} Benne & Beyond. All rights reserved.</p>
          <p>Crafted with love for South Indian cuisine</p>
        </div>
      </div>
    </footer>
  )
}
