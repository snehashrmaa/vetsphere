import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, FileText, Layers, ListChecks, Stethoscope, Video, Download } from 'lucide-react'
import { subjects } from '@/lib/mockData'
import { cn } from '@/lib/utils'

const tabs = [
  { id: 'notes', label: 'Notes', icon: FileText },
  { id: 'flashcards', label: 'Flashcards', icon: Layers },
  { id: 'mcqs', label: 'MCQs', icon: ListChecks },
  { id: 'cases', label: 'Clinical Cases', icon: Stethoscope },
  { id: 'videos', label: 'Videos', icon: Video },
  { id: 'downloads', label: 'Downloads', icon: Download },
]

export default function SubjectDetail() {
  const { subjectId } = useParams()
  const subject = subjects.find((s) => s.id === subjectId) ?? subjects[0]
  const [activeTab, setActiveTab] = useState('notes')

  return (
    <div className="space-y-6">
      <Link to="/learn" className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary-500 hover:text-secondary-900">
        <ArrowLeft className="h-4 w-4" /> Back to Learn
      </Link>

      <div className="flex items-center gap-4">
        <div className={cn('flex h-14 w-14 items-center justify-center rounded-2xl text-white', subject.color)}>
          <subject.icon className="h-7 w-7" />
        </div>
        <div>
          <h1 className="font-heading text-2xl font-bold text-secondary-900">{subject.name}</h1>
          <p className="text-sm text-secondary-500">{subject.description}</p>
        </div>
      </div>

      <div className="flex gap-1 overflow-x-auto rounded-xl bg-secondary-100/70 p-1 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'relative flex shrink-0 items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
              activeTab === tab.id ? 'text-secondary-900' : 'text-secondary-500 hover:text-secondary-700'
            )}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="subject-tab-active"
                className="absolute inset-0 rounded-lg bg-white shadow-soft"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
              />
            )}
            <tab.icon className="relative z-10 h-4 w-4" />
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="card-surface p-8 text-center"
      >
        <p className="text-sm text-secondary-500">
          {tabs.find((t) => t.id === activeTab)?.label} for <span className="font-medium text-secondary-900">{subject.name}</span> will appear here.
        </p>
        <p className="mt-1 text-xs text-secondary-400">This module is ready to be wired up to content in the next sprint.</p>
      </motion.div>
    </div>
  )
}
