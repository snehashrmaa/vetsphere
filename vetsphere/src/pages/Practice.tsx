import { Dumbbell, Layers, Target, Timer } from 'lucide-react'
import { motion } from 'framer-motion'
import { PlaceholderPage } from '@/components/common/PlaceholderPage'

const modes = [
  { icon: Layers, label: 'Flashcards', desc: 'Spaced-repetition review decks', color: 'bg-primary-50 text-primary-600' },
  { icon: Target, label: 'MCQ Tests', desc: 'Timed multiple-choice practice', color: 'bg-accent-50 text-accent-600' },
  { icon: Timer, label: 'Mock Exams', desc: 'Full-length simulated exams', color: 'bg-rose-50 text-rose-600' },
]

export default function Practice() {
  return (
    <PlaceholderPage icon={Dumbbell} title="Practice" subtitle="Sharpen your recall with flashcards, MCQs, and mock exams.">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {modes.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -3 }}
            className="card-surface p-6"
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${m.color}`}>
              <m.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-heading text-sm font-semibold text-secondary-900">{m.label}</h3>
            <p className="mt-1 text-sm text-secondary-500">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </PlaceholderPage>
  )
}
