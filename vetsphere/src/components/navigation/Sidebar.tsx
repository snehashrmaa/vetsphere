import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PawPrint } from 'lucide-react'
import { cn } from '@/lib/utils'
import { sidebarNavItems, sidebarFooterItems } from '@/lib/navigation'

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-secondary-100 bg-white/80 backdrop-blur-md lg:flex">
      <div className="flex items-center gap-2.5 px-6 py-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500 text-white shadow-glow">
          <PawPrint className="h-5 w-5" />
        </div>
        <span className="font-heading text-lg font-bold text-secondary-900">VetSphere</span>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 scrollbar-hide">
        {sidebarNavItems.map((item) => (
          <SidebarLink key={item.path} {...item} />
        ))}
      </nav>

      <div className="space-y-1 border-t border-secondary-100 px-3 py-4">
        {sidebarFooterItems.map((item) => (
          <SidebarLink key={item.path} {...item} />
        ))}
      </div>
    </aside>
  )
}

function SidebarLink({ label, path, icon: Icon }: { label: string; path: string; icon: any }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        cn(
          'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
          isActive
            ? 'bg-primary-50 text-primary-700'
            : 'text-secondary-500 hover:bg-secondary-50 hover:text-secondary-900'
        )
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <motion.span
              layoutId="sidebar-active"
              className="absolute inset-0 rounded-xl bg-primary-50"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
            />
          )}
          <Icon className="relative z-10 h-4.5 w-4.5" />
          <span className="relative z-10">{label}</span>
        </>
      )}
    </NavLink>
  )
}
