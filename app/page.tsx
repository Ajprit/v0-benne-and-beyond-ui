import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Reels } from "@/components/reels"

import { Features } from "@/components/features"
import { Menu } from "@/components/menu"
import { Gallery } from "@/components/gallery"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { Testimonials } from "@/components/testimonials"
import { Franchise } from "@/components/franchise"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Reels />
      <Features />
      <Menu />
      <Gallery />
      <Testimonials />
      <Location />
      <Contact />
      <Franchise />
      <Footer />
    </main>
  )
}
