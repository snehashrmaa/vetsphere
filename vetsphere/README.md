# VetSphere 2.0 — MVP Foundation

Sprint 1 foundation for the VetSphere veterinary education platform.

## Stack
React 18 + TypeScript + Vite + TailwindCSS + React Router + Framer Motion + Lucide Icons.

## Getting started
```bash
npm install
npm run dev
```

## Structure
```
src/
  app/            # router config
  components/
    ui/           # Button, Input, Modal, Drawer, Loader, Toast, ThemeToggle
    cards/        # GlassCard, StatCard, FeatureCard, SubjectCard
    navigation/   # Sidebar, BottomNav, Navbar
    common/       # Hero, SearchBar, PlaceholderPage
  layouts/        # DashboardLayout, LandingLayout
  features/       # auth, learn, practice, clinic, ai, community, wildlife, profile
  hooks/          # useTheme, useMediaQuery
  lib/            # utils, navigation config, mock data
  pages/          # route-level pages
  types/          # shared TS types
  styles/         # globals.css (Tailwind + design tokens)
```

## Design tokens
- Primary `#10B981` · Secondary `#0F172A` · Background `#F8FAFC` · Accent `#06B6D4`
- Warning `#F59E0B` · Danger `#EF4444`
- Headings: Poppins · Body: Inter
- 8px spacing scale, rounded-xl cards, glassmorphism, soft shadows, motion throughout

## Navigation
- Desktop: fixed sidebar (Dashboard, Learn, Practice, Clinic, AI Mentor, Research, Wildlife, Community, Career, Profile, Settings)
- Mobile: bottom nav (Home, Learn, Clinic, AI, Community)

## What's built
Routing, dashboard layout, sidebar, bottom nav, landing page, auth pages, theme system (light/dark), responsive layout, and the full reusable component library — ready for Learn/Practice/Clinic/AI/Community/Wildlife feature work in the next sprint.

## Next sprint hooks
- Supabase client → `src/services/`
- PWA manifest + service worker
- Real auth wired into `features/auth`
- Feature content wired into `features/learn`, `features/practice`, etc.
