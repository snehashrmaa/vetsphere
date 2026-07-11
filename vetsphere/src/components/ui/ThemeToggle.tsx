import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-100 text-secondary-600 transition-colors hover:bg-secondary-200"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? <Moon className="h-4.5 w-4.5" /> : <Sun className="h-4.5 w-4.5" />}
      </motion.div>
    </button>
  )
}
