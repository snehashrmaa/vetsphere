import { DownloadItem } from '@/types';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { FileText, FilePieChart, FileArchive, Download, Presentation } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DownloadCardProps {
  item: DownloadItem;
}

export default function DownloadCard({ item }: DownloadCardProps) {
  const getTypeConfig = () => {
    switch (item.type) {
      case 'PDF': return { icon: <FileText className="w-6 h-6" />, color: "bg-rose-500/20 text-rose-500 border-rose-500/30" };
      case 'PPTX': return { icon: <Presentation className="w-6 h-6" />, color: "bg-orange-500/20 text-orange-500 border-orange-500/30" };
      case 'DOCX': return { icon: <FilePieChart className="w-6 h-6" />, color: "bg-sky-500/20 text-sky-500 border-sky-500/30" };
      case 'ZIP': return { icon: <FileArchive className="w-6 h-6" />, color: "bg-white/10 text-muted-foreground border-white/20" };
      default: return { icon: <FileText className="w-6 h-6" />, color: "bg-primary/20 text-primary border-primary/30" };
    }
  };

  const config = getTypeConfig();

  return (
    <GlassCard className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:bg-white/[0.02] transition-colors border border-white/5">
      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border", config.color)}>
        {config.icon}
      </div>
      
      <div className="flex-grow min-w-0">
        <h4 className="font-heading font-medium text-foreground mb-1 truncate">{item.title}</h4>
        <p className="text-xs text-muted-foreground line-clamp-1 mb-2 sm:mb-0">{item.description}</p>
        <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:hidden">
          <span className="px-1.5 py-0.5 rounded bg-black/40 border border-white/5">{item.type}</span>
          <span>{item.size}</span>
          <span>{item.downloads} DLs</span>
        </div>
      </div>

      <div className="hidden sm:flex flex-col items-end shrink-0 gap-2 min-w-[100px]">
        <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          <span className="px-1.5 py-0.5 rounded bg-black/40 border border-white/5">{item.type}</span>
          <span>{item.size}</span>
        </div>
      </div>

      <Button variant="secondary" size="icon" className="shrink-0 rounded-full w-10 h-10 self-end sm:self-auto hidden sm:inline-flex">
        <Download className="w-4 h-4" />
      </Button>
      <Button variant="secondary" className="w-full sm:hidden mt-2">
        <Download className="w-4 h-4 mr-2" /> Download File
      </Button>
    </GlassCard>
  );
}