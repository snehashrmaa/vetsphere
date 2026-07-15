import { motion } from 'framer-motion';
import { Target, Clock, Trophy } from 'lucide-react';
import StatCard from '@/components/StatCard';
import SearchBar from '@/components/SearchBar';
import Button from '@/components/Button';

export default function PracticePage() {
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
        <StatCard icon={<Target />} label="Total Attempted" value="0" />
        <StatCard icon={<Trophy />} label="Average Score" value="—" />
        <StatCard icon={<Clock />} label="Time Spent" value="0h" />
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl font-semibold font-heading">Recommended Sets</h2>
          <SearchBar placeholder="Search practice sets..." containerClassName="sm:w-72" />
        </div>

        <div className="flex flex-col items-center justify-center py-24 px-4 text-center bg-black/10 rounded-2xl border border-dashed border-white/10">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
            <Target className="w-8 h-8 text-muted-foreground opacity-50" />
          </div>
          <h3 className="text-xl font-heading font-medium text-foreground mb-2">No Practice Sets Yet</h3>
          <p className="text-muted-foreground max-w-sm">Practice exam sets will appear here once they are published.</p>
        </div>
      </div>
    </motion.div>
  );
}
