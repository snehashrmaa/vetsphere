import GlassCard from '@/components/GlassCard';
import { Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StudyStreakCard() {
  const days = Array.from({ length: 14 }, (_, i) => {
    const isMissed = [3, 8].includes(i); // Mock missed days
    const isToday = i === 13;
    return { isMissed, isToday };
  });

  return (
    <GlassCard className="p-6 h-full flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 bg-amber-500/20 text-amber-500 rounded-xl relative">
          <Flame className="w-6 h-6" />
          <div className="absolute inset-0 bg-amber-500/30 blur-md rounded-xl" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-2xl tracking-tight text-foreground">14-day streak</h3>
          <p className="text-sm font-medium text-amber-400/80">Keep it going!</p>
        </div>
      </div>

      <div className="flex gap-1.5 my-4">
        {days.map((day, i) => (
          <div
            key={i}
            className={cn(
              "h-2 flex-1 rounded-full",
              day.isToday ? "bg-primary animate-pulse" :
              day.isMissed ? "bg-white/10" : "bg-primary/80"
            )}
          />
        ))}
      </div>

      <div className="flex justify-between items-center text-xs text-muted-foreground mt-2 font-medium">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" /> Best: 21 days
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" /> Total: 156 days
        </span>
      </div>
    </GlassCard>
  );
}