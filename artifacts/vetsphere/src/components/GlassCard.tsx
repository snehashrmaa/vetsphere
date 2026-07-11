import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface GlassCardProps extends HTMLMotionProps<"div"> {
  animated?: boolean;
  hoverEffect?: boolean;
}

export default function GlassCard({ 
  children, 
  className, 
  animated = false, 
  hoverEffect = true,
  ...props 
}: GlassCardProps) {
  const baseStyles = "bg-card/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden";
  const hoverStyles = hoverEffect ? "hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-primary/5 transition-all duration-300" : "";
  
  const animationProps = animated ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.4, ease: "easeOut" as const }
  } : {};

  return (
    <motion.div
      className={cn(baseStyles, hoverStyles, className)}
      {...animationProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}
