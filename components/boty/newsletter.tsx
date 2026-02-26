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
          <h2 className="font-sans font-black text-4xl leading-none text-secondary mb-4 text-balance md:text-6xl uppercase tracking-tighter">
            Fleet Intelligence.
          </h2>
          <p className="text-lg text-secondary/60 mb-10 font-black italic border-l-2 border-primary/20 pl-6 text-left">
            Receive technical bulletins, inventory alerts, and industry intel directly to your bridge.
          </p>

          {isSubscribed ? (
            <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm px-8 py-4 border border-primary/20">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-secondary font-black uppercase tracking-widest text-xs">Transmission Received</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Chief Engineer Email"
                className="flex-1 bg-white border border-secondary/10 focus:border-primary outline-none px-6 py-4 text-secondary placeholder:text-secondary/40 text-[10px] font-black uppercase tracking-widest marine-transition"
                required
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 text-[10px] font-black tracking-[0.3em] uppercase transition-all hover:bg-primary"
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
