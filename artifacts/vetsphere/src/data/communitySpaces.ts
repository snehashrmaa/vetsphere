import { type SubjectColor, SUBJECT_COLORS } from './subjects';

export { SUBJECT_COLORS };

// ─── CommunitySpace type ──────────────────────────────────────────────────────

export interface CommunitySpace {
  id: string;
  /** Display name */
  name: string;
  /** URL-safe slug — used as the route param in /community/:spaceSlug */
  slug: string;
  /** Short description shown on the card */
  description: string;
  /** Lucide icon name string */
  icon: string;
  /** Key into SUBJECT_COLORS */
  color: SubjectColor;
}

// ─── Community Spaces ─────────────────────────────────────────────────────────

export const communitySpaces: CommunitySpace[] = [
  {
    id: '1',
    name: 'General Discussion',
    slug: 'general',
    description: 'Open conversations about anything in the veterinary world.',
    icon: 'MessageSquare',
    color: 'blue',
  },
  {
    id: '2',
    name: 'One Health',
    slug: 'one-health',
    description: 'Bridging human, animal, and environmental health together.',
    icon: 'Heart',
    color: 'emerald',
  },
  {
    id: '3',
    name: 'Wildlife',
    slug: 'wildlife',
    description: 'Conservation medicine, wildlife cases, and field experiences.',
    icon: 'TreePine',
    color: 'amber',
  },
  {
    id: '4',
    name: 'Research',
    slug: 'research',
    description: 'Share findings, papers, and discuss ongoing veterinary research.',
    icon: 'FlaskConical',
    color: 'violet',
  },
  {
    id: '5',
    name: 'Events & Workshops',
    slug: 'events',
    description: 'Discover conferences, webinars, and hands-on workshops.',
    icon: 'CalendarDays',
    color: 'cyan',
  },
  {
    id: '6',
    name: 'Career Network',
    slug: 'career-network',
    description: 'Jobs, internships, mentorship, and professional guidance.',
    icon: 'Briefcase',
    color: 'rose',
  },
];

/** Look up a community space by its URL slug. Returns undefined if not found. */
export function getSpaceBySlug(slug: string): CommunitySpace | undefined {
  return communitySpaces.find((s) => s.slug === slug);
}
