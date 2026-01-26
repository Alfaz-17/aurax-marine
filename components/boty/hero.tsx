"use client"

import Link from "next/link"
import { ArrowRight, Anchor, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background with video and subtle overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/40 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-100 transition-opacity duration-1000"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Gradients */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/60 to-transparent z-15" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-20 pt-20">
        <div className="max-w-4xl">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex items-center gap-4 mb-8"
           >
              <div className="w-12 h-px bg-accent" />
              <span className="text-[10px] font-bold text-accent uppercase tracking-[0.4em]">Integrated Marine Logistics</span>
           </motion.div>

           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight uppercase tracking-tighter mb-10"
           >
              Global <span className="text-accent underline decoration-1 underline-offset-8">Marine</span> & Industrial Spares.
           </motion.h1>

           <motion.p 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="text-xl text-white/60 mb-12 max-w-2xl font-medium leading-relaxed italic"
           >
              Premier global supplier of Marine Automation, Engine Control Systems, and Industrial Machinery spares. Certified reliability for the world's most demanding maritime fleets.
           </motion.p>

           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="flex flex-wrap gap-8"
           >
              <Link
                href="/products"
                className="px-10 py-5 bg-accent text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-all shadow-2xl flex items-center gap-4"
              >
                View Inventory <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-all flex items-center gap-4"
              >
                Get Quote <Anchor className="w-5 h-5" />
              </Link>
           </motion.div>
        </div>
      </div>

      {/* Side Stats/Callouts */}
      <div className="hidden lg:block absolute bottom-20 right-20 z-20 space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-6"
          >
             <ShieldCheck className="w-10 h-10 text-accent" />
             <div className="text-white">
                <span className="text-2xl font-bold block leading-none">ISO 9001</span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-accent">Certified Quality</span>
             </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-6"
          >
             <Anchor className="w-10 h-10 text-accent" />
             <div className="text-white">
                <span className="text-2xl font-bold block leading-none">Global</span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-accent">Worldwide Export</span>
             </div>
          </motion.div>
      </div>

      {/* Floating element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 translate-x-1/2 pointer-events-none" />
    </section>
  )
}
