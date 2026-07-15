import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { type InputHTMLAttributes } from 'react'

export function SearchBar({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <div className={cn('relative w-full', className)}>
      <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary-400" />
      <input
        type="search"
        placeholder="Search notes, topics, cases..."
        className="h-11 w-full rounded-xl border border-secondary-200 bg-white pl-10 pr-4 text-sm placeholder:text-secondary-400 transition-all focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10"
        {...props}
      />
    </div>
  )
}
