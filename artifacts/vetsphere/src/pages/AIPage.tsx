import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, Bot, User, Menu } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

export default function AIPage() {
  const [input, setInput] = React.useState('');

  const chatHistory = [
    { role: 'user', content: 'What are the main differentials for a 8yo Golden Retriever presenting with acute polyuria and polydipsia?' },
    { role: 'ai', content: 'For an 8-year-old Golden Retriever with acute PU/PD, the primary differentials to consider are:\n\n1. **Diabetes Mellitus**: Common in older dogs. Check fasting blood glucose and urine glucose.\n2. **Hyperadrenocorticism (Cushing\'s)**: Very common in this breed/age. Look for concurrent signs like alopecia, pot-belly, or panting.\n3. **Chronic Kidney Disease (CKD)**: Check BUN, creatinine, SDMA, and USG.\n4. **Pyometra**: If female and intact, this is a top differential and potential emergency.\n5. **Hypercalcemia**: Often paraneoplastic (e.g., lymphoma, anal sac adenocarcinoma).\n\nWhat other clinical signs are present?' },
    { role: 'user', content: 'The dog is spayed. Owner reports she has been panting more at night and seems to have a slightly pendulous abdomen.' },
    { role: 'ai', content: 'Given those additional clinical signs (panting, pendulous abdomen) in an older, spayed Golden Retriever, **Hyperadrenocorticism (Cushing\'s Disease)** moves to the top of your differential list.\n\nNext diagnostic steps I recommend:\n1. CBC/Chem/UA (expect elevated ALP, stress leukogram, isosthenuria)\n2. Low-Dose Dexamethasone Suppression Test (LDDST) or ACTH stimulation test for definitive diagnosis.\n\nWould you like a review of the LDDST protocol?' }
  ];

  return (
    <motion.div className="h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] flex flex-col md:flex-row gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* Sidebar - hidden on mobile by default */}
      <GlassCard className="hidden md:flex w-64 flex-col p-4 bg-sidebar/50">
        <Button className="w-full justify-start mb-6" variant="primary" icon={<Sparkles size={16}/>}>New Session</Button>
        <div className="flex-1 overflow-y-auto">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Recent Sessions</h4>
          <div className="space-y-1">
            {['PU/PD in Golden Retriever', 'Feline Asthma vs Heartworm', 'Meloxicam dosing rules'].map((t, i) => (
              <button key={i} className="w-full text-left px-3 py-2 rounded-lg text-sm text-foreground/80 hover:bg-white/5 hover:text-foreground truncate transition-colors">
                {t}
              </button>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Main Chat Area */}
      <GlassCard className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <div className="h-14 border-b border-white/10 flex items-center px-6 gap-3 bg-background/50 backdrop-blur-sm z-10">
          <Sparkles className="text-primary" size={20} />
          <h2 className="font-heading font-semibold">VetSphere Assistant</h2>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {chatHistory.map((msg, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
            >
              <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${msg.role === 'user' ? 'bg-secondary text-secondary-foreground' : 'bg-gradient-to-br from-primary to-accent text-white'}`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.role === 'user' ? 'bg-primary/20 text-foreground rounded-tr-sm' : 'bg-secondary/50 border border-white/5 rounded-tl-sm'}`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-background/50 backdrop-blur-sm border-t border-white/10">
          <div className="relative flex items-center">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a case, drug dosage, or protocol..." 
              className="w-full bg-input/50 border border-white/10 rounded-full pl-6 pr-14 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              onKeyDown={(e) => e.key === 'Enter' && setInput('')}
            />
            <button className="absolute right-2 w-10 h-10 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center transition-colors">
              <Send size={18} className="-ml-0.5" />
            </button>
          </div>
          <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide pb-1">
            {['Calculate drug dose', 'Differential diagnosis', 'Analyze lab results'].map(p => (
              <button key={p} className="shrink-0 text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-muted-foreground whitespace-nowrap transition-colors">
                {p}
              </button>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

// Temporary inline button for the AI sidebar to avoid circular deps with missing components
function Button({ children, className, variant, icon }: any) {
  return <button className={`flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium transition-colors ${variant === 'primary' ? 'bg-primary text-white' : 'bg-white/5 text-foreground'} ${className}`}>{icon && <span className="mr-2">{icon}</span>}{children}</button>;
}
