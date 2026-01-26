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
    <section className="py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div 
          ref={bannerRef}
          className={`overflow-hidden min-h-[500px] transition-all duration-1000 ease-out flex items-center relative ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-primary/80 z-10 mix-blend-multiply" />
             <Image
               src="/pexels-mali-70418.jpg"
               alt="Global Fleet Logistics"
               fill
               className="object-cover transition-transform duration-[3000ms] ease-out scale-110 group-hover:scale-100"
             />
          </div>
          
          <div className="relative z-20 p-12 md:p-20 text-left max-w-3xl">
            <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Supply Chain Excellence</span>
            <h3 className="text-5xl md:text-7xl font-extrabold text-white mb-6 uppercase tracking-tighter leading-none">
              Certified <span className="text-accent italic font-medium">Precision</span>
            </h3>
            <h3 className="text-2xl md:text-3xl text-white/50 mb-10 font-serif italic">
              Unrivaled Quality Sourced from Alang
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-8 h-px bg-accent" />
                <span className="text-xs font-bold uppercase tracking-widest leading-relaxed">ISO 9001 Certified Quality</span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-8 h-px bg-accent" />
                <span className="text-xs font-bold uppercase tracking-widest leading-relaxed">24/7 Global Fleet Support</span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-8 h-px bg-accent" />
                <span className="text-xs font-bold uppercase tracking-widest leading-relaxed">Engineered Reliability</span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-8 h-px bg-accent" />
                <span className="text-xs font-bold uppercase tracking-widest leading-relaxed">Ethical Sourcing Protocol</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
