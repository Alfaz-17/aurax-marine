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
      <div className={`fixed inset-y-0 left-0 z-50 w-[280px] bg-secondary shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 border-r border-border flex flex-col ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-20 px-8 border-b border-border/10 bg-secondary">
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

        <nav className="flex-1 mt-6 px-4 space-y-2 overflow-y-auto custom-scrollbar pb-8">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center px-4 py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all group relative overflow-hidden ${
                  active
                    ? 'bg-primary/10 text-primary border border-primary/20 shadow-sm'
                    : 'text-white/60 border border-transparent hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 mr-4 transition-colors ${active ? 'text-primary' : 'text-white/40 group-hover:text-white'}`} />
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 bg-secondary border-t border-border/10">
          <div className="bg-white/5 rounded-lg p-4 mb-4 group hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/10">
            <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-black border border-primary/30">
                {user?.name?.charAt(0) || 'A'}
                </div>
                <div className="ml-4 overflow-hidden">
                <p className="text-xs font-bold text-white uppercase tracking-wider truncate">
                    {user?.name || user?.email || 'Admin'}
                </p>
                <p className="text-[9px] text-white/50 font-medium uppercase tracking-widest mt-0.5">Fleet Commander</p>
                </div>
            </div>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full px-4 py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 border border-white/10 transition-all"
          >
            <LogOut className="w-4 h-4 mr-3" />
            End Session
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
