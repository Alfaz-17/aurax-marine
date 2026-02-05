"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Leaf, Flower2, Globe } from "lucide-react"

export function CTABanner() {
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (bannerRef.current) {
      observer.observe(bannerRef.current)
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current)
      }
    }
  }, [])

  return (
    <section className="py-20 sm:py-32 bg-white overflow-hidden relative border-y border-[#4988C4]/20">
      <div 
        ref={bannerRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative overflow-hidden border border-[#4988C4]/30 bg-white shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
               <Image
                 src="/contact-hero.png"
                 alt="Operations Center"
                 fill
                 className="object-cover opacity-20"
               />
               {/* Scanlines */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(14,42,69,0)_50%,rgba(11,31,51,0.25)_50%),linear-gradient(90deg,rgba(73,136,196,0.06),rgba(189,232,245,0.02),rgba(73,136,196,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none" />
               <div className="absolute inset-0 bg-[#0B1F33]/60 z-10" />
            </div>

            <div className="relative z-20 p-8 sm:p-12 md:p-20 flex flex-col items-center text-center">
               
               {/* Status Light */}
               <div className="mb-8 flex items-center gap-3">
                  <div className="relative">
                     <div className="w-3 h-3 bg-[#4988C4] rounded-full animate-pulse" />
                     <div className="absolute inset-0 bg-[#4988C4] rounded-full animate-ping opacity-75" />
                  </div>
                  <span className="text-[#4988C4] font-mono text-xs uppercase tracking-widest">Priority Channel Open</span>
               </div>

               <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#0B1F33] uppercase tracking-tighter leading-none mb-6">
                  Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BDE8F5]">Supply Chain</span> Sequence
               </h2>
               
               <p className="max-w-2xl text-[#0B1F33]/70 mb-10 text-sm sm:text-base font-mono leading-relaxed">
                  // DEPLOYING GLOBAL LOGISTICS GRID
                  <br />
                  Connecting to Shanghai, Rotterdam, and Singapore hubs for immediate part requisition.
               </p>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl border-t border-[#4988C4]/20 pt-10 mb-10">
                  <div className="flex flex-col items-center">
                     <span className="text-2xl font-black text-[#0B1F33]">24/7</span>
                     <span className="text-[10px] text-[#4988C4] uppercase tracking-widest">Ops Center</span>
                  </div>
                  <div className="flex flex-col items-center">
                     <span className="text-2xl font-black text-[#0B1F33]">10k+</span>
                     <span className="text-[10px] text-[#4988C4] uppercase tracking-widest">SKUs Indexed</span>
                  </div>
                  <div className="flex flex-col items-center">
                     <span className="text-2xl font-black text-[#0B1F33]">ISO</span>
                     <span className="text-[10px] text-[#4988C4] uppercase tracking-widest">Certified</span>
                  </div>
                  <div className="flex flex-col items-center">
                     <span className="text-2xl font-black text-[#0B1F33]">Global</span>
                     <span className="text-[10px] text-[#4988C4] uppercase tracking-widest">Dispatch</span>
                  </div>
               </div>

               <button className="group relative px-8 py-4 bg-[#4988C4] hover:bg-white transition-colors duration-300">
                  <span className="relative z-10 text-white group-hover:text-[#0B1F33] font-black uppercase tracking-[0.2em] text-xs">Establish Contact</span>
                  <div className="absolute inset-0 border border-white/20 group-hover:border-[#0B1F33]/20" />
               </button>

            </div>

             {/* HUD Corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#4988C4] z-20" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#4988C4] z-20" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#4988C4] z-20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#4988C4] z-20" />
        </div>
      </div>
    </section>
  )
}
