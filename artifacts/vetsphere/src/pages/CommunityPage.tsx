import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, TrendingUp, Users } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { cn } from '@/lib/utils';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('Feed');
  const tabs = ['Feed', 'Questions', 'Discussions', 'Events'];

  return (
    <motion.div className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight mb-2">Community</h1>
          <p className="text-muted-foreground">Connect with veterinary professionals and students worldwide.</p>
        </div>
        <Button variant="primary">New Post</Button>
      </div>

      <div className="flex gap-6">
        {/* Main Feed */}
        <div className="flex-1 space-y-6">
          {/* Tabs */}
          <div className="flex border-b border-white/10 pb-px gap-6">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "pb-3 text-sm font-medium transition-colors relative",
                  activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="community-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
                )}
              </button>
            ))}
          </div>

          {/* Create Post Input */}
          <GlassCard className="p-4 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold shrink-0 border border-white/10">
              SJ
            </div>
            <div className="flex-1">
              <textarea
                placeholder="Share a case, ask a question, or start a discussion..."
                className="w-full bg-transparent border-none focus:ring-0 resize-none text-sm placeholder:text-muted-foreground min-h-[60px]"
              />
              <div className="flex justify-end pt-2 border-t border-white/5 mt-2">
                <Button variant="primary" size="sm">Post</Button>
              </div>
            </div>
          </GlassCard>

          {/* Posts — Empty State */}
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-black/10 rounded-2xl border border-dashed border-white/10">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-muted-foreground opacity-50" />
            </div>
            <h3 className="text-xl font-heading font-medium text-foreground mb-2">No Posts Yet</h3>
            <p className="text-muted-foreground max-w-sm">Be the first to share a case, ask a question, or start a discussion with the community.</p>
          </div>
        </div>

        {/* Sidebar (Desktop only) */}
        <div className="hidden lg:block w-80 space-y-6">
          <GlassCard className="p-5">
            <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
              <TrendingUp size={16} className="text-primary" /> Trending Topics
            </h3>
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <TrendingUp className="w-6 h-6 text-muted-foreground opacity-30 mb-2" />
              <p className="text-xs text-muted-foreground">Topics will appear as the community grows.</p>
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
              <Users size={16} className="text-accent" /> Top Contributors
            </h3>
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <Users className="w-6 h-6 text-muted-foreground opacity-30 mb-2" />
              <p className="text-xs text-muted-foreground">Contributors will appear here once members start posting.</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </motion.div>
  );
}
