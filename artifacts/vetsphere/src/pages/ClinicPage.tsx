import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import Button from '@/components/Button';

export default function ClinicPage() {
  return (
    <motion.div className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight mb-2 flex items-center gap-3">
            <Stethoscope className="text-primary" /> Clinical Cases
          </h1>
          <p className="text-muted-foreground">Real-world scenarios to hone your diagnostic skills.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <SearchBar placeholder="Search cases..." containerClassName="flex-1 md:w-72" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-24 px-4 text-center bg-black/10 rounded-2xl border border-dashed border-white/10">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
          <Stethoscope className="w-8 h-8 text-muted-foreground opacity-50" />
        </div>
        <h3 className="text-xl font-heading font-medium text-foreground mb-2">No Cases Yet</h3>
        <p className="text-muted-foreground max-w-sm">Clinical case studies will appear here once they are published.</p>
      </div>
    </motion.div>
  );
}
