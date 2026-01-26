"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { SlidersHorizontal, X } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"

const products = [
  // Automation
  {
    id: "bridge-command-x1",
    name: "Bridge Command X1",
    description: "Centralized vessel control interface",
    price: 45000,
    originalPrice: null,
    image: "https://placehold.co/600x600/0A3D62/FFF.png?text=Bridge+System",
    badge: "Flagship",
    category: "automation"
  },
  {
    id: "auto-pilot-ai",
    name: "AutoPilot AI Core",
    description: "Adaptive trajectory learning system",
    price: 12500,
    originalPrice: 15000,
    image: "https://placehold.co/600x600/1E5F74/FFF.png?text=AutoPilot+AI",
    badge: "Smart",
    category: "automation"
  },
  // Navigation
  {
    id: "radar-fusion-pro",
    name: "Radar Fusion Pro",
    description: "Multi-band reactive radar system",
    price: 8900,
    originalPrice: null,
    image: "https://placehold.co/600x600/3DB9C8/000.png?text=Radar+Fusion",
    badge: null,
    category: "navigation"
  },
  {
    id: "sonar-deep-vision",
    name: "Sonar Deep Vision",
    description: "3D topographical seabed mapping",
    price: 12000,
    originalPrice: null,
    image: "https://placehold.co/600x600/79D9C5/000.png?text=Sonar+Vision",
    badge: "New",
    category: "navigation"
  },
  // Monitoring
  {
    id: "engine-telemetry-hub",
    name: "Engine Telemetry Hub",
    description: "Real-time propulsion analytics",
    price: 5600,
    originalPrice: null,
    image: "https://placehold.co/600x600/0A3D62/FFF.png?text=Telemetry+Hub",
    badge: "Essential",
    category: "monitoring"
  },
  {
    id: "fuel-optim-sensor",
    name: "Fuel Optim Sensor",
    description: "AI-driven consumption analysis",
    price: 3200,
    originalPrice: null,
    image: "https://placehold.co/600x600/1E5F74/FFF.png?text=Fuel+Sensor",
    badge: null,
    category: "monitoring"
  }
]

const categories = ["all", "automation", "navigation", "monitoring"]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory)

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

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sm tracking-[0.3em] uppercase text-[#3DB9C8] mb-4 block">
              System Catalog
            </span>
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-[#0A3D62] mb-4 text-balance">
              Marine Automation
            </h1>
            <p className="text-lg text-[#1E5F74] max-w-md mx-auto">
              Discover our integrated control solutions
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-border/50">
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden inline-flex items-center gap-2 text-sm text-foreground"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Desktop Categories */}
            <div className="hidden lg:flex items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm capitalize boty-transition bg-popover ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground/70 hover:text-foreground boty-shadow"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <span className="text-sm text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </span>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 z-50 bg-background">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-2xl text-foreground">Filters</h2>
                  <button
                    type="button"
                    onClick={() => setShowFilters(false)}
                    className="p-2 text-foreground/70 hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(category)
                        setShowFilters(false)
                      }}
                      className={`w-full px-6 py-4 rounded-2xl text-left capitalize boty-transition ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "bg-card text-foreground boty-shadow"
                      }`}
                    >
                      {category}
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
                key={product.id}
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
  product: typeof products[0]
  index: number
  isVisible: boolean
}) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Link
      href={`/product/${product.id}`}
      className={`group transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="bg-card rounded-3xl overflow-hidden boty-shadow boty-transition group-hover:scale-[1.02]">
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
            alt={product.name}
            fill
            className={`object-cover boty-transition group-hover:scale-105 transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {/* Badge */}
          {product.badge && (
            <span
              className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs tracking-wide ${
                product.badge === "Sale"
                  ? "bg-destructive/10 text-destructive"
                  : product.badge === "New"
                  ? "bg-primary/10 text-primary"
                  : "bg-accent text-accent-foreground"
              }`}
            >
              {product.badge}
            </span>
          )}
          {/* Quick add button */}

        </div>

        {/* Info */}
        <div className="p-6">
          <h3 className="font-serif text-xl text-foreground mb-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-foreground">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
