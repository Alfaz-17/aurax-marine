"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Anchor, Quote } from "lucide-react"

const leaders = [
  {
    name: "Rajesh Kumar",
    title: "Owner & Founder",
    image: "/leader-owner.png",
    quote:
      "Our mission has always been to deliver uncompromising quality and reliability to every vessel we serve across the globe.",
    experience: "30+ Years in Maritime Industry",
  },
  {
    name: "Amit Kumar",
    title: "Managing Director",
    image: "/leader-md.png",
    quote:
      "We combine deep technical expertise with modern supply chain efficiency to keep the world's fleet running.",
    experience: "15+ Years in Marine Engineering",
  },
]

export function LeadershipShowcase() {
  return (
    <section className="pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-6 md:pb-8 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-primary" />
            <Anchor className="w-4 h-4 text-primary" />
            <div className="w-8 h-[1px] bg-primary" />
          </div>
          <span className="text-primary tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[9px] sm:text-[10px] font-black mb-3 sm:mb-4 block">
            The People Behind the Company
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black text-black uppercase tracking-tighter leading-none">
            Our <span className="text-primary italic">Leadership</span>
          </h2>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group flex flex-col"
            >
              <div className="relative bg-white border border-black/10 hover:border-primary/40 transition-all duration-700 overflow-hidden flex flex-col h-full">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/30 z-10" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/30 z-10" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/30 z-10" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/30 z-10" />

                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Name overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <span className="text-primary text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] block mb-1">
                      {leader.title}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-none">
                      {leader.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-6 h-[2px] bg-primary" />
                      <span className="text-[9px] sm:text-[10px] text-white/60 font-bold uppercase tracking-widest">
                        {leader.experience}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quote section */}
                <div className="p-4 sm:p-6 relative flex-1 flex flex-col">
                  <Quote className="w-6 h-6 text-primary/20 mb-3" />
                  <p className="text-sm sm:text-base text-black/70 leading-relaxed italic font-medium">
                    &ldquo;{leader.quote}&rdquo;
                  </p>
                  <div className="mt-auto pt-4 border-t border-black/5">
                    <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">
                      {leader.name}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
