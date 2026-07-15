import { motion, Variants } from 'framer-motion';
import SearchBar from '@/components/SearchBar';
import ClinicToolCard from '@/features/clinic/components/ClinicToolCard';
import { clinicTools } from '@/data/clinicTools';

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

export default function ClinicPage() {
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
          Clinic
        </h1>

        <SearchBar
          placeholder="Search tools..."
          containerClassName="w-full sm:w-64"
        />
      </motion.div>

      {/* Tools grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
      >
        {clinicTools.map((tool) => (
          <motion.div key={tool.id} variants={cardVariants}>
            <ClinicToolCard tool={tool} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
