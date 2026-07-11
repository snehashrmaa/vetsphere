import { Lesson } from '@/types';
import { PlayCircle, BookOpen, HelpCircle, Stethoscope, Check, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';

interface LessonCardProps {
  lesson: Lesson;
  isActive?: boolean;
}

export default function LessonCard({ lesson, isActive }: LessonCardProps) {
  const getIcon = () => {
    switch (lesson.type) {
      case 'video': return <PlayCircle className="w-4 h-4" />;
      case 'reading': return <BookOpen className="w-4 h-4" />;
      case 'quiz': return <HelpCircle className="w-4 h-4" />;
      case 'case': return <Stethoscope className="w-4 h-4" />;
    }
  };

  const getColor = () => {
    switch (lesson.type) {
      case 'video': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'reading': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'quiz': return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      case 'case': return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
    }
  };

  const isLocked = false; // Mock - we can derive this from progress later

  return (
    <div className={cn(
      "flex items-center p-3 rounded-xl transition-all border",
      isActive ? "bg-white/10 border-white/20 shadow-sm" : "hover:bg-white/5 border-transparent",
      isLocked ? "opacity-60 grayscale" : "cursor-pointer"
    )}>
      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center border shrink-0", getColor())}>
        {getIcon()}
      </div>
      
      <div className="ml-4 flex-grow min-w-0">
        <h5 className="font-medium text-sm text-foreground truncate">{lesson.title}</h5>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{lesson.type}</span>
          <span className="text-[10px] text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{lesson.duration}</span>
        </div>
      </div>

      <div className="ml-4 shrink-0">
        {lesson.isCompleted ? (
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-4 h-4" />
          </div>
        ) : isLocked ? (
          <div className="w-8 h-8 rounded-full bg-white/5 text-muted-foreground flex items-center justify-center">
            <Lock className="w-4 h-4" />
          </div>
        ) : (
          <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-white/10 rounded-full">
            <PlayCircle className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}