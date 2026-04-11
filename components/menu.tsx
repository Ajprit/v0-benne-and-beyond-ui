"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Leaf } from "lucide-react"

const categories = ["Dosa", "Idli", "Vada", "Coffee", "Specials"]

const menuItems = {
  Dosa: [
    {
      name: "Benne Masala Dosa",
      description: "Crispy rice crepe filled with spiced potato masala, served with sambar and chutneys",
      price: 120,
      image: "/Images/bennedosa.jpg",
      isVeg: true,
    },  
    {
      name: "Ghee Roast Dosa",
      description: "Golden crispy dosa roasted in pure ghee, served with special chutneys",
      price: 140,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
    {
      name: "Mysore Masala Dosa",
      description: "Dosa with spicy red chutney spread, filled with potato masala",
      price: 130,
      image: "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
    {
      name: "Paper Dosa",
      description: "Extra thin and crispy dosa, light and delicious",
      price: 100,
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
  ],
  Idli: [
    {
      name: "Steamed Idli",
      description: "Soft, fluffy steamed rice cakes served with sambar and coconut chutney",
      price: 80,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
    {
      name: "Ghee Podi Idli",
      description: "Idli tossed in ghee and spicy podi powder, a flavor explosion",
      price: 100,
      image: "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
    {
      name: "Mini Idli Sambar",
      description: "Bite-sized idlis dunked in aromatic sambar",
      price: 90,
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
    {
      name: "Rava Idli",
      description: "Semolina idli with cashews and curry leaves",
      price: 85,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
  ],
  Vada: [
    {
      name: "Medu Vada",
      description: "Crispy on the outside, soft inside, made from urad dal",
      price: 70,
      image: "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
    {
      name: "Sambar Vada",
      description: "Crispy vadas soaked in hot sambar, absolute comfort food",
      price: 80,
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
    {
      name: "Dahi Vada",
      description: "Soft vadas in creamy yogurt with sweet and tangy chutneys",
      price: 90,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
    {
      name: "Masala Vada",
      description: "Spiced chana dal fritters, perfect tea-time snack",
      price: 60,
      image: "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
  ],
  Coffee: [
    {
      name: "Filter Coffee",
      description: "Traditional South Indian coffee brewed with chicory blend",
      price: 50,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
    {
      name: "Degree Coffee",
      description: "Premium coffee with rich aroma and perfect froth",
      price: 60,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
    {
      name: "Cold Coffee",
      description: "Refreshing cold coffee blended with ice cream",
      price: 80,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
    {
      name: "Badam Milk",
      description: "Creamy almond milk with saffron and cardamom",
      price: 70,
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
  ],
  Specials: [
    {
      name: "Benne Dosa",
      description: "Our signature butter dosa, crispy and aromatic",
      price: 150,
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
    {
      name: "Pongal",
      description: "Creamy rice and lentil dish with ghee, pepper and cashews",
      price: 90,
      image: "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
    {
      name: "Uttapam",
      description: "Thick pancake topped with onions, tomatoes and chilies",
      price: 110,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
    {
      name: "Thali Meal",
      description: "Complete South Indian meal with rice, sambar, rasam, and more",
      price: 200,
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2940&auto=format&fit=crop",
      isVeg: true,
    },
  ],
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("Dosa")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="menu" className="py-24 lg:py-32 bg-secondary">
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
            Our Menu
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Discover Our Authentic Dishes
          </h2>
          <p className="text-lg text-muted-foreground">
            Every dish is prepared with love, using traditional recipes and the finest ingredients.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50"
              >
                {/* Image */}
                <div className="relative w-full h-[220px] overflow-hidden rounded-xl">
  <img
    src={item.image}
    alt={item.name}
    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
  />
                  {item.isVeg && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-green-500/90 backdrop-blur-sm rounded-full">
                      <Leaf size={12} className="text-white" />
                      <span className="text-xs font-medium text-white">Veg</span>
                    </div>
                  )}
                </div>

                  


                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {item.name}
                    </h3>
                    <span className="font-bold text-accent whitespace-nowrap">
                      Rs. {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
