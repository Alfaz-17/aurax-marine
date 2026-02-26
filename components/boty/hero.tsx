"use client"

import Link from "next/link"
import { ArrowRight, Anchor, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-secondary">
      {/* Background with video and subtle overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-secondary/30 z-10" />

        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-bg.png"
          className="w-full h-full object-cover opacity-100 transition-opacity duration-1000"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Gradients */}
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-secondary/80 md:from-secondary/60 to-transparent z-15" />
      </div>



      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-6 sm:py-8 md:pt-10">
        <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 md:mb-6"
            >
               <div className="w-8 sm:w-12 h-px bg-primary" />
               <span className="text-[8px] sm:text-[10px] font-black text-primary uppercase tracking-[0.3em] sm:tracking-[0.4em]">Sister Company of Spice Ship Supplier</span>
            </motion.div>


            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-black text-white leading-[0.9] uppercase tracking-tighter mb-3 sm:mb-4"
            >
                Precision <span className="text-primary italic">Marine</span> <br className="hidden lg:block" />
                Engine Spares
            </motion.h1>



             <motion.p 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="text-[13px] sm:text-sm md:text-base text-white/70 mb-5 sm:mb-6 md:mb-8 max-w-xl font-black italic border-l-2 border-primary/20 pl-6 leading-relaxed"
             >
                Global specialists in MAN B&W S50MC, Daihatsu, and auxiliary machinery. delivering 20+ years of maritime excellence.
                <span className="text-primary font-black block mt-3 tracking-[0.2em] uppercase text-[10px] sm:text-xs">Direct Line: +91 90239 68557</span>
             </motion.p>


           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6"
           >
               <Link
                href="/products"
                className="px-5 sm:px-6 py-3 bg-primary text-white font-black uppercase tracking-widest text-[9px] sm:text-[10px] hover:bg-white hover:text-black transition-all shadow-2xl flex items-center justify-center gap-3"
              >
                View Inventory <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-5 sm:px-6 py-3 border border-white/30 text-white font-black uppercase tracking-widest text-[9px] sm:text-[10px] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3"
              >
                Engine Inquiry <Anchor className="w-4 h-4" />
              </Link>

           </motion.div>
        </div>
      </div>

      {/* Side Stats/Callouts - Mobile optimized */}
      <div className="absolute bottom-6 sm:bottom-10 md:bottom-16 lg:bottom-20 right-4 sm:right-8 md:right-12 lg:right-20 z-20 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-2 sm:gap-4 md:gap-6"
          >
             <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
             <div className="text-white">
                <span className="text-base sm:text-xl md:text-2xl font-black block leading-none">20+ Years</span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-widest uppercase font-black text-primary">Industry Legacy</span>
             </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-2 sm:gap-4 md:gap-6"
          >
             <Anchor className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
             <div className="text-white">
                <span className="text-base sm:text-xl md:text-2xl font-black block leading-none">Global</span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-widest uppercase font-black text-primary">Export Network</span>
             </div>
          </motion.div>

      </div>

      {/* Floating element - hidden on mobile */}
      <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 translate-x-1/2 pointer-events-none" />
    </section>
  )
}
