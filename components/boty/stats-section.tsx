"use client"

import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Clock, Anchor, Globe } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "20+" },
  { icon: Globe, label: "Exporting Regions", value: "40+" },
  { icon: Anchor, label: "Satisfied Clients", value: "1000+" },
  { icon: Shield, label: "Certified Spares", value: "100%" },
];

export function StatsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0B1F33] relative overflow-hidden border-y border-[#BDE8F5]/10">
      <div className="absolute inset-0 bg-[#4988C4]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8 transition-transform group-hover:scale-110 shadow-2xl border border-[#4988C4]/20">
                 <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#0B1F33]" />
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-3 md:mb-4 tracking-tighter uppercase">
                {stat.value}
              </h3>
              <p className="text-primary text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] italic">{stat.label}</p>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
