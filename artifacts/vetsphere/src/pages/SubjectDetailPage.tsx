import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, BookOpen, PenLine, LibraryBig, HelpCircle, Stethoscope, Video, Download, Bookmark as BookmarkIcon, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';
import GlassCard from '@/components/GlassCard';

// Data imports
import { 
  subjects, chapters, lessons, flashcards, mcqs, 
  clinicalCases, videos, downloads, notes, bookmarks, 
  SUBJECT_COLORS 
} from '@/lib/learnMockData';

// Component imports
import ChapterCard from '@/features/learn/components/ChapterCard';
import FlashcardPreview from '@/features/learn/components/FlashcardPreview';
import MCQCard from '@/features/learn/components/MCQCard';
import ClinicalCaseCard from '@/features/learn/components/ClinicalCaseCard';
import VideoCard from '@/features/learn/components/VideoCard';
import DownloadCard from '@/features/learn/components/DownloadCard';
import BookmarkRow from '@/features/learn/components/BookmarkRow';
import { SubjectNote } from '@/types';

const tabs = [
  { id: 'overview', label: 'Overview', icon: BookOpen },
  { id: 'notes', label: 'Notes', icon: PenLine },
  { id: 'flashcards', label: 'Flashcards', icon: LibraryBig },
  { id: 'mcqs', label: 'MCQs', icon: HelpCircle },
  { id: 'cases', label: 'Cases', icon: Stethoscope },
  { id: 'videos', label: 'Videos', icon: Video },
  { id: 'downloads', label: 'Downloads', icon: Download },
  { id: 'bookmarks', label: 'Bookmarks', icon: BookmarkIcon },
] as const;

type TabId = typeof tabs[number]['id'];

export default function SubjectDetailPage() {
  const { subjectId } = useParams();
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [flashcardIndex, setFlashcardIndex] = useState(0);

  // Find subject and associated data
  const subject = subjects.find(s => s.id === subjectId);
  const subjectChapters = chapters.filter(c => c.subjectId === subjectId).sort((a, b) => a.order - b.order);
  const subjectFlashcards = flashcards.filter(f => f.subjectId === subjectId);
  const subjectMCQs = mcqs.filter(m => m.subjectId === subjectId);
  const subjectCases = clinicalCases.filter(c => c.subjectId === subjectId);
  const subjectVideos = videos.filter(v => v.subjectId === subjectId);
  const subjectDownloads = downloads.filter(d => d.subjectId === subjectId);
  const subjectNotes = notes.filter(n => n.subjectId === subjectId);
  const subjectBookmarks = bookmarks.filter(b => b.subjectId === subjectId);

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

  // SVG Progress Ring calculations
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
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="space-y-4">
                {subjectChapters.length > 0 ? (
                  subjectChapters.map((chapter, index) => {
                    const chapterLessons = lessons.filter(l => l.chapterId === chapter.id);
                    return (
                      <ChapterCard 
                        key={chapter.id} 
                        chapter={chapter} 
                        lessons={chapterLessons}
                        defaultOpen={index === 0} 
                      />
                    );
                  })
                ) : (
                  // Empty state / skeleton for subjects without detailed data
                  Array.from({ length: 5 }).map((_, i) => (
                    <GlassCard key={i} className="p-5 flex items-center gap-4 opacity-50 grayscale border-dashed border-white/10">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-muted-foreground">
                        Ch {i + 1}
                      </div>
                      <div>
                        <div className="h-5 w-48 bg-white/10 rounded mb-2" />
                        <div className="h-3 w-32 bg-white/5 rounded" />
                      </div>
                    </GlassCard>
                  ))
                )}
              </div>
            )}

            {/* NOTES TAB */}
            {activeTab === 'notes' && (
              <div className="space-y-4">
                <div className="flex justify-end mb-4">
                  <Button icon={<Plus className="w-4 h-4" />} size="sm">Create Note</Button>
                </div>
                {subjectNotes.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subjectNotes.map(note => (
                      <GlassCard key={note.id} className="p-5 flex flex-col hover:bg-white/[0.02] transition-colors group border-white/5">
                        <div className="flex justify-between items-start mb-3">
                          <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                            {note.chapterTitle}
                          </span>
                          <span className="text-xs text-muted-foreground">{note.updatedAt}</span>
                        </div>
                        <p className="text-sm text-foreground/90 leading-relaxed mb-6 line-clamp-4">
                          {note.content}
                        </p>
                        <div className="mt-auto flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="secondary" size="sm" className="w-full text-xs h-8">Edit</Button>
                          <Button variant="ghost" size="sm" className="w-full text-xs h-8 text-rose-400 hover:text-rose-500 hover:bg-rose-500/10">Delete</Button>
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                ) : (
                  <EmptyState icon={PenLine} title="No notes yet" description="Start documenting your learning journey. Your notes will appear here." actionLabel="Start your first note" />
                )}
              </div>
            )}

            {/* FLASHCARDS TAB */}
            {activeTab === 'flashcards' && (
              <div className="space-y-6">
                {subjectFlashcards.length > 0 ? (
                  <>
                    <div className="flex justify-between items-center bg-black/20 p-4 rounded-2xl border border-white/5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                          {subjectFlashcards.length}
                        </div>
                        <div>
                          <h3 className="font-heading font-medium">Total Cards</h3>
                          <p className="text-xs text-muted-foreground">Ready for review</p>
                        </div>
                      </div>
                      <Button>Practice All</Button>
                    </div>

                    <FlashcardPreview card={subjectFlashcards[flashcardIndex]} />

                    <div className="flex justify-center items-center gap-8 mt-8">
                      <Button 
                        variant="secondary" 
                        onClick={() => setFlashcardIndex(prev => Math.max(0, prev - 1))}
                        disabled={flashcardIndex === 0}
                      >
                        Previous
                      </Button>
                      <span className="text-sm font-medium font-heading">
                        {flashcardIndex + 1} <span className="text-muted-foreground">/ {subjectFlashcards.length}</span>
                      </span>
                      <Button 
                        variant="secondary" 
                        onClick={() => setFlashcardIndex(prev => Math.min(subjectFlashcards.length - 1, prev + 1))}
                        disabled={flashcardIndex === subjectFlashcards.length - 1}
                      >
                        Next
                      </Button>
                    </div>
                  </>
                ) : (
                  <EmptyState icon={LibraryBig} title="No flashcards available" description="This subject doesn't have any flashcards yet." />
                )}
              </div>
            )}

            {/* MCQS TAB */}
            {activeTab === 'mcqs' && (
              <div className="space-y-6">
                {subjectMCQs.length > 0 ? (
                  <>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-black/20 border border-white/5 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-foreground">{subjectMCQs.length}</div>
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">Total</div>
                      </div>
                      <div className="bg-black/20 border border-white/5 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-primary">0</div>
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">Answered</div>
                      </div>
                      <div className="bg-black/20 border border-white/5 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-emerald-500">0%</div>
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">Accuracy</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {subjectMCQs.map((mcq) => (
                        <MCQCard key={mcq.id} question={mcq} />
                      ))}
                    </div>
                  </>
                ) : (
                  <EmptyState icon={HelpCircle} title="No MCQs available" description="Check back later for practice questions." />
                )}
              </div>
            )}

            {/* CASES TAB */}
            {activeTab === 'cases' && (
              <div>
                {subjectCases.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {subjectCases.map(c => <ClinicalCaseCard key={c.id} clinicalCase={c} />)}
                  </div>
                ) : (
                  <EmptyState icon={Stethoscope} title="No clinical cases" description="There are no case studies available for this subject yet." />
                )}
              </div>
            )}

            {/* VIDEOS TAB */}
            {activeTab === 'videos' && (
              <div>
                {subjectVideos.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subjectVideos.map(v => <VideoCard key={v.id} video={v} />)}
                  </div>
                ) : (
                  <EmptyState icon={Video} title="No videos available" description="Video lectures for this subject are currently in production." />
                )}
              </div>
            )}

            {/* DOWNLOADS TAB */}
            {activeTab === 'downloads' && (
              <div>
                {subjectDownloads.length > 0 ? (
                  <div className="space-y-3">
                    {subjectDownloads.map(d => <DownloadCard key={d.id} item={d} />)}
                  </div>
                ) : (
                  <EmptyState icon={Download} title="No downloads" description="There are no supplementary materials available for download." />
                )}
              </div>
            )}

            {/* BOOKMARKS TAB */}
            {activeTab === 'bookmarks' && (
              <div>
                {subjectBookmarks.length > 0 ? (
                  <div className="space-y-2">
                    {subjectBookmarks.map(b => <BookmarkRow key={b.id} bookmark={b} />)}
                  </div>
                ) : (
                  <EmptyState icon={BookmarkIcon} title="No bookmarks" description="Items you bookmark across this subject will appear here for quick access." />
                )}
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Helper Empty State component
function EmptyState({ icon: Icon, title, description, actionLabel }: { icon: any, title: string, description: string, actionLabel?: string }) {
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