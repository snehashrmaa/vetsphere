import { User, DailyChallenge } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'Dr. Sarah Jenkins',
  email: 'sarah.j@example.com',
  role: 'student',
  university: 'Royal Veterinary College',
  year: 'Year 4',
  avatar: 'SJ'
};

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
