import { PawPrint } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Loader({ className, label }: { className?: string; label?: string }) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-3 py-10', className)}>
      <div className="relative flex h-12 w-12 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-30" />
        <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white">
          <PawPrint className="h-5 w-5" />
        </span>
      </div>
      {label && <p className="text-sm text-secondary-500">{label}</p>}
    </div>
  )
}

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'animate-shimmer rounded-lg bg-gradient-to-r from-secondary-100 via-secondary-50 to-secondary-100 bg-[length:200%_100%]',
        className
      )}
    />
  )
}
