import { motion } from 'framer-motion';
import { Briefcase, FileText, MessageSquare, TrendingUp } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import SearchBar from '@/components/SearchBar';

export default function CareerPage() {
  return (
    <motion.div className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="text-center max-w-2xl mx-auto py-8">
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight mb-4">Career Connect</h1>
        <p className="text-muted-foreground text-lg mb-8">Find your next role in veterinary medicine. Opportunities from top clinics and hospitals nationwide.</p>

        <div className="flex flex-col sm:flex-row gap-3">
          <SearchBar placeholder="Search job title or keyword..." containerClassName="max-w-none flex-1" />
          <Button variant="primary" className="shrink-0">Search Jobs</Button>
        </div>
      </div>

      {/* Resources Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: 'Resume Builder', desc: 'Templates tailored for vet med', icon: FileText, color: 'text-blue-400' },
          { title: 'Interview Prep', desc: 'Practice technical questions', icon: MessageSquare, color: 'text-purple-400' },
          { title: 'Salary Guide', desc: 'Compensation data by specialty', icon: TrendingUp, color: 'text-emerald-400' },
        ].map((res, i) => (
          <GlassCard key={i} hoverEffect className="p-5 flex items-center gap-4 cursor-pointer group">
            <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ${res.color} group-hover:scale-110 transition-transform`}>
              <res.icon size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-sm">{res.title}</h4>
              <p className="text-xs text-muted-foreground">{res.desc}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Job Listings — Empty State */}
      <div>
        <h2 className="text-xl font-semibold font-heading mb-6">Recommended Opportunities</h2>
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-black/10 rounded-2xl border border-dashed border-white/10">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
            <Briefcase className="w-8 h-8 text-muted-foreground opacity-50" />
          </div>
          <h3 className="text-xl font-heading font-medium text-foreground mb-2">No Listings Yet</h3>
          <p className="text-muted-foreground max-w-sm">Job opportunities will appear here once they are posted. Check back soon.</p>
        </div>
      </div>
    </motion.div>
  );
}
