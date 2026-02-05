"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Package, Cpu, Gauge, ShieldCheck, Wrench, Zap, Globe } from "lucide-react"

export function SEOIntro() {
  const services = [
    { title: "Main Engines (2-Stroke & 4-Stroke) & Components", icon: Package },
    { title: "Auxiliary Engines / D.G. Sets & Spares", icon: Cpu },
    { title: "Air Compressors & Associated Parts", icon: Zap },
    { title: "AC, Fridge & Screw Compressors", icon: Gauge },
    { title: "Oil Purifiers", icon: Gauge },
    { title: "Sea Water, Fresh Water & Oil Pumps", icon: Wrench },
    { title: "Heat Exchangers & Coolers", icon: Gauge },
    { title: "Fresh Water Generators", icon: Gauge },
    { title: "Derrick & Hydraulic Cranes, Motors & Pumps", icon: Wrench },
    { title: "Deck Equipment", icon: ShieldCheck },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-start">
          {/* Left Content - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[9px] sm:text-[10px] font-black mb-3 sm:mb-4 block">Our Legacy & Technical Expertise</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-black text-black leading-none tracking-tighter uppercase mb-4 sm:mb-6">
                AURAX <span className="text-primary italic">Marine</span> – <br className="hidden sm:block"/>
                <span className="text-black italic">Legacy of</span> Excellence
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-black/80 leading-relaxed italic border-l-2 border-primary/20 pl-4">
                "We believe trust in the marine industry is not claimed; it is earned through consistent performance."
              </p>
            </div>

            <div className="p-5 sm:p-6 md:p-8 bg-black/5 border-l-4 border-primary">
              <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-black mb-2">Sister Company of Spice Ship Supplier</h3>
              <p className="text-xs sm:text-sm text-black/70 leading-relaxed mb-4">
                Aurax Marine Solutions is proud to be a sister company of <strong>Spice Ship Supplier</strong>, a name that has been actively serving the maritime industry for over 20 years.
              </p>
              <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                Building on this strong foundation, Aurax Marine Solutions was established with a focused vision—to specialize in marine engines, machinery spares, and power solutions for ocean-going vessels and auxiliary systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Specialized in MAN B&W S50MC",
                "20+ Years Industry Legacy",
                "New OEM & Reconditioned Options",
                "Ready Stock / Fast Delivery",
                "Davihatsu Generator Specialists"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-black">{item}</span>
                </div>
              ))}

            </div>
          </motion.div>

          {/* Right Content - Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 md:p-10 lg:p-16 border border-[#4988C4]/20 relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl" />
            
            <h3 className="text-xl sm:text-2xl font-sans font-black text-[#0B1F33] mb-6 sm:mb-8 md:mb-10 tracking-tight uppercase leading-none">
              Core Product <span className="text-primary italic">Offerings</span>:
            </h3>


            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white border border-[#0B1F33]/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <service.icon className="w-4 h-4 text-primary group-hover:text-white" />
                  </div>
                  <span className="text-xs font-black text-[#0B1F33]/60 leading-snug group-hover:text-[#0B1F33] transition-colors uppercase tracking-[0.1em] pt-1">
                    {service.title}
                  </span>
                </div>

              ))}
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 md:pt-10 border-t border-[#0B1F33]/10">
              <p className="text-[9px] sm:text-[10px] text-[#0B1F33]/50 uppercase tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed">
                Available as: New OEM alternative, Reconditioned (with reports), and Ready Stock.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
