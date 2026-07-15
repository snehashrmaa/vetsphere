import { motion } from 'framer-motion'
import { Flame, BookOpen, Award, Mail, MapPin, GraduationCap } from 'lucide-react'
import { StatCard } from '@/components/cards/StatCard'
import { Button } from '@/components/ui/Button'

export default function Profile() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-surface flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:text-left"
      >
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-400 to-accent-500 text-2xl font-bold text-white">
          S
        </div>
        <div className="flex-1">
          <h1 className="font-heading text-xl font-bold text-secondary-900">Sneha Kumar</h1>
          <p className="text-sm text-secondary-500">3rd Year · Bachelor of Veterinary Science</p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-secondary-400 sm:justify-start">
            <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> sneha@vetsphere.com</span>
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Coimbatore, IN</span>
            <span className="flex items-center gap-1"><GraduationCap className="h-3.5 w-3.5" /> TANUVAS</span>
          </div>
        </div>
        <Button variant="outline" size="sm">Edit Profile</Button>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <StatCard icon={Flame} label="Streak" value={12} suffix="days" accentClassName="bg-orange-50 text-orange-500" />
        <StatCard icon={BookOpen} label="Topics Completed" value={149} />
        <StatCard icon={Award} label="Badges Earned" value={7} accentClassName="bg-violet-50 text-violet-600" />
      </div>
    </div>
  )
}
