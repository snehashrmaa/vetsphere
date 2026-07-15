import { motion, Variants } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import Button from '@/components/Button';
import SubjectCard from '@/features/learn/components/SubjectCard';
import { subjects } from '@/lib/learnMockData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 280, damping: 24 },
  },
};

export default function LearnPage() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight">
          Learn
        </h1>

        <div className="flex items-center gap-3">
          <SearchBar
            placeholder="Search subjects..."
            containerClassName="w-full sm:w-64"
          />
          <Button variant="outline" size="icon" className="shrink-0">
            <SlidersHorizontal size={18} />
          </Button>
        </div>
      </motion.div>

      {/* Subject grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
      >
        {subjects.map((subject) => (
          <motion.div key={subject.id} variants={cardVariants}>
            <SubjectCard subject={subject} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
