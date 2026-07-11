import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Search, Library } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import SubjectCard from '@/features/learn/components/SubjectCard';
import ProgressCard from '@/features/learn/components/ProgressCard';
import StudyStreakCard from '@/features/learn/components/StudyStreakCard';
import { subjects } from '@/lib/learnMockData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const categories = ['All', 'Core', 'Clinical', 'Applied', 'Professional'];

export default function LearnPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Calculate top stats
  const subjectsInProgress = subjects.filter(s => s.progress > 0 && s.progress < 100).length;
  const totalLessonsCompleted = subjects.reduce((sum, s) => sum + s.completedLessons, 0);
  const avgProgress = Math.round(subjects.reduce((sum, s) => sum + s.progress, 0) / subjects.length);

  // Filter subjects
  const filteredSubjects = subjects.filter(subject => {
    const matchesCategory = activeTab === 'All' || subject.category === activeTab;
    const matchesSearch = subject.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          subject.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort: Favorited first, then by progress (highest first)
  const sortedSubjects = [...filteredSubjects].sort((a, b) => {
    if (a.isFavorited && !b.isFavorited) return -1;
    if (!a.isFavorited && b.isFavorited) return 1;
    return b.progress - a.progress;
  });

  return (
    <motion.div 
      className="space-y-8 pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight mb-2">Learning Hub</h1>
          <p className="text-muted-foreground flex items-center gap-2">
            <Library className="w-4 h-4" /> 
            <span>{subjects.length} subjects · Master veterinary medicine at your own pace</span>
          </p>
        </div>
      </motion.div>

      {/* Stats Row */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Subjects In Progress", value: subjectsInProgress, trend: "+2 this week" },
          { label: "Lessons Completed", value: totalLessonsCompleted, trend: "+14 this week" },
          { label: "Avg. Progress", value: `${avgProgress}%`, trend: "+5% this week" }
        ].map((stat, i) => (
          <GlassCard key={i} className="p-5 border-white/5 bg-black/20 flex flex-col justify-between">
            <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
            <div className="flex items-end justify-between mt-2">
              <span className="text-3xl font-heading font-bold">{stat.value}</span>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">{stat.trend}</span>
            </div>
          </GlassCard>
        ))}
      </motion.div>

      {/* Dashboard Top Row */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProgressCard variant="continue-learning" subjects={subjects} />
        </div>
        <div>
          <StudyStreakCard />
        </div>
      </motion.div>

      {/* Weekly Progress */}
      <motion.div variants={itemVariants}>
        <ProgressCard variant="weekly-progress" />
      </motion.div>

      {/* Filters and Search */}
      <motion.div variants={itemVariants} className="sticky top-0 z-20 py-4 bg-background/80 backdrop-blur-xl border-b border-white/5 -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex overflow-x-auto pb-2 -mb-2 md:pb-0 scrollbar-hide gap-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border ${
                  activeTab === cat 
                    ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20' 
                    : 'bg-black/20 text-muted-foreground border-white/10 hover:bg-white/5 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex w-full md:w-auto gap-3 shrink-0">
            <SearchBar 
              placeholder="Search subjects..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-black/20 border-white/10 w-full md:w-[280px]" 
            />
          </div>
        </div>
      </motion.div>

      {/* Subject Grid */}
      <motion.div 
        variants={containerVariants} 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {sortedSubjects.length > 0 ? (
          sortedSubjects.map((subject) => (
            <motion.div key={subject.id} variants={itemVariants} layoutId={subject.id}>
              <SubjectCard subject={subject} className="h-full" />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-medium text-foreground mb-2">No subjects found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
            <Button variant="outline" className="mt-6" onClick={() => { setSearchQuery(''); setActiveTab('All'); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}