import React from 'react';
import { motion } from 'framer-motion';
import { Target, Clock, Trophy, Play, Info } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import StatCard from '@/components/StatCard';
import { practiceSets } from '@/lib/mockData';
import { cn } from '@/lib/utils';

export default function PracticePage() {
  const getDifficultyColor = (diff: string) => {
    switch(diff) {
      case 'Easy': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Medium': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'Hard': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-white/5 text-muted-foreground';
    }
  };

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div>
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight mb-2">Practice Exams</h1>
        <p className="text-muted-foreground">Test your knowledge under timed conditions.</p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard icon={<Target />} label="Total Attempted" value="42" />
        <StatCard icon={<Trophy />} label="Average Score" value="84%" trend={3} />
        <StatCard icon={<Clock />} label="Time Spent" value="18h" />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold font-heading">Recommended Sets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceSets.map((set, i) => (
            <motion.div 
              key={set.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard hoverEffect className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className={cn("px-2.5 py-1 rounded-md text-xs font-medium border", getDifficultyColor(set.difficulty))}>
                    {set.difficulty}
                  </span>
                  <div className="flex gap-2">
                    {set.tags.map(tag => (
                      <span key={tag} className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold font-heading mb-2">{set.title}</h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 mt-auto">
                  <span className="flex items-center gap-1.5"><Info size={14} /> {set.questionsCount} Qs</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {set.timeLimit}</span>
                </div>
                
                <Button variant="secondary" className="w-full group">
                  Start Practice
                  <Play size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
