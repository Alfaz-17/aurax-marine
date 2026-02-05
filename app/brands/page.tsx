"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import api from '@/lib/api';
import { MarineLoader } from '@/components/common/marine-loader';

export default function BrandsPage() {
  const [brands, setBrands] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await api.get("/brands");
        setBrands(res.data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBrands();
  }, []);

  if (loading) return <MarineLoader />;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] pt-32 flex items-center justify-center bg-black overflow-hidden">
         <div className="absolute inset-0 z-0">
          <img 
            src="/pexels-pixabay-163726.jpg" 
            alt="Brands" 
            className="w-full h-full object-cover opacity-20 mix-blend-multiply"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Trusted <span className="bg-white text-black px-4">Partners</span>
            </h1>
            <p className="text-xl text-primary font-black uppercase tracking-widest italic border-l-2 border-primary pl-6 mx-auto max-w-lg">
              Authorized Supply for Global Maritime Leaders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-24 container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand._id}
              className="relative group aspect-square bg-white border border-black/10 overflow-hidden hover:border-primary transition-all duration-500 shadow-sm hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                   <h3 className="text-white font-black text-center uppercase tracking-[0.2em] text-xs mb-2">{brand.name}</h3>
                   <div className="w-8 h-0.5 bg-primary" />
                </div>
              </div>
            </motion.div>

          ))}
        </div>
      </section>
    </main>
  );
}
