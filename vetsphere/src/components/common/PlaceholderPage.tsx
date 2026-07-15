import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

interface PlaceholderPageProps {
  icon: LucideIcon
  title: string
  subtitle: string
  accentClassName?: string
  children?: ReactNode
}

export function PlaceholderPage({
  icon: Icon,
  title,
  subtitle,
  accentClassName = 'bg-primary-50 text-primary-600',
  children,
}: PlaceholderPageProps) {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4"
      >
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accentClassName}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h1 className="font-heading text-2xl font-bold text-secondary-900 sm:text-3xl">{title}</h1>
          <p className="mt-0.5 text-sm text-secondary-500">{subtitle}</p>
        </div>
      </motion.div>

      {children ?? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-surface flex flex-col items-center justify-center gap-2 p-16 text-center"
        >
          <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accentClassName}`}>
            <Icon className="h-7 w-7" />
          </div>
          <p className="mt-2 font-heading text-base font-semibold text-secondary-900">
            {title} module foundation is ready
          </p>
          <p className="max-w-sm text-sm text-secondary-500">
            This page is scaffolded and routed. Feature-specific content will be built on top of this foundation.
          </p>
        </motion.div>
      )}
    </div>
  )
}
