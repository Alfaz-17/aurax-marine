"use client"

import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'No Compromise Quality',
      description: 'We prioritize technical accuracy and rigorous inspection for every component supplied.'
    },
    {
      icon: Users,
      title: 'Technical Expertise',
      description: 'Deep specialization in MAN B&W and Sulzer engine machinery and auxiliary systems.'
    },
    {
      icon: Award,
      title: '20+ Year Legacy',
      description: 'Backed by the experience of our sister company, Spice Ship Supplier.'
    },
    {
      icon: Globe,
      title: 'Global Export',
      description: 'Supporting ship managers and repair yards with fast international logistics.'
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[55dvh] pt-28 sm:pt-32 md:pt-36 flex items-center justify-center overflow-hidden bg-black">
         <div className="absolute inset-0 z-0">
          <Image 
            src="/spare-parts-new.png" 
            alt="About AURAX Marine" 
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" />
        </div>


        <div className="relative z-10 text-center px-4 sm:px-6">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm font-black mb-3 sm:mb-4 block">Proven Experience</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-sans font-black text-white uppercase tracking-tighter mb-4 sm:mb-6 leading-none">
              About <span className="bg-white text-black px-2 sm:px-4">AURAX</span> <span className="text-primary italic">Marine</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto italic font-medium border-l-2 border-primary pl-6">
              The Engine Room Specialists for the Global Maritime Fleet
            </p>
          </motion.div>
        </div>

      </section>

      {/* Company Profile & Legacy */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[10px] tracking-[0.4em] uppercase text-black/40 font-black mb-3 sm:mb-4 font-sans">Our Legacy</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-black text-black mb-5 sm:mb-6 md:mb-8 tracking-tighter uppercase leading-none">
                Carrying the <span className="text-primary italic">Legacy</span> Forward
              </h3>
              <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg text-black/70 leading-relaxed font-medium">
                <p>
                  <strong>Aurax Marine Solutions</strong> is proud to be a sister company of <strong>Spice Ship Supplier</strong>, a name that has been actively serving the maritime industry for over 20 years.
                </p>
                <p>
                  For more than two decades, Spice Ship Supplier has supported ship owners, fleet operators, and technical management teams by providing dependable ship supplies and machinery-related solutions. The company’s growth has been driven by a deep understanding of shipboard operations, strict attention to quality, and an uncompromising work ethic.
                </p>
                <p>
                  Building on this strong foundation, <strong>Aurax Marine Solutions</strong> was established with a focused vision—to specialize in marine engines, machinery spares, and power solutions for ocean-going vessels and auxiliary systems. While our foundation is rooted in proven marine service history, our outlook is global, responsive, and technically driven.
                </p>
              </div>
            </motion.div>


            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mt-8 lg:mt-0"
            >
              <Image
                src="/engine-maintenance-new.png"
                alt="AURAX Marine Technical Inventory"
                width={800}
                height={600}
                className="shadow-2xl border border-black/10"
              />
              <div className="absolute -bottom-6 -right-6 bg-black p-8 hidden md:block border border-white/10">
                <span className="text-4xl font-black text-primary block">20+</span>
                <span className="text-white/60 text-[10px] uppercase font-black tracking-widest block mt-2">Years of Mastery</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Product Offerings */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-8">
           <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] tracking-[0.4em] uppercase text-white/60 font-black mb-4">Inventory & Capabilities</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
              Core Product <span className="bg-white text-black px-4 italic font-medium">Offerings</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
            <ul className="space-y-4">
              {[
                "Main Engines (2-Stroke & 4-Stroke) and their components",
                "Auxiliary Engines / D.G. Sets and spare parts",
                "Air Compressors and associated parts",
                "AC, Fridge, and Screw Compressors",
                "Oil Purifiers"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-lg md:text-xl font-medium border-b border-white/10 pb-4"
                >
                  <span className="text-primary bg-white w-8 h-8 flex items-center justify-center font-black text-sm rounded-none">{i + 1}</span>
                  {item}
                </motion.li>
              ))}
            </ul>
            <ul className="space-y-4">
               {[
                "Sea Water, Fresh Water, and Oil Pumps",
                "Heat Exchangers, Water Coolers, and Oil Coolers",
                "Fresh Water Generators",
                "Derrick & Hydraulic Cranes, Hydraulic Motors, and Pumps",
                "Deck Equipment"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-lg md:text-xl font-medium border-b border-white/10 pb-4"
                >
                  <span className="text-primary bg-white w-8 h-8 flex items-center justify-center font-black text-sm rounded-none">{i + 6}</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Engine & Machinery Experience */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] tracking-[0.4em] uppercase text-primary font-black mb-4">Technical Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase tracking-tighter leading-none">
              Engine & Machinery <span className="text-primary italic font-medium">Experience</span>
            </h3>
            <p className="text-lg text-black/60 max-w-3xl mx-auto italic border-l-2 border-primary/40 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
               Our combined experience covers a wide range of low-speed and medium-speed marine engines, assisting routine maintenance and urgent breakdowns.
            </p>
          </motion.div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* MAN B&W */}
            <div className="p-8 sm:p-12 border border-black/10 group hover:border-primary transition-all duration-700 bg-gray-50">
              <div className="w-16 h-16 bg-black flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-black mb-6 uppercase tracking-widest">Sulzer / MAN B&W Low-Speed</h4>
              <ul className="space-y-3 mb-6">
                 <li className="flex items-center gap-3 text-black/70 font-medium"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> S50MC (Primary Focus)</li>
                 <li className="flex items-center gap-3 text-black/70 font-medium"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> S60MC, S70MC, S35MC</li>
                 <li className="flex items-center gap-3 text-black/70 font-medium"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> 45LA and 52LA series engines</li>
              </ul>
              <p className="text-sm text-black/60 leading-relaxed italic border-t border-black/10 pt-6">
                Supplying cylinder liners, pistons, fuel system parts, bearings, and valves for bulk carriers and tankers.
              </p>
            </div>


            {/* Daihatsu */}
            <div className="p-8 sm:p-12 border border-black/10 group hover:border-primary transition-all duration-700 bg-gray-50">
              <div className="w-16 h-16 bg-black flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-black mb-6 uppercase tracking-widest">Daihatsu Engines & Gensets</h4>
               <ul className="space-y-3 mb-6">
                 <li className="flex items-center gap-3 text-black/70 font-medium"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Daihatsu DK20 series diesel generator sets</li>
                 <li className="flex items-center gap-3 text-black/70 font-medium"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Auxiliary engines for power & emergency systems</li>
              </ul>
              <p className="text-sm text-black/60 leading-relaxed italic border-t border-black/10 pt-6">
                Emphasizing accuracy in part identification and proper documentation for uninterrupted onboard power.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Inventory */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-[10px] tracking-[0.4em] uppercase text-primary font-black mb-4">Our Facilities</h2>
                <h3 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none">
                  World-Class <span className="text-primary italic">Infrastructure</span>
                </h3>
              </div>
              <p className="text-lg text-black/70 leading-relaxed">
                Our massive inventory facility spans across specialized zones for engine components, crankshafts, and auxiliary machinery. We maintain a ready-to-dispatch stock of vetted components to minimize vessel turnaround time.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-4 border-primary pl-4">
                  <span className="text-3xl font-black text-black block">10k+</span>
                  <span className="text-[10px] uppercase font-black text-black/40 tracking-widest">Square Feet</span>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <span className="text-3xl font-black text-black block">5k+</span>
                  <span className="text-[10px] uppercase font-black text-black/40 tracking-widest">Parts in Stock</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="aspect-[4/5] relative overflow-hidden ring-1 ring-black/5">
                  <Image 
                    src="/global-fleet-new.png" 
                    alt="Storage Facility" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden ring-1 ring-black/5">
                  <Image 
                    src="/engine-room.png" 
                    alt="Engine Components" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="aspect-square relative overflow-hidden ring-1 ring-black/5">
                  <Image 
                    src="/marine-automation-new.png" 
                    alt="Crankshaft Inventory" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/5] relative overflow-hidden ring-1 ring-black/5">
                  <Image 
                    src="/spare-parts-new.png" 
                    alt="Technical Inventory" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Without Compromise */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-[10px] tracking-[0.4em] uppercase text-primary font-black mb-6">Our Promise</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
              Quality Without <br/> <span className="text-primary italic">Compromise</span>
            </h3>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6 font-medium">
              Across all engine types and machinery categories, one principle remains constant: we do not compromise on quality or workmanship.
            </p>
            <p className="text-base text-white/50 leading-relaxed italic border-l-2 border-primary/40 pl-6 max-w-2xl">
              Every supply is approached with the understanding that vessel downtime is costly and safety-critical. From sourcing and inspection to packing and dispatch, each step is handled with responsibility and technical awareness.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 border-t border-white/10 pt-12">
               <div>
                  <h4 className="text-white font-black uppercase tracking-widest mb-2">New OEM Alternative</h4>
                  <p className="text-xs text-white/40">Cost-effective, high-performance replacements.</p>
               </div>
               <div>
                  <h4 className="text-white font-black uppercase tracking-widest mb-2">Reconditioned</h4>
                  <p className="text-xs text-white/40">With full inspection reports & measurements.</p>
               </div>
               <div>
                  <h4 className="text-white font-black uppercase tracking-widest mb-2">Ready Stock</h4>
                  <p className="text-xs text-white/40">Fast delivery for urgent requirements.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
