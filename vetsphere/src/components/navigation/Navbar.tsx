import { Bell, PawPrint } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { SearchBar } from '@/components/common/SearchBar'
import { useIsDesktop } from '@/hooks/useMediaQuery'

export function Navbar() {
  const isDesktop = useIsDesktop()

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-secondary-100 bg-white/80 px-4 backdrop-blur-md sm:px-6">
      {!isDesktop && (
        <Link to="/dashboard" className="flex items-center gap-2 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-white">
            <PawPrint className="h-4 w-4" />
          </div>
        </Link>
      )}

      <div className="hidden flex-1 max-w-md sm:block">
        <SearchBar />
      </div>
      <div className="flex-1 sm:hidden" />

      <div className="flex items-center gap-2 shrink-0">
        <ThemeToggle />
        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-100 text-secondary-600 hover:bg-secondary-200 transition-colors">
          <Bell className="h-4.5 w-4.5" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-danger" />
        </button>
        <Link
          to="/profile"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 to-accent-500 text-sm font-semibold text-white"
        >
          S
        </Link>
      </div>
    </header>
  )
}
