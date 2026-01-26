"use client"

import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe, Clock } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards in all our products and services'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your success is our priority, and we work to exceed your expectations'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Continuous improvement and innovation drive our commitment to excellence'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving maritime professionals worldwide with reliable solutions'
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] pt-32 flex items-center justify-center overflow-hidden bg-primary">
         <div className="absolute inset-0 z-0">
          <img 
            src="/pexels-pixabay-163726.jpg" 
            alt="About Corona Marine" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/40" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent tracking-[0.3em] uppercase text-sm font-bold mb-4 block">Our Legacy</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-wider mb-6">
              About Corona Marine
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              Your Premier Partner for Marine Automation & Spare Parts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm tracking-[0.3em] uppercase text-accent font-bold mb-4">Our Journey</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight">
                Experts in Marine Solutions Since 2010
              </h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  United Marine Services has been supplying high-quality marine and industrial automation equipment for over a decade. 
                  We take pride in catering to marine fleets, offshore vessels, oil rigs, major industries and reputed trading houses worldwide. 
                  Our focus is on <strong className="text-primary text-base uppercase tracking-widest">reliability, transparency, and excellent customer support</strong>.
                </p>
                <p>
                  Established with a vision to streamline maritime technical supply chains, Corona Marine (a United Marine Services partner) 
                  bridges the gap between complex engineering requirements and rapid global delivery. We specialize in identifying 
                  hard-to-find components and providing certified reconditioned alternatives that meet the world's most rigorous safety standards.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold text-sm uppercase tracking-wider hover:bg-primary transition-all shadow-lg"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/pexels-wolfgang-weiser-467045605-20581299.jpg"
                alt="Expertise"
                className="rounded-2xl shadow-2xl border border-border"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent p-8 rounded-xl hidden md:block">
                <span className="text-4xl font-bold text-white block">15+</span>
                <span className="text-white/80 text-sm uppercase tracking-wider">Years of Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm tracking-[0.3em] uppercase text-accent font-bold mb-4">Values</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
              Our Core Principles
            </h3>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              The foundations that drive our commitment to the maritime industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-accent/50 transition-all group"
                >
                  <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                    <Icon className="w-7 h-7 text-accent group-hover:text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                    {value.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Corona Marine? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-4">Strategic Advantage</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 uppercase tracking-tighter">
              Why Partner With Us?
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Premium Quality */}
            <div className="p-12 border border-border group hover:border-accent transition-all duration-700">
              <div className="w-16 h-16 bg-muted flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <Shield className="w-8 h-8 text-accent group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-6 uppercase tracking-tight">Premium Quality</h4>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                We supply unused and surplus part inventories sourced from trusted channels. Every component undergoes rigorous inspection to ensure it delivers peak performance in high-stakes environments.
              </p>
            </div>

            {/* Around the Globe */}
            <div className="p-12 border border-border group hover:border-accent transition-all duration-700">
              <div className="w-16 h-16 bg-muted flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <Globe className="w-8 h-8 text-accent group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-6 uppercase tracking-tight">Around the Globe</h4>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                Strategic partnerships help us connect customers with global offices and support. No matter where your fleet is located, we ensure a seamless and efficient supply chain.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="p-12 border border-border group hover:border-accent transition-all duration-700">
              <div className="w-16 h-16 bg-muted flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <Clock className="w-8 h-8 text-accent group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-6 uppercase tracking-tight">24/7 Support</h4>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                Dedicated after-sales support is available round-the-clock to assist our clients. Our engineering team is always ready to provide technical guidance and minimize vessel downtime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
