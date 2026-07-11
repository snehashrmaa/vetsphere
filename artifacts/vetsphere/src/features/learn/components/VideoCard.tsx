import { VideoLesson } from '@/types';
import GlassCard from '@/components/GlassCard';
import { Play, Eye, Clock, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  video: VideoLesson;
}

export default function VideoCard({ video }: VideoCardProps) {
  // Extract initials from instructor name
  const getInitials = (name: string) => {
    return name
      .replace('Dr. ', '')
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <GlassCard hoverEffect className="overflow-hidden group cursor-pointer flex flex-col h-full bg-black/20">
      {/* Thumbnail Area */}
      <div className={cn("h-36 relative overflow-hidden bg-gradient-to-br", video.thumbnail)}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-lg">
            <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 backdrop-blur-md rounded text-xs font-medium text-white border border-white/10 flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {video.duration}
        </div>
        
        {/* Topic Badge */}
        <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
          {video.topic}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-heading font-medium text-base text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {video.title}
        </h3>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary/20 text-primary border border-primary/30 flex items-center justify-center text-[10px] font-bold">
              {getInitials(video.instructor)}
            </div>
            <span className="text-xs font-medium text-muted-foreground truncate max-w-[120px]">
              {video.instructor}
            </span>
          </div>
          
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <Eye className="w-3.5 h-3.5" />
            {(video.views / 1000).toFixed(1)}k
          </div>
        </div>
      </div>
    </GlassCard>
  );
}