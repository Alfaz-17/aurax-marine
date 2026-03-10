
'use client';

import { useEffect, useRef, useState } from "react"
import { ShieldCheck, Server, Globe, Cpu, Anchor, Wifi, Activity, Box, Gauge, Wrench } from "lucide-react"



const features = [
  {
    icon: Gauge,
    title: "MAN B&W S35MC Parts",
    description: "Extensive inventory of S35MC series engine components, specializing in high-performance spares and reconditioned units.",
    stat: "IN STOCK"
  },
  {
    icon: Wrench,
    title: "Daihatsu Marine Spares",
    description: "Comprehensive supply of Daihatsu marine engine spare parts including DK20 series and auxiliary generator components.",
    stat: "READY SHIP"
  },
  {
    icon: ShieldCheck,
    title: "Verified Factsheet",
    description: "Licensed Wholesale & Retail business specializing in the Import and Export of technical maritime equipment globally.",
    stat: "CERTIFIED"
  },
  {
    icon: Activity,
    title: "Engine & Aux Mach",
    description: "Diverse range of auxiliary machinery, sea water pumps, oil purifiers (Alfa Laval/Westfalia) and air compressors.",
    stat: "OEM GRADE"
  },
  {
    icon: Box,
    title: "Global Export",
    description: "Facilitating seamless international maritime supply chains with GST-compliant documentation and technical vetting.",
    stat: "EXPORT"
  },
  {
    icon: Anchor,
    title: "Industrial Grade",
    description: "Derrick & Hydraulic cranes, hydraulic motors, and heavy-duty deck machinery tested for deep-sea reliability.",
    stat: "HEAVY DUTY"
  }
]

export function FeatureSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-white overflow-hidden relative border-t border-primary/5">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100" />

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        
        {/* Header HUD */}
        <div className="flex justify-between items-end mb-16 border-b border-primary/10 pb-6 relative">
             <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary" />
             <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary" />
             
             <div>
                <span className="text-primary/60 font-black uppercase tracking-[0.4em] text-[10px] mb-2 block animate-pulse">System Status: Nominal</span>
                <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-none">
                  Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">capabilities</span>
                </h2>
             </div>
             <div className="hidden md:block text-right">
                <div className="text-primary/40 font-mono text-xs mb-1">FACTS // SPICE_FLEET</div>
                <div className="text-primary/40 font-mono text-xs">GST: 24AMBPK1542J1ZD</div>
             </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Primary Visual Module */}
            <div className="lg:col-span-2 bg-primary/5 border border-primary/10 relative group overflow-hidden h-[500px]">
                <img 
                   src="/marine-warehouse.png" 
                   alt="Marine Warehouse" 
                   className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                {/* HUD Overlay Elements */}
                <div className="absolute top-6 left-6 border border-white/20 px-3 py-1 bg-black/40 backdrop-blur-sm">
                   <span className="text-white font-mono text-xs tracking-widest uppercase">Inventory_Live</span>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-[80%] h-[80%] border border-white/20 relative">
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent" />
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black tracking-widest text-2xl uppercase">System Active</div>
                   </div>
                </div>

                <div className="absolute bottom-8 left-8 transition-transform duration-500 group-hover:-translate-y-2">
                   <h3 className="text-3xl font-black text-white uppercase leading-none mb-4 group-hover:text-accent transition-colors">Spice Ship Supplier</h3>
                   <p className="text-sm font-bold text-white/70 leading-relaxed mb-8 border-l-2 border-accent/60 pl-4 max-w-lg">
                     Serving the maritime industry for over 20 years from Bhavnagar, Gujarat with uncompromised engine spare reliability.
                   </p>
                </div>
            </div>

            {/* Secondary Visual Module */}
            <div className="bg-primary/5 border border-primary/10 relative group overflow-hidden h-[500px]">
               <img 
                   src="/marine-engine.png" 
                   alt="Engine Details" 
                   className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                 <div className="absolute top-6 right-6 flex flex-col items-end gap-1">
                     <div className="w-16 h-1 bg-accent/80" />
                     <div className="w-10 h-1 bg-accent/60" />
                     <div className="w-4 h-1 bg-accent/40" />
                 </div>

                 <div className="absolute bottom-8 left-8 right-8 transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Technical Core</h3>
                    <p className="text-white/60 text-sm mb-6">Expert vetting of all machinery units.</p>
                    
                    <div className="grid grid-cols-2 gap-2">
                       <div className="bg-black/40 backdrop-blur-md p-2 text-center border border-white/10">
                          <div className="text-accent font-black text-xl">MAN</div>
                          <div className="text-[9px] text-white/60 uppercase">Certified</div>
                       </div>
                       <div className="bg-black/40 backdrop-blur-md p-2 text-center border border-white/10">
                          <div className="text-accent font-black text-xl">30+Y</div>
                          <div className="text-[9px] text-white/60 uppercase">Legacy</div>
                       </div>
                    </div>
                 </div>
            </div>

        </div>

        {/* Feature Data Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
               const Icon = feature.icon;
               return (
                 <div 
                   key={idx}
                   className="bg-white border border-primary/10 p-6 relative group hover:bg-primary/5 transition-all duration-300 hover:border-accent"
                 >
                    <div className="flex justify-between items-start mb-4">
                       <div className="p-3 bg-primary border border-primary/10 group-hover:border-accent transition-colors">
                          <Icon className="w-6 h-6 text-white group-hover:text-white transition-colors" />
                       </div>
                       <span className="font-mono text-[10px] text-primary/40 group-hover:text-accent transition-colors">FACT_0{idx + 1}</span>
                    </div>
                    
                    <h4 className="text-primary font-black uppercase tracking-widest text-sm mb-2">{feature.title}</h4>
                    <p className="text-primary/60 text-xs leading-relaxed mb-4 min-h-[48px]">{feature.description}</p>
                    
                    <div className="border-t border-primary/5 pt-3 flex justify-between items-center">
                        <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Spice Global</span>
                       <span className="text-[9px] text-accent font-black uppercase tracking-widest bg-accent/10 px-2 py-1">{feature.stat}</span>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[8px] border-r-[8px] border-t-primary/10 border-r-transparent group-hover:border-t-accent transition-all" />
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[8px] border-l-[8px] border-b-primary/10 border-l-transparent group-hover:border-b-accent transition-all" />
                 </div>
               )
            })}
        </div>

      </div>
    </section>
  )
}


