import { Bookmark } from '@/types';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { PlayCircle, HelpCircle, Stethoscope, BookOpen, Trash2, LibraryBig } from 'lucide-react';

interface BookmarkRowProps {
  bookmark: Bookmark;
}

export default function BookmarkRow({ bookmark }: BookmarkRowProps) {
  const getIcon = () => {
    switch (bookmark.type) {
      case 'video': return <PlayCircle className="w-4 h-4" />;
      case 'mcq': return <HelpCircle className="w-4 h-4" />;
      case 'case': return <Stethoscope className="w-4 h-4" />;
      case 'lesson': return <BookOpen className="w-4 h-4" />;
      case 'flashcard': return <LibraryBig className="w-4 h-4" />;
      default: return <LibraryBig className="w-4 h-4" />;
    }
  };

  return (
    <GlassCard className="p-3 flex items-center justify-between group hover:bg-white/[0.03] transition-colors border-white/5">
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
          {getIcon()}
        </div>
        <div className="min-w-0">
          <h4 className="font-medium text-sm text-foreground truncate pr-4">{bookmark.title}</h4>
          <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-foreground">
            <span className="capitalize">{bookmark.type}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>{bookmark.reference}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Saved {bookmark.savedAt}</span>
          </div>
        </div>
      </div>
      <Button variant="ghost" size="icon" className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive hover:bg-destructive/10">
        <Trash2 className="w-4 h-4" />
      </Button>
    </GlassCard>
  );
}