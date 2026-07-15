import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ElementType } from 'react';
import {
  Pill, Calculator, Droplets, BookOpen, Shield,
  FlaskConical, PawPrint, AlertCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { type ClinicTool, SUBJECT_COLORS } from '@/data/clinicTools';

interface ClinicToolCardProps {
  tool: ClinicTool;
}

const ICON_MAP: Record<string, ElementType> = {
  Pill, Calculator, Droplets, BookOpen, Shield,
  FlaskConical, PawPrint, AlertCircle,
};

export default function ClinicToolCard({ tool }: ClinicToolCardProps) {
  const color = SUBJECT_COLORS[tool.color] ?? SUBJECT_COLORS.blue;
  const Icon = ICON_MAP[tool.icon] ?? Pill;

  return (
    <Link to={`/clinic/${tool.slug}`} className="block">
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 340, damping: 22 }}
        className={cn(
          'group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer',
          'bg-card/80 backdrop-blur-md border border-white/10',
          'hover:border-white/20 hover:shadow-xl hover:shadow-black/30',
          'transition-shadow duration-300',
        )}
      >
        {/* Gradient header */}
        <div className={cn('h-20 flex items-center justify-center bg-gradient-to-br', color.from, color.to)}>
          <div className={cn(
            'w-11 h-11 rounded-xl flex items-center justify-center',
            'bg-background/50 backdrop-blur-md border border-white/10 shadow-inner',
            color.text,
          )}>
            <Icon className="w-5 h-5" />
          </div>
        </div>

        {/* Card body */}
        <div className="p-4 flex flex-col gap-2">
          <h3 className="font-heading font-semibold text-sm text-foreground leading-snug">
            {tool.name}
          </h3>
          <p className="text-xs text-muted-foreground leading-snug line-clamp-2 min-h-[2rem]">
            {tool.description}
          </p>
          {tool.comingSoon && (
            <div className="pt-1">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide border border-white/5 bg-white/5 text-muted-foreground">
                Coming Soon
              </span>
            </div>
          )}
        </div>

        {/* Hover glow overlay */}
        <div className={cn(
          'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none',
          `bg-gradient-to-b ${color.from}`,
          'mix-blend-overlay',
        )} />
      </motion.div>
    </Link>
  );
}
