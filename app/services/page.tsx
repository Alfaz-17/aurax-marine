"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Package, Cpu, Gauge, Wrench, ShieldCheck, Zap, Globe, Anchor, ChevronRight, CheckCircle2 } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "MAN B&W S50MC Specialization",
      description: "Comprehensive supply for S50MC series, including Cylinder Liners, Piston Crowns, Cylinder Covers, and Fuel Pumps from high-quality sources.",
      icon: Gauge,
      features: ["S50MC Cylinder Liners", "Piston Crowns & Rings", "Exhaust Valve Assemblies"]
    },
    {
      title: "Engine Room Machinery Spares",
      description: "Our inventory covers critical machinery including Air Compressors, Oil Purifiers, Heat Exchangers, and Fresh Water Generators for all major marine brands.",
      icon: Package,
      features: ["Purifier Spares (Alfa Laval)", "Air Compressor Parts", "Pumps & Heat Exchangers"]
    },
    {
      title: "Technical Sourcing & OEM Alternatives",
      description: "We provide technical guidance to identify genuine parts or vetted OEM alternatives, ensuring maximum reliability and cost-efficiency for ship managers.",
      icon: ShieldCheck,
      features: ["Technical Documentation", "Genuine & OEM Parts", "Technical Photography"]
    },
    {
      title: "Auxiliary Engines & D.G. Sets",
      description: "Specialized support for Daihatsu DK20 series and other auxiliary engines, providing everything from bearings to complete overhauled units.",
      icon: Wrench,
      features: ["Daihatsu DK20 Spares", "Generator Set Overhaul", "Precision Bearings"]
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[55dvh] pt-28 sm:pt-32 md:pt-36 flex items-center justify-center bg-black overflow-hidden">
         <div className="absolute inset-0 z-0 text-black">
           <Image 
             src="/services-hero-new.png" 
             alt="AURAX Marine Engineering" 
             fill
             priority
             className="object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-black/40" />
         </div>
         <div className="relative z-10 text-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-primary tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[9px] sm:text-[10px] font-black mb-3 sm:mb-4 block">Marine Engineering Core</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-sans font-black text-white uppercase tracking-tighter mb-4 sm:mb-6">
                Engine & Machinery <span className="bg-white text-black px-4">Spares</span> <br className="hidden sm:block"/>
                <span className="text-primary italic">by</span> AURAX Marine
              </h1>
            </motion.div>
         </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border border-border bg-white p-6 sm:p-8 md:p-10 lg:p-12 hover:border-accent transition-all duration-700"
            >
                <div className="flex items-start justify-between mb-5 sm:mb-6 md:mb-8">
                   <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black flex items-center justify-center group-hover:bg-primary transition-colors border border-black group-hover:border-transparent">
                     <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white group-hover:text-white" />
                   </div>
                   <span className="text-[9px] sm:text-[10px] font-black text-black/40 uppercase tracking-widest">Category 0{i + 1}</span>
                </div>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-black text-black mb-4 sm:mb-5 md:mb-6 uppercase tracking-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                
                <p className="text-sm sm:text-base md:text-lg text-black/70 leading-relaxed mb-6 sm:mb-8 md:mb-10 italic border-l border-primary/20 pl-4">
                  {service.description}
                </p>


                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 md:mb-10">
                   {service.features.map((feat, idx) => (
                     <li key={idx} className="flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-black/80">
                        <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        {feat}
                     </li>
                   ))}
                </ul>

                <div className="pt-5 sm:pt-6 md:pt-8 border-t border-black/10 flex items-center justify-between">
                   <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-black group-hover:text-primary transition-colors">Technical Query</span>
                   <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:translate-x-2 transition-transform" />
                </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black p-6 sm:p-8 md:p-12 lg:p-20 text-center relative overflow-hidden text-white border border-white/5">
             <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-black mb-5 sm:mb-6 md:mb-8 uppercase tracking-tighter">
                Engineering Integrity. <span className="bg-white text-black px-4 italic font-medium">Technical</span> Precision.
             </h2>
             <p className="text-sm sm:text-base md:text-lg text-white/70 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto italic leading-relaxed border-b border-white/10 pb-6">
                Contact our technical team for specialized spare part requests or urgent vessel support. We provide engineering-ready components with full documentation and photographic evidence.
             </p>

             <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                <Link href="/contact" className="px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-accent text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-white hover:text-primary transition-all shadow-2xl">
                   Consult Technical Team
                </Link>
                <Link href="/products" className="px-6 sm:px-8 md:px-10 py-4 sm:py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-white hover:text-primary transition-all">
                   View Technical Inventory
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}


