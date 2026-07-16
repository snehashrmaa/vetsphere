import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreatePostModal({ isOpen, onClose }: CreatePostModalProps) {
  const [text, setText] = useState('');

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Reset text when closed
  useEffect(() => {
    if (!isOpen) setText('');
  }, [isOpen]);

  const handleCancel = () => {
    setText('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <GlassCard
              className="w-full max-w-lg pointer-events-auto shadow-2xl shadow-black/40"
              hoverEffect={false}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
                <h2 className="font-heading font-semibold text-foreground">
                  Create a Post
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCancel}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/8 transition-colors"
                >
                  <X size={17} />
                </motion.button>
              </div>

              {/* Body */}
              <div className="p-5">
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Share a question, case, insight, or discussion topic with the community..."
                  rows={5}
                  className="w-full bg-input/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/30 resize-none transition-all leading-relaxed"
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end gap-3 px-5 pb-5">
                <Button variant="ghost" size="sm" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  icon={<Send size={13} />}
                  iconPosition="right"
                  onClick={handleCancel}
                >
                  Post
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
