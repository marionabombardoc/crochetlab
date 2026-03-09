import { Link } from 'react-router';
import { Clock, Tag } from 'lucide-react';
import { Tutorial } from '../data/tutorials';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface TutorialCardProps {
  tutorial: Tutorial;
}

export function TutorialCard({ tutorial }: TutorialCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
      case 'Advanced':
        return 'bg-red-100 text-red-800 hover:bg-red-100';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };

  return (
    <Link to={`/tutorial/${tutorial.id}`} className="block group">
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={tutorial.image}
            alt={tutorial.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <Badge className={getDifficultyColor(tutorial.difficulty)}>
              {tutorial.difficulty}
            </Badge>
          </div>
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Tag className="size-4" />
            <span>{tutorial.category}</span>
          </div>
          <CardTitle className="group-hover:text-primary transition-colors">
            {tutorial.title}
          </CardTitle>
          <CardDescription>{tutorial.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{tutorial.date}</span>
            <div className="flex items-center gap-1">
              <Clock className="size-4" />
              <span>{tutorial.readTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
