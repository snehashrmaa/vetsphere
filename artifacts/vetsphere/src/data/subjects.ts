// ─── Color palette ───────────────────────────────────────────────────────────

export type SubjectColor =
  | 'blue' | 'emerald' | 'purple' | 'rose'   | 'cyan'
  | 'amber' | 'sky'   | 'green'  | 'orange'  | 'pink'
  | 'teal'  | 'lime'  | 'yellow' | 'indigo'  | 'violet';

export const SUBJECT_COLORS: Record<
  SubjectColor,
  { from: string; to: string; text: string; badge: string }
> = {
  blue:    { from: 'from-blue-500/20',    to: 'to-blue-900/5',    text: 'text-blue-400',    badge: 'bg-blue-500/15 text-blue-300'    },
  emerald: { from: 'from-emerald-500/20', to: 'to-emerald-900/5', text: 'text-emerald-400', badge: 'bg-emerald-500/15 text-emerald-300' },
  purple:  { from: 'from-purple-500/20',  to: 'to-purple-900/5',  text: 'text-purple-400',  badge: 'bg-purple-500/15 text-purple-300'  },
  rose:    { from: 'from-rose-500/20',    to: 'to-rose-900/5',    text: 'text-rose-400',    badge: 'bg-rose-500/15 text-rose-300'      },
  cyan:    { from: 'from-cyan-500/20',    to: 'to-cyan-900/5',    text: 'text-cyan-400',    badge: 'bg-cyan-500/15 text-cyan-300'      },
  amber:   { from: 'from-amber-500/20',   to: 'to-amber-900/5',   text: 'text-amber-400',   badge: 'bg-amber-500/15 text-amber-300'    },
  sky:     { from: 'from-sky-500/20',     to: 'to-sky-900/5',     text: 'text-sky-400',     badge: 'bg-sky-500/15 text-sky-300'        },
  green:   { from: 'from-green-500/20',   to: 'to-green-900/5',   text: 'text-green-400',   badge: 'bg-green-500/15 text-green-300'    },
  orange:  { from: 'from-orange-500/20',  to: 'to-orange-900/5',  text: 'text-orange-400',  badge: 'bg-orange-500/15 text-orange-300'  },
  pink:    { from: 'from-pink-500/20',    to: 'to-pink-900/5',    text: 'text-pink-400',    badge: 'bg-pink-500/15 text-pink-300'      },
  teal:    { from: 'from-teal-500/20',    to: 'to-teal-900/5',    text: 'text-teal-400',    badge: 'bg-teal-500/15 text-teal-300'      },
  lime:    { from: 'from-lime-500/20',    to: 'to-lime-900/5',    text: 'text-lime-400',    badge: 'bg-lime-500/15 text-lime-300'      },
  yellow:  { from: 'from-yellow-500/20',  to: 'to-yellow-900/5',  text: 'text-yellow-400',  badge: 'bg-yellow-500/15 text-yellow-300'  },
  indigo:  { from: 'from-indigo-500/20',  to: 'to-indigo-900/5',  text: 'text-indigo-400',  badge: 'bg-indigo-500/15 text-indigo-300'  },
  violet:  { from: 'from-violet-500/20',  to: 'to-violet-900/5',  text: 'text-violet-400',  badge: 'bg-violet-500/15 text-violet-300'  },
};

// ─── Subject type ─────────────────────────────────────────────────────────────

export interface Subject {
  /** Stable unique identifier */
  id: string;
  /** Display name */
  name: string;
  /** URL-safe slug — used as the route param in /learn/:subjectId */
  slug: string;
  /** Lucide icon name string */
  icon: string;
  /** Key into SUBJECT_COLORS */
  color: SubjectColor;
  /** 0–100; always 0 until content is published */
  progress: number;
  /** Controls the "Coming Soon" badge; set to false when content ships */
  comingSoon: boolean;
}

// ─── Subjects ─────────────────────────────────────────────────────────────────

export const subjects: Subject[] = [
  { id: '1',  name: 'Anatomy',                  slug: 'anatomy',      icon: 'Bone',          color: 'blue',    progress: 0, comingSoon: true },
  { id: '2',  name: 'Physiology',               slug: 'physiology',   icon: 'HeartPulse',    color: 'emerald', progress: 0, comingSoon: true },
  { id: '3',  name: 'Biochemistry',             slug: 'biochemistry', icon: 'FlaskConical',  color: 'purple',  progress: 0, comingSoon: true },
  { id: '4',  name: 'Pathology',                slug: 'pathology',    icon: 'Microscope',    color: 'rose',    progress: 0, comingSoon: true },
  { id: '5',  name: 'Microbiology',             slug: 'microbiology', icon: 'Bug',           color: 'cyan',    progress: 0, comingSoon: true },
  { id: '6',  name: 'Parasitology',             slug: 'parasitology', icon: 'Zap',           color: 'amber',   progress: 0, comingSoon: true },
  { id: '7',  name: 'Pharmacology',             slug: 'pharmacology', icon: 'Pill',          color: 'sky',     progress: 0, comingSoon: true },
  { id: '8',  name: 'Medicine',                 slug: 'medicine',     icon: 'Stethoscope',   color: 'green',   progress: 0, comingSoon: true },
  { id: '9',  name: 'Surgery',                  slug: 'surgery',      icon: 'Scissors',      color: 'orange',  progress: 0, comingSoon: true },
  { id: '10', name: 'Gynecology',               slug: 'gynecology',   icon: 'Baby',          color: 'pink',    progress: 0, comingSoon: true },
  { id: '11', name: 'Veterinary Public Health', slug: 'vph',          icon: 'ShieldCheck',   color: 'teal',    progress: 0, comingSoon: true },
  { id: '12', name: 'Animal Nutrition',         slug: 'nutrition',    icon: 'Leaf',          color: 'lime',    progress: 0, comingSoon: true },
  { id: '13', name: 'Livestock Production',     slug: 'livestock',    icon: 'Beef',          color: 'yellow',  progress: 0, comingSoon: true },
  { id: '14', name: 'Extension Education',      slug: 'extension',    icon: 'GraduationCap', color: 'indigo',  progress: 0, comingSoon: true },
  { id: '15', name: 'Genetics',                 slug: 'genetics',     icon: 'Dna',           color: 'violet',  progress: 0, comingSoon: true },
];

/** Look up a subject by its URL slug. Returns undefined if not found. */
export function getSubjectBySlug(slug: string): Subject | undefined {
  return subjects.find(s => s.slug === slug);
}
