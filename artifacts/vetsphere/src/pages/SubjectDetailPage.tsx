import { useState } from 'react';
import type { ElementType } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft, BookOpen, PenLine, LibraryBig, HelpCircle,
  Stethoscope, Video, Download,
  Bone, HeartPulse, FlaskConical, Microscope, Bug, Zap,
  Pill, Scissors, Baby, ShieldCheck, Leaf, Beef, GraduationCap, Dna,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { getSubjectBySlug, SUBJECT_COLORS } from '@/data/subjects';

// ─── Icon map ─────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, ElementType> = {
  Bone, HeartPulse, FlaskConical, Microscope, Bug, Zap,
  Pill, Stethoscope, Scissors, Baby, ShieldCheck, Leaf,
  Beef, GraduationCap, Dna,
};

// ─── Tab definitions ──────────────────────────────────────────────────────────
const TABS = [
  { id: 'overview',   label: 'Overview',       icon: BookOpen,    title: 'No Content Yet',    desc: 'Chapters and lessons for this subject will be available in a future update.' },
  { id: 'notes',      label: 'Notes',          icon: PenLine,     title: 'No Notes Yet',       desc: 'This section will be available in a future update.' },
  { id: 'flashcards', label: 'Flashcards',     icon: LibraryBig,  title: 'No Flashcards Yet',  desc: 'This section will be available in a future update.' },
  { id: 'mcqs',       label: 'MCQs',           icon: HelpCircle,  title: 'No Questions Yet',   desc: 'This section will be available in a future update.' },
  { id: 'cases',      label: 'Clinical Cases', icon: Stethoscope, title: 'No Cases Yet',        desc: 'This section will be available in a future update.' },
  { id: 'videos',     label: 'Videos',         icon: Video,       title: 'No Videos Yet',       desc: 'This section will be available in a future update.' },
  { id: 'downloads',  label: 'Downloads',      icon: Download,    title: 'No Downloads Yet',    desc: 'This section will be available in a future update.' },
] as const;

type TabId = typeof TABS[number]['id'];

// ─── Progress ring (always 0%) ────────────────────────────────────────────────
function ProgressRing({ size = 56 }: { size?: number }) {
  const stroke = 3.5;
  const r = size / 2 - stroke;
  const circ = r * 2 * Math.PI;

  return (
    <div
      className="relative flex items-center justify-center shrink-0"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r}
          fill="transparent" stroke="currentColor" strokeWidth={stroke}
          className="text-white/10"
        />
        <circle cx={size / 2} cy={size / 2} r={r}
          fill="transparent" stroke="currentColor" strokeWidth={stroke}
          strokeDasharray={`${circ} ${circ}`}
          strokeDashoffset={circ}
          strokeLinecap="round"
          className="text-primary"
        />
      </svg>
      <span className="absolute text-xs font-bold text-muted-foreground">0%</span>
    </div>
  );
}

// ─── Empty state ──────────────────────────────────────────────────────────────
function EmptyState({ icon: Icon, title, description }: {
  icon: ElementType;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <GlassCard className="flex flex-col items-center justify-center py-20 px-6 text-center border-dashed border-white/10 bg-black/10">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-5">
          <Icon className="w-7 h-7 text-muted-foreground opacity-40" />
        </div>
        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">{description}</p>
      </GlassCard>
    </motion.div>
  );
}

// ─── Subject Not Found ────────────────────────────────────────────────────────
function SubjectNotFound() {
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
      <h2 className="text-2xl font-bold font-heading mb-2">Subject Not Found</h2>
      <p className="text-muted-foreground mb-6 max-w-sm">
        The subject you're looking for doesn't exist. Check the URL or browse all subjects below.
      </p>
      <Link to="/learn">
        <Button variant="primary">Browse Subjects</Button>
      </Link>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SubjectDetailPage() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  // Look up by slug — the route param is the subject's URL slug
  const subject = getSubjectBySlug(subjectId ?? '');

  if (!subject) {
    return <SubjectNotFound />;
  }

  const color = SUBJECT_COLORS[subject.color] ?? SUBJECT_COLORS.blue;
  const Icon = ICON_MAP[subject.icon] ?? Stethoscope;
  const activeTabData = TABS.find(t => t.id === activeTab)!;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      className="space-y-6 pb-16 max-w-5xl mx-auto"
    >
      {/* Back button */}
      <Link
        to="/learn"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group w-fit"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Back to Learn
      </Link>

      {/* ── Subject header card ───────────────────────────────────────────── */}
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

            {/* Name + badge */}
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="flex-1 min-w-0 pt-2 sm:pt-0"
            >
              <h1 className="text-2xl md:text-3xl font-bold font-heading text-foreground tracking-tight mb-2">
                {subject.name}
              </h1>
              {subject.comingSoon && (
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border border-white/5 bg-white/5 text-muted-foreground">
                  Coming Soon
                </span>
              )}
            </motion.div>

            {/* Progress ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="flex items-center gap-3 bg-background/50 backdrop-blur-md px-4 py-3 rounded-xl border border-white/5 self-start sm:self-auto"
            >
              <ProgressRing size={52} />
              <div>
                <p className="text-xs text-muted-foreground font-medium">Progress</p>
                <p className="text-sm font-bold text-foreground">Not started</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── Tab bar ──────────────────────────────────────────────────────── */}
        <div className="border-t border-white/5 px-6 md:px-8 flex overflow-x-auto scrollbar-hide gap-1">
          {TABS.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'relative flex items-center gap-2 py-4 px-3 text-sm font-medium whitespace-nowrap transition-colors shrink-0',
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <TabIcon className="w-4 h-4" />
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </GlassCard>

      {/* ── Tab content ──────────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        >
          <EmptyState
            icon={activeTabData.icon}
            title={activeTabData.title}
            description={activeTabData.desc}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
