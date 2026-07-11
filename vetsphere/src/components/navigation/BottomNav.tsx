import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { bottomNavItems } from '@/lib/navigation'

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 z-40 w-full border-t border-secondary-100 bg-white/90 backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-around px-2 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
        {bottomNavItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className="relative flex flex-1 flex-col items-center gap-1 rounded-xl py-1.5"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.span
                    layoutId="bottomnav-active"
                    className="absolute -top-2 h-1 w-6 rounded-full bg-primary-500"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <Icon
                  className={cn(
                    'h-5 w-5 transition-colors',
                    isActive ? 'text-primary-600' : 'text-secondary-400'
                  )}
                />
                <span
                  className={cn(
                    'text-[10px] font-medium transition-colors',
                    isActive ? 'text-primary-600' : 'text-secondary-400'
                  )}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
