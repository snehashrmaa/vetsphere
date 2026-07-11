import { Chapter, Lesson } from '@/types';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import GlassCard from '@/components/GlassCard';
import LessonCard from './LessonCard';

interface ChapterCardProps {
  chapter: Chapter;
  lessons: Lesson[];
  defaultOpen?: boolean;
}

export default function ChapterCard({ chapter, lessons, defaultOpen = false }: ChapterCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  const completionPercentage = Math.round(
    (lessons.filter(l => l.isCompleted).length / Math.max(1, lessons.length)) * 100
  );

  return (
    <GlassCard className="overflow-hidden border border-white/5 bg-black/20">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-col shrink-0">
            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Ch</span>
            <span className="font-heading font-bold text-lg leading-none">{chapter.order}</span>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-lg">{chapter.title}</h4>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1 font-medium">
              <span>{chapter.lessonCount} Lessons</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>{chapter.duration}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex flex-col items-end gap-1.5 min-w-[100px]">
            <span className="text-xs font-semibold text-primary">{completionPercentage}%</span>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
          <ChevronDown className={cn("w-5 h-5 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180")} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-3 border-t border-white/5 space-y-1 bg-black/40">
              {lessons.length > 0 ? (
                lessons.map((lesson, idx) => (
                  <LessonCard key={lesson.id} lesson={lesson} isActive={idx === 0 && !chapter.isCompleted} />
                ))
              ) : (
                <div className="p-4 text-center text-sm text-muted-foreground italic">
                  Lessons coming soon...
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}