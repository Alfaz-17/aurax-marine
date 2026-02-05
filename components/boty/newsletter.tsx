"use client"

import React from "react"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-sans font-black text-4xl leading-none text-[#0B1F33] mb-4 text-balance md:text-6xl uppercase tracking-tighter">
            Fleet Intelligence.
          </h2>
          <p className="text-lg text-[#0B1F33]/60 mb-10 font-black italic border-l-2 border-[#4988C4]/20 pl-6 text-left">
            Receive technical bulletins, inventory alerts, and industry intel directly to your bridge.
          </p>

          {isSubscribed ? (
            <div className="inline-flex items-center gap-3 bg-[#4988C4]/10 backdrop-blur-sm px-8 py-4 border border-[#4988C4]/20">
              <Check className="w-5 h-5 text-[#4988C4]" />
              <span className="text-[#0B1F33] font-black uppercase tracking-widest text-xs">Transmission Received</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Chief Engineer Email"
                className="flex-1 bg-white border border-[#0B1F33]/10 focus:border-[#4988C4] outline-none px-6 py-4 text-[#0B1F33] placeholder:text-[#0B1F33]/40 text-[10px] font-black uppercase tracking-widest marine-transition"
                required
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-[#0B1F33] text-white px-8 py-4 text-[10px] font-black tracking-[0.3em] uppercase transition-all hover:bg-[#4988C4]"
              >
                Connect
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 marine-transition" />
              </button>
            </form>
          )}

          <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-8 opacity-50">

            Secure transmission. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
