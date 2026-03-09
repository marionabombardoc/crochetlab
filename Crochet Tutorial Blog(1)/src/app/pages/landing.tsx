import { Link } from 'react-router';
import { ArrowRight, Heart, Sparkles, Users, Brain, Palette, BookOpen } from 'lucide-react';
import Slider from 'react-slick';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { VideoTutorialCard } from '../components/video-tutorial-card';
import { tutorials } from '../data/tutorials';

export function Home() {
  const benefits = [
    {
      icon: Heart,
      title: 'Stress Relief & Relaxation',
      description: 'The repetitive motions of crochet have a calming, meditative effect that helps reduce anxiety and stress.',
    },
    {
      icon: Brain,
      title: 'Boosts Brain Health',
      description: 'Crochet improves memory, concentration, and cognitive function while keeping your mind sharp and active.',
    },
    {
      icon: Palette,
      title: 'Creative Expression',
      description: 'Express yourself through color, texture, and pattern choices. Create unique pieces that reflect your personality.',
    },
    {
      icon: Users,
      title: 'Community Connection',
      description: 'Join a global community of crafters. Share projects, tips, and connect with like-minded crochet enthusiasts.',
    },
    {
      icon: Sparkles,
      title: 'Sense of Accomplishment',
      description: 'Complete tangible projects that you can use, wear, or gift. Experience the satisfaction of creating something beautiful.',
    },
    {
      icon: BookOpen,
      title: 'Endless Learning',
      description: 'From simple chains to complex patterns, there\'s always a new technique or stitch to master and explore.',
    },
  ];

  // Featured video tutorials for carousel
  const featuredTutorials = [
    {
      id: '1',
      title: 'Basic Chain Stitch for Beginners',
      thumbnail: 'https://images.unsplash.com/photo-1676557078316-eb85791d3cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmxhbmtldCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MzA2NzY3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '8:45',
      difficulty: 'Beginner' as const,
      category: 'Basics',
    },
    {
      id: '2',
      title: 'Create Your First Granny Square',
      thumbnail: 'https://images.unsplash.com/photo-1759544632264-a31a9ff1e60b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFubnklMjBzcXVhcmUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzMwNjc2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '12:30',
      difficulty: 'Beginner' as const,
      category: 'Patterns',
    },
    {
      id: '3',
      title: 'Adorable Amigurumi Bear Tutorial',
      thumbnail: 'https://images.unsplash.com/photo-1626241803094-88edd8ae6453?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWlndXJ1bWklMjB0b3klMjBjdXRlfGVufDF8fHx8MTc3MzA2NzY3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '25:15',
      difficulty: 'Intermediate' as const,
      category: 'Toys',
    },
    {
      id: '4',
      title: 'Beautiful Storage Basket Pattern',
      thumbnail: 'https://images.unsplash.com/photo-1552959933-595ad8829c0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmFza2V0JTIwaG9tZXxlbnwxfHx8fDE3NzMwNjc2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '18:20',
      difficulty: 'Intermediate' as const,
      category: 'Home Decor',
    },
    {
      id: '5',
      title: 'Advanced Lace Doily Technique',
      thumbnail: 'https://images.unsplash.com/photo-1634757440938-a671a5924363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwY29tbXVuaXR5JTIwZ3JvdXB8ZW58MXx8fHwxNzczMDY3Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '32:45',
      difficulty: 'Advanced' as const,
      category: 'Patterns',
    },
    {
      id: '6',
      title: 'Cozy Blanket from Scratch',
      thumbnail: 'https://images.unsplash.com/photo-1676557078316-eb85791d3cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmxhbmtldCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MzA2NzY3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '45:00',
      difficulty: 'Advanced' as const,
      category: 'Home Decor',
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl mb-6">
                Welcome to Crochet Chronicles
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover the joy, creativity, and countless benefits of crochet. 
                Whether you're a complete beginner or an experienced crafter, 
                there's always something new to learn and create.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/tutorials">
                  <Button size="lg">
                    Browse Tutorials
                    <ArrowRight className="size-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button size="lg" variant="outline">
                    View Resources
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1757583012114-0a48ae0a6e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNyb2NoZXRpbmclMjByZWxheGVkfGVufDF8fHx8MTc3MzA2NzI4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Person crocheting"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Why Learn to Crochet?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crochet is more than just a hobby—it's a therapeutic, creative, and rewarding craft 
            that offers numerous physical and mental health benefits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/tutorials">
            <Button size="lg" variant="outline">
              Start Your Crochet Journey
              <ArrowRight className="size-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Video Tutorials Carousel */}
      <section className="bg-gradient-to-b from-accent/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Featured Video Tutorials</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch and learn with our step-by-step video guides. Perfect for visual learners!
            </p>
          </div>
          
          <div className="tutorial-carousel max-w-7xl mx-auto px-8">
            <Slider {...carouselSettings}>
              {featuredTutorials.map((tutorial) => (
                <div key={tutorial.id}>
                  <VideoTutorialCard {...tutorial} />
                </div>
              ))}
            </Slider>
          </div>

          <div className="text-center mt-12">
            <Link to="/tutorials">
              <Button size="lg">
                View All Tutorials
                <ArrowRight className="size-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Crochet Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1634757440938-a671a5924363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwY29tbXVuaXR5JTIwZ3JvdXB8ZW58MXx8fHwxNzczMDY3Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Crochet supplies"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl mb-6">What is Crochet?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Crochet is a needlework technique that uses a hooked needle to create 
                  fabric from yarn or thread. Unlike knitting, which uses two needles, 
                  crochet uses just one hook to pull loops through other loops.
                </p>
                <p>
                  The beauty of crochet lies in its versatility. You can create everything 
                  from delicate lace doilies to cozy blankets, fashionable garments to adorable 
                  stuffed toys. The possibilities are truly endless!
                </p>
                <p>
                  What makes crochet particularly beginner-friendly is that you only work 
                  with one stitch at a time, making it easier to fix mistakes. Plus, it's 
                  highly portable—grab your hook and yarn, and you can crochet anywhere!
                </p>
              </div>
              <div className="mt-8">
                <Link to="/resources">
                  <Button variant="outline">
                    Learn About Crochet Tools
                    <ArrowRight className="size-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started CTA */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <Card className="bg-gradient-to-br from-primary/15 to-accent/15 border-primary/30 shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl md:text-4xl mb-4">
              Ready to Start Crocheting?
            </CardTitle>
            <CardDescription className="text-lg">
              Explore our comprehensive tutorials designed for all skill levels
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-background rounded-lg p-6">
                <div className="text-4xl mb-2">🧶</div>
                <h3 className="font-semibold mb-2">Beginner Friendly</h3>
                <p className="text-sm text-muted-foreground">
                  Start with simple chains and basic stitches
                </p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-4xl mb-2">📖</div>
                <h3 className="font-semibold mb-2">Step-by-Step Guides</h3>
                <p className="text-sm text-muted-foreground">
                  Clear instructions with helpful tips
                </p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-4xl mb-2">🎨</div>
                <h3 className="font-semibold mb-2">Diverse Projects</h3>
                <p className="text-sm text-muted-foreground">
                  From toys to home decor and wearables
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/tutorials">
                <Button size="lg">
                  View All Tutorials
                  <ArrowRight className="size-5 ml-2" />
                </Button>
              </Link>
              <Link to="/resources">
                <Button size="lg" variant="secondary">
                  Explore Resources
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}