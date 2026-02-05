"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/components/contexts/auth-context';
import { 
  Menu, 
  X, 
  Package, 
  Grid3X3, 
  Award, 
  FileText, 
  LogOut,
  User,
  Home,
  Anchor,
  ShoppingCart
} from 'lucide-react';
import { MarineLoader } from '@/components/common/marine-loader';
import { Logo } from '@/components/common/logo';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, loading, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [user, loading, pathname, router]);

  if (loading) return <MarineLoader />;
  if (!user && pathname !== '/admin/login') return null;

  // Don't show layout on login page
  if (pathname === '/admin/login') return <>{children}</>;

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: Home },
    { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
    { name: 'Products', href: '/admin/products', icon: Package },
    { name: 'Categories', href: '/admin/categories', icon: Grid3X3 },
    { name: 'Brands', href: '/admin/brands', icon: Award },
    { name: 'Blogs', href: '/admin/blogs', icon: FileText },
  ];

  const handleLogout = async () => {
    await logout();
    router.push('/admin/login');
  };

  const isActive = (path: string) => pathname === path;

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="fixed inset-0 bg-[#0B1F33]/75 backdrop-blur-sm"></div>
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-[#0B1F33] to-[#05111D] shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 border-r border-[#3997b3]/10 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-24 px-8 border-b border-white/5 bg-[#0B1F33]/50 backdrop-blur-sm">
          <Link href="/" className="flex items-center">
            <Logo variant="white" size="sm" />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-white/70 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-8 px-4 space-y-3">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center px-4 py-4 text-xs font-bold uppercase tracking-widest transition-all group relative overflow-hidden ${
                  active
                    ? 'bg-accent/10 text-accent border border-accent/20 shadow-[0_0_15px_rgba(57,151,179,0.1)]'
                    : 'text-white/50 border border-transparent hover:bg-white/5 hover:text-white hover:border-white/10'
                }`}
              >
                {active && (
                   <div className="absolute inset-y-0 left-0 w-1 bg-accent shadow-[0_0_10px_#3997b3]" />
                )}
                <Icon className={`w-5 h-5 mr-4 transition-colors ${active ? 'text-accent' : 'text-white/50 group-hover:text-white'}`} />
                <span className="relative z-10">{item.name}</span>
                {active && (
                   <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-50" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#05111D] to-transparent">
          <div className="bg-white/5 border border-white/10 p-4 backdrop-blur-md mb-4 group hover:border-accent/30 transition-colors cursor-pointer">
            <div className="flex items-center">
                <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center text-[#0B1F33] font-bold shadow-lg shadow-accent/20">
                {user?.name?.charAt(0) || 'A'}
                </div>
                <div className="ml-4 overflow-hidden">
                <p className="text-xs font-bold text-white uppercase tracking-wider truncate">
                    {user?.name || user?.email || 'Admin'}
                </p>
                <p className="text-[9px] text-accent/80 font-bold uppercase tracking-widest">Fleet Commander</p>
                </div>
            </div>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full px-4 py-4 text-[10px] font-bold uppercase tracking-widest text-white/70 hover:text-white bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/50 transition-all"
          >
            <LogOut className="w-4 h-4 mr-2" />
            End Session
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-border h-16 flex items-center justify-between px-8">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-primary"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex-1" />
            <Link 
              href="/" 
              className="text-[10px] font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors"
            >
              View Public Site →
            </Link>
        </header>

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
