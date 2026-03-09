export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  totalPoints: number;
  level: number;
  videosWatched: {
    Basics: number;
    Patterns: number;
    Toys: number;
    'Home Decor': number;
  };
  totalVideosWatched: number;
  achievements: string[];
  memberSince: string;
}

export interface Submission {
  id: string;
  userId: string;
  userName: string;
  tutorialId: string;
  tutorialTitle: string;
  tutorialDifficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  photoUrl: string;
  comment: string;
  struggles?: string;
  submittedAt: string;
  status: 'pending' | 'reviewed' | 'rejected';
  pointsAwarded?: number;
  adminComment?: string;
  reviewedAt?: string;
}

// Mock current user
export const currentUser: UserProfile = {
  id: '1',
  name: 'Maria García',
  email: 'maria.garcia@example.com',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  totalPoints: 78,
  level: 3,
  videosWatched: {
    Basics: 8,
    Patterns: 5,
    Toys: 3,
    'Home Decor': 2,
  },
  totalVideosWatched: 18,
  achievements: [
    'First Steps (Watch your first video)',
    'Pattern Pro (Watch 5 pattern videos)',
    'Week Warrior (Watch videos 7 days in a row)',
  ],
  memberSince: '2025-01-15',
};

// Calculate level based on points
export function calculateLevel(points: number): number {
  if (points < 20) return 1;
  if (points < 50) return 2;
  if (points < 100) return 3;
  if (points < 200) return 4;
  if (points < 350) return 5;
  return 6;
}

// Get points needed for next level
export function getPointsForNextLevel(currentPoints: number): { current: number; needed: number; total: number } {
  const level = calculateLevel(currentPoints);
  const levelThresholds = [0, 20, 50, 100, 200, 350, 500];
  
  if (level >= 6) {
    return { current: currentPoints, needed: 0, total: 500 };
  }
  
  return {
    current: currentPoints - levelThresholds[level - 1],
    needed: levelThresholds[level] - currentPoints,
    total: levelThresholds[level] - levelThresholds[level - 1],
  };
}

// Get level name
export function getLevelName(level: number): string {
  const levelNames = [
    'Beginner Crocheter',
    'Novice Crafter',
    'Intermediate Maker',
    'Advanced Artisan',
    'Expert Creator',
    'Master Crocheter',
  ];
  return levelNames[level - 1] || 'Crochet Enthusiast';
}

// Mock submissions for admin review
export const mockSubmissions: Submission[] = [
  {
    id: 's1',
    userId: '2',
    userName: 'Anna López',
    tutorialId: '1',
    tutorialTitle: 'Basic Chain Stitch',
    tutorialDifficulty: 'Beginner',
    photoUrl: 'https://images.unsplash.com/photo-1676557078316-eb85791d3cb0?w=800&h=600&fit=crop',
    comment: 'This was my first crochet project! It took me a while to get the tension right.',
    struggles: 'I struggled with keeping the tension even, but by the end I got the hang of it!',
    submittedAt: '2026-03-08T14:30:00',
    status: 'pending',
  },
  {
    id: 's2',
    userId: '3',
    userName: 'Laura Martínez',
    tutorialId: '2',
    tutorialTitle: 'Granny Square Pattern',
    tutorialDifficulty: 'Beginner',
    photoUrl: 'https://images.unsplash.com/photo-1759544632264-a31a9ff1e60b?w=800&h=600&fit=crop',
    comment: 'I loved making this! The colors turned out great.',
    struggles: 'Joining the rounds was tricky at first.',
    submittedAt: '2026-03-08T16:45:00',
    status: 'pending',
  },
  {
    id: 's3',
    userId: '4',
    userName: 'Carlos Rodríguez',
    tutorialId: '3',
    tutorialTitle: 'Amigurumi Bear',
    tutorialDifficulty: 'Intermediate',
    photoUrl: 'https://images.unsplash.com/photo-1626241803094-88edd8ae6453?w=800&h=600&fit=crop',
    comment: 'Made this for my daughter. She absolutely loves it!',
    struggles: 'The shaping of the head was challenging.',
    submittedAt: '2026-03-07T10:20:00',
    status: 'reviewed',
    pointsAwarded: 9,
    adminComment: 'Excellent work! Clean stitches and great color choice.',
    reviewedAt: '2026-03-08T09:00:00',
  },
  {
    id: 's4',
    userId: '5',
    userName: 'Sofia Hernández',
    tutorialId: '4',
    tutorialTitle: 'Storage Basket',
    tutorialDifficulty: 'Intermediate',
    photoUrl: 'https://images.unsplash.com/photo-1552959933-595ad8829c0f?w=800&h=600&fit=crop',
    comment: 'Perfect for organizing my craft supplies!',
    struggles: 'Maintaining the shape while working in the round.',
    submittedAt: '2026-03-06T18:00:00',
    status: 'reviewed',
    pointsAwarded: 8,
    adminComment: 'Great job! The basket shape is consistent.',
    reviewedAt: '2026-03-07T14:30:00',
  },
  {
    id: 's5',
    userId: '6',
    userName: 'David Sánchez',
    tutorialId: '5',
    tutorialTitle: 'Advanced Lace Doily',
    tutorialDifficulty: 'Advanced',
    photoUrl: 'https://images.unsplash.com/photo-1634757440938-a671a5924363?w=800&h=600&fit=crop',
    comment: 'This was incredibly challenging but so rewarding!',
    struggles: 'The intricate pattern required a lot of concentration.',
    submittedAt: '2026-03-09T08:15:00',
    status: 'pending',
  },
];
