import { motion, Variants } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import Button from '@/components/Button';
import PracticeCard from '@/features/practice/components/PracticeCard';
import { practiceCategories } from '@/data/practiceCategories';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
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

export default function PracticePage() {
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
          Practice
        </h1>

        <div className="flex items-center gap-3">
          <SearchBar
            placeholder="Search categories..."
            containerClassName="w-full sm:w-64"
          />
          <Button variant="outline" size="icon" className="shrink-0">
            <SlidersHorizontal size={18} />
          </Button>
        </div>
      </motion.div>

      {/* Category grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
      >
        {practiceCategories.map((category) => (
          <motion.div key={category.id} variants={cardVariants}>
            <PracticeCard category={category} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
