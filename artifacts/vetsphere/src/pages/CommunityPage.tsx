import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Heart, Share2, TrendingUp, Users } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { communityPosts } from '@/lib/mockData';
import { cn } from '@/lib/utils';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = React.useState('Feed');
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

          {/* Posts */}
          <div className="space-y-4">
            {communityPosts.map(post => (
              <GlassCard key={post.id} className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold border border-white/10">
                      {post.authorName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm leading-tight text-foreground">{post.authorName}</h4>
                      <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-foreground/90 leading-relaxed mb-4">{post.content}</p>
                
                <div className="flex gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">#{tag}</span>
                  ))}
                </div>

                <div className="flex gap-6 pt-3 border-t border-white/5 text-muted-foreground">
                  <button className="flex items-center gap-2 text-xs hover:text-primary transition-colors">
                    <Heart size={16} /> {post.likes}
                  </button>
                  <button className="flex items-center gap-2 text-xs hover:text-accent transition-colors">
                    <MessageSquare size={16} /> {post.comments}
                  </button>
                  <button className="flex items-center gap-2 text-xs hover:text-foreground transition-colors ml-auto">
                    <Share2 size={16} /> Share
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Sidebar (Desktop only) */}
        <div className="hidden lg:block w-80 space-y-6">
          <GlassCard className="p-5">
            <h3 className="font-heading font-semibold mb-4 flex items-center gap-2"><TrendingUp size={16} className="text-primary"/> Trending Topics</h3>
            <div className="space-y-3">
              {['#NAVLEPrep', '#EmergencyMed', '#Exotics', '#PharmacologyTips'].map(tag => (
                <div key={tag} className="flex justify-between items-center group cursor-pointer">
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{tag}</span>
                  <span className="text-xs text-muted-foreground bg-white/5 px-2 py-0.5 rounded">1.2k</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <h3 className="font-heading font-semibold mb-4 flex items-center gap-2"><Users size={16} className="text-accent"/> Top Contributors</h3>
            <div className="space-y-4">
              {[
                { name: 'Dr. Michael Chang', role: 'Surgery Specialist' },
                { name: 'Emma Roberts', role: '4th Year Student' },
                { name: 'Dr. Lisa Vander', role: 'Equine Vet' }
              ].map(user => (
                <div key={user.name} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold shrink-0">
                    {user.name.charAt(0)}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-medium truncate">{user.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </motion.div>
  );
}
