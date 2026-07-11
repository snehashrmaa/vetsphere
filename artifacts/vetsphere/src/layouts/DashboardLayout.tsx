import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import BottomNavigation from '../components/BottomNavigation';
import { useSidebar } from '@/hooks/useSidebar';
import { motion } from 'framer-motion';

export default function DashboardLayout() {
  const { collapsed } = useSidebar();

  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex overflow-hidden">
      <Sidebar />
      
      <motion.main 
        className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden md:pb-0 pb-24"
        initial={false}
        animate={{ 
          marginLeft: typeof window !== 'undefined' && window.innerWidth >= 768 
            ? (collapsed ? 80 : 280) 
            : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
          <Outlet />
        </div>
      </motion.main>

      <BottomNavigation />
    </div>
  );
}
