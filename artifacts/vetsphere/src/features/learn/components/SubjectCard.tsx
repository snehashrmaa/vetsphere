import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ElementType } from 'react';
import {
  Bone, HeartPulse, FlaskConical, Microscope, Bug, Zap,
  Pill, Stethoscope, Scissors, Baby, ShieldCheck, Leaf,
  Beef, GraduationCap, Dna,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Subject } from '@/types';
import { SUBJECT_COLORS } from '@/lib/learnMockData';

interface SubjectCardProps {
  subject: Subject;
}

const ICON_MAP: Record<string, ElementType> = {
  Bone, HeartPulse, FlaskConical, Microscope, Bug, Zap,
  Pill, Stethoscope, Scissors, Baby, ShieldCheck, Leaf,
  Beef, GraduationCap, Dna,
};

function ProgressRing() {
  const radius = 14;
  const stroke = 2.5;
  const nr = radius - stroke;
  const circ = nr * 2 * Math.PI;

  return (
    <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
      <svg width={radius * 2} height={radius * 2} className="-rotate-90">
        <circle
          cx={radius} cy={radius} r={nr}
          fill="transparent" stroke="currentColor" strokeWidth={stroke}
          className="text-white/10"
        />
        <circle
          cx={radius} cy={radius} r={nr}
          fill="transparent" stroke="currentColor" strokeWidth={stroke}
          strokeDasharray={`${circ} ${circ}`}
          strokeDashoffset={circ}
          strokeLinecap="round"
          className="text-primary"
        />
      </svg>
      <span className="absolute text-[9px] font-bold text-muted-foreground">0%</span>
    </div>
  );
}

export default function SubjectCard({ subject }: SubjectCardProps) {
  const color = SUBJECT_COLORS[subject.colorKey as keyof typeof SUBJECT_COLORS] ?? SUBJECT_COLORS.blue;
  const Icon = ICON_MAP[subject.icon] ?? Stethoscope;

  return (
    <Link to={`/learn/${subject.id}`} className="block">
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
        {/* Colored gradient header */}
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
        <div className="p-4 flex flex-col gap-3">
          <h3 className="font-heading font-semibold text-sm text-foreground leading-snug line-clamp-2 min-h-[2.5rem]">
            {subject.title}
          </h3>
          <div className="flex items-center justify-between">
            <ProgressRing />
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide border border-white/5 bg-white/5 text-muted-foreground">
              Coming Soon
            </span>
          </div>
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
