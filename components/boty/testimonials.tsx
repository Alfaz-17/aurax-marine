"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Chief Eng. Elias V.",
    location: "Global Shipping Corp",
    rating: 5,
    text: "The MAN B&W S50MC Piston Crowns supplied by AURAX Marine were technically flawless. Their attention to documentation for critical engine parts is impressive.",
    product: "S50MC Spares"
  },
  {
    id: 2,
    name: "Thomas L.",
    location: "Port of Singapore",
    rating: 5,
    text: "Finding reliable Daihatsu DK20 components is a challenge, but AURAX has a proven inventory. Every part arrived with detailed inspection photography.",
    product: "Daihatsu Spares"
  },
  {
    id: 3,
    name: "Marcus R.",
    location: "Rotterdam Logistics",
    rating: 5,
    text: "Unrivaled stock of fuel injection equipment. They dispatched an S60MC fuel pump set within 24 hours to our vessel in the North Sea.",
    product: "Fuel Pumps"
  },
  {
    id: 4,
    name: "Sarah K.",
    location: "Maritime Solutions LLC",
    rating: 5,
    text: "Reliable, robust, and expertly inspected. AURAX Marine has become our primary technical partner for all critical 2-stroke engine machinery.",
    product: "Engine Machinery"
  },
  {
    id: 5,
    name: "Eng. Hiroshi T.",
    location: "Yokohama Marine",
    rating: 5,
    text: "The technical expertise of the AURAX team is exceptional. They provided precise measurements for a crankshaft that other suppliers missed.",
    product: "Crankshaft Units"
  },
  {
    id: 6,
    name: "Capt. Dimitri P.",
    location: "Mediterranean Fleet",
    rating: 5,
    text: "Exceptional quality control. Every cylinder liner arrives with full documentation and is sea-ready. A trusted name in the industry.",
    product: "Cylinder Liners"
  },
  {
    id: 7,
    name: "Robert B.",
    location: "Texas Offshore Services",
    rating: 5,
    text: "The technical overhaul support for our auxiliary engines was top-notch. Minimized our downtime significantly at competitive rates.",
    product: "Auxiliary Engines"
  },
  {
    id: 8,
    name: "Lily W.",
    location: "North Sea Logistics",
    rating: 5,
    text: "High-integrity components that withstand the most brutal marine environments. Their reconditioning process for exhaust valves is true engineering.",
    product: "Exhaust Assemblies"
  },
  {
    id: 9,
    name: "Rachel D.",
    location: "Cape Town Marine",
    rating: 5,
    text: "From enquiry to global dispatch, the process is seamless and technically transparent. Their legacy of shipping spare parts is unmatched.",
    product: "Logistics Spares"
  }
]

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="p-8 bg-white mb-6 flex-shrink-0 border border-border/50 hover:border-accent transition-all duration-700 shadow-sm"
  >
    {/* Quote */}
    <p className="text-black leading-relaxed mb-8 text-pretty font-black text-xl font-sans uppercase tracking-tighter">
      &ldquo;{testimonial.text}&rdquo;
    </p>


    {/* Author */}
    <div className="flex items-start justify-between gap-4 border-t border-black/5 pt-6">
      <div>
        <p className="text-primary text-[10px] font-black uppercase tracking-widest">{testimonial.name}</p>
        <p className="text-[10px] text-black/40 uppercase font-black tracking-tighter">{testimonial.location}</p>
      </div>
      <span className="text-[9px] tracking-widest text-primary font-black uppercase bg-primary/5 px-3 py-1 border border-primary/10 whitespace-nowrap">
        {testimonial.product}
      </span>
    </div>

  </div>
)

export function Testimonials() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  
  const column1 = [testimonials[0], testimonials[3], testimonials[6]]
  const column2 = [testimonials[1], testimonials[4], testimonials[7]]
  const column3 = [testimonials[2], testimonials[5], testimonials[8]]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current)
      }
    }
  }, [])

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-24">
          <span className={`text-[10px] tracking-[0.4em] uppercase text-primary font-black mb-6 block ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}>
            Technical Verdict
          </span>
          <h2 className={`font-sans font-black text-4xl leading-none text-black text-balance md:text-7xl uppercase tracking-tighter ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}>
            Trusted by <br className="hidden md:block"/> Chief Engineers
          </h2>
        </div>


        {/* Scrolling Testimonials */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
          
          {/* Mobile - Single Column */}
          <div className="md:hidden h-[600px]">
            <div className="relative overflow-hidden h-full">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <TestimonialCard key={`mobile-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop - Three Columns */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 h-[600px]">
            {/* Column 1 - Scrolling Down */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...column1, ...column1].map((testimonial, index) => (
                  <TestimonialCard key={`col1-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Column 2 - Scrolling Up */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-up hover:animate-scroll-up-slow">
                {[...column2, ...column2].map((testimonial, index) => (
                  <TestimonialCard key={`col2-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Column 3 - Scrolling Down */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...column3, ...column3].map((testimonial, index) => (
                  <TestimonialCard key={`col3-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-up {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-scroll-down {
          animation: scroll-down 30s linear infinite;
        }

        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
        }

        .animate-scroll-down-slow {
          animation: scroll-down 60s linear infinite;
        }

        .animate-scroll-up-slow {
          animation: scroll-up 60s linear infinite;
        }
      `}</style>
    </section>
  )
}
