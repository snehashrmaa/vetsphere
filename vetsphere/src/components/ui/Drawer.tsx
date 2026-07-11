import { type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  side?: 'left' | 'right' | 'bottom'
  className?: string
}

export function Drawer({ isOpen, onClose, children, side = 'right', className }: DrawerProps) {
  const variants = {
    left: { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' } },
    right: { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } },
    bottom: { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } },
  }[side]

  const positionClass = {
    left: 'left-0 top-0 h-full w-80',
    right: 'right-0 top-0 h-full w-80',
    bottom: 'bottom-0 left-0 w-full max-h-[85vh] rounded-t-3xl',
  }[side]

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-secondary-900/50 backdrop-blur-sm"
          />
          <motion.div
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className={cn('absolute bg-white shadow-card p-6 overflow-y-auto', positionClass, className)}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
