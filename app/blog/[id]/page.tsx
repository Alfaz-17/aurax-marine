"use client"

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, Calendar, User, Share2 } from 'lucide-react';
import api from '@/lib/api';
import { MarineLoader } from '@/components/common/marine-loader';

export default function BlogDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/blogs/${id}`);
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchBlog();
  }, [id]);

  if (loading) return <MarineLoader />;
  if (!blog) return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-6">
      <h2 className="text-3xl font-bold text-primary">Article Not Found</h2>
      <Link href="/blog" className="px-8 py-3 bg-accent text-white font-bold uppercase tracking-widest">Return to Blog</Link>
    </div>
  );

  return (
    <main className="min-h-screen pb-20">
      {/* Blog Hero */}
      <header className="relative h-[60vh] min-h-[500px] flex items-end pb-20 overflow-hidden bg-black">
         <div className="absolute inset-0 z-0 text-black">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover opacity-40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
         </div>

         
         <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
                <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-black text-primary uppercase tracking-[0.2em] mb-8 hover:gap-4 transition-all">
                   <ChevronLeft className="w-4 h-4" /> Back to Articles
                </Link>
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-8">
                   {blog.title}
                </h1>
                <div className="flex flex-wrap items-center gap-8 text-white/60 text-xs font-black uppercase tracking-widest border-t border-white/10 pt-8">
                   <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {new Date(blog.date).toLocaleDateString()}
                   </div>
                   <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Editorial Team
                   </div>
                   <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                      <Share2 className="w-4 h-4 text-primary" />
                      Share Article
                   </div>
                </div>

            </motion.div>
         </div>
      </header>

      {/* Article Content */}
      <article className="container mx-auto px-6 lg:px-8 mt-12">
         <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
               <div className="prose prose-lg max-w-none prose-headings:text-black prose-headings:font-black prose-p:text-black/80 prose-strong:text-black prose-p:leading-relaxed prose-headings:uppercase prose-headings:tracking-widest">
                  <div className="bg-black/5 p-10 italic border-l-8 border-primary mb-12 text-xl font-black text-black">
                     {blog.excerpt}
                  </div>
                  
                  {/* Since we don't have full content field in source JSON, we simulate it or use excerpt as lead */}
                  <div dangerouslySetInnerHTML={{ __html: blog.content || `<p>${blog.excerpt}</p><p>Stay tuned for the full technical analysis and industry breakdown from our engineering division. We are continuously monitoring the latest trends in marine automation and vessel logistics.</p>` }} />
               </div>
               
               <div className="mt-20 pt-10 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black">AM</div>
                     <div>
                        <h4 className="font-black text-black uppercase text-sm">AURAX Marine</h4>
                        <p className="text-xs text-black/60 font-black tracking-widest uppercase">Certified Specialists</p>
                     </div>
                  </div>
                  <Link href="/contact" className="px-8 py-4 bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-colors shadow-xl">
                     Discuss this topic
                  </Link>
               </div>
            </div>


            {/* Sidebar (Optional) */}
            <aside className="lg:col-span-4 space-y-12">
               <div className="p-10 bg-black text-white border border-white/10">
                  <h3 className="text-lg font-black text-white uppercase tracking-widest mb-6 pb-2 border-b-2 border-primary inline-block">Newsletter</h3>
                  <p className="text-sm text-white/60 italic mb-8">Receive technical bulletins twice a month directly in your inbox.</p>
                  <form className="space-y-4">
                     <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-white/10 border border-white/20 outline-none focus:border-primary text-xs text-white" />
                     <button className="w-full py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-colors">Subscribe</button>
                  </form>
               </div>
            </aside>

         </div>
      </article>
    </main>
  );
}
