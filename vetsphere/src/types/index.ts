export type Theme = 'light' | 'dark'

export interface NavItem {
  label: string
  path: string
  icon: string
}

export interface Subject {
  id: string
  name: string
  description: string
  icon: unknown
  color: string
  progress: number
  totalTopics: number
  completedTopics: number
}

export interface User {
  id: string
  name: string
  email: string
  avatarUrl?: string
  year?: string
  college?: string
  streak: number
}

export interface Note {
  id: string
  title: string
  subject: string
  updatedAt: string
}

export interface Exam {
  id: string
  title: string
  date: string
  subject: string
}

export interface CommunityPost {
  id: string
  author: string
  avatarUrl?: string
  content: string
  likes: number
  comments: number
  timeAgo: string
}

export interface ResearchItem {
  id: string
  title: string
  journal: string
  timeAgo: string
  tag: string
}
