import { Subject } from '@/types';
import { SUBJECT_COLORS } from '@/lib/learnMockData';
import { cn } from '@/lib/utils';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { Heart, Bone, HeartPulse, FlaskConical, Microscope, Bug, Zap, Pill, Stethoscope, Scissors, Baby, ShieldCheck, Leaf, Beef, GraduationCap, Dna } from 'lucide-react';
import { useState } from 'react';

interface SubjectCardProps {
  subject: Subject;
  onToggleFavorite?: (id: string) => void;
  className?: string;
}

const getIcon = (name: string) => {
  switch (name) {
    case 'Bone': return <Bone className="w-5 h-5" />;
    case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
    case 'FlaskConical': return <FlaskConical className="w-5 h-5" />;
    case 'Microscope': return <Microscope className="w-5 h-5" />;
    case 'Bug': return <Bug className="w-5 h-5" />;
    case 'Zap': return <Zap className="w-5 h-5" />;
    case 'Pill': return <Pill className="w-5 h-5" />;
    case 'Stethoscope': return <Stethoscope className="w-5 h-5" />;
    case 'Scissors': return <Scissors className="w-5 h-5" />;
    case 'Baby': return <Baby className="w-5 h-5" />;
    case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
    case 'Leaf': return <Leaf className="w-5 h-5" />;
    case 'Beef': return <Beef className="w-5 h-5" />;
    case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
    case 'Dna': return <Dna className="w-5 h-5" />;
    default: return <Stethoscope className="w-5 h-5" />;
  }
};

export default function SubjectCard({ subject, onToggleFavorite, className }: SubjectCardProps) {
  const [isFavorited, setIsFavorited] = useState(subject.isFavorited);
  const color = SUBJECT_COLORS[subject.colorKey as keyof typeof SUBJECT_COLORS] || SUBJECT_COLORS.blue;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    if (onToggleFavorite) onToggleFavorite(subject.id);
  };

  return (
    <GlassCard 
      animated 
      hoverEffect 
      className={cn("flex flex-col min-w-[280px] group transition-all duration-300 hover:scale-[1.02]", className)}
      style={{ boxShadow: `var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 0 0 0px transparent` }}
      whileHover={{ borderColor: `var(--${subject.colorKey}-500)` }}
    >
      <div className={cn("h-16 relative flex items-center justify-between px-4 bg-gradient-to-r", color.from, color.to)}>
        <div className="absolute top-3 left-4 p-2 bg-background/50 backdrop-blur-md rounded-full border border-white/5 shadow-sm">
          <div className={color.text}>
            {getIcon(subject.icon)}
          </div>
        </div>
        
        <div className="absolute right-4 top-3 flex gap-2">
          <button 
            onClick={handleFavoriteClick}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <Heart 
              className={cn("w-5 h-5 transition-colors", isFavorited ? "fill-rose-500 text-rose-500" : "text-white/40 hover:text-white/80")} 
            />
          </button>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow pt-8 relative">
        <div className="absolute top-0 right-5 -translate-y-1/2 flex gap-2">
          <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-semibold border border-white/5", color.badge)}>
            {subject.category}
          </span>
          <span className="px-2 py-0.5 bg-card border border-white/10 rounded-full text-[10px] font-semibold text-muted-foreground">
            {subject.totalLessons} Lessons
          </span>
        </div>

        <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{subject.title}</h3>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-2 h-10">{subject.description}</p>
        
        <div className="mt-auto space-y-4">
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-muted-foreground font-medium">Progress</span>
              <span className="font-bold text-foreground">{subject.progress}%</span>
            </div>
            <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out relative"
                style={{ width: `${subject.progress}%` }}
              >
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20" />
              </div>
            </div>
          </div>
          
          <Link to={`/learn/${subject.id}`} className="block w-full">
            <Button variant="secondary" className="w-full bg-white/5 hover:bg-white/10 border border-white/5 text-foreground">
              Continue Learning
            </Button>
          </Link>
        </div>
      </div>
    </GlassCard>
  );
}