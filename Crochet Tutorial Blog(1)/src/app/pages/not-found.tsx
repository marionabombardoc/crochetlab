import { Link } from 'react-router';
import { Home as HomeIcon } from 'lucide-react';
import { Button } from '../components/ui/button';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-muted-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The tutorial you're looking for doesn't exist.
        </p>
        <Link to="/">
          <Button>
            <HomeIcon className="size-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
