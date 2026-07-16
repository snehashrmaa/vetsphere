import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { ElementType } from 'react';
import {
  MessageSquare, Heart, TreePine, FlaskConical,
  CalendarDays, Briefcase, Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { type CommunitySpace, SUBJECT_COLORS } from '@/data/communitySpaces';

interface CommunityCardProps {
  space: CommunitySpace;
}

const ICON_MAP: Record<string, ElementType> = {
  MessageSquare, Heart, TreePine, FlaskConical,
  CalendarDays, Briefcase,
};

export default function CommunityCard({ space }: CommunityCardProps) {
  const navigate = useNavigate();
  const color = SUBJECT_COLORS[space.color] ?? SUBJECT_COLORS.blue;
  const Icon = ICON_MAP[space.icon] ?? MessageSquare;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 340, damping: 22 }}
      onClick={() => navigate(`/community/${space.slug}`)}
      className={cn(
        'group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer',
        'bg-card/80 backdrop-blur-md border border-white/10',
        'hover:border-white/20 hover:shadow-xl hover:shadow-black/30',
        'transition-shadow duration-300',
      )}
    >
      {/* Gradient header */}
      <div
        className={cn(
          'h-20 flex items-center justify-center bg-gradient-to-br',
          color.from,
          color.to,
        )}
      >
        <div
          className={cn(
            'w-11 h-11 rounded-xl flex items-center justify-center',
            'bg-background/50 backdrop-blur-md border border-white/10 shadow-inner',
            color.text,
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-heading font-semibold text-sm text-foreground leading-snug">
          {space.name}
        </h3>
        <p className="text-xs text-muted-foreground leading-snug line-clamp-2 min-h-[2rem] flex-1">
          {space.description}
        </p>

        {/* Member count */}
        <div className="flex items-center gap-1.5 pt-1">
          <Users size={11} className="text-muted-foreground/60 shrink-0" />
          <span className="text-[10px] text-muted-foreground/70 font-medium">
            Members: Coming Soon
          </span>
        </div>

        {/* Join button */}
        <button
          onClick={(e) => e.stopPropagation()}
          className={cn(
            'mt-1 w-full py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200',
            'bg-white/5 border-white/10 text-muted-foreground',
            'hover:bg-white/10 hover:text-foreground hover:border-white/20',
          )}
        >
          Join
        </button>
      </div>

      {/* Hover glow overlay */}
      <div
        className={cn(
          'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none',
          `bg-gradient-to-b ${color.from}`,
          'mix-blend-overlay',
        )}
      />
    </motion.div>
  );
}
