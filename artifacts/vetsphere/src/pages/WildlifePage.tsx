import React from 'react';
import { motion } from 'framer-motion';
import { Bird, Fish, Snail, Trees, MapPin } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';

export default function WildlifePage() {
  const categories = [
    { title: 'Avian Medicine', icon: Bird, count: 124, color: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/20' },
    { title: 'Reptile & Amphibian', icon: Snail, count: 86, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
    { title: 'Marine Mammals', icon: Fish, count: 42, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
    { title: 'Zoo Medicine', icon: Trees, count: 215, color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
  ];

  return (
    <motion.div className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden min-h-[300px] flex items-center p-8 lg:p-12 border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/40 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549488344-c48d212b4f98?q=80&w=2000')] bg-cover bg-center" />
        
        <div className="relative z-20 max-w-2xl">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20 mb-4 inline-block">Specialty Hub</span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-4">Wildlife & Conservation</h1>
          <p className="text-emerald-100/90 text-lg mb-8 leading-relaxed">
            Specialized resources, case studies, and protocols for non-traditional species, exotic pets, and zoological medicine.
          </p>
          <Button className="bg-white text-emerald-900 hover:bg-white/90">Explore Cases</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <GlassCard hoverEffect className={`p-6 border ${cat.border} group cursor-pointer`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${cat.bg} ${cat.color} group-hover:scale-110 transition-transform`}>
                <cat.icon size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-1">{cat.title}</h3>
              <p className="text-sm text-muted-foreground">{cat.count} Cases & Articles</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold font-heading">Featured Field Reports</h2>
          {[1, 2].map((i) => (
            <GlassCard key={i} className="p-6 flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-48 h-32 bg-secondary rounded-xl shrink-0 overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                   <Trees size={32} opacity={0.5} />
                 </div>
              </div>
              <div>
                <div className="flex gap-2 mb-2">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Field Report</span>
                  <span className="text-xs text-muted-foreground flex items-center"><MapPin size={12} className="mr-1"/> Costa Rica</span>
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 hover:text-emerald-400 transition-colors cursor-pointer">
                  {i === 1 ? "Managing Sloth Rescue Triage in Resource-Limited Settings" : "Avian Influenza Outbreak Protocols in Coastal Sanctuaries"}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">Detailed breakdown of emergency protocols, makeshift stabilization techniques, and long-term rehabilitation strategies developed during the recent rescue operations.</p>
              </div>
            </GlassCard>
          ))}
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold font-heading">Global Alerts</h2>
          <GlassCard className="p-5 border-l-4 border-l-destructive/80">
            <h4 className="font-semibold text-destructive mb-1">Avian Influenza (H5N1) Update</h4>
            <p className="text-sm text-muted-foreground mb-2">New guidelines for handling wild waterbirds presenting with neurological signs.</p>
            <span className="text-xs font-medium text-foreground">Updated 2 days ago</span>
          </GlassCard>
          <GlassCard className="p-5 border-l-4 border-l-amber-500/80">
            <h4 className="font-semibold text-amber-500 mb-1">Rabbit Hemorrhagic Disease</h4>
            <p className="text-sm text-muted-foreground mb-2">Expansion into new territories reported. Review vaccination protocols.</p>
            <span className="text-xs font-medium text-foreground">Updated 1 week ago</span>
          </GlassCard>
        </div>
      </div>

    </motion.div>
  );
}
