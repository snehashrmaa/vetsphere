import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, BookOpen, ClipboardList, Stethoscope,
  Sparkles, FlaskConical, Bird, Users,
  UserCircle, Settings, ChevronLeft, PawPrint, LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/hooks/useSidebar';
import { currentUser } from '@/lib/mockData';

const navItems = [
  { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { title: 'Learn', href: '/learn', icon: BookOpen },
  { title: 'Practice', href: '/practice', icon: ClipboardList },
  { title: 'Clinic', href: '/clinic', icon: Stethoscope },
  { title: 'AI Assistant', href: '/ai', icon: Sparkles },
  { title: 'Research', href: '/research', icon: FlaskConical },
  { title: 'Wildlife', href: '/wildlife', icon: Bird },
  { title: 'Community', href: '/community', icon: Users },
  { title: 'Profile', href: '/profile', icon: UserCircle },
  { title: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const { collapsed, setCollapsed } = useSidebar();
  const location = useLocation();

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 h-[100dvh] bg-sidebar border-r border-sidebar-border z-40 hidden md:flex flex-col"
    >
      {/* Logo Area */}
      <div className="h-20 flex items-center justify-between px-4 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 min-w-10 rounded-xl bg-gradient-to-br from-sidebar-primary to-accent flex items-center justify-center text-white shadow-md shadow-primary/20">
            <PawPrint size={24} />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-heading font-bold text-xl tracking-tight text-sidebar-foreground whitespace-nowrap"
              >
                VetSphere
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-7 w-6 h-6 bg-sidebar border border-sidebar-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors shadow-sm"
        >
          <motion.div animate={{ rotate: collapsed ? 180 : 0 }}>
            <ChevronLeft size={14} />
          </motion.div>
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex-1 overflow-y-auto py-6 px-3 scrollbar-hide flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href || 
                          (item.href !== '/dashboard' && location.pathname.startsWith(item.href));
          return (
            <Link key={item.title} to={item.href}>
              <div
                className={cn(
                  "flex items-center h-11 px-3 rounded-lg transition-all relative overflow-hidden group",
                  isActive 
                    ? "bg-primary/10 text-sidebar-primary" 
                    : "text-muted-foreground hover:bg-white/5 hover:text-sidebar-foreground"
                )}
              >
                {isActive && (
                  <motion.div 
                    layoutId="active-nav"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-sidebar-primary rounded-r-full"
                  />
                )}
                <item.icon size={20} className={cn("min-w-5", isActive ? "text-sidebar-primary" : "")} />
                
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="ml-3 font-medium text-sm whitespace-nowrap"
                    >
                      {item.title}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 min-w-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-heading font-semibold border border-white/10">
            {currentUser.avatar || currentUser.name.charAt(0)}
          </div>
          
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="flex flex-col overflow-hidden whitespace-nowrap"
              >
                <span className="text-sm font-semibold text-sidebar-foreground">{currentUser.name}</span>
                <span className="text-xs text-muted-foreground">{currentUser.role === 'student' ? currentUser.year : 'Practitioner'}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {!collapsed && (
            <button className="ml-auto p-2 text-muted-foreground hover:text-destructive transition-colors">
              <LogOut size={18} />
            </button>
          )}
        </div>
      </div>
    </motion.aside>
  );
}
