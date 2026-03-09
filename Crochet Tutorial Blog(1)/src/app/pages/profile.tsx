import { Link } from 'react-router';
import { 
  User, 
  Award, 
  TrendingUp, 
  Calendar,
  Trophy,
  Target,
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  currentUser, 
  getLevelName, 
  getPointsForNextLevel
} from '../data/users';

export function Profile() {
  const progressToNextLevel = getPointsForNextLevel(currentUser.totalPoints);
  const progressPercentage = (progressToNextLevel.current / progressToNextLevel.total) * 100;

  // Calculate total videos per category (mock total available)
  const totalVideosByCategory = {
    Basics: 12,
    Patterns: 15,
    Toys: 10,
    'Home Decor': 8,
  };

  const categoryColors = {
    Basics: { bg: 'bg-emerald-100', text: 'text-emerald-700', bar: 'bg-emerald-500' },
    Patterns: { bg: 'bg-blue-100', text: 'text-blue-700', bar: 'bg-blue-500' },
    Toys: { bg: 'bg-pink-100', text: 'text-pink-700', bar: 'bg-pink-500' },
    'Home Decor': { bg: 'bg-amber-100', text: 'text-amber-700', bar: 'bg-amber-500' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="size-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  {currentUser.avatar ? (
                    <img
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                      <User className="size-16 text-primary" />
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 size-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="font-bold text-white">{currentUser.level}</span>
                </div>
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl mb-2">{currentUser.name}</h1>
                <p className="text-lg text-muted-foreground mb-3">{currentUser.email}</p>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1.5">
                  <Award className="size-4 mr-2" />
                  {getLevelName(currentUser.level)}
                </Badge>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="size-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-2">
                    <div>
                      <p className="text-2xl font-bold text-primary">{currentUser.totalPoints}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Points</p>
                </div>
                <div className="text-center">
                  <div className="size-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-2">
                    <div>
                      <p className="text-2xl font-bold text-accent">{currentUser.totalVideosWatched}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Videos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Progress & Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Level Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="size-5 text-primary" />
                  Level Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      Level {currentUser.level} - {getLevelName(currentUser.level)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {progressToNextLevel.needed} points to Level {currentUser.level + 1}
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-muted-foreground">
                      {progressToNextLevel.current} / {progressToNextLevel.total} points
                    </span>
                    <span className="text-xs font-medium text-primary">
                      {Math.round(progressPercentage)}%
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{currentUser.totalPoints}</div>
                    <div className="text-xs text-muted-foreground">Total Points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{currentUser.totalVideosWatched}</div>
                    <div className="text-xs text-muted-foreground">Videos Watched</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-foreground">{currentUser.level}</div>
                    <div className="text-xs text-muted-foreground">Current Level</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Videos Watched by Category */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="size-5 text-primary" />
                  Learning Progress by Category
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {(Object.keys(currentUser.videosWatched) as Array<keyof typeof currentUser.videosWatched>).map((category) => {
                  const watched = currentUser.videosWatched[category];
                  const total = totalVideosByCategory[category];
                  const percentage = (watched / total) * 100;
                  const colors = categoryColors[category];

                  return (
                    <div key={category}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={`${colors.bg} ${colors.text} border-0`}>
                            {category}
                          </Badge>
                        </div>
                        <span className="text-sm font-medium">
                          {watched}/{total} videos ({Math.round(percentage)}%)
                        </span>
                      </div>
                      <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${colors.bar} transition-all duration-500 rounded-full`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="size-5 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {currentUser.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20"
                    >
                      <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="size-5 text-primary" />
                      </div>
                      <p className="font-medium">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            {/* Member Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="size-5 text-primary" />
                  Member Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Member Since</p>
                  <p className="font-medium">
                    {new Date(currentUser.memberSince).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Days Active</p>
                  <p className="font-medium">
                    {Math.floor(
                      (Date.now() - new Date(currentUser.memberSince).getTime()) /
                        (1000 * 60 * 60 * 24)
                    )}{' '}
                    days
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Average per Week</p>
                  <p className="font-medium">
                    {(
                      currentUser.totalVideosWatched /
                      Math.max(
                        1,
                        Math.floor(
                          (Date.now() - new Date(currentUser.memberSince).getTime()) /
                            (1000 * 60 * 60 * 24 * 7)
                        )
                      )
                    ).toFixed(1)}{' '}
                    videos
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Next Goals */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="size-5 text-primary" />
                  Next Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Reach Level {currentUser.level + 1}</p>
                    <p className="text-xs text-muted-foreground">
                      Earn {progressToNextLevel.needed} more points
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent-foreground">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Complete Basics</p>
                    <p className="text-xs text-muted-foreground">
                      Watch {totalVideosByCategory.Basics - currentUser.videosWatched.Basics} more videos
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-secondary-foreground">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Try Advanced Project</p>
                    <p className="text-xs text-muted-foreground">Challenge yourself!</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card>
              <CardContent className="pt-6 text-center space-y-3">
                <p className="text-sm text-muted-foreground">Keep learning to level up!</p>
                <Link to="/tutorials">
                  <Button className="w-full">
                    Browse Tutorials
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}