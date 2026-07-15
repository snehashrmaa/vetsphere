import { type SubjectColor, SUBJECT_COLORS } from '@/data/subjects';

export { SUBJECT_COLORS };

// ─── Type ─────────────────────────────────────────────────────────────────────

export interface ClinicTool {
  /** Stable unique identifier */
  id: string;
  /** Display name */
  name: string;
  /** One-line description shown on the card */
  description: string;
  /** URL-safe slug — used as the route param in /clinic/:toolSlug */
  slug: string;
  /** Lucide icon name string */
  icon: string;
  /** Key into SUBJECT_COLORS */
  color: SubjectColor;
  /** Controls the "Coming Soon" badge */
  comingSoon: boolean;
}

// ─── Tools ────────────────────────────────────────────────────────────────────

export const clinicTools: ClinicTool[] = [
  {
    id: '1',
    name: 'Drug Calculator',
    description: 'Calculate safe drug dosages by weight and species',
    slug: 'drug-calculator',
    icon: 'Pill',
    color: 'emerald',
    comingSoon: true,
  },
  {
    id: '2',
    name: 'Dose Calculator',
    description: 'Determine correct doses for common medications',
    slug: 'dose-calculator',
    icon: 'Calculator',
    color: 'blue',
    comingSoon: true,
  },
  {
    id: '3',
    name: 'Fluid Therapy',
    description: 'Plan intravenous fluid rates and volumes',
    slug: 'fluid-therapy',
    icon: 'Droplets',
    color: 'cyan',
    comingSoon: true,
  },
  {
    id: '4',
    name: 'Disease Library',
    description: 'Reference guide for veterinary diseases and conditions',
    slug: 'disease-library',
    icon: 'BookOpen',
    color: 'rose',
    comingSoon: true,
  },
  {
    id: '5',
    name: 'Vaccination Schedule',
    description: 'Species-specific immunization protocols and timelines',
    slug: 'vaccination',
    icon: 'Shield',
    color: 'green',
    comingSoon: true,
  },
  {
    id: '6',
    name: 'Laboratory Values',
    description: 'Normal reference ranges for blood and urine parameters',
    slug: 'lab-values',
    icon: 'FlaskConical',
    color: 'purple',
    comingSoon: true,
  },
  {
    id: '7',
    name: 'Breed Reference',
    description: 'Breed-specific health and clinical characteristics',
    slug: 'breed-reference',
    icon: 'PawPrint',
    color: 'amber',
    comingSoon: true,
  },
  {
    id: '8',
    name: 'Emergency Guide',
    description: 'Quick-access protocols for critical clinical situations',
    slug: 'emergency-guide',
    icon: 'AlertCircle',
    color: 'orange',
    comingSoon: true,
  },
];

// ─── Lookup helper ────────────────────────────────────────────────────────────

export function getToolBySlug(slug: string): ClinicTool | undefined {
  return clinicTools.find(t => t.slug === slug);
}
