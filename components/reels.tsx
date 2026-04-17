"use client"

const reels = [
  {
    video: "/Images/BenneDosavideo.mp4",
    subtitle: "Where Global Meets Local.",
    title: "Benne Podi Masala Dosa",
  },
  {
    video: "/Images/FilterCoffee.mp4",
    subtitle: "Conversations, Food, and Love.",
    title: "Filter Coffee",
  },
  {
    video: "/Images/PodiIdli.mp4",
    subtitle: "All day, every day",
    title: "Ghee Podi Thatte Idli",
  },
]

export function Reels() {
  return (
    <section className="py-24 bg-[#071014] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Fresh From Our Kitchen
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reels.map((item, i) => (
            <div
              key={i}
              className="relative h-[620px] overflow-hidden group"
            >
              {/* Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src={item.video} type="video/mp4" />
              </video>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

              {/* Content */}
              <div className="absolute bottom-0 p-6 z-10 w-full">
                
                {/* Subtitle */}
                <p className="text-sm text-white/80 mb-2">
                  {item.subtitle}
                </p>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-serif mb-6">
                  {item.title}
                </h3>

                {/* Buttons */}
                {/* <div className="flex gap-4">
                  <button className="bg-green-700 px-5 py-3 text-sm font-medium">
                    Visit Us
                  </button>
                  <button className="bg-green-700 px-5 py-3 text-sm font-medium">
                    Know More
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}