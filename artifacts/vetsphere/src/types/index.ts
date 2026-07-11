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
