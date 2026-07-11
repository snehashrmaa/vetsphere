import { SubjectClinicalCase } from '@/types';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { ArrowRight, Dog, Cat, GitMerge, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ClinicalCaseCardProps {
  clinicalCase: SubjectClinicalCase;
}

export default function ClinicalCaseCard({ clinicalCase }: ClinicalCaseCardProps) {
  // Try to pick an icon based on species string
  const getIcon = () => {
    const s = clinicalCase.species.toLowerCase();
    if (s.includes('canine') || s.includes('dog')) return <Dog className="w-5 h-5" />;
    if (s.includes('feline') || s.includes('cat')) return <Cat className="w-5 h-5" />;
    if (s.includes('equine') || s.includes('horse')) return <GitMerge className="w-5 h-5" />; // fallback
    return <FileText className="w-5 h-5" />;
  };

  return (
    <GlassCard hoverEffect className="flex flex-col h-full border-l-4 border-l-primary group">
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            {getIcon()}
          </div>
          <span className={cn(
            "px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider",
            clinicalCase.difficulty === 'Easy' ? "bg-emerald-500/20 text-emerald-400" :
            clinicalCase.difficulty === 'Medium' ? "bg-amber-500/20 text-amber-400" :
            "bg-rose-500/20 text-rose-400"
          )}>
            {clinicalCase.difficulty}
          </span>
        </div>

        <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
          {clinicalCase.title}
        </h3>
        <p className="text-sm font-medium text-primary mb-4">
          {clinicalCase.species} • {clinicalCase.signalment}
        </p>

        <div className="bg-black/20 rounded-lg p-3 border border-white/5 mb-4">
          <p className="text-sm text-muted-foreground line-clamp-3">
            <span className="font-semibold text-foreground mr-1">Presentation:</span> 
            {clinicalCase.presentation}
          </p>
        </div>

        <div className="mt-auto">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Learning Objectives</h4>
          <ul className="space-y-1 mb-6">
            {clinicalCase.learningObjectives.slice(0, 2).map((obj, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start">
                <span className="text-primary mr-2 mt-0.5">•</span>
                <span className="line-clamp-1">{obj}</span>
              </li>
            ))}
            {clinicalCase.learningObjectives.length > 2 && (
              <li className="text-xs text-muted-foreground italic pl-3">
                + {clinicalCase.learningObjectives.length - 2} more...
              </li>
            )}
          </ul>

          <Button variant="outline" className="w-full justify-between">
            Open Case Study
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </GlassCard>
  );
}