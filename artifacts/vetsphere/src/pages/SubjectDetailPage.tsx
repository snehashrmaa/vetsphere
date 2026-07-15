import { useState } from 'react';
import type { ElementType } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, BookOpen, PenLine, LibraryBig, HelpCircle, Stethoscope, Video, Download, Bookmark as BookmarkIcon, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';
import GlassCard from '@/components/GlassCard';
import { subjects, SUBJECT_COLORS } from '@/lib/learnMockData';

const tabs = [
  { id: 'overview',   label: 'Overview',   icon: BookOpen },
  { id: 'notes',      label: 'Notes',      icon: PenLine },
  { id: 'flashcards', label: 'Flashcards', icon: LibraryBig },
  { id: 'mcqs',       label: 'MCQs',       icon: HelpCircle },
  { id: 'cases',      label: 'Cases',      icon: Stethoscope },
  { id: 'videos',     label: 'Videos',     icon: Video },
  { id: 'downloads',  label: 'Downloads',  icon: Download },
  { id: 'bookmarks',  label: 'Bookmarks',  icon: BookmarkIcon },
] as const;

type TabId = typeof tabs[number]['id'];

function EmptyState({ icon: Icon, title, description, actionLabel }: {
  icon: ElementType;
  title: string;
  description: string;
  actionLabel?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-black/10 rounded-2xl border border-dashed border-white/10">
      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-muted-foreground opacity-50" />
      </div>
      <h3 className="text-xl font-heading font-medium text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-sm mb-6">{description}</p>
      {actionLabel && (
        <Button variant="outline" icon={<Plus className="w-4 h-4" />}>{actionLabel}</Button>
      )}
    </div>
  );
}

export default function SubjectDetailPage() {
  const { subjectId } = useParams();
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const subject = subjects.find(s => s.id === subjectId);

  if (!subject) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6">
          <HelpCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold font-heading mb-2">Subject Not Found</h2>
        <p className="text-muted-foreground mb-6 max-w-md">The subject you're looking for doesn't exist or has been removed.</p>
        <Link to="/learn">
          <Button variant="primary" icon={<ChevronLeft className="w-4 h-4" />}>Back to Learning Hub</Button>
        </Link>
      </div>
    );
  }

  const color = SUBJECT_COLORS[subject.colorKey as keyof typeof SUBJECT_COLORS] || SUBJECT_COLORS.blue;

  const radius = 28;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (subject.progress / 100) * circumference;

  return (
    <div className="space-y-8 pb-20 max-w-6xl mx-auto">
      {/* Back Link */}
      <Link to="/learn" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to Learning Hub
      </Link>

      {/* Header Section */}
      <GlassCard className="overflow-hidden border-white/10 bg-black/20">
        <div className={cn("h-32 bg-gradient-to-r", color.from, color.to)} />
        <div className="px-6 md:px-10 pb-8 relative">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end -mt-12 mb-6">
            <div className={cn("w-24 h-24 rounded-2xl flex items-center justify-center shrink-0 border-4 border-background shadow-xl bg-gradient-to-br", color.from, color.to, color.text)}>
              <BookOpen className="w-10 h-10" />
            </div>

            <div className="flex-grow min-w-0 pt-2 md:pt-0">
              <div className="flex items-center gap-3 mb-2">
                <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-bold border", color.badge, "border-white/5")}>
                  {subject.category}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  Last studied {subject.lastStudied || 'Never'}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                {subject.title}
              </h1>
              <p className="text-muted-foreground text-sm md:text-base max-w-3xl">
                {subject.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-4 bg-background/50 backdrop-blur-md p-4 rounded-2xl border border-white/5">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
                  <circle
                    stroke="currentColor"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    className="text-white/10"
                  />
                  <circle
                    stroke="currentColor"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    className="text-primary transition-all duration-1000 ease-out"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-sm">
                  {subject.progress}%
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Completion</div>
                <div className="font-bold">{subject.completedLessons} / {subject.totalLessons} Lessons</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-t border-white/5 px-6 md:px-10 flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 py-4 px-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors",
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-white/[0.02]"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Tab Content Area */}
      <div className="mt-8 relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'overview' && (
              <EmptyState icon={BookOpen} title="Content Coming Soon" description="Chapters and lessons for this subject will appear here once they are published." />
            )}

            {activeTab === 'notes' && (
              <div className="space-y-4">
                <div className="flex justify-end mb-4">
                  <Button icon={<Plus className="w-4 h-4" />} size="sm">Create Note</Button>
                </div>
                <EmptyState icon={PenLine} title="No Notes Yet" description="Start documenting your learning journey. Your notes will appear here." actionLabel="Start your first note" />
              </div>
            )}

            {activeTab === 'flashcards' && (
              <EmptyState icon={LibraryBig} title="No Flashcards Yet" description="Flashcards for this subject will appear here once they are added." />
            )}

            {activeTab === 'mcqs' && (
              <EmptyState icon={HelpCircle} title="No Questions Yet" description="Practice questions for this subject are coming soon." />
            )}

            {activeTab === 'cases' && (
              <EmptyState icon={Stethoscope} title="No Clinical Cases Yet" description="Case studies for this subject will appear here once they are published." />
            )}

            {activeTab === 'videos' && (
              <EmptyState icon={Video} title="No Videos Yet" description="Video lectures for this subject are currently in production." />
            )}

            {activeTab === 'downloads' && (
              <EmptyState icon={Download} title="No Downloads Yet" description="Supplementary materials for this subject will be available here." />
            )}

            {activeTab === 'bookmarks' && (
              <EmptyState icon={BookmarkIcon} title="No Bookmarks Yet" description="Items you bookmark across this subject will appear here for quick access." />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
