"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Box } from "lucide-react"
import api from "@/lib/api"
import { motion, AnimatePresence } from "framer-motion"

export function ProductGrid() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes] = await Promise.all([
          api.get("/products?featured=true")
        ]);
        
        let featuredProducts = prodRes.data;
        
        // If no featured products, fallback to showing latest products
        if (featuredProducts.length === 0) {
          const fallbackRes = await api.get("/products");
          featuredProducts = fallbackRes.data;
        }

        setProducts(featuredProducts);
      } catch (err) {
        console.error("Error fetching homepage products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setHeaderVisible(true);
    }, { threshold: 0.1 });
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredProducts = products.slice(0, 8);

  if (loading && products.length === 0) return (
     <div className="py-24 text-center bg-secondary">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-none animate-spin mx-auto mb-4" />
        <p className="text-[10px] font-black uppercase tracking-widest text-white/40 font-mono">Syncing Fleet Inventory...</p>
     </div>
  );

  return (
    <section className="pb-16 sm:pb-20 md:pb-24 pt-8 sm:pt-10 md:pt-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16 md:mb-24">
        <div ref={headerRef} className="space-y-6">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={headerVisible ? { opacity: 1, y: 0 } : {}}
               className="flex items-center justify-center gap-4"
            >
               <div className="w-12 h-px bg-secondary/20" />
               <span className="text-[10px] tracking-[0.4em] uppercase text-secondary font-black block">
                  Essential Inventory
               </span>
               <div className="w-12 h-px bg-secondary/20" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={headerVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black text-secondary leading-none uppercase tracking-tighter">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Assets</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={headerVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-secondary/60 max-w-2xl mx-auto font-mono text-center uppercase tracking-widest">
               // Reconditioned equipment inspected for operational efficiency.
            </motion.p>
        </div>
      </div>

      <div className="max-w-[100vw] overflow-x-auto overflow-y-hidden px-6 lg:px-12 pb-12 no-scrollbar snap-x snap-mandatory">
        <div className="flex gap-6 min-w-max">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="w-[280px] sm:w-[320px] md:w-[400px] flex-none snap-center group"
                layout
              >
                <Link href={`/product/${product._id}`} className="block relative bg-[#F6FBFE] border border-[#D6E6F2] transition-all duration-300 hover:border-secondary hover:shadow-2xl h-full">
                  
                  {/* Image Container */}
                  <div className="aspect-[4/5] relative overflow-hidden bg-secondary/5 p-8 flex items-center justify-center">
                    
                    {/* Technical Grid Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                         style={{ backgroundImage: 'linear-gradient(var(--secondary) 1px, transparent 1px), linear-gradient(90deg, var(--secondary) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                        <span className="bg-secondary text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest border border-white/20">
                           In Stock
                        </span>
                    </div>

                    {/* ID Badge */}
                    <div className="absolute top-4 left-4 z-10">
                        <span className="text-secondary/40 font-mono text-[9px]">ID: {product._id.slice(-6).toUpperCase()}</span>
                    </div>

                    <div className="relative w-full h-full transition-all duration-500 group-hover:scale-105">
                         {product.images?.[0] ? (
                            <Image
                              src={product.images[0]}
                              alt={product.title}
                              fill
                              className="object-contain mix-blend-multiply"
                            />
                         ) : (
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.title}
                              fill
                              className="object-contain mix-blend-multiply"
                            />
                         )}
                    </div>
                  </div>

                  {/* Info Card */}
                  <div className="p-6 bg-white border-t border-[#D6E6F2] relative overflow-hidden group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    
                    <div className="mb-4">
                       <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary block mb-2">{product.category?.name || "Inventory"}</span>
                       <h3 className="text-xl font-black uppercase tracking-tight leading-none min-h-[40px] line-clamp-2">{product.title}</h3>
                    </div>

                    <div className="flex items-center justify-between border-t border-secondary/10 group-hover:border-white/20 pt-4 mt-4">
                        <span className="text-[10px] font-mono uppercase text-secondary/40 group-hover:text-white/40">Verified Asset</span>
                        <div className="flex items-center gap-2 text-secondary group-hover:text-primary font-black text-xs uppercase tracking-widest">
                           Inspect <ArrowRight className="w-3 h-3" />
                        </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="text-center mt-12 sm:mt-16 border-t border-secondary/5 pt-16">
        <Link
          href="/products"
          className="inline-flex items-center gap-4 bg-white text-secondary border-2 border-secondary px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-secondary hover:text-white transition-all duration-300 group">
          <span className="relative z-10">Access Full Inventory</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
