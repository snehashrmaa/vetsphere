import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, ClipboardList, Sparkles, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const bottomNavItems = [
  { title: 'Home', href: '/dashboard', icon: LayoutDashboard },
  { title: 'Learn', href: '/learn', icon: BookOpen },
  { title: 'Practice', href: '/practice', icon: ClipboardList },
  { title: 'AI Chat', href: '/ai', icon: Sparkles },
  { title: 'Social', href: '/community', icon: Users },
];

export default function BottomNavigation() {
  const location = useLocation();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-xl border-t border-white/10 z-50 px-4 pb-safe flex items-center justify-between">
      {bottomNavItems.map((item) => {
        const isActive = location.pathname === item.href || 
                        (item.href !== '/dashboard' && location.pathname.startsWith(item.href));
        
        return (
          <Link 
            key={item.title} 
            to={item.href}
            className="relative flex flex-col items-center justify-center w-16 h-full gap-1"
          >
            {isActive && (
              <motion.div
                layoutId="bottom-nav-active"
                className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-t-xl"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <motion.div
              animate={{ 
                y: isActive ? -4 : 0,
                color: isActive ? 'var(--color-primary)' : 'var(--color-muted-foreground)'
              }}
              className="z-10 relative"
            >
              <item.icon size={24} className={cn("transition-colors", isActive && "filter drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]")} />
            </motion.div>
            <span className={cn(
              "text-[10px] font-medium z-10 transition-colors",
              isActive ? "text-primary" : "text-muted-foreground"
            )}>
              {item.title}
            </span>
            
            {isActive && (
              <motion.div 
                layoutId="bottom-nav-indicator"
                className="absolute top-0 w-8 h-1 bg-primary rounded-b-full shadow-[0_4px_12px_rgba(16,185,129,0.8)]"
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
