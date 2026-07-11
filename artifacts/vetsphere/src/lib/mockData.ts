import { User, Course, ResearchPaper, CommunityPost, DailyChallenge } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'Dr. Sarah Jenkins',
  email: 'sarah.j@example.com',
  role: 'student',
  university: 'Royal Veterinary College',
  year: 'Year 4',
  avatar: 'SJ'
};

export const courses: Course[] = [
  { id: '1', title: 'Pharmacology', progress: 65, totalLessons: 24, completedLessons: 15, category: 'Core', icon: 'Pill' },
  { id: '2', title: 'Surgery', progress: 30, totalLessons: 40, completedLessons: 12, category: 'Clinical', icon: 'Scissors' },
  { id: '3', title: 'Pathology', progress: 12, totalLessons: 30, completedLessons: 3, category: 'Core', icon: 'Microscope' },
  { id: '4', title: 'Anatomy', progress: 100, totalLessons: 50, completedLessons: 50, category: 'Core', icon: 'Bone' },
];

export const todayChallenge: DailyChallenge = {
  id: 'dc1',
  question: 'What is the correct dosage of Meloxicam for a 20kg dog for post-operative pain relief?',
  options: [
    '0.1 mg/kg',
    '0.2 mg/kg',
    '0.5 mg/kg',
    '1.0 mg/kg'
  ],
  correctOptionIndex: 1,
};

export const researchPapers: ResearchPaper[] = [
  { id: 'rp1', title: 'Advancements in Feline Kidney Disease Management', authors: ['Smith J.', 'Doe A.'], journal: 'Journal of Vet Medicine', date: 'Oct 2023', citations: 45, doi: '10.1234/jvm.2023.01', abstract: 'A comprehensive review of new dietary and pharmaceutical interventions for feline chronic kidney disease.', type: 'Review', specialty: 'Feline' },
  { id: 'rp2', title: 'Efficacy of New Sedative Protocols in Equine Practice', authors: ['Brown T.', 'Green L.'], journal: 'Equine Vet Journal', date: 'Sep 2023', citations: 12, doi: '10.1234/evj.2023.04', abstract: 'Comparing the efficacy of medetomidine and xylazine in field settings for minor surgical procedures.', type: 'Original Research', specialty: 'Equine' },
  { id: 'rp3', title: 'Emerging Tick-Borne Diseases in North America', authors: ['White R.'], journal: 'Parasitology Today', date: 'Aug 2023', citations: 89, doi: '10.1234/pt.2023.11', abstract: 'An overview of newly identified tick-borne pathogens affecting domestic canines in the northern hemisphere.', type: 'Review', specialty: 'Canine' },
];

export const communityPosts: CommunityPost[] = [
  { id: 'cp1', authorId: 'u2', authorName: 'Alex Carter', content: 'Just passed my pharmacology mock exam! The flashcards on VetSphere really helped. Anyone have tips for the upcoming surgery practicals?', timestamp: '2 hours ago', likes: 24, comments: 5, tags: ['Exams', 'Surgery'] },
  { id: 'cp2', authorId: 'u3', authorName: 'Dr. Emily Chen', content: 'Interesting case today: 4yo DSH presented with acute hind limb paresis. Suspected saddle thrombus. Discussing management strategies below.', timestamp: '5 hours ago', likes: 56, comments: 14, tags: ['ClinicalCase', 'Feline'] },
];

export const practiceSets = [
  { id: 'ps1', title: 'General Pharmacology', difficulty: 'Medium', questionsCount: 50, timeLimit: '60 min', tags: ['Core', 'Pharma'] },
  { id: 'ps2', title: 'Equine Anatomy Basics', difficulty: 'Easy', questionsCount: 20, timeLimit: '25 min', tags: ['Anatomy', 'Equine'] },
  { id: 'ps3', title: 'Advanced Surgical Procedures', difficulty: 'Hard', questionsCount: 40, timeLimit: '50 min', tags: ['Surgery'] },
];

export const clinicalCases = [
  { id: 'cc1', title: 'Canine Hip Dysplasia in a Young Lab', specialty: 'Orthopedics', difficulty: 'Medium', description: 'Evaluate radiographs and formulate a treatment plan for a 1-year-old Labrador Retriever.' },
  { id: 'cc2', title: 'Feline Hyperthyroidism Management', specialty: 'Internal Medicine', difficulty: 'Hard', description: 'Complex case involving a 12-year-old cat with concurrent renal insufficiency.' },
  { id: 'cc3', title: 'Acute Colic in a Quarter Horse', specialty: 'Equine', difficulty: 'Hard', description: 'Triage and decide whether medical or surgical intervention is required.' },
];
