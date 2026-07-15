import { type LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StatCardProps {
  icon: LucideIcon
  label: string
  value: string | number
  suffix?: string
  accentClassName?: string
  delay?: number
}

export function StatCard({
  icon: Icon,
  label,
  value,
  suffix,
  accentClassName = 'bg-primary-50 text-primary-600',
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3 }}
      className="card-surface flex items-center gap-4 p-4"
    >
      <div className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-xl', accentClassName)}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-secondary-500">{label}</p>
        <p className="truncate text-lg font-semibold font-heading text-secondary-900">
          {value}
          {suffix && <span className="ml-1 text-xs font-normal text-secondary-400">{suffix}</span>}
        </p>
      </div>
    </motion.div>
  )
}
