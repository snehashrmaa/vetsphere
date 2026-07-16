import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Sparkles,
  Plus,
  MessageSquare,
  Send,
  Mic,
  Paperclip,
  BookOpen,
  FileText,
  Stethoscope,
  Pill,
  CalendarDays,
  Bot,
} from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { cn } from '@/lib/utils';

// ─── Quick Actions ────────────────────────────────────────────────────────────

interface QuickAction {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
  borderColor: string;
  prompt: string;
}

const QUICK_ACTIONS: QuickAction[] = [
  {
    id: 'explain',
    label: 'Explain a Topic',
    description: 'Break down complex concepts',
    icon: BookOpen,
    gradientFrom: 'from-emerald-500/15',
    gradientTo: 'to-emerald-600/5',
    iconColor: 'text-emerald-400',
    borderColor: 'hover:border-emerald-500/30',
    prompt: 'Explain the concept of ',
  },
  {
    id: 'summarize',
    label: 'Summarize Notes',
    description: 'Condense study material',
    icon: FileText,
    gradientFrom: 'from-cyan-500/15',
    gradientTo: 'to-cyan-600/5',
    iconColor: 'text-cyan-400',
    borderColor: 'hover:border-cyan-500/30',
    prompt: 'Summarize the key points about ',
  },
  {
    id: 'clinical',
    label: 'Clinical Discussion',
    description: 'Work through a case',
    icon: Stethoscope,
    gradientFrom: 'from-violet-500/15',
    gradientTo: 'to-violet-600/5',
    iconColor: 'text-violet-400',
    borderColor: 'hover:border-violet-500/30',
    prompt: "Let's discuss a clinical case involving ",
  },
  {
    id: 'drug',
    label: 'Drug Information',
    description: 'Dosage, interactions & mechanisms',
    icon: Pill,
    gradientFrom: 'from-rose-500/15',
    gradientTo: 'to-rose-600/5',
    iconColor: 'text-rose-400',
    borderColor: 'hover:border-rose-500/30',
    prompt: 'What is the dosage and mechanism of action for ',
  },
  {
    id: 'plan',
    label: 'Study Plan',
    description: 'Personalised revision schedule',
    icon: CalendarDays,
    gradientFrom: 'from-amber-500/15',
    gradientTo: 'to-amber-600/5',
    iconColor: 'text-amber-400',
    borderColor: 'hover:border-amber-500/30',
    prompt: 'Create a study plan for learning ',
  },
];

// ─── Animations ───────────────────────────────────────────────────────────────

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 26 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 26 },
  },
};

const welcomeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 280, damping: 24, delay: 0.15 },
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function LeftPanel({ onNewChat }: { onNewChat: () => void }) {
  return (
    <motion.div variants={panelVariants} className="hidden lg:flex flex-col w-60 shrink-0">
      <GlassCard className="flex-1 flex flex-col p-4 gap-4" hoverEffect={false}>
        {/* New Chat */}
        <Button
          variant="primary"
          size="md"
          icon={<Plus size={16} />}
          className="w-full justify-center"
          onClick={onNewChat}
        >
          New Chat
        </Button>

        {/* Conversation History */}
        <div className="flex-1 flex flex-col min-h-0">
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">
            History
          </p>

          {/* Empty state */}
          <div className="flex-1 flex flex-col items-center justify-center gap-2 py-8 px-2 rounded-xl border border-dashed border-white/8">
            <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center">
              <MessageSquare size={17} className="text-muted-foreground/60" />
            </div>
            <p className="text-xs text-muted-foreground/70 text-center leading-snug">
              Your conversations will appear here
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function QuickActionCard({
  action,
  onSelect,
}: {
  action: QuickAction;
  onSelect: (prompt: string) => void;
}) {
  const Icon = action.icon;
  return (
    <motion.button
      variants={cardVariants}
      whileHover={{ scale: 1.025, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onSelect(action.prompt)}
      className={cn(
        'w-full text-left p-3.5 rounded-xl border border-white/8 bg-gradient-to-br',
        action.gradientFrom,
        action.gradientTo,
        action.borderColor,
        'transition-colors duration-200 group'
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            'mt-0.5 shrink-0 w-7 h-7 rounded-lg bg-black/20 flex items-center justify-center',
            action.iconColor
          )}
        >
          <Icon size={14} />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground leading-tight">{action.label}</p>
          <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
            {action.description}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

function RightPanel({ onActionSelect }: { onActionSelect: (prompt: string) => void }) {
  return (
    <motion.div variants={panelVariants} className="hidden xl:flex flex-col w-56 shrink-0">
      <GlassCard className="flex-1 flex flex-col p-4 gap-3" hoverEffect={false}>
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-1">
          Quick Actions
        </p>
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-2.5"
        >
          {QUICK_ACTIONS.map((action) => (
            <QuickActionCard key={action.id} action={action} onSelect={onActionSelect} />
          ))}
        </motion.div>
      </GlassCard>
    </motion.div>
  );
}

function WelcomeState() {
  return (
    <motion.div
      variants={welcomeVariants}
      className="flex-1 flex flex-col items-center justify-center gap-5 px-6 py-10 text-center"
    >
      {/* Icon */}
      <div className="relative">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/15 to-accent/20 border border-primary/20 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.12)]">
          <Bot size={38} className="text-primary" />
        </div>
        <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
          <Sparkles size={12} className="text-white" />
        </div>
      </div>

      {/* Heading */}
      <div className="space-y-2 max-w-sm">
        <h2 className="text-xl font-bold font-heading text-foreground tracking-tight">
          Welcome to VetSphere AI
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Ask veterinary questions, study concepts, generate summaries, discuss clinical cases,
          and learn interactively.
        </p>
      </div>
    </motion.div>
  );
}

interface ChatInputProps {
  value: string;
  onChange: (val: string) => void;
  onSend: () => void;
}

function ChatInput({ value, onChange, onSend }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  const canSend = value.trim().length > 0;

  return (
    <div className="shrink-0 p-3 md:p-4 border-t border-white/8 bg-background/30 backdrop-blur-sm">
      <div className="relative flex flex-col gap-2">
        {/* Textarea wrapper */}
        <div className="flex items-end gap-2 bg-input/40 border border-white/10 rounded-2xl px-4 py-3 focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/10 transition-all duration-200">
          {/* Attachment (UI only) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0 mb-0.5 w-8 h-8 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/8 transition-colors"
            type="button"
            title="Attach file (coming soon)"
          >
            <Paperclip size={17} />
          </motion.button>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            rows={1}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything about veterinary medicine..."
            className="flex-1 bg-transparent resize-none text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none min-h-[28px] max-h-40 leading-relaxed py-0.5"
          />

          {/* Voice (UI only) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0 mb-0.5 w-8 h-8 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/8 transition-colors"
            type="button"
            title="Voice input (coming soon)"
          >
            <Mic size={17} />
          </motion.button>

          {/* Send */}
          <motion.button
            whileHover={{ scale: canSend ? 1.05 : 1 }}
            whileTap={{ scale: canSend ? 0.95 : 1 }}
            onClick={onSend}
            disabled={!canSend}
            className={cn(
              'shrink-0 mb-0.5 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200',
              canSend
                ? 'bg-gradient-to-br from-primary to-emerald-400 text-white shadow-md shadow-primary/25 hover:shadow-primary/40'
                : 'bg-white/5 text-muted-foreground/40 cursor-not-allowed'
            )}
            type="button"
          >
            <Send size={15} className={canSend ? '-ml-0.5' : ''} />
          </motion.button>
        </div>

        <p className="text-[10px] text-muted-foreground/50 text-center">
          Press <kbd className="px-1 py-0.5 rounded bg-white/8 text-[10px]">Enter</kbd> to send ·{' '}
          <kbd className="px-1 py-0.5 rounded bg-white/8 text-[10px]">Shift+Enter</kbd> for new line
        </p>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AIPage() {
  const [input, setInput] = useState('');

  const handleActionSelect = useCallback((prompt: string) => {
    setInput(prompt);
  }, []);

  const handleSend = useCallback(() => {
    // No AI integration — clear input only
    if (input.trim()) setInput('');
  }, [input]);

  const handleNewChat = useCallback(() => {
    setInput('');
  }, []);

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)]"
    >
      {/* ── Top Section ─────────────────────────────────────────────────── */}
      <motion.div
        variants={panelVariants}
        className="shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
      >
        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight">
                AI Mentor
              </h1>
              {/* Preview badge */}
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/25 text-primary backdrop-blur-sm">
                <Sparkles size={10} />
                Preview
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              Your intelligent veterinary learning companion.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── Three-Panel Layout ───────────────────────────────────────────── */}
      <div className="flex-1 flex gap-4 min-h-0">
        {/* Left Panel */}
        <LeftPanel onNewChat={handleNewChat} />

        {/* Main Chat Area */}
        <motion.div variants={panelVariants} className="flex-1 min-w-0 flex flex-col">
          <GlassCard
            className="flex-1 flex flex-col overflow-hidden min-h-0"
            hoverEffect={false}
          >
            {/* Welcome / empty state */}
            <WelcomeState />

            {/* Chat input — always visible */}
            <ChatInput value={input} onChange={setInput} onSend={handleSend} />
          </GlassCard>
        </motion.div>

        {/* Right Panel */}
        <RightPanel onActionSelect={handleActionSelect} />
      </div>
    </motion.div>
  );
}
