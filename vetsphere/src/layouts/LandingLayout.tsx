import { Outlet, Link } from 'react-router-dom'
import { PawPrint } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'

export function LandingLayout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-secondary-100/60 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-white">
              <PawPrint className="h-4 w-4" />
            </div>
            <span className="font-heading text-base font-bold text-secondary-900">VetSphere</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="border-t border-secondary-100 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-secondary-400 sm:flex-row">
          <p>© {new Date().getFullYear()} VetSphere. All rights reserved.</p>
          <p>Made for the next generation of veterinarians.</p>
        </div>
      </footer>
    </div>
  )
}
