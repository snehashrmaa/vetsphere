import { Subject } from '../types';

export type SubjectColorKey = 
  | 'blue' | 'emerald' | 'purple' | 'rose' | 'cyan'
  | 'amber' | 'sky' | 'green' | 'orange' | 'pink'
  | 'teal' | 'lime' | 'yellow' | 'indigo' | 'violet';

export const SUBJECT_COLORS: Record<SubjectColorKey, { from: string; to: string; text: string; badge: string }> = {
  blue:    { from: 'from-blue-500/20',    to: 'to-blue-900/5',    text: 'text-blue-400',    badge: 'bg-blue-500/15 text-blue-300' },
  emerald: { from: 'from-emerald-500/20', to: 'to-emerald-900/5', text: 'text-emerald-400', badge: 'bg-emerald-500/15 text-emerald-300' },
  purple:  { from: 'from-purple-500/20',  to: 'to-purple-900/5',  text: 'text-purple-400',  badge: 'bg-purple-500/15 text-purple-300' },
  rose:    { from: 'from-rose-500/20',    to: 'to-rose-900/5',    text: 'text-rose-400',    badge: 'bg-rose-500/15 text-rose-300' },
  cyan:    { from: 'from-cyan-500/20',    to: 'to-cyan-900/5',    text: 'text-cyan-400',    badge: 'bg-cyan-500/15 text-cyan-300' },
  amber:   { from: 'from-amber-500/20',   to: 'to-amber-900/5',   text: 'text-amber-400',   badge: 'bg-amber-500/15 text-amber-300' },
  sky:     { from: 'from-sky-500/20',     to: 'to-sky-900/5',     text: 'text-sky-400',     badge: 'bg-sky-500/15 text-sky-300' },
  green:   { from: 'from-green-500/20',   to: 'to-green-900/5',   text: 'text-green-400',   badge: 'bg-green-500/15 text-green-300' },
  orange:  { from: 'from-orange-500/20',  to: 'to-orange-900/5',  text: 'text-orange-400',  badge: 'bg-orange-500/15 text-orange-300' },
  pink:    { from: 'from-pink-500/20',    to: 'to-pink-900/5',    text: 'text-pink-400',    badge: 'bg-pink-500/15 text-pink-300' },
  teal:    { from: 'from-teal-500/20',    to: 'to-teal-900/5',    text: 'text-teal-400',    badge: 'bg-teal-500/15 text-teal-300' },
  lime:    { from: 'from-lime-500/20',    to: 'to-lime-900/5',    text: 'text-lime-400',    badge: 'bg-lime-500/15 text-lime-300' },
  yellow:  { from: 'from-yellow-500/20',  to: 'to-yellow-900/5',  text: 'text-yellow-400',  badge: 'bg-yellow-500/15 text-yellow-300' },
  indigo:  { from: 'from-indigo-500/20',  to: 'to-indigo-900/5',  text: 'text-indigo-400',  badge: 'bg-indigo-500/15 text-indigo-300' },
  violet:  { from: 'from-violet-500/20',  to: 'to-violet-900/5',  text: 'text-violet-400',  badge: 'bg-violet-500/15 text-violet-300' },
};

export const subjects: Subject[] = [
  { id: 'anatomy', title: 'Anatomy', icon: 'Bone', colorKey: 'blue', progress: 78, totalLessons: 52, completedLessons: 40, totalChapters: 8, description: 'Systematic study of animal body structures including musculoskeletal, nervous, and organ systems across major species.', isFavorited: true, category: 'Core', lastStudied: '2 hours ago' },
  { id: 'physiology', title: 'Physiology', icon: 'HeartPulse', colorKey: 'emerald', progress: 55, totalLessons: 48, completedLessons: 26, totalChapters: 9, description: 'Functional processes of animal organ systems including cardiovascular, respiratory, renal, and endocrine physiology.', isFavorited: false, category: 'Core', lastStudied: 'Yesterday' },
  { id: 'biochemistry', title: 'Biochemistry', icon: 'FlaskConical', colorKey: 'purple', progress: 40, totalLessons: 44, completedLessons: 17, totalChapters: 7, description: 'Molecular mechanisms of life including enzyme kinetics, metabolic pathways, and molecular biology fundamentals.', isFavorited: false, category: 'Core', lastStudied: '3 days ago' },
  { id: 'pathology', title: 'Pathology', icon: 'Microscope', colorKey: 'rose', progress: 62, totalLessons: 60, completedLessons: 37, totalChapters: 10, description: 'Study of disease mechanisms, lesion recognition, gross and histopathological diagnosis in domestic and exotic species.', isFavorited: true, category: 'Core', lastStudied: 'Today' },
  { id: 'microbiology', title: 'Microbiology', icon: 'Bug', colorKey: 'cyan', progress: 33, totalLessons: 38, completedLessons: 12, totalChapters: 6, description: 'Veterinary bacteriology, virology, mycology and immunology with emphasis on zoonotic disease and laboratory diagnostics.', isFavorited: false, category: 'Core' },
  { id: 'parasitology', title: 'Parasitology', icon: 'Zap', colorKey: 'amber', progress: 20, totalLessons: 36, completedLessons: 7, totalChapters: 6, description: 'Helminthology, protozoology and entomology covering lifecycle, pathogenesis, diagnosis and control of veterinary parasites.', isFavorited: false, category: 'Core' },
  { id: 'pharmacology', title: 'Pharmacology', icon: 'Pill', colorKey: 'sky', progress: 71, totalLessons: 50, completedLessons: 35, totalChapters: 9, description: 'Drug mechanisms, pharmacokinetics, pharmacodynamics, and therapeutic use of antimicrobials, analgesics and anaesthetics.', isFavorited: true, category: 'Core', lastStudied: '1 day ago' },
  { id: 'medicine', title: 'Medicine', icon: 'Stethoscope', colorKey: 'green', progress: 48, totalLessons: 72, completedLessons: 34, totalChapters: 12, description: 'Clinical diagnosis and management of diseases in small and large animals including internal medicine case work-ups.', isFavorited: false, category: 'Clinical', lastStudied: '4 days ago' },
  { id: 'surgery', title: 'Surgery', icon: 'Scissors', colorKey: 'orange', progress: 30, totalLessons: 56, completedLessons: 16, totalChapters: 10, description: 'Surgical principles, anaesthesia, soft tissue and orthopaedic procedures across canine, feline, equine and ruminant species.', isFavorited: true, category: 'Clinical', lastStudied: '1 week ago' },
  { id: 'gynecology', title: 'Gynecology', icon: 'Baby', colorKey: 'pink', progress: 15, totalLessons: 34, completedLessons: 5, totalChapters: 6, description: 'Reproductive physiology, breeding management, obstetrics, neonatology, and infertility diagnosis in domestic animals.', isFavorited: false, category: 'Clinical' },
  { id: 'vph', title: 'Veterinary Public Health', icon: 'ShieldCheck', colorKey: 'teal', progress: 25, totalLessons: 32, completedLessons: 8, totalChapters: 5, description: 'Zoonotic disease surveillance, food hygiene, meat inspection, One Health principles and epidemiological methods.', isFavorited: false, category: 'Professional' },
  { id: 'nutrition', title: 'Animal Nutrition', icon: 'Leaf', colorKey: 'lime', progress: 60, totalLessons: 30, completedLessons: 18, totalChapters: 5, description: 'Macro and micronutrient requirements, diet formulation, feed analysis, and nutritional disease management for livestock and pets.', isFavorited: false, category: 'Applied', lastStudied: '2 days ago' },
  { id: 'livestock', title: 'Livestock Production', icon: 'Beef', colorKey: 'yellow', progress: 45, totalLessons: 28, completedLessons: 12, totalChapters: 5, description: 'Principles of cattle, sheep, goat, pig and poultry production including husbandry systems, breeding and herd health programs.', isFavorited: false, category: 'Applied' },
  { id: 'extension', title: 'Extension Education', icon: 'GraduationCap', colorKey: 'indigo', progress: 10, totalLessons: 24, completedLessons: 2, totalChapters: 4, description: 'Veterinary extension methodologies, farmer communication strategies, rural advisory services and agri-entrepreneurship.', isFavorited: false, category: 'Professional' },
  { id: 'genetics', title: 'Genetics', icon: 'Dna', colorKey: 'violet', progress: 35, totalLessons: 40, completedLessons: 14, totalChapters: 7, description: 'Mendelian and quantitative genetics, population genetics, genetic disorders, marker-assisted selection and genomic tools in animal breeding.', isFavorited: false, category: 'Applied' },
];
