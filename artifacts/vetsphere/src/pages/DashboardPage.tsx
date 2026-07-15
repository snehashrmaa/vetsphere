import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flame, CheckCircle, Target, Clock, ClipboardList, Stethoscope, Sparkles, Calendar, ChevronRight, BookOpen, Users } from 'lucide-react';
import StatCard from '@/components/StatCard';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { currentUser, todayChallenge } from '@/lib/mockData';
import { cn } from '@/lib/utils';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function DashboardPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChallengeSubmit = () => {
    if (selectedAnswer !== null) {
      setIsSubmitted(true);
    }
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric'
  });

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-muted-foreground font-medium mb-1">{currentDate}</p>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight">
            Good morning, {currentUser.name.split(' ')[1]}
          </h1>
        </div>
        <Link to="/practice">
          <Button variant="primary" icon={<Target size={18} />}>
            Resume Practice
          </Button>
        </Link>
      </motion.div>

      {/* Stats Row */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<Flame className="text-orange-500" />}
          label="Study Streak"
          value="14 Days"
          className="border-orange-500/20"
        />
        <StatCard
          icon={<CheckCircle className="text-emerald-500" />}
          label="Courses Completed"
          value="0"
        />
        <StatCard
          icon={<Target className="text-blue-500" />}
          label="Practice Score"
          value="—"
        />
        <StatCard
          icon={<Clock className="text-purple-500" />}
          label="Study Hours"
          value="0h"
        />
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column (2/3 width) */}
        <div className="lg:col-span-2 space-y-8">

          {/* Continue Learning */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold font-heading">Continue Learning</h2>
              <Link to="/learn" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center">
                View All <ChevronRight size={16} />
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center py-14 px-4 text-center bg-black/10 rounded-2xl border border-dashed border-white/10">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-muted-foreground opacity-50" />
              </div>
              <h3 className="text-base font-heading font-medium text-foreground mb-1">No Active Courses</h3>
              <p className="text-sm text-muted-foreground max-w-xs mb-4">Your in-progress subjects will appear here. Head to the Learn hub to get started.</p>
              <Link to="/learn">
                <Button variant="outline" size="sm">Browse Subjects</Button>
              </Link>
            </div>
          </motion.div>

          {/* Daily Challenge */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-semibold font-heading mb-4 text-orange-500 flex items-center gap-2">
              <Flame size={20} /> Daily Challenge
            </h2>
            <GlassCard className="p-6 border-orange-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <h3 className="text-lg font-medium text-foreground mb-6 relative z-10 leading-relaxed">
                {todayChallenge.question}
              </h3>

              <div className="space-y-3 mb-6 relative z-10">
                {todayChallenge.options.map((option, index) => {
                  let stateClass = "border-white/10 hover:border-primary/50 bg-white/5";
                  if (isSubmitted) {
                    if (index === todayChallenge.correctOptionIndex) {
                      stateClass = "border-emerald-500 bg-emerald-500/10 text-emerald-400";
                    } else if (index === selectedAnswer) {
                      stateClass = "border-destructive bg-destructive/10 text-destructive";
                    } else {
                      stateClass = "border-white/5 opacity-50";
                    }
                  } else if (selectedAnswer === index) {
                    stateClass = "border-primary bg-primary/10 text-primary";
                  }

                  return (
                    <button
                      key={index}
                      disabled={isSubmitted}
                      onClick={() => setSelectedAnswer(index)}
                      className={cn(
                        "w-full text-left p-4 rounded-xl border transition-all duration-200 font-medium",
                        stateClass
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {!isSubmitted ? (
                <Button
                  disabled={selectedAnswer === null}
                  onClick={handleChallengeSubmit}
                  className="w-full sm:w-auto"
                >
                  Submit Answer
                </Button>
              ) : (
                <div className={cn(
                  "p-4 rounded-xl text-sm font-medium animate-in fade-in slide-in-from-bottom-2",
                  selectedAnswer === todayChallenge.correctOptionIndex
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-destructive/10 text-destructive"
                )}>
                  {selectedAnswer === todayChallenge.correctOptionIndex
                    ? "Correct! +10 XP added to your daily goal."
                    : "Incorrect. The correct answer is 0.2 mg/kg for initial dose, then 0.1 mg/kg maintenance."}
                </div>
              )}
            </GlassCard>
          </motion.div>
        </div>

        {/* Right Column (1/3 width) */}
        <div className="space-y-8">

          {/* Quick Actions */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-semibold font-heading mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: ClipboardList, label: 'New Quiz',   color: 'text-blue-400',    bg: 'bg-blue-500/10' },
                { icon: Stethoscope,   label: 'Case Study', color: 'text-rose-400',    bg: 'bg-rose-500/10' },
                { icon: Sparkles,      label: 'AI Chat',    color: 'text-purple-400',  bg: 'bg-purple-500/10' },
                { icon: Calendar,      label: 'Schedule',   color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
              ].map((action, i) => (
                <Link key={i} to="#">
                  <GlassCard hoverEffect className="p-4 flex flex-col items-center justify-center text-center gap-3 h-full group">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110", action.bg, action.color)}>
                      <action.icon size={24} />
                    </div>
                    <span className="text-sm font-medium text-foreground">{action.label}</span>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Community Feed */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold font-heading">Community Feed</h2>
              <Link to="/community" className="text-sm text-primary hover:underline">View</Link>
            </div>
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center bg-black/10 rounded-2xl border border-dashed border-white/10">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-muted-foreground opacity-50" />
              </div>
              <p className="text-sm text-muted-foreground">No posts yet. Be the first to share.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
