import { motion } from 'framer-motion'
import { SubjectCard } from '@/components/cards/SubjectCard'
import { SearchBar } from '@/components/common/SearchBar'
import { subjects } from '@/lib/mockData'

export default function Learn() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl font-bold text-secondary-900 sm:text-3xl">Learn</h1>
        <p className="mt-1 text-sm text-secondary-500">
          Notes, flashcards, MCQs, and clinical cases — organized by subject.
        </p>
      </motion.div>

      <SearchBar placeholder="Search subjects..." className="max-w-md" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {subjects.map((subject, i) => (
          <SubjectCard
            key={subject.id}
            id={subject.id}
            name={subject.name}
            icon={subject.icon}
            color={subject.color}
            progress={subject.progress}
            completedTopics={subject.completedTopics}
            totalTopics={subject.totalTopics}
            delay={i * 0.04}
          />
        ))}
      </div>
    </div>
  )
}
