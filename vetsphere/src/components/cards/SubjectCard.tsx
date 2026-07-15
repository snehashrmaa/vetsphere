import { motion } from 'framer-motion'
import { ChevronRight, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface SubjectCardProps {
  id: string
  name: string
  icon: LucideIcon
  color: string
  progress: number
  completedTopics: number
  totalTopics: number
  delay?: number
}

export function SubjectCard({
  id,
  name,
  icon: Icon,
  color,
  progress,
  completedTopics,
  totalTopics,
  delay = 0,
}: SubjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
    >
      <Link
        to={`/learn/${id}`}
        className="card-surface group flex flex-col gap-4 p-5 hover:border-primary-200"
      >
        <div className="flex items-start justify-between">
          <div
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-xl text-white',
              color
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
          <ChevronRight className="h-4 w-4 text-secondary-300 transition-transform group-hover:translate-x-0.5 group-hover:text-primary-500" />
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold text-secondary-900">{name}</h4>
          <p className="mt-0.5 text-xs text-secondary-400">
            {completedTopics}/{totalTopics} topics
          </p>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary-100">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, delay: delay + 0.2, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
          />
        </div>
      </Link>
    </motion.div>
  )
}
