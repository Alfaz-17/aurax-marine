"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { SlidersHorizontal, X } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"

import api from "@/lib/api"
import { MarineLoader } from "@/components/common/marine-loader"

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [loading, setLoading] = useState(true)
  const [showFilters, setShowFilters] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, catRes] = await Promise.all([
          api.get("/products"),
          api.get("/categories")
        ]);
        setProducts(prodRes.data);
        setCategories(catRes.data);
      } catch (err) {
        console.error("Error fetching shop data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category?._id === selectedCategory || p.category === selectedCategory || p.category?.name === selectedCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (gridRef.current) {
      observer.observe(gridRef.current)
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current)
      }
    }
  }, [])

  // Reset animation when category changes
  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [selectedCategory])

  if (loading) return <MarineLoader />;

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary mb-4 font-black block">
              Marine Inventory
            </span>
            <h1 className="font-sans font-black text-4xl md:text-6xl text-black mb-6 uppercase tracking-tighter leading-none">
              Engine Room <span className="text-primary italic font-medium">Catalog</span>
            </h1>
            <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto italic border-l-2 border-primary/40 pl-6 border-b-0">
              Specialized engine spares and industrial maritime machinery sourced for global vessel operations.
            </p>
          </div>


          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-black/10">
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Desktop Categories */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-2 uppercase text-[10px] tracking-widest font-black transition-all border-b-2 ${
                  selectedCategory === "all"
                    ? "border-primary text-black"
                    : "border-transparent text-black/40 hover:text-black"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category._id}
                  type="button"
                  onClick={() => setSelectedCategory(category._id)}
                    className={`px-6 py-2 uppercase text-[10px] tracking-widest font-black transition-all border-b-2 ${
                      selectedCategory === category._id
                        ? "border-primary text-black"
                        : "border-transparent text-black/40 hover:text-black"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <span className="text-[10px] font-black uppercase tracking-widest text-black/40">
              {filteredProducts.length} {filteredProducts.length === 1 ? "PART" : "PARTS"}
            </span>
          </div>


          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 z-50 bg-black text-white">
              <div className="p-8">
                <div className="flex items-center justify-between mb-12">
                  <h2 className="font-black text-2xl text-white uppercase tracking-tighter">Filters</h2>
                  <button
                    type="button"
                    onClick={() => setShowFilters(false)}
                    className="p-2 text-white/70 hover:text-white"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>
                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("all")
                      setShowFilters(false)
                    }}
                    className={`w-full px-8 py-4 text-left uppercase text-[10px] font-black tracking-widest transition-colors ${
                      selectedCategory === "all"
                        ? "bg-primary text-white"
                        : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category._id}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(category._id)
                        setShowFilters(false)
                      }}
                      className={`w-full px-8 py-4 text-left uppercase text-[10px] font-black tracking-widest transition-colors ${
                        selectedCategory === category._id
                          ? "bg-primary text-white"
                          : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}


          {/* Product Grid */}
          <div 
            ref={gridRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product._id}
                product={product}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

function ProductCard({ 
  product, 
  index, 
  isVisible 
}: { 
  product: any
  index: number
  isVisible: boolean
}) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Link
      href={`/product/${product._id}`}
      className={`group transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="bg-white border border-black/10 group-hover:border-primary transition-all overflow-hidden relative">
        <div className="absolute top-0 right-0 w-2 h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        {/* Image */}
        <div className="relative aspect-square bg-muted overflow-hidden">
          {/* Skeleton */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br from-muted via-muted/50 to-muted animate-pulse transition-opacity duration-500 ${
              imageLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          />
          
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className={`object-cover boty-transition group-hover:scale-105 transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {/* Badge */}
          {product.badge && (
            <span
              className={`absolute top-4 left-4 px-3 py-1 text-[9px] font-black uppercase tracking-widest ${
                product.badge === "Sale"
                  ? "bg-black text-white"
                  : product.badge === "New"
                  ? "bg-primary text-white"
                  : "bg-black text-white"
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-6">
          <h3 className="font-sans font-black text-lg text-black mb-2 uppercase tracking-tighter truncate leading-none">{product.title}</h3>
          <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">Ref: {product.category?.name || "Machinery"}</p>
          <div className="flex items-center justify-between border-t border-black/5 pt-4 mt-4">
            <span className="text-[10px] font-black text-black uppercase tracking-[0.2em]">Enquire Now</span>
            <span className="text-[10px] font-black text-black/40 group-hover:text-primary transition-colors">Details →</span>
          </div>
        </div>
      </div>

    </Link>
  )
}
