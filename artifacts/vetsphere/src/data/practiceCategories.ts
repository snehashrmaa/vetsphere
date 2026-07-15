import { type SubjectColor, SUBJECT_COLORS } from '@/data/subjects';

export { SUBJECT_COLORS };

// ─── Type ─────────────────────────────────────────────────────────────────────

export interface PracticeCategory {
  /** Stable unique identifier */
  id: string;
  /** Display title */
  title: string;
  /** One-line description shown on the card */
  subtitle: string;
  /** URL-safe slug — used as the route param in /practice/:categorySlug */
  slug: string;
  /** Lucide icon name string */
  icon: string;
  /** Key into SUBJECT_COLORS */
  color: SubjectColor;
  /** 0–100; always 0 until content is published */
  progress: number;
  /** Controls the "Coming Soon" badge */
  comingSoon: boolean;
}

// ─── Categories ───────────────────────────────────────────────────────────────

export const practiceCategories: PracticeCategory[] = [
  {
    id: '1',
    title: 'MCQs',
    subtitle: 'Test your knowledge with multiple choice questions',
    slug: 'mcqs',
    icon: 'ListChecks',
    color: 'emerald',
    progress: 0,
    comingSoon: true,
  },
  {
    id: '2',
    title: 'Clinical Cases',
    subtitle: 'Work through realistic patient scenarios',
    slug: 'cases',
    icon: 'Stethoscope',
    color: 'rose',
    progress: 0,
    comingSoon: true,
  },
  {
    id: '3',
    title: 'Rapid Revision',
    subtitle: 'Quick-fire revision on key concepts',
    slug: 'rapid-revision',
    icon: 'Zap',
    color: 'amber',
    progress: 0,
    comingSoon: true,
  },
  {
    id: '4',
    title: 'Mock Tests',
    subtitle: 'Full-length timed examination papers',
    slug: 'mock-tests',
    icon: 'ClipboardCheck',
    color: 'blue',
    progress: 0,
    comingSoon: true,
  },
  {
    id: '5',
    title: 'Previous Year Questions',
    subtitle: 'Practice with past examination questions',
    slug: 'pyq',
    icon: 'History',
    color: 'purple',
    progress: 0,
    comingSoon: true,
  },
];

// ─── Lookup helper ────────────────────────────────────────────────────────────

export function getCategoryBySlug(slug: string): PracticeCategory | undefined {
  return practiceCategories.find(c => c.slug === slug);
}
