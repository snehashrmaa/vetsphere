import React from 'react';
import GlassCard from './GlassCard';
import { cn } from '@/lib/utils';
import { ArrowRight, BookOpen, Scissors, Microscope, Bone, Pill } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface SubjectCardProps {
  id: string;
  title: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  icon: string;
  className?: string;
}

const getIcon = (name: string) => {
  switch (name) {
    case 'Pill': return <Pill size={24} />;
    case 'Scissors': return <Scissors size={24} />;
    case 'Microscope': return <Microscope size={24} />;
    case 'Bone': return <Bone size={24} />;
    default: return <BookOpen size={24} />;
  }
};

const getGradient = (title: string) => {
  if (title.includes('Pharma')) return 'from-blue-500/20 to-cyan-500/5 text-blue-400';
  if (title.includes('Surg')) return 'from-rose-500/20 to-orange-500/5 text-rose-400';
  if (title.includes('Path')) return 'from-purple-500/20 to-fuchsia-500/5 text-purple-400';
  return 'from-emerald-500/20 to-teal-500/5 text-emerald-400';
};

export default function SubjectCard({ 
  id, title, progress, totalLessons, completedLessons, icon, className 
}: SubjectCardProps) {
  const gradientClass = getGradient(title);

  return (
    <GlassCard animated hoverEffect className={cn("flex flex-col min-w-[280px]", className)}>
      <div className={cn("h-24 p-5 flex items-start justify-between bg-gradient-to-br", gradientClass)}>
        <div className="p-3 bg-background/50 rounded-xl backdrop-blur-sm">
          {getIcon(icon)}
        </div>
        <div className="bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
          {completedLessons}/{totalLessons} Lessons
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-heading font-semibold text-lg text-foreground mb-4">{title}</h3>
        
        <div className="mt-auto">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-foreground">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-5">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <Link to={`/learn/${id}`} className="block w-full">
            <Button variant="outline" className="w-full justify-between group">
              Continue
              <ArrowRight size={16} className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </Button>
          </Link>
        </div>
      </div>
    </GlassCard>
  );
}
