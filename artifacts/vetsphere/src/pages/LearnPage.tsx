import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Search, Filter, PlayCircle } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import SubjectCard from '@/components/SubjectCard';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { courses } from '@/lib/mockData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const tabs = ['All', 'Core', 'Clinical', 'Surgery', 'Pathology'];

export default function LearnPage() {
  const [activeTab, setActiveTab] = React.useState('All');

  // Generate more mock courses to fill out the page
  const displayCourses = [
    ...courses,
    { id: '5', title: 'Cardiology', progress: 0, totalLessons: 18, completedLessons: 0, category: 'Clinical', icon: 'Stethoscope' },
    { id: '6', title: 'Neurology', progress: 45, totalLessons: 22, completedLessons: 10, category: 'Clinical', icon: 'BookOpen' },
    { id: '7', title: 'Microbiology', progress: 80, totalLessons: 30, completedLessons: 24, category: 'Core', icon: 'Microscope' },
    { id: '8', title: 'Toxicology', progress: 15, totalLessons: 15, completedLessons: 2, category: 'Core', icon: 'Pill' },
  ];

  const filteredCourses = activeTab === 'All' 
    ? displayCourses 
    : displayCourses.filter(c => c.category === activeTab || c.title.includes(activeTab));

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight mb-2">Learning Hub</h1>
          <p className="text-muted-foreground">Master subjects at your own pace.</p>
        </div>
        <div className="flex w-full md:w-auto gap-3">
          <SearchBar placeholder="Search courses..." className="bg-card w-full md:w-64" />
          <Button variant="outline" size="icon" className="shrink-0">
            <Filter size={18} />
          </Button>
        </div>
      </motion.div>

      {/* Featured Banner */}
      <motion.div variants={itemVariants}>
        <GlassCard className="p-8 relative overflow-hidden bg-gradient-to-r from-primary/20 to-accent/10 border-primary/20">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-background/80 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-4">
              Featured Course
            </div>
            <h2 className="text-3xl font-bold font-heading text-foreground mb-3">Advanced Equine Surgery</h2>
            <p className="text-muted-foreground mb-6 line-clamp-2">
              A comprehensive deep dive into common and complex equine surgical procedures, featuring 3D interactive models and real case footage.
            </p>
            <Button variant="primary" icon={<PlayCircle size={18} />}>
              Start Course
            </Button>
          </div>
        </GlassCard>
      </motion.div>

      {/* Tabs */}
      <motion.div variants={itemVariants} className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide gap-2">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab 
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Course Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <SubjectCard key={course.id} {...course} className="w-full min-w-0" />
        ))}
      </motion.div>
    </motion.div>
  );
}
