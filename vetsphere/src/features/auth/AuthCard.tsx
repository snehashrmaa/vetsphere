import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { PawPrint } from 'lucide-react'

export function AuthCard({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: ReactNode
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="card-surface w-full max-w-md p-8"
      >
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-glow">
            <PawPrint className="h-6 w-6" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-secondary-900">{title}</h1>
          <p className="mt-1.5 text-sm text-secondary-500">{subtitle}</p>
        </div>
        {children}
      </motion.div>
    </div>
  )
}
