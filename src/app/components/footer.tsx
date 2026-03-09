import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <p className="text-sm text-muted-foreground">
              Sharing the joy of crochet through easy-to-follow tutorials and patterns
              for crafters of all skill levels.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Basics</li>
              <li>Patterns</li>
              <li>Toys</li>
              <li>Home Decor</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <p className="text-sm text-muted-foreground">
              Join our community of crochet enthusiasts and share your creations!
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
          Made with <Heart className="size-4 fill-red-500 text-red-500" /> by crochet lovers
        </div>
      </div>
    </footer>
  );
}
