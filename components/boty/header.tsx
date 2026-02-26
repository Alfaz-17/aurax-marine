"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Search, User, ChevronDown, ArrowRight, Instagram, Linkedin, Phone } from "lucide-react"
import api from "@/lib/api"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "@/components/common/logo"

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [categories, setCategories] = useState<any[]>([])
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight)
      }
    }
    window.addEventListener("scroll", handleScroll)
    
    const fetchData = async () => {
      try {
        const catRes = await api.get("/categories")
        setCategories(catRes.data)
      } catch (err) {
        console.error("Navigation data fetch failed:", err)
      }
    }
    
    fetchData()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll locking for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  if (pathname?.startsWith("/admin")) return null

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { 
      name: "Products", 
      href: "/products",
      dropdown: categories.map(cat => ({ 
        name: cat.name, 
        href: `/products?category=${cat._id}`,
        description: cat.description || "Essential marine inventory."
      }))
    },
    { 
      name: "Brands", 
      href: "/brands" 
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav 
        className={`max-w-full mx-auto px-6 lg:px-12 marine-transition border-b ${
          (isScrolled || !isHome)
            ? "bg-white border-border py-4 shadow-md" 
            : "bg-transparent border-transparent py-8"
        }`}
      >
        <div className="flex items-center justify-between h-[50px] relative">
          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden p-2 marine-transition transition-colors ${
              (isScrolled || !isHome) ? "text-foreground hover:text-primary" : "text-foreground hover:text-primary"
            }`}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop Navigation - Left Group */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.slice(0, 3).map((link) => (
              <div 
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`text-[10px] font-black uppercase tracking-[0.3em] marine-transition flex items-center gap-2 relative ${
                    (isScrolled || !isHome) ? "text-foreground hover:text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  {link.dropdown && <ChevronDown className="w-3 h-3 opacity-50" />}
                </Link>

                {/* Desktop Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 pt-12 w-80 z-50"
                  >
                    <div className="bg-white border border-border shadow-lg p-6 rounded-md">
                      <div className="space-y-3">
                        {link.dropdown.slice(0, 8).map((item: any, idx: number) => (
                          <Link 
                            key={`${link.name}-${idx}-${item.name}`} 
                            href={item.href}
                            className="block text-sm font-bold text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50 hover:border-primary/30 hover:pl-2 duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                        <Link href={link.href} className="pt-3 mt-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all hover:brightness-125">
                          View All {link.name} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Logo - Centered */}
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center h-32">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Logo 
                  variant="white" 
                  size="md" 
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Right Group */}
          <div className="flex items-center gap-10">
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.slice(3).map((link) => (
                <div 
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`text-[10px] font-black uppercase tracking-[0.3em] marine-transition flex items-center gap-2 relative ${
                      (isScrolled || !isHome) ? "text-foreground hover:text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                    {link.dropdown && <ChevronDown className="w-3 h-3 opacity-50" />}
                  </Link>

                  {/* Desktop Dropdown */}
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full right-0 pt-12 w-80 z-50"
                    >
                      <div className="bg-white border border-border shadow-lg p-6 rounded-md">
                        <div className="space-y-3">
                          {link.dropdown.slice(0, 8).map((item: any, idx: number) => (
                            <Link 
                              key={`${link.name}-${idx}-${item.name}`} 
                              href={item.href}
                              className="block text-sm font-bold text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50 hover:border-primary/30 hover:pl-2 duration-200"
                            >
                              {item.name}
                            </Link>
                          ))}
                          <Link href={link.href} className="pt-3 mt-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all hover:brightness-125">
                            Explore {link.name} <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* High-Fidelity Mobile Sidebar */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-secondary/80 backdrop-blur-md z-[60] lg:hidden"
              />
              
              {/* Sidebar Panel */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] shadow-2xl lg:hidden flex flex-col h-screen border-r border-border"
              >
                <div className="shrink-0 p-8 border-b border-border flex items-center justify-between bg-muted/30">
                  <h2 className="font-sans text-xl font-black tracking-tight uppercase text-foreground">
                    AURAX <span className="text-primary italic">Marine</span>
                  </h2>
                  <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-muted rounded-md transition-colors">
                    <X className="w-6 h-6 text-foreground" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8 custom-scrollbar">
                  {/* Primary Links */}
                  <div className="space-y-4">
                    {navLinks.map((link) => (
                      <div key={link.name} className="space-y-2">
                        <Link
                          href={link.href}
                          className="text-sm font-black uppercase tracking-[0.3em] text-foreground hover:text-primary transition-all block border-l-2 border-transparent hover:border-primary hover:pl-4 duration-300"
                          onClick={() => !link.dropdown && setIsMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                        
                        {link.dropdown && link.dropdown.length > 0 && (
                          <div className="pl-6 border-l border-border space-y-3 mt-2">
                            {link.dropdown.slice(0, 6).map((item: any, idx: number) => (
                              <Link
                                key={`mobile-${link.name}-${idx}-${item.name}`}
                                href={item.href}
                                className="text-[10px] font-bold uppercase tracking-widest text-foreground/60 hover:text-foreground block transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Operational Contacts */}
                  <div className="pt-8 border-t border-border mt-auto">
                    <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/80 mb-6">Operations</h3>
                    <div className="space-y-4">
                      <a href="tel:+919023968557" className="flex items-center gap-4 group bg-muted/50 p-4 rounded-sm border border-border hover:border-primary/30 transition-all">
                        <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-full shadow-sm">
                          <Phone className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[10px] font-black text-foreground tracking-widest group-hover:text-primary transition-colors">+91 90239 68557</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 p-6 border-t border-border bg-muted/30">
                   <div className="flex items-center gap-6 justify-center">
                      <a href="#" className="p-2 text-foreground/60 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                      <a href="#" className="p-2 text-foreground/60 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                   </div>
                </div>
              </motion.div>

            </>
          )}
        </AnimatePresence>
        {/* Scroll Progress Line */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary shadow-sm origin-left z-[60]"
          style={{ scaleX: scrollProgress }}
        />

      </nav>
    </header>
  )
}
