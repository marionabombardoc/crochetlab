import { Link } from 'react-router';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';

export function Resources() {
  const hookSizes = [
    { size: 'B/1', mm: '2.25mm', use: 'Lace weight yarn, fine thread' },
    { size: 'C/2', mm: '2.75mm', use: 'Sport weight yarn, thread' },
    { size: 'D/3', mm: '3.25mm', use: 'Light worsted yarn' },
    { size: 'E/4', mm: '3.5mm', use: 'Worsted yarn, amigurumi' },
    { size: 'F/5', mm: '3.75mm', use: 'Worsted weight yarn' },
    { size: 'G/6', mm: '4mm', use: 'Worsted weight yarn' },
    { size: 'H/8', mm: '5mm', use: 'Worsted/Aran weight yarn (most common for beginners)' },
    { size: 'I/9', mm: '5.5mm', use: 'Chunky weight yarn' },
    { size: 'J/10', mm: '6mm', use: 'Chunky weight yarn' },
    { size: 'K/10.5', mm: '6.5mm', use: 'Bulky weight yarn' },
    { size: 'L/11', mm: '8mm', use: 'Super bulky yarn' },
    { size: 'M/13', mm: '9mm', use: 'Super bulky yarn' },
    { size: 'N/15', mm: '10mm', use: 'Jumbo weight yarn' },
  ];

  const essentialTools = [
    {
      name: 'Crochet Hooks',
      description: 'Start with a set of aluminum hooks in sizes E-K. Ergonomic handles reduce hand fatigue.',
      recommendation: 'Clover Amour Hook Set or Boye Ergonomic Hooks',
    },
    {
      name: 'Yarn',
      description: 'Medium weight (worsted) acrylic yarn is perfect for beginners. It\'s affordable, easy to work with, and widely available.',
      recommendation: 'Red Heart Super Saver, Lion Brand Vanna\'s Choice, or Caron Simply Soft',
    },
    {
      name: 'Scissors',
      description: 'Small, sharp scissors for cutting yarn cleanly.',
      recommendation: 'Any sharp embroidery or craft scissors',
    },
    {
      name: 'Yarn Needle',
      description: 'Blunt-tipped needle with large eye for weaving in ends and sewing pieces together.',
      recommendation: 'Bent-tip or straight tapestry needles',
    },
    {
      name: 'Stitch Markers',
      description: 'Essential for marking rounds in amigurumi and keeping track of stitch counts.',
      recommendation: 'Clover Locking Stitch Markers or simple coil-less safety pins',
    },
    {
      name: 'Measuring Tape',
      description: 'For checking gauge and measuring your projects.',
      recommendation: 'Retractable measuring tape',
    },
  ];

  const yarnWeights = [
    { weight: '0 - Lace', description: 'Delicate doilies, lightweight shawls' },
    { weight: '1 - Superfine', description: 'Socks, fine baby items' },
    { weight: '2 - Fine', description: 'Baby clothes, lightweight garments' },
    { weight: '3 - Light', description: 'Light sweaters, baby blankets' },
    { weight: '4 - Medium', description: 'Afghans, sweaters (most versatile)' },
    { weight: '5 - Bulky', description: 'Quick blankets, heavy sweaters' },
    { weight: '6 - Super Bulky', description: 'Thick blankets, rugs' },
    { weight: '7 - Jumbo', description: 'Extra thick blankets, home decor' },
  ];

  const recommendedWebsites = [
    {
      name: 'Ravelry',
      url: 'https://www.ravelry.com',
      description: 'The largest online community for crocheters and knitters. Find free patterns, connect with crafters, and organize your stash.',
    },
    {
      name: 'Yarnspirations',
      url: 'https://www.yarnspirations.com',
      description: 'Free patterns from major yarn brands like Bernat, Caron, and Red Heart. Great variety of projects.',
    },
    {
      name: 'The Spruce Crafts',
      url: 'https://www.thesprucecrafts.com/crochet-4162818',
      description: 'Comprehensive guides, tutorials, and free patterns for all skill levels.',
    },
    {
      name: 'Moogly Blog',
      url: 'https://www.mooglyblog.com',
      description: 'Popular blog with video tutorials, free patterns, and helpful tips.',
    },
    {
      name: 'AllFreeCrochet',
      url: 'https://www.allfreecrochet.com',
      description: 'Thousands of free crochet patterns organized by category and difficulty level.',
    },
  ];

  const youtubeChannels = [
    {
      name: 'Bella Coco Crochet',
      description: 'Clear, beginner-friendly video tutorials covering all the basics and beyond.',
    },
    {
      name: 'The Crochet Crowd',
      description: 'Detailed project tutorials with friendly instruction and helpful tips.',
    },
    {
      name: 'Hooked by Robin',
      description: 'Easy-to-follow tutorials perfect for visual learners.',
    },
    {
      name: 'TL Yarn Crafts',
      description: 'Detailed patterns with written and video instructions.',
    },
  ];

  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-4 hover:text-primary">
                <ArrowLeft className="size-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl mb-4">
              Crochet Resources & Recommendations
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about crochet tools, materials, and where to find inspiration
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Essential Tools */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Essential Crochet Tools</h2>
            <p className="text-muted-foreground mb-6">
              Here are the must-have tools to get started with your crochet journey:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {essentialTools.map((tool, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {tool.description}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Recommended: </span>
                      {tool.recommendation}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator />

          {/* Hook Size Chart */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Crochet Hook Size Guide</h2>
            <p className="text-muted-foreground mb-6">
              Understanding hook sizes is crucial for achieving the right gauge. Here's a comprehensive guide:
            </p>
            <Card>
              <CardHeader>
                <CardTitle>Hook Size Reference Chart</CardTitle>
                <CardDescription>US Letter / Metric (mm) / Common Uses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {hookSizes.map((hook, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-center gap-2 pb-3 border-b last:border-0">
                      <div className="flex gap-3 md:w-1/3">
                        <span className="font-semibold min-w-[60px]">{hook.size}</span>
                        <span className="text-muted-foreground">{hook.mm}</span>
                      </div>
                      <p className="text-sm text-muted-foreground md:w-2/3">{hook.use}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Yarn Weights */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Yarn Weight Guide</h2>
            <p className="text-muted-foreground mb-6">
              Yarn comes in different weights (thicknesses). The weight determines what you can make:
            </p>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {yarnWeights.map((yarn, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <span className="font-semibold">{yarn.weight}</span>
                      <span className="text-sm text-muted-foreground">{yarn.description}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground mt-4">
              💡 <strong>Beginner Tip:</strong> Start with weight 4 (medium/worsted) yarn. It's the most 
              versatile and easiest to work with when you're learning.
            </p>
          </section>

          <Separator />

          {/* Recommended Websites */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Helpful Crochet Websites</h2>
            <p className="text-muted-foreground mb-6">
              Expand your skills and find inspiration on these popular crochet websites:
            </p>
            <div className="space-y-4">
              {recommendedWebsites.map((site, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {site.name}
                        </CardTitle>
                        <CardDescription className="mt-2">{site.description}</CardDescription>
                      </div>
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0"
                      >
                        <Button variant="outline" size="sm">
                          Visit
                          <ExternalLink className="size-4 ml-2" />
                        </Button>
                      </a>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          <Separator />

          {/* YouTube Channels */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Recommended YouTube Channels</h2>
            <p className="text-muted-foreground mb-6">
              Video tutorials can be incredibly helpful when learning new stitches and techniques:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {youtubeChannels.map((channel, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {channel.name}
                    </CardTitle>
                    <CardDescription>{channel.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          <Separator />

          {/* Getting Started CTA */}
          <section>
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Ready to Start Crocheting?</CardTitle>
                <CardDescription>
                  Check out our beginner-friendly tutorials
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link to="/tutorials">
                  <Button size="lg">
                    Browse Tutorials
                    <ExternalLink className="size-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}