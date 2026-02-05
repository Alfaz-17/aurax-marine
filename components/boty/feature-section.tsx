
'use client';

import { useEffect, useRef, useState } from "react"
import { ShieldCheck, Server, Globe, Cpu, Anchor, Wifi, Activity, Box, Gauge, Wrench } from "lucide-react"



const features = [
  {
    icon: Gauge,
    title: "Main Propulsion",
    description: "Specialized spares for MAN B&W & Sulzer 2-Stroke engines (S50MC, RTA Series).",
    stat: "98% UPTIME"
  },
  {
    icon: Wrench,
    title: "Auxiliary Power",
    description: "Complete support for Daihatsu, Yanmar, and Wartsila generator sets.",
     stat: "24/7 SUPPORT"
  },
  {
    icon: ShieldCheck,
    title: "Fluid Handling",
    description: "Pumps and Oil Purifiers from leading brands like Alfa Laval and Westfalia.",
     stat: "OEM GRADE"
  },
  {
    icon: Activity,
    title: "Compressed Air",
    description: "Spares for Air Compressors, Screw Compressors, and associated systems.",
     stat: "ISO 9001"
  },
  {
    icon: Box,
    title: "Heat Transfer",
    description: "Heat exchangers, fresh water generators, and oil coolers.",
     stat: "CERTIFIED"
  },
  {
    icon: Anchor,
    title: "Deck & Hydraulic",
    description: "Hydraulic motors, pumps, and spares for derrick cranes.",
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
    <section ref={sectionRef} className="py-20 sm:py-28 bg-[#0B1F33] overflow-hidden relative border-t border-[#4988C4]/20">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(73,136,196,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(73,136,196,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header HUD */}
        <div className="flex justify-between items-end mb-16 border-b border-[#4988C4]/30 pb-6 relative">
             <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#4988C4]" />
             <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#4988C4]" />
             
             <div>
                <span className="text-[#BDE8F5] font-black uppercase tracking-[0.4em] text-[10px] mb-2 block animate-pulse">System Status: Nominal</span>
                <h2 className="text-4xl md:text-6xl font-black text-[#0B1F33] uppercase tracking-tighter leading-none">
                  Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4988C4] to-[#BDE8F5]">capabilities</span>
                </h2>
             </div>
             <div className="hidden md:block text-right">
                <div className="text-[#BDE8F5]/60 font-mono text-xs mb-1">SEC_04 // CORE_SYSTEMS</div>
                <div className="text-[#BDE8F5]/60 font-mono text-xs">V.2.0.24</div>
             </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Primary Visual Module */}
            <div className="lg:col-span-2 bg-[#0E2A45]/50 border border-[#4988C4]/20 relative group overflow-hidden h-[500px]">
                <img 
                   src="/marine-automation-new.png" 
                   alt="Marine Automation" 
                   className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-transparent" />
                
                {/* HUD Overlay Elements */}
                <div className="absolute top-6 left-6 border border-[#4988C4]/40 px-3 py-1 bg-[#0B1F33]/80 backdrop-blur-sm">
                   <span className="text-[#BDE8F5] font-mono text-xs tracking-widest">LIVE_FEED_01</span>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-[80%] h-[80%] border border-[#BDE8F5]/20 relative">
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#4988C4]" />
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#4988C4]" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#4988C4]" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#4988C4]" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black tracking-widest text-2xl uppercase">System Active</div>
                   </div>
                </div>

                <div className="absolute bottom-8 left-8">
                   <h3 className="text-3xl font-black text-[#0B1F33] uppercase leading-none mb-4 group-hover:text-primary transition-colors">Bridge Integration</h3>
                   <p className="text-sm font-bold text-[#0B1F33]/70 leading-relaxed mb-8 border-l-2 border-primary/20 pl-4">Next-gen telemetry and automated control systems for seamless vessel operation.</p>
                </div>
            </div>

            {/* Secondary Visual Module */}
            <div className="bg-white border border-[#4988C4]/20 relative group overflow-hidden h-[500px]">
               <img 
                   src="/industrial-electronics-new.png" 
                   alt="Electronics" 
                   className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
                 <div className="absolute top-6 right-6 flex flex-col items-end gap-1">
                     <div className="w-16 h-1 bg-[#4988C4]/50" />
                     <div className="w-10 h-1 bg-[#4988C4]/30" />
                     <div className="w-4 h-1 bg-[#4988C4]/10" />
                 </div>

                 <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-black text-[#0B1F33] uppercase tracking-tighter mb-2">Cyber Logic</h3>
                    <p className="text-[#BDE8F5]/80 text-sm mb-6">IMO compliant secured data channels.</p>
                    
                    <div className="grid grid-cols-2 gap-2">
                       <div className="bg-[#0B1F33]/60 p-2 text-center border border-[#4988C4]/20">
                          <div className="text-[#4988C4] font-black text-xl">99.9</div>
                          <div className="text-[9px] text-[#BDE8F5]/60 uppercase">Reliability</div>
                       </div>
                       <div className="bg-[#0B1F33]/60 p-2 text-center border border-[#4988C4]/20">
                          <div className="text-[#4988C4] font-black text-xl">AES</div>
                          <div className="text-[9px] text-[#BDE8F5]/60 uppercase">Encryption</div>
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
                   className="bg-[#0E2A45]/30 border border-[#4988C4]/10 p-6 relative group hover:bg-[#0E2A45]/80 transition-all duration-300 hover:border-[#4988C4]/50"
                 >
                    <div className="flex justify-between items-start mb-4">
                       <div className="p-3 bg-[#0B1F33] border border-[#4988C4]/20 group-hover:border-[#4988C4] transition-colors">
                          <Icon className="w-6 h-6 text-white group-hover:text-[#4988C4] transition-colors" />
                       </div>
                       <span className="font-mono text-[10px] text-[#4988C4]/40 group-hover:text-[#4988C4] transition-colors">0{idx + 1}</span>
                    </div>
                    
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">{feature.title}</h4>
                    <p className="text-[#BDE8F5]/60 text-xs leading-relaxed mb-4 min-h-[48px]">{feature.description}</p>
                    
                    <div className="border-t border-[#4988C4]/10 pt-3 flex justify-between items-center">
                          <span className="text-[10px] font-bold text-[#0B1F33]/50 uppercase tracking-widest">{feature.title}</span>
                       <span className="text-[9px] text-[#4988C4] font-black uppercase tracking-widest bg-[#4988C4]/10 px-2 py-1">{feature.stat}</span>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[8px] border-r-[8px] border-t-[#4988C4]/20 border-r-transparent group-hover:border-t-[#4988C4] transition-all" />
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[8px] border-l-[8px] border-b-[#4988C4]/20 border-l-transparent group-hover:border-b-[#4988C4] transition-all" />
                 </div>
               )
            })}
        </div>

      </div>
    </section>
  )
}


