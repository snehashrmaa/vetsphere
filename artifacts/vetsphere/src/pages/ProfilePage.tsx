import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BookOpen, Flame, Award, Calendar, CheckCircle2 } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import StatCard from '@/components/StatCard';
import { currentUser } from '@/lib/mockData';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState('activity');

  return (
    <motion.div className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      
      {/* Profile Header */}
      <GlassCard className="overflow-hidden p-0 border-none shadow-xl relative">
        {/* Cover */}
        <div className="h-48 bg-gradient-to-r from-primary/80 via-emerald-600/80 to-accent/80 relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] opacity-30" />
        </div>
        
        <div className="px-8 pb-8 relative">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-16 mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-background bg-secondary flex items-center justify-center text-4xl font-bold text-foreground shadow-xl relative z-10">
              {currentUser.avatar || currentUser.name.charAt(0)}
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 border-2 border-background rounded-full" />
            </div>
            
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold font-heading text-foreground">{currentUser.name}</h1>
              <p className="text-primary font-medium">{currentUser.role === 'student' ? 'Veterinary Student' : 'Veterinarian'}</p>
            </div>
            
            <div className="flex gap-2">
               <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">Edit Profile</button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><MapPin size={16}/> {currentUser.university || 'London, UK'}</span>
            <span className="flex items-center gap-2"><BookOpen size={16}/> {currentUser.year || 'Class of 2025'}</span>
            <span className="flex items-center gap-2"><Calendar size={16}/> Joined Jan 2023</span>
          </div>
        </div>
      </GlassCard>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard icon={<BookOpen className="text-blue-500" />} label="Courses Completed" value="8" />
        <StatCard icon={<Flame className="text-orange-500" />} label="Current Streak" value="14 Days" />
        <StatCard icon={<Award className="text-purple-500" />} label="Total XP" value="12,450" />
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10 pb-px gap-6">
        {['activity', 'achievements'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium transition-colors relative capitalize ${activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div layoutId="profile-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">
        {activeTab === 'activity' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {[
              { title: 'Completed Pharmacology Quiz', desc: 'Scored 94% on NSAIDs module', time: '2 hours ago', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
              { title: 'Started New Course', desc: 'Advanced Feline Cardiology', time: 'Yesterday', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-500/10' },
              { title: '7 Day Streak!', desc: 'Earned Consistency Badge', time: '3 days ago', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10' }
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-background z-10 ml-0 mr-4 md:mx-auto bg-card">
                  <item.icon size={16} className={item.color} />
                </div>
                <GlassCard className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </GlassCard>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'achievements' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Early Bird', desc: 'Complete 5 sessions before 8AM', unlocked: true, icon: '🌅' },
              { name: 'Pharm Master', desc: 'Score 100% on Pharma final', unlocked: true, icon: '💊' },
              { name: 'Consistency', desc: '30 day study streak', unlocked: false, icon: '🔥' },
              { name: 'Surgeon', desc: 'Complete all surgery modules', unlocked: false, icon: '✂️' },
            ].map((badge, i) => (
              <GlassCard key={i} className={`p-6 text-center flex flex-col items-center justify-center gap-3 ${badge.unlocked ? '' : 'opacity-50 grayscale'}`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-inner ${badge.unlocked ? 'bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30' : 'bg-white/5 border border-white/10'}`}>
                  {badge.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{badge.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{badge.desc}</p>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        )}
      </div>

    </motion.div>
  );
}
