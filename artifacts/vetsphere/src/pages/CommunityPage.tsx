import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { SlidersHorizontal, Plus } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import Button from '@/components/Button';
import CommunityCard from '@/features/community/components/CommunityCard';
import CreatePostModal from '@/features/community/components/CreatePostModal';
import { communitySpaces } from '@/data/communitySpaces';

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

export default function CommunityPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="space-y-8 pb-24">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 24 }}
          className="flex flex-col sm:flex-row sm:items-start justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight">
              Community
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Connect, collaborate and grow with the veterinary community.
            </p>
          </div>

          {/* Search + Filter */}
          <div className="flex items-center gap-2 shrink-0">
            <SearchBar
              placeholder="Search spaces..."
              containerClassName="w-full sm:w-56"
            />
            <Button
              variant="outline"
              size="icon"
              title="Filter"
              icon={<SlidersHorizontal size={16} />}
            />
          </div>
        </motion.div>

        {/* Community spaces grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-5"
        >
          {communitySpaces.map((space) => (
            <motion.div key={space.id} variants={cardVariants}>
              <CommunityCard space={space} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22, delay: 0.3 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm text-white bg-gradient-to-r from-primary to-emerald-400 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
      >
        <Plus size={17} strokeWidth={2.5} />
        Create Post
      </motion.button>

      {/* Create Post Modal */}
      <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
