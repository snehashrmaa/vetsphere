import { motion } from 'framer-motion'
import { Bell, Lock, Moon, Globe, LogOut } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'

const settingsGroups = [
  {
    title: 'Preferences',
    items: [
      { icon: Moon, label: 'Appearance', control: <ThemeToggle /> },
      { icon: Bell, label: 'Notifications', control: <span className="text-xs text-secondary-400">On</span> },
      { icon: Globe, label: 'Language', control: <span className="text-xs text-secondary-400">English</span> },
    ],
  },
  {
    title: 'Account',
    items: [
      { icon: Lock, label: 'Privacy & Security', control: null },
    ],
  },
]

export default function Settings() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl font-bold text-secondary-900 sm:text-3xl">Settings</h1>
        <p className="mt-1 text-sm text-secondary-500">Manage your preferences and account.</p>
      </motion.div>

      {settingsGroups.map((group) => (
        <div key={group.title} className="card-surface overflow-hidden">
          <div className="border-b border-secondary-100 px-5 py-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-secondary-400">{group.title}</h2>
          </div>
          <div className="divide-y divide-secondary-100">
            {group.items.map((item) => (
              <div key={item.label} className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-3">
                  <item.icon className="h-4.5 w-4.5 text-secondary-400" />
                  <span className="text-sm font-medium text-secondary-800">{item.label}</span>
                </div>
                {item.control}
              </div>
            ))}
          </div>
        </div>
      ))}

      <Button variant="outline" className="text-danger border-red-200 hover:bg-red-50">
        <LogOut className="h-4 w-4" /> Log out
      </Button>
    </div>
  )
}
