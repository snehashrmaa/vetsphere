import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { ElementType } from 'react';
import {
  ChevronLeft, MessageSquare, Heart, TreePine, FlaskConical,
  CalendarDays, Briefcase, Plus,
} from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import CreatePostModal from '@/features/community/components/CreatePostModal';
import { getSpaceBySlug, SUBJECT_COLORS } from '@/data/communitySpaces';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<string, ElementType> = {
  MessageSquare, Heart, TreePine, FlaskConical,
  CalendarDays, Briefcase,
};

// ─── Not Found ────────────────────────────────────────────────────────────────

function SpaceNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-5 text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
        <MessageSquare size={28} className="text-rose-400" />
      </div>
      <div>
        <h2 className="text-xl font-heading font-bold text-foreground mb-2">Space Not Found</h2>
        <p className="text-sm text-muted-foreground max-w-xs">
          The community space you're looking for doesn't exist. Browse all spaces below.
        </p>
      </div>
      <Button variant="primary" onClick={() => navigate('/community')}>
        Browse Community
      </Button>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function CommunitySpacePage() {
  const { spaceSlug } = useParams<{ spaceSlug: string }>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const space = getSpaceBySlug(spaceSlug ?? '');

  if (!space) return <SpaceNotFound />;

  const color = SUBJECT_COLORS[space.color] ?? SUBJECT_COLORS.blue;
  const Icon = ICON_MAP[space.icon] ?? MessageSquare;

  return (
    <>
      <div className="space-y-6 pb-24">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        >
          <Button
            variant="ghost"
            size="sm"
            icon={<ChevronLeft size={16} />}
            onClick={() => navigate('/community')}
          >
            Back to Community
          </Button>
        </motion.div>

        {/* Banner / Header */}
        <GlassCard animated hoverEffect={false}>
          {/* Gradient banner */}
          <div
            className={cn(
              'relative h-36 md:h-44 flex items-end bg-gradient-to-br',
              color.from,
              color.to,
            )}
          >
            {/* Decorative grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />

            {/* Icon badge — sits at the bottom edge */}
            <div className="absolute bottom-0 left-6 translate-y-1/2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22, delay: 0.15 }}
                className={cn(
                  'w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg',
                  'bg-background/80 backdrop-blur-md border border-white/15',
                  color.text,
                )}
              >
                <Icon size={26} />
              </motion.div>
            </div>
          </div>

          {/* Space info */}
          <div className="pt-10 pb-5 px-6">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24, delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold font-heading text-foreground tracking-tight"
            >
              {space.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24, delay: 0.17 }}
              className="text-sm text-muted-foreground mt-1"
            >
              {space.description}
            </motion.p>
          </div>
        </GlassCard>

        {/* Empty Feed */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 24, delay: 0.2 }}
        >
          <GlassCard hoverEffect={false}>
            <div className="flex flex-col items-center justify-center gap-4 py-20 px-6 text-center">
              <div
                className={cn(
                  'w-14 h-14 rounded-2xl flex items-center justify-center',
                  'bg-background/60 border border-dashed border-white/15',
                  color.text,
                )}
              >
                <Icon size={24} className="opacity-60" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {space.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  This community is under development.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22, delay: 0.35 }}
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
