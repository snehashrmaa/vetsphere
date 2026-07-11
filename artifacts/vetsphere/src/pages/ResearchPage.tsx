import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, Quote, Download } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import SearchBar from '@/components/SearchBar';
import { researchPapers } from '@/lib/mockData';

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
        {['All Subjects', 'Feline', 'Canine', 'Equine', 'Bovine', 'Exotics', 'Avian'].map(filter => (
          <button key={filter} className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === 'All Subjects' ? 'bg-primary text-white' : 'bg-white/5 text-muted-foreground hover:bg-white/10'}`}>
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {researchPapers.map((paper, i) => (
          <motion.div key={paper.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <GlassCard hoverEffect className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">{paper.type}</span>
                    <span className="px-2 py-1 rounded bg-secondary text-muted-foreground text-xs">{paper.specialty}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-foreground mb-2 leading-tight hover:text-primary transition-colors cursor-pointer">{paper.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{paper.authors.join(', ')}</p>
                  
                  <div className="p-4 bg-background/50 rounded-xl border border-white/5 mb-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">Abstract:</span> {paper.abstract}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-medium"><BookOpen size={14}/> {paper.journal}</span>
                    <span>{paper.date}</span>
                    <span className="flex items-center gap-1.5"><Quote size={14}/> {paper.citations} Citations</span>
                    <span>DOI: {paper.doi}</span>
                  </div>
                </div>
                
                <div className="md:w-48 flex md:flex-col gap-3 shrink-0">
                  <Button variant="primary" className="w-full flex-1 md:flex-none">Read Full Text</Button>
                  <Button variant="outline" icon={<Download size={16}/>} className="w-full flex-1 md:flex-none">PDF</Button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
