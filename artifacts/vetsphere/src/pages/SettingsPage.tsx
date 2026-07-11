import React from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Palette, Lock, CreditCard } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { currentUser } from '@/lib/mockData';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = React.useState('general');

  const tabs = [
    { id: 'general', label: 'General', icon: User },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Lock },
    { id: 'billing', label: 'Billing', icon: CreditCard },
  ];

  return (
    <motion.div className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and settings.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Settings Nav */}
        <div className="w-full md:w-64 shrink-0 space-y-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                activeTab === tab.id 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          <GlassCard className="p-6 md:p-8">
            {activeTab === 'general' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h2 className="text-xl font-semibold font-heading mb-6 border-b border-white/10 pb-4">Profile Information</h2>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-2xl font-bold border-2 border-white/10">
                    {currentUser.avatar || currentUser.name.charAt(0)}
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">Change Avatar</Button>
                    <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 2MB.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Full Name" defaultValue={currentUser.name} />
                  <Input label="Email Address" defaultValue={currentUser.email} type="email" />
                  <Input label="University/Clinic" defaultValue={currentUser.university} />
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-foreground">Role</label>
                    <select className="flex h-12 w-full rounded-xl border border-white/10 bg-input/50 px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary appearance-none">
                      <option value="student">Veterinary Student</option>
                      <option value="practitioner">Practitioner</option>
                      <option value="technician">Vet Tech</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex justify-end gap-3">
                  <Button variant="ghost">Cancel</Button>
                  <Button variant="primary">Save Changes</Button>
                </div>
              </motion.div>
            )}

            {activeTab === 'appearance' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h2 className="text-xl font-semibold font-heading mb-6 border-b border-white/10 pb-4">Theme Preferences</h2>
                
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-foreground">Interface Theme</label>
                  <div className="grid grid-cols-2 gap-4 max-w-md">
                    <div className="border-2 border-primary rounded-xl p-4 bg-background cursor-pointer">
                      <div className="h-20 bg-card rounded-md border border-white/10 mb-3 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"><div className="w-6 h-6 rounded-full bg-primary"></div></div>
                      </div>
                      <p className="text-center text-sm font-medium text-primary">Dark (Default)</p>
                    </div>
                    <div className="border border-white/10 hover:border-white/20 rounded-xl p-4 bg-[#f8fafc] cursor-not-allowed opacity-50 relative">
                      <div className="absolute inset-0 flex items-center justify-center z-10"><span className="px-2 py-1 bg-black/80 text-white text-xs rounded">Coming Soon</span></div>
                      <div className="h-20 bg-white rounded-md border border-gray-200 mb-3 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center"><div className="w-6 h-6 rounded-full bg-gray-300"></div></div>
                      </div>
                      <p className="text-center text-sm font-medium text-gray-500">Light</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Other tabs would have their content here, showing empty state for now */}
            {['notifications', 'privacy', 'billing'].includes(activeTab) && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center text-muted-foreground">
                <p>Configuration options for {activeTab} will appear here.</p>
              </motion.div>
            )}
          </GlassCard>
        </div>
      </div>
    </motion.div>
  );
}
