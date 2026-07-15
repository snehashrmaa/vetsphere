import type { ElementType } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronLeft, HelpCircle,
  ListChecks, Stethoscope, Zap, ClipboardCheck, History,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { getCategoryBySlug, SUBJECT_COLORS } from '@/data/practiceCategories';

// ─── Icon map ─────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, ElementType> = {
  ListChecks, Stethoscope, Zap, ClipboardCheck, History,
};

// ─── Category Not Found ───────────────────────────────────────────────────────
function CategoryNotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center"
    >
      <div className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center mb-5">
        <HelpCircle className="w-8 h-8" />
      </div>
      <h2 className="text-2xl font-bold font-heading mb-2">Category Not Found</h2>
      <p className="text-muted-foreground mb-6 max-w-sm">
        The practice category you're looking for doesn't exist. Check the URL or browse all categories below.
      </p>
      <Link to="/practice">
        <Button variant="primary">Browse Practice</Button>
      </Link>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PracticeDetailPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = getCategoryBySlug(categorySlug ?? '');

  if (!category) {
    return <CategoryNotFound />;
  }

  const color = SUBJECT_COLORS[category.color] ?? SUBJECT_COLORS.blue;
  const Icon = ICON_MAP[category.icon] ?? ListChecks;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      className="space-y-6 pb-16 max-w-5xl mx-auto"
    >
      {/* Back button */}
      <Link
        to="/practice"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group w-fit"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Back to Practice
      </Link>

      {/* ── Header card ──────────────────────────────────────────────────── */}
      <GlassCard className="overflow-hidden">
        {/* Gradient banner */}
        <div className={cn('h-28 bg-gradient-to-br', color.from, color.to)} />

        {/* Content row */}
        <div className="px-6 md:px-8 pb-7 -mt-10">
          <div className="flex flex-col sm:flex-row sm:items-end gap-5">

            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22, delay: 0.05 }}
              className={cn(
                'w-20 h-20 rounded-2xl flex items-center justify-center shrink-0',
                'border-4 border-background shadow-xl',
                `bg-gradient-to-br ${color.from} ${color.to}`,
                color.text,
              )}
            >
              <Icon className="w-9 h-9" />
            </motion.div>

            {/* Title + subtitle + badge */}
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="flex-1 min-w-0 pt-2 sm:pt-0"
            >
              <h1 className="text-2xl md:text-3xl font-bold font-heading text-foreground tracking-tight mb-1">
                {category.title}
              </h1>
              <p className="text-sm text-muted-foreground mb-2">{category.subtitle}</p>
              {category.comingSoon && (
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border border-white/5 bg-white/5 text-muted-foreground">
                  Coming Soon
                </span>
              )}
            </motion.div>

          </div>
        </div>
      </GlassCard>

      {/* ── Empty state ───────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut', delay: 0.15 }}
      >
        <GlassCard className="flex flex-col items-center justify-center py-20 px-6 text-center border-dashed border-white/10 bg-black/10">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-5">
            <Icon className={cn('w-7 h-7 opacity-30', color.text)} />
          </div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
            {category.title}
          </h3>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            This module is under development.
          </p>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
