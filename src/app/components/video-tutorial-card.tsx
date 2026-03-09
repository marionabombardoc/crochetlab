import { Link } from 'react-router';
import { Play, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface VideoTutorialCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
}

export function VideoTutorialCard({
  id,
  title,
  thumbnail,
  duration,
  difficulty,
  category,
}: VideoTutorialCardProps) {
  const difficultyColors = {
    Beginner: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100',
    Intermediate: 'bg-amber-100 text-amber-700 hover:bg-amber-100',
    Advanced: 'bg-rose-100 text-rose-700 hover:bg-rose-100',
  };

  return (
    <Link to={`/tutorial/${id}`} className="block group">
      <Card className="overflow-hidden transition-all hover:shadow-xl border-2 hover:border-primary/50">
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="size-16 rounded-full bg-white/90 flex items-center justify-center">
              <Play className="size-8 text-primary ml-1" fill="currentColor" />
            </div>
          </div>
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/70 px-2 py-1 rounded-md">
            <Clock className="size-3 text-white" />
            <span className="text-xs text-white">{duration}</span>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <Badge variant="outline" className={`text-xs ${difficultyColors[difficulty]}`}>
              {difficulty}
            </Badge>
          </div>
          <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </CardContent>
      </Card>
    </Link>
  );
}
