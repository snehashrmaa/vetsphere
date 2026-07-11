import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, DollarSign, Clock, Building2, FileText, MessageSquare, TrendingUp } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import SearchBar from '@/components/SearchBar';

export default function CareerPage() {
  const jobs = [
    { id: 1, title: 'Associate Veterinarian', clinic: 'Oakridge Animal Hospital', location: 'Portland, OR', salary: '$120k - $140k', type: 'Full-time', specialty: 'Small Animal' },
    { id: 2, title: 'Emergency Clinician', clinic: 'Metro Vet ER', location: 'Seattle, WA', salary: '$150k - $180k', type: 'Full-time', specialty: 'Emergency' },
    { id: 3, title: 'Equine Field Practitioner', clinic: 'Valley Equine', location: 'Lexington, KY', salary: '$110k - $130k', type: 'Full-time', specialty: 'Equine' },
    { id: 4, title: 'Relief Veterinarian', clinic: 'Various Clinics', location: 'Remote / Travel', salary: '$90 - $120 / hr', type: 'Contract', specialty: 'Mixed Animal' },
  ];

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
          { title: 'Salary Guide', desc: '2024 compensation data', icon: TrendingUp, color: 'text-emerald-400' }
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

      {/* Job Listings */}
      <div className="space-y-4">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-xl font-semibold font-heading">Recommended Opportunities</h2>
          <span className="text-sm text-muted-foreground">Showing {jobs.length} jobs</span>
        </div>

        {jobs.map((job, i) => (
          <motion.div key={job.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <GlassCard hoverEffect className="p-6">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-background border border-white/10 flex items-center justify-center shrink-0 shadow-inner text-xl font-bold font-heading">
                    {job.clinic.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-1 hover:text-primary transition-colors cursor-pointer">{job.title}</h3>
                    <div className="text-muted-foreground font-medium text-sm mb-3 flex items-center gap-2">
                      <Building2 size={14}/> {job.clinic}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><MapPin size={14}/> {job.location}</span>
                      <span className="flex items-center gap-1.5"><DollarSign size={14}/> {job.salary}</span>
                      <span className="flex items-center gap-1.5"><Clock size={14}/> {job.type}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex md:flex-col items-center justify-between md:items-end md:justify-start gap-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{job.specialty}</span>
                  <Button variant="outline" className="w-full md:w-32">Apply</Button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
