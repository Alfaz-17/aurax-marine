"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Package, Cpu, Gauge, ShieldCheck, Wrench, Zap, Globe } from "lucide-react"

export function SEOIntro() {
  const services = [
    { title: "Main Engines & Components", icon: Package },
    { title: "Aux Engines / D.G. Sets Spares", icon: Cpu },
    { title: "Air Compressors & Parts", icon: Zap },
    { title: "AC, Fridge & Screw Compressors", icon: Gauge },
    { title: "Lube Oil & Fuel Oil Purifiers", icon: Gauge },
    { title: "Fresh & Sea Water Pumps", icon: Wrench },
    { title: "Heat Exchangers & Coolers", icon: Gauge },
    { title: "Fresh Water Generators", icon: Gauge },
    { title: "Cranes, Motors & Pumps", icon: Wrench },
    { title: "Deck Equipment & Safety", icon: ShieldCheck },
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
              <span className="text-primary tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[9px] sm:text-[10px] font-black mb-3 sm:mb-4 block">Engine Spares Specialist</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-black text-black leading-none tracking-tighter uppercase mb-4 sm:mb-6">
                AURAX <span className="text-primary italic">Marine</span> – <br className="hidden sm:block"/>
                <span className="text-black italic">Engineered</span> Reliability
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-black/80 leading-relaxed italic border-l-2 border-primary/20 pl-4">
                AURAX Marine Solutions is a specialized supplier of MAN B&W S50MC engine spares, supporting ship managers and repair yards worldwide. We provide high-quality marine engine components, auxiliary systems, and power solutions for ocean-going vessels.
              </p>
            </div>

            <div className="p-5 sm:p-6 md:p-8 bg-black/5 border-l-4 border-primary">
              <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-black mb-2">Technical Briefing</h3>
              <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                As a sister company of Spice Ship Supplier, we carry forward a 20-year legacy in the maritime industry. We specialize in low-speed and medium-speed engines, providing critical components such as cylinder liners, piston crowns, and fuel system parts with technical precision.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "MAN B&W S50MC Specialization",
                "20+ Years Industry Legacy",
                "New OEM & Reconditioned Options",
                "Rigorous Quality Inspections",
                "Fast Global Export Delivery"
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
                Specialized support for Sulzer, MAN B&W, and Daihatsu machinery. Every supply is backed by detailed inspection reports and documentation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
