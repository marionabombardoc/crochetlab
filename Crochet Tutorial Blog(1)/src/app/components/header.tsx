import { Link } from 'react-router';
import { Scissors, User, ShieldCheck } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
            <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Scissors className="size-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Crochet Chronicles
              </h1>
              <p className="text-xs text-muted-foreground">Your crafting companion</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Home
            </Link>
            <Link 
              to="/tutorials" 
              className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Tutorials
            </Link>
            <Link 
              to="/resources" 
              className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Resources
            </Link>
            <Link 
              to="/profile" 
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1.5 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              <User className="size-4" />
              Profile
            </Link>
            <Link 
              to="/admin" 
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1.5 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              <ShieldCheck className="size-4" />
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}