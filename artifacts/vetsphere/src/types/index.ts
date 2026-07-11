export interface NavItem {
  title: string;
  href: string;
  icon: any; 
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'student' | 'practitioner';
  university?: string;
  year?: string;
}

export interface Course {
  id: string;
  title: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  category: string;
  icon: string;
}

export interface LearningModule {
  id: string;
  courseId: string;
  title: string;
  duration: number;
  completed: boolean;
}

export interface QuickAction {
  title: string;
  href: string;
  icon: any;
}

export interface StatCard {
  label: string;
  value: string | number;
  trend?: number;
  icon: any;
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  date: string;
  citations: number;
  doi: string;
  abstract: string;
  type: string;
  specialty: string;
}

export interface CommunityPost {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  tags: string[];
}

export interface DailyChallenge {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
}

export interface DailyStreak {
  days: number;
  lastActive: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: any;
}

// ── Learn Module ──────────────────────────────────────────────

export interface Subject {
  id: string;
  title: string;
  icon: string;
  colorKey: string;       // key into SUBJECT_COLORS map
  progress: number;       // 0-100
  totalLessons: number;
  completedLessons: number;
  totalChapters: number;
  description: string;
  isFavorited: boolean;
  category: 'Core' | 'Clinical' | 'Applied' | 'Professional';
  lastStudied?: string;
}

export interface Chapter {
  id: string;
  subjectId: string;
  title: string;
  lessonCount: number;
  duration: string;        // e.g. "45 min"
  isCompleted: boolean;
  isLocked: boolean;
  order: number;
}

export interface Lesson {
  id: string;
  chapterId: string;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'quiz' | 'case';
  isCompleted: boolean;
}

export interface Flashcard {
  id: string;
  subjectId: string;
  front: string;
  back: string;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface MCQQuestion {
  id: string;
  subjectId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
}

export interface SubjectClinicalCase {
  id: string;
  subjectId: string;
  title: string;
  species: string;
  signalment: string;
  presentation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  learningObjectives: string[];
}

export interface VideoLesson {
  id: string;
  subjectId: string;
  title: string;
  instructor: string;
  duration: string;
  thumbnail: string;       // gradient key
  views: number;
  topic: string;
}

export interface DownloadItem {
  id: string;
  subjectId: string;
  title: string;
  type: 'PDF' | 'PPTX' | 'DOCX' | 'ZIP';
  size: string;
  description: string;
  downloads: number;
}

export interface SubjectNote {
  id: string;
  subjectId: string;
  chapterId: string;
  chapterTitle: string;
  content: string;
  updatedAt: string;
}

export interface Bookmark {
  id: string;
  subjectId: string;
  type: 'lesson' | 'flashcard' | 'mcq' | 'case' | 'video';
  title: string;
  savedAt: string;
  reference: string;
}
