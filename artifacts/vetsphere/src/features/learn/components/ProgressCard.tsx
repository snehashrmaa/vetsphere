import { Subject } from '@/types';
import GlassCard from '@/components/GlassCard';
import { Clock, CheckCircle2, PlayCircle, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { cn } from '@/lib/utils';
import { SUBJECT_COLORS } from '@/lib/learnMockData';

interface ProgressCardProps {
  variant: 'continue-learning' | 'weekly-progress';
  subjects?: Subject[];
}

export default function ProgressCard({ variant, subjects = [] }: ProgressCardProps) {
  if (variant === 'continue-learning') {
    const inProgress = subjects.filter(s => s.progress > 0 && s.progress < 100).slice(0, 3);
    
    return (
      <GlassCard className="h-full flex flex-col p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-primary/20 text-primary rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg">Continue Learning</h3>
            <p className="text-sm text-muted-foreground">Pick up where you left off</p>
          </div>
        </div>

        <div className="space-y-4 flex-grow">
          {inProgress.map(subject => {
            const color = SUBJECT_COLORS[subject.colorKey as keyof typeof SUBJECT_COLORS] || SUBJECT_COLORS.blue;
            return (
              <div key={subject.id} className="flex items-center gap-4 group">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br", color.from, color.to, color.text)}>
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-end mb-1.5">
                    <h4 className="font-medium text-sm truncate pr-4">{subject.title}</h4>
                    <span className="text-xs font-semibold text-primary">{subject.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                </div>
                <Link to={`/learn/${subject.id}`} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10">
                    <PlayCircle className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            );
          })}
          {inProgress.length === 0 && (
            <div className="text-center py-8 text-muted-foreground text-sm">
              No subjects in progress. Start exploring!
            </div>
          )}
        </div>
      </GlassCard>
    );
  }

  // variant === 'weekly-progress'
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const activity = [45, 30, 60, 0, 45, 50, 110]; // Mock minutes
  const maxActivity = Math.max(...activity);

  return (
    <GlassCard className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h3 className="font-heading font-semibold text-lg">Weekly Progress</h3>
          <p className="text-sm text-muted-foreground">You've studied 340 minutes this week</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium">
          <CheckCircle2 className="w-4 h-4" />
          <span>On track</span>
        </div>
      </div>

      <div className="flex justify-between items-end gap-2 h-32 relative pt-6">
        {days.map((day, i) => {
          const isToday = i === 5; // Sat
          const isFuture = i > 5;
          const height = isFuture ? 0 : `${(activity[i] / maxActivity) * 100}%`;
          
          return (
            <div key={day} className="flex flex-col items-center gap-3 flex-1 group">
              <div className="relative w-full h-full flex items-end justify-center">
                <div 
                  className={cn(
                    "w-full max-w-[2rem] rounded-t-sm transition-all duration-500",
                    isToday ? "bg-primary" : isFuture ? "bg-white/5" : "bg-white/10 group-hover:bg-white/20"
                  )}
                  style={{ height: isFuture ? '4px' : height, minHeight: '4px' }}
                />
                {!isFuture && activity[i] > 0 && (
                  <div className="absolute -top-8 bg-black/80 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {activity[i]} min
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  isToday ? "bg-primary shadow-[0_0_10px_rgba(16,185,129,0.8)]" : 
                  isFuture ? "bg-white/10" : 
                  activity[i] > 0 ? "bg-emerald-500/50" : "bg-white/20"
                )} />
                <span className={cn(
                  "text-xs font-medium",
                  isToday ? "text-primary" : "text-muted-foreground"
                )}>{day}</span>
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}