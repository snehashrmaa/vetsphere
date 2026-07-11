import { MCQQuestion } from '@/types';
import { useState } from 'react';
import GlassCard from '@/components/GlassCard';
import { cn } from '@/lib/utils';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MCQCardProps {
  question: MCQQuestion;
  onAnswer?: (index: number) => void;
}

export default function MCQCard({ question, onAnswer }: MCQCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelectedIndex(index);
    setShowResult(true);
    if (onAnswer) onAnswer(index);
  };

  const optionLetters = ['A', 'B', 'C', 'D'];

  const getOptionStyles = (index: number) => {
    if (!showResult) {
      return selectedIndex === index 
        ? "border-primary bg-primary/10 text-primary-foreground" 
        : "border-white/10 bg-black/20 hover:bg-white/5 hover:border-white/20";
    }

    if (index === question.correctIndex) {
      return "border-emerald-500 bg-emerald-500/10 text-emerald-400";
    }

    if (selectedIndex === index && index !== question.correctIndex) {
      return "border-rose-500 bg-rose-500/10 text-rose-400";
    }

    return "border-white/5 bg-black/20 opacity-50";
  };

  return (
    <GlassCard className="p-6 md:p-8 relative overflow-hidden">
      <div className="flex justify-between items-start mb-6">
        <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-muted-foreground">
          {question.topic}
        </span>
        <span className={cn(
          "px-2.5 py-0.5 rounded-full text-xs font-bold",
          question.difficulty === 'Easy' ? "text-emerald-400 bg-emerald-500/10" :
          question.difficulty === 'Medium' ? "text-amber-400 bg-amber-500/10" :
          "text-rose-400 bg-rose-500/10"
        )}>
          {question.difficulty}
        </span>
      </div>

      <h3 className="text-xl font-heading font-medium mb-8 text-foreground leading-relaxed">
        {question.question}
      </h3>

      <div className="space-y-3">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            disabled={showResult}
            className={cn(
              "w-full flex items-center p-4 rounded-xl border text-left transition-all duration-200",
              getOptionStyles(idx)
            )}
          >
            <div className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mr-4 font-bold text-sm",
              showResult && idx === question.correctIndex ? "bg-emerald-500 text-white" :
              showResult && selectedIndex === idx ? "bg-rose-500 text-white" :
              "bg-white/10"
            )}>
              {showResult && idx === question.correctIndex ? <CheckCircle2 className="w-5 h-5" /> :
               showResult && selectedIndex === idx ? <XCircle className="w-5 h-5" /> :
               optionLetters[idx]}
            </div>
            <span className="font-medium">{option}</span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 24 }}
            className="overflow-hidden"
          >
            <div className={cn(
              "p-5 rounded-xl border flex items-start gap-4",
              selectedIndex === question.correctIndex 
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-100" 
                : "bg-primary/10 border-primary/20 text-primary-50"
            )}>
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 opacity-80" />
              <div>
                <h4 className="font-bold mb-1 opacity-90">Explanation</h4>
                <p className="text-sm opacity-80 leading-relaxed">{question.explanation}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}