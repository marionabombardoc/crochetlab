import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Clock, Tag, CheckCircle, Upload } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { SubmissionModal } from '../components/submission-modal';
import { tutorials } from '../data/tutorials';

export function TutorialDetail() {
  const { id } = useParams<{ id: string }>();
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const tutorial = tutorials.find((t) => t.id === id);

  if (!tutorial) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Tutorial not found</h1>
          <Link to="/tutorials">
            <Button>
              <ArrowLeft className="size-4 mr-2" />
              Back to Tutorials
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-emerald-100 text-emerald-700';
      case 'Intermediate':
        return 'bg-amber-100 text-amber-700';
      case 'Advanced':
        return 'bg-rose-100 text-rose-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleSubmission = (data: { photo: File | null; comment: string; struggles: string }) => {
    console.log('Submission data:', data);
    // In a real app, this would upload to backend/Supabase
    setHasSubmitted(true);
    alert('Thank you! Your project has been submitted for review. You will receive points once an admin reviews it.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/tutorials">
              <Button variant="ghost" size="sm" className="mb-4 hover:text-primary">
                <ArrowLeft className="size-4 mr-2" />
                Back to Tutorials
              </Button>
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="outline" className="text-sm">
                <Tag className="size-3 mr-1" />
                {tutorial.category}
              </Badge>
              <Badge className={`text-sm ${getDifficultyColor(tutorial.difficulty)}`}>
                {tutorial.difficulty}
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="size-4" />
                {tutorial.readTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-4">{tutorial.title}</h1>
            <p className="text-xl text-muted-foreground">{tutorial.description}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Tutorial Image */}
        <div className="aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
          <img
            src={tutorial.image}
            alt={tutorial.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tutorial Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tutorial Instructions</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              This is a comprehensive tutorial for {tutorial.title.toLowerCase()}. Follow the steps
              below to create your own beautiful project.
            </p>

            <h3>Materials Needed:</h3>
            <ul>
              <li>Yarn (medium weight recommended)</li>
              <li>Appropriate crochet hook size</li>
              <li>Scissors</li>
              <li>Yarn needle for weaving ends</li>
              <li>Stitch markers (optional but helpful)</li>
            </ul>

            <h3>Instructions:</h3>
            <ol>
              <li>
                <strong>Step 1:</strong> Start with a slip knot and create your foundation chain.
              </li>
              <li>
                <strong>Step 2:</strong> Follow the pattern for the first row or round.
              </li>
              <li>
                <strong>Step 3:</strong> Continue working according to the pattern, counting your
                stitches at the end of each row.
              </li>
              <li>
                <strong>Step 4:</strong> Shape your project as needed based on the pattern.
              </li>
              <li>
                <strong>Step 5:</strong> Fasten off and weave in all loose ends.
              </li>
            </ol>

            <h3>Tips for Success:</h3>
            <ul>
              <li>Take your time and count your stitches regularly</li>
              <li>Use stitch markers to keep track of important positions</li>
              <li>Don't pull your yarn too tight - maintain even tension</li>
              <li>Watch tutorial videos if you get stuck on a particular stitch</li>
            </ul>
          </CardContent>
        </Card>

        {/* Submit Your Work Section */}
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {hasSubmitted ? (
                <>
                  <CheckCircle className="size-6 text-primary" />
                  Project Submitted!
                </>
              ) : (
                <>
                  <Upload className="size-6 text-primary" />
                  Share Your Work
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {hasSubmitted ? (
              <div className="text-center space-y-3">
                <p className="text-muted-foreground">
                  Your project has been submitted for review. An admin will evaluate your work and
                  award points based on the quality. Check your profile to see your progress!
                </p>
                <Link to="/profile">
                  <Button>View Profile</Button>
                </Link>
              </div>
            ) : (
              <>
                <p className="text-muted-foreground">
                  Finished this tutorial? Share a photo of your completed project and tell us about
                  your experience! You can earn up to{' '}
                  <strong>
                    {tutorial.difficulty === 'Beginner'
                      ? 5
                      : tutorial.difficulty === 'Intermediate'
                      ? 10
                      : 20}{' '}
                    points
                  </strong>{' '}
                  for this {tutorial.difficulty.toLowerCase()} project.
                </p>
                <Button onClick={() => setShowSubmissionModal(true)} size="lg" className="w-full">
                  <Upload className="size-4 mr-2" />
                  Submit Your Project
                </Button>
              </>
            )}
          </CardContent>
        </Card>

        {/* Related Tutorials */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Continue Learning</h2>
          <div className="text-center">
            <Link to="/tutorials">
              <Button variant="outline" size="lg">
                Browse More Tutorials
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Submission Modal */}
      <SubmissionModal
        isOpen={showSubmissionModal}
        onClose={() => setShowSubmissionModal(false)}
        tutorialTitle={tutorial.title}
        tutorialDifficulty={tutorial.difficulty as 'Beginner' | 'Intermediate' | 'Advanced'}
        onSubmit={handleSubmission}
      />
    </div>
  );
}
