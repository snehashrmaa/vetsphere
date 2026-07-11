import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Flame,
  BookOpen,
  Target,
  Brain,
  FileText,
  CalendarClock,
  Heart,
  MessageCircle,
  ArrowRight,
  Sparkles,
  ClipboardList,
  Dumbbell,
} from 'lucide-react'
import { GlassCard } from '@/components/cards/GlassCard'
import { StatCard } from '@/components/cards/StatCard'
import { Button } from '@/components/ui/Button'
import {
  recentNotes,
  upcomingExams,
  communityFeed,
  researchFeed,
  subjects,
} from '@/lib/mockData'

const quickActions = [
  { label: 'Flashcards', icon: ClipboardList, path: '/practice', color: 'bg-primary-50 text-primary-600' },
  { label: 'MCQ Test', icon: Target, path: '/practice', color: 'bg-accent-50 text-accent-600' },
  { label: 'Ask AI', icon: Brain, path: '/ai', color: 'bg-violet-50 text-violet-600' },
  { label: 'Clinic Case', icon: Dumbbell, path: '/clinic', color: 'bg-rose-50 text-rose-600' },
]

export default function Dashboard() {
  const continueSubject = subjects[0]

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="font-heading text-2xl font-bold text-secondary-900 sm:text-3xl">
          Good evening, Sneha 👋
        </h1>
        <p className="mt-1 text-sm text-secondary-500">Here's what's happening in your sphere today.</p>
      </motion.div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard icon={Flame} label="Daily Streak" value={12} suffix="days" accentClassName="bg-orange-50 text-orange-500" delay={0} />
        <StatCard icon={BookOpen} label="Topics Done" value={149} suffix="total" delay={0.05} />
        <StatCard icon={Target} label="Today's Goal" value="3/5" suffix="tasks" accentClassName="bg-accent-50 text-accent-600" delay={0.1} />
        <StatCard icon={Brain} label="AI Sessions" value={8} suffix="this week" accentClassName="bg-violet-50 text-violet-600" delay={0.15} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {/* Continue Learning */}
          <GlassCard delay={0.1}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4.5 w-4.5 text-primary-600" />
                <h2 className="font-heading text-base font-semibold text-secondary-900">Continue Learning</h2>
              </div>
              <Link to="/learn" className="text-xs font-medium text-primary-600 hover:underline">View all</Link>
            </div>
            <div className="mt-4 flex items-center gap-4 rounded-xl bg-white/60 p-4">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${continueSubject.color}`}>
                <continueSubject.icon className="h-5.5 w-5.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-heading text-sm font-semibold text-secondary-900">{continueSubject.name}</p>
                <p className="text-xs text-secondary-500">{continueSubject.completedTopics}/{continueSubject.totalTopics} topics · {continueSubject.progress}% complete</p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500" style={{ width: `${continueSubject.progress}%` }} />
                </div>
              </div>
              <Link to={`/learn/${continueSubject.id}`}>
                <Button size="sm">Resume</Button>
              </Link>
            </div>
          </GlassCard>

          {/* Today's Challenge */}
          <GlassCard delay={0.15} className="bg-gradient-to-br from-secondary-900 to-secondary-800 text-white border-0">
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-primary-300">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Today's Challenge</span>
                </div>
                <h3 className="font-heading text-lg font-semibold">10 MCQs: Cardiovascular Pharmacology</h3>
                <p className="mt-1 text-sm text-secondary-300">Earn 50 XP and keep your streak alive</p>
              </div>
            </div>
            <Button variant="glass" size="sm" className="mt-4 text-secondary-900">
              Start Challenge <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </GlassCard>

          {/* Quick Actions */}
          <div>
            <h2 className="mb-3 font-heading text-base font-semibold text-secondary-900">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {quickActions.map((a, i) => (
                <motion.div key={a.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link to={a.path} className="card-surface flex flex-col items-center gap-2 p-4 text-center">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${a.color}`}>
                      <a.icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-xs font-medium text-secondary-700">{a.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Community Feed */}
          <GlassCard delay={0.2}>
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-base font-semibold text-secondary-900">Community Feed</h2>
              <Link to="/community" className="text-xs font-medium text-primary-600 hover:underline">See all</Link>
            </div>
            <div className="mt-4 space-y-4">
              {communityFeed.map((post) => (
                <div key={post.id} className="rounded-xl bg-white/60 p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-accent-500 text-xs font-semibold text-white">
                      {post.author[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary-900">{post.author}</p>
                      <p className="text-xs text-secondary-400">{post.timeAgo} ago</p>
                    </div>
                  </div>
                  <p className="mt-2.5 text-sm text-secondary-600">{post.content}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-secondary-400">
                    <span className="flex items-center gap-1"><Heart className="h-3.5 w-3.5" /> {post.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle className="h-3.5 w-3.5" /> {post.comments}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="space-y-6">
          {/* AI Mentor Card */}
          <GlassCard delay={0.1} className="bg-gradient-to-br from-primary-500 to-accent-500 text-white border-0">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              <h2 className="font-heading text-base font-semibold">AI Mentor</h2>
            </div>
            <p className="mt-2 text-sm text-white/90">
              "Ready to review Cardiovascular Pharmacology? I noticed you missed 2 questions last time."
            </p>
            <Link to="/ai">
              <Button variant="glass" size="sm" className="mt-4 text-secondary-900">
                Chat now
              </Button>
            </Link>
          </GlassCard>

          {/* Recent Notes */}
          <GlassCard delay={0.15}>
            <div className="flex items-center gap-2">
              <FileText className="h-4.5 w-4.5 text-secondary-500" />
              <h2 className="font-heading text-base font-semibold text-secondary-900">Recent Notes</h2>
            </div>
            <div className="mt-3 space-y-2">
              {recentNotes.map((note) => (
                <div key={note.id} className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-white/60 transition-colors">
                  <div>
                    <p className="text-sm font-medium text-secondary-900">{note.title}</p>
                    <p className="text-xs text-secondary-400">{note.subject}</p>
                  </div>
                  <span className="text-xs text-secondary-400">{note.updatedAt}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Upcoming Exams */}
          <GlassCard delay={0.2}>
            <div className="flex items-center gap-2">
              <CalendarClock className="h-4.5 w-4.5 text-secondary-500" />
              <h2 className="font-heading text-base font-semibold text-secondary-900">Upcoming Exams</h2>
            </div>
            <div className="mt-3 space-y-2">
              {upcomingExams.map((exam) => (
                <div key={exam.id} className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-white/60 transition-colors">
                  <div>
                    <p className="text-sm font-medium text-secondary-900">{exam.title}</p>
                    <p className="text-xs text-secondary-400">{exam.subject}</p>
                  </div>
                  <span className="rounded-full bg-warning/10 px-2 py-0.5 text-xs font-medium text-warning">{exam.date}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Latest Research */}
          <GlassCard delay={0.25}>
            <h2 className="font-heading text-base font-semibold text-secondary-900">Latest Research</h2>
            <div className="mt-3 space-y-3">
              {researchFeed.map((item) => (
                <div key={item.id} className="rounded-lg px-2 py-1">
                  <p className="text-sm font-medium leading-snug text-secondary-900">{item.title}</p>
                  <p className="mt-1 text-xs text-secondary-400">{item.journal} · {item.timeAgo}</p>
                </div>
              ))}
            </div>
            <Link to="/research" className="mt-3 inline-block text-xs font-medium text-primary-600 hover:underline">
              View all research
            </Link>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
