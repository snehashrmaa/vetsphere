import { Flashcard } from '@/types';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { RotateCcw } from 'lucide-react';

interface FlashcardPreviewProps {
  card: Flashcard;
}

export default function FlashcardPreview({ card }: FlashcardPreviewProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset flip state when card changes
  useEffect(() => {
    setIsFlipped(false);
  }, [card.id]);

  const difficultyColors = {
    easy: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    medium: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    hard: "bg-rose-500/20 text-rose-400 border-rose-500/30"
  };

  return (
    <div className="perspective-1000 w-full max-w-2xl mx-auto h-[400px] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-card/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-8 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-2 flex-wrap">
              {card.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <span className={cn("px-3 py-1 rounded-full text-xs font-bold border capitalize", difficultyColors[card.difficulty])}>
              {card.difficulty}
            </span>
          </div>
          
          <div className="flex-grow flex items-center justify-center text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-medium text-foreground leading-relaxed">
              {card.front}
            </h3>
          </div>

          <div className="flex justify-center mt-6 text-muted-foreground">
            <div className="flex items-center gap-2 text-sm font-medium opacity-60">
              <RotateCcw className="w-4 h-4" />
              Click to flip
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 rounded-2xl shadow-xl p-8 flex flex-col rotate-y-180">
          <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
            <span className="text-sm font-bold text-primary tracking-widest uppercase">Answer</span>
            <RotateCcw className="w-4 h-4 text-muted-foreground opacity-60" />
          </div>
          
          <div className="flex-grow flex items-center justify-center text-center">
            <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
              {card.back}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}