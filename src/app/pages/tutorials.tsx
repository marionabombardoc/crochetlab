import { useState } from 'react';
import { Search } from 'lucide-react';
import { TutorialCard } from '../components/tutorial-card';
import { tutorials, categories } from '../data/tutorials';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export function Tutorials() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesCategory =
      selectedCategory === 'All' || tutorial.category === selectedCategory;
    const matchesSearch = tutorial.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-4">
              Learn to Crochet with Confidence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Step-by-step tutorials for beginners and experienced crocheters
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search tutorials..."
                className="pl-10 bg-white shadow-md border-primary/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="shadow-sm hover:shadow-md transition-all"
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="container mx-auto px-4 pb-16">
        {filteredTutorials.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No tutorials found. Try adjusting your search or filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((tutorial) => (
              <TutorialCard key={tutorial.id} tutorial={tutorial} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}