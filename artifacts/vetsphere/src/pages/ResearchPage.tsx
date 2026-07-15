import { motion } from 'framer-motion';
import { Filter, BookOpen } from 'lucide-react';
import Button from '@/components/Button';
import SearchBar from '@/components/SearchBar';

export default function ResearchPage() {
  return (
    <motion.div className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-card/50 p-6 rounded-2xl border border-white/10 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight mb-2">Research Database</h1>
          <p className="text-muted-foreground">Access peer-reviewed veterinary literature.</p>
        </div>

        <div className="w-full md:w-auto flex gap-3 relative z-10">
          <SearchBar placeholder="Search by topic, author, DOI..." className="w-full md:w-80" />
          <Button variant="outline" size="icon" className="shrink-0"><Filter size={18} /></Button>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {['All Subjects', 'Feline', 'Canine', 'Equine', 'Bovine', 'Exotics', 'Avian'].map((filter, i) => (
          <button key={filter} className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-primary text-white' : 'bg-white/5 text-muted-foreground hover:bg-white/10'}`}>
            {filter}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-black/10 rounded-2xl border border-dashed border-white/10">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
          <BookOpen className="w-8 h-8 text-muted-foreground opacity-50" />
        </div>
        <h3 className="text-xl font-heading font-medium text-foreground mb-2">No Articles Yet</h3>
        <p className="text-muted-foreground max-w-sm">Peer-reviewed research articles will appear here once the database is populated.</p>
      </div>
    </motion.div>
  );
}
