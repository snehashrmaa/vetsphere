import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Activity, FileText } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { clinicalCases } from '@/lib/mockData';

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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {clinicalCases.map((c, i) => (
          <motion.div key={c.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <GlassCard hoverEffect className="p-6 h-full flex flex-col group relative overflow-hidden">
              {/* decorative side bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{c.specialty}</span>
                <span className="px-2 py-0.5 rounded text-xs bg-white/5 border border-white/10 text-muted-foreground">{c.difficulty}</span>
              </div>
              
              <h3 className="text-xl font-bold font-heading mb-3 text-foreground leading-tight group-hover:text-primary transition-colors">{c.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">{c.description}</p>
              
              <div className="flex gap-3 mt-auto">
                <Button variant="primary" className="w-full flex-1">Open Case</Button>
                <Button variant="outline" size="icon" className="shrink-0"><FileText size={18} /></Button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
