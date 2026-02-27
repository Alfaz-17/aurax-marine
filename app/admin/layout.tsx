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
  ShoppingCart,
  Settings as SettingsIcon
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
    { name: 'Settings', href: '/admin/settings', icon: SettingsIcon },
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
          <div className="fixed inset-0 bg-secondary/75 backdrop-blur-sm"></div>
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-[280px] bg-secondary shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 border-r border-primary/20 flex flex-col overflow-hidden ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Marine Tech Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,59,48,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,59,48,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-secondary pointer-events-none" />
        <div className="flex flex-col items-center justify-center p-8 border-b border-primary/10 bg-secondary/80 backdrop-blur-md relative overflow-hidden">
          {/* HUD Brackets for logo area */}
          <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-primary/40" />
          <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-primary/40" />
          <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-primary/40" />
          <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-primary/40" />
          
          <div className="w-full flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
              <Logo variant="white" size="sm" />
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md text-white/50 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="w-full flex justify-between items-center px-1">
             <span className="text-[8px] font-mono text-primary/60 tracking-[0.2em] uppercase">Vessel ID: AX-902</span>
             <span className="text-[8px] font-mono text-primary/60 tracking-[0.2em] uppercase">Auth: L3</span>
          </div>
        </div>

        <nav className="flex-1 mt-6 px-4 space-y-2 overflow-y-auto custom-scrollbar pb-8">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] transition-all group relative ${
                  active
                    ? 'text-primary'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {active && (
                  <>
                    <div className="absolute inset-0 bg-primary/5 border-l-2 border-primary" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/60" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/60" />
                  </>
                )}
                {!active && (
                   <div className="absolute left-0 w-0.5 h-full bg-white/5 group-hover:bg-primary/20 transition-all" />
                )}
                <Icon className={`w-4 h-4 mr-4 transition-all duration-300 ${active ? 'text-primary scale-110' : 'text-white/30 group-hover:text-white/70'}`} />
                <span className="relative z-10 font-mono tracking-widest">{item.name}</span>
                {active && (
                   <div className="ml-auto w-1 h-1 bg-primary animate-pulse rounded-full shadow-[0_0_8px_#FF3B30]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 bg-secondary/80 backdrop-blur-md border-t border-primary/10 relative">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          <div className="bg-black/40 rounded-sm p-4 mb-4 border border-primary/10 relative group overflow-hidden">
            <div className="absolute top-0 right-0 px-2 py-0.5 bg-primary/10 border-b border-l border-primary/20">
               <span className="text-[7px] font-mono text-primary/80">CORE_SYNC</span>
            </div>
            <div className="flex items-center">
                <div className="w-10 h-10 bg-black border border-primary/30 rounded-sm flex items-center justify-center text-primary font-black shadow-[0_0_15px_rgba(255,59,48,0.1)] relative">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--primary),transparent)]" />
                  {user?.name?.charAt(0) || 'A'}
                </div>
                <div className="ml-4 overflow-hidden">
                <p className="text-[10px] font-mono font-black text-white uppercase tracking-tighter truncate">
                    {user?.name || user?.email || 'Admin'}
                </p>
                <p className="text-[8px] text-primary/60 font-mono uppercase tracking-[0.2em] mt-0.5">Spice Commander</p>
                </div>
            </div>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full px-4 py-3 border border-red-500/20 text-[10px] font-mono font-black uppercase tracking-[0.3em] text-red-500/60 hover:text-red-500 hover:bg-red-500/5 hover:border-red-500/40 transition-all relative overflow-hidden group"
          >
            <div className="absolute inset-y-0 left-0 w-0 group-hover:w-1 bg-red-500 transition-all" />
            <LogOut className="w-3 h-3 mr-3 opacity-70 group-hover:opacity-100" />
            Termination
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-[280px]">
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
