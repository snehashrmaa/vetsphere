import {
  Home,
  BookOpen,
  Stethoscope,
  Brain,
  Globe2,
  User,
  Settings,
  FlaskConical,
  PawPrint,
  Briefcase,
  Dumbbell,
  type LucideIcon,
} from 'lucide-react'

export interface NavConfigItem {
  label: string
  path: string
  icon: LucideIcon
}

// Primary items shown in bottom nav (mobile) — matches spec exactly
export const bottomNavItems: NavConfigItem[] = [
  { label: 'Home', path: '/dashboard', icon: Home },
  { label: 'Learn', path: '/learn', icon: BookOpen },
  { label: 'Clinic', path: '/clinic', icon: Stethoscope },
  { label: 'AI', path: '/ai', icon: Brain },
  { label: 'Community', path: '/community', icon: Globe2 },
]

// Full sidebar (desktop)
export const sidebarNavItems: NavConfigItem[] = [
  { label: 'Dashboard', path: '/dashboard', icon: Home },
  { label: 'Learn', path: '/learn', icon: BookOpen },
  { label: 'Practice', path: '/practice', icon: Dumbbell },
  { label: 'Clinic', path: '/clinic', icon: Stethoscope },
  { label: 'AI Mentor', path: '/ai', icon: Brain },
  { label: 'Research', path: '/research', icon: FlaskConical },
  { label: 'Wildlife', path: '/wildlife', icon: PawPrint },
  { label: 'Community', path: '/community', icon: Globe2 },
  { label: 'Career', path: '/career', icon: Briefcase },
]

export const sidebarFooterItems: NavConfigItem[] = [
  { label: 'Profile', path: '/profile', icon: User },
  { label: 'Settings', path: '/settings', icon: Settings },
]
