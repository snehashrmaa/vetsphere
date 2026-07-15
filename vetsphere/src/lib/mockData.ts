import {
  Bone,
  HeartPulse,
  FlaskConical,
  Bug,
  Pill,
  Stethoscope,
  Scissors,
  Baby,
  Wheat,
  Milk,
  ShieldCheck,
  Microscope,
} from 'lucide-react'
import type { Subject, Note, Exam, CommunityPost, ResearchItem } from '@/types'

export const subjects: (Subject & { icon: any; color: string })[] = [
  { id: 'anatomy', name: 'Anatomy', description: 'Structure of the animal body', icon: Bone, color: 'bg-primary-500', progress: 72, totalTopics: 40, completedTopics: 29 },
  { id: 'physiology', name: 'Physiology', description: 'Function of body systems', icon: HeartPulse, color: 'bg-accent-500', progress: 58, totalTopics: 36, completedTopics: 21 },
  { id: 'biochemistry', name: 'Biochemistry', description: 'Chemical processes of life', icon: FlaskConical, color: 'bg-emerald-500', progress: 44, totalTopics: 32, completedTopics: 14 },
  { id: 'pathology', name: 'Pathology', description: 'Disease mechanisms', icon: Microscope, color: 'bg-rose-500', progress: 33, totalTopics: 38, completedTopics: 12 },
  { id: 'microbiology', name: 'Microbiology', description: 'Microorganisms & disease', icon: Bug, color: 'bg-amber-500', progress: 61, totalTopics: 30, completedTopics: 18 },
  { id: 'pharmacology', name: 'Pharmacology', description: 'Drugs and their effects', icon: Pill, color: 'bg-violet-500', progress: 25, totalTopics: 34, completedTopics: 8 },
  { id: 'medicine', name: 'Medicine', description: 'Internal medicine practice', icon: Stethoscope, color: 'bg-cyan-600', progress: 40, totalTopics: 45, completedTopics: 18 },
  { id: 'surgery', name: 'Surgery', description: 'Surgical principles & practice', icon: Scissors, color: 'bg-red-500', progress: 15, totalTopics: 28, completedTopics: 4 },
  { id: 'gynecology', name: 'Gynecology', description: 'Reproduction & obstetrics', icon: Baby, color: 'bg-pink-500', progress: 50, totalTopics: 24, completedTopics: 12 },
  { id: 'animal-nutrition', name: 'Animal Nutrition', description: 'Feed & dietary science', icon: Wheat, color: 'bg-yellow-500', progress: 66, totalTopics: 20, completedTopics: 13 },
  { id: 'livestock-production', name: 'Livestock Production', description: 'Farm animal management', icon: Milk, color: 'bg-orange-500', progress: 38, totalTopics: 26, completedTopics: 10 },
  { id: 'veterinary-public-health', name: 'Veterinary Public Health', description: 'Zoonoses & food safety', icon: ShieldCheck, color: 'bg-teal-600', progress: 20, totalTopics: 22, completedTopics: 4 },
]

export const recentNotes: Note[] = [
  { id: '1', title: 'Cardiac Cycle Overview', subject: 'Physiology', updatedAt: '2h ago' },
  { id: '2', title: 'Bovine Forelimb Osteology', subject: 'Anatomy', updatedAt: 'Yesterday' },
  { id: '3', title: 'Antibiotic Classes Summary', subject: 'Pharmacology', updatedAt: '2 days ago' },
]

export const upcomingExams: Exam[] = [
  { id: '1', title: 'Mid-Term: Pathology', date: 'Jul 18', subject: 'Pathology' },
  { id: '2', title: 'Practical: Surgery', date: 'Jul 22', subject: 'Surgery' },
  { id: '3', title: 'Quiz: Microbiology', date: 'Jul 25', subject: 'Microbiology' },
]

export const communityFeed: CommunityPost[] = [
  { id: '1', author: 'Ariana P.', content: 'Anyone have good mnemonics for cranial nerves? Struggling to retain them 😅', likes: 24, comments: 8, timeAgo: '1h' },
  { id: '2', author: 'Devraj K.', content: 'Just finished my first large-animal clinical rotation. Ask me anything!', likes: 56, comments: 19, timeAgo: '4h' },
  { id: '3', author: 'Maya S.', content: 'Sharing my Pharmacology flashcard deck — link in comments.', likes: 41, comments: 6, timeAgo: '6h' },
]

export const researchFeed: ResearchItem[] = [
  { id: '1', title: 'Emerging Antimicrobial Resistance Patterns in Companion Animals', journal: 'Journal of Veterinary Medicine', timeAgo: '3h ago', tag: 'Microbiology' },
  { id: '2', title: 'Novel Approaches to Bovine Mastitis Prevention', journal: 'Livestock Science Review', timeAgo: '1d ago', tag: 'Livestock' },
  { id: '3', title: 'Wildlife Rehabilitation: A Decade in Review', journal: 'Wildlife Health Journal', timeAgo: '2d ago', tag: 'Wildlife' },
]
