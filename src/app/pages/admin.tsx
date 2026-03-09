import { useState } from 'react';
import { Link } from 'react-router';
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Clock,
  Star,
  MessageSquare,
  Calendar,
  User,
  Award,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import { mockSubmissions, type Submission } from '../data/users';

export function Admin() {
  const [submissions, setSubmissions] = useState<Submission[]>(mockSubmissions);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [pointsToAward, setPointsToAward] = useState<string>('');
  const [adminComment, setAdminComment] = useState('');

  const pendingSubmissions = submissions.filter((s) => s.status === 'pending');
  const reviewedSubmissions = submissions.filter((s) => s.status === 'reviewed');
  const rejectedSubmissions = submissions.filter((s) => s.status === 'rejected');

  const handleOpenReview = (submission: Submission) => {
    setSelectedSubmission(submission);
    setReviewModalOpen(true);
    setPointsToAward('');
    setAdminComment('');
  };

  const handleApprove = () => {
    if (!selectedSubmission) return;

    const points = parseInt(pointsToAward);
    const maxPoints =
      selectedSubmission.tutorialDifficulty === 'Beginner'
        ? 5
        : selectedSubmission.tutorialDifficulty === 'Intermediate'
        ? 10
        : 20;

    if (isNaN(points) || points < 0 || points > maxPoints) {
      alert(`Please enter points between 0 and ${maxPoints}`);
      return;
    }

    setSubmissions((prev) =>
      prev.map((s) =>
        s.id === selectedSubmission.id
          ? {
              ...s,
              status: 'reviewed',
              pointsAwarded: points,
              adminComment: adminComment || undefined,
              reviewedAt: new Date().toISOString(),
            }
          : s
      )
    );

    setReviewModalOpen(false);
    setSelectedSubmission(null);
  };

  const handleReject = () => {
    if (!selectedSubmission) return;

    setSubmissions((prev) =>
      prev.map((s) =>
        s.id === selectedSubmission.id
          ? {
              ...s,
              status: 'rejected',
              adminComment: adminComment || undefined,
              reviewedAt: new Date().toISOString(),
            }
          : s
      )
    );

    setReviewModalOpen(false);
    setSelectedSubmission(null);
  };

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-blue-100 text-blue-700';
      case 'reviewed':
        return 'bg-emerald-100 text-emerald-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const SubmissionCard = ({ submission }: { submission: Submission }) => {
    const maxPoints =
      submission.tutorialDifficulty === 'Beginner'
        ? 5
        : submission.tutorialDifficulty === 'Intermediate'
        ? 10
        : 20;

    return (
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div className="space-y-2 flex-1">
              <CardTitle className="text-lg">{submission.tutorialTitle}</CardTitle>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  <User className="size-3 mr-1" />
                  {submission.userName}
                </Badge>
                <Badge className={`text-xs ${getDifficultyColor(submission.tutorialDifficulty)}`}>
                  {submission.tutorialDifficulty}
                </Badge>
                <Badge className={`text-xs ${getStatusColor(submission.status)}`}>
                  {submission.status}
                </Badge>
                {submission.pointsAwarded !== undefined && (
                  <Badge variant="outline" className="text-xs bg-primary/10 text-primary">
                    <Award className="size-3 mr-1" />
                    {submission.pointsAwarded}/{maxPoints} pts
                  </Badge>
                )}
              </div>
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              <Calendar className="size-4" />
              {new Date(submission.submittedAt).toLocaleDateString()}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Photo */}
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <img
              src={submission.photoUrl}
              alt={`${submission.userName}'s project`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Comment */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MessageSquare className="size-4 text-muted-foreground" />
              <span className="text-sm font-medium">User Comment:</span>
            </div>
            <p className="text-sm text-muted-foreground pl-6">{submission.comment}</p>
          </div>

          {/* Struggles */}
          {submission.struggles && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="size-4 text-muted-foreground" />
                <span className="text-sm font-medium">Challenges Faced:</span>
              </div>
              <p className="text-sm text-muted-foreground pl-6">{submission.struggles}</p>
            </div>
          )}

          {/* Admin Comment (if reviewed) */}
          {submission.adminComment && (
            <div className="space-y-2 bg-accent/20 p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <Star className="size-4 text-primary" />
                <span className="text-sm font-medium">Admin Feedback:</span>
              </div>
              <p className="text-sm pl-6">{submission.adminComment}</p>
            </div>
          )}

          {/* Actions */}
          {submission.status === 'pending' && (
            <div className="flex gap-2 pt-2">
              <Button
                onClick={() => handleOpenReview(submission)}
                className="flex-1"
                size="sm"
              >
                <CheckCircle className="size-4 mr-2" />
                Review & Award Points
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-4 hover:text-primary">
                <ArrowLeft className="size-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl mb-4">Admin Dashboard</h1>
            <p className="text-xl text-muted-foreground">
              Review user submissions and award points based on project quality
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Reviews</p>
                  <p className="text-3xl font-bold text-blue-600">{pendingSubmissions.length}</p>
                </div>
                <Clock className="size-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Reviewed</p>
                  <p className="text-3xl font-bold text-emerald-600">{reviewedSubmissions.length}</p>
                </div>
                <CheckCircle className="size-12 text-emerald-200" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Submissions</p>
                  <p className="text-3xl font-bold text-primary">{submissions.length}</p>
                </div>
                <Star className="size-12 text-primary/20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submissions Tabs */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="pending">
              Pending ({pendingSubmissions.length})
            </TabsTrigger>
            <TabsTrigger value="reviewed">
              Reviewed ({reviewedSubmissions.length})
            </TabsTrigger>
            <TabsTrigger value="rejected">
              Rejected ({rejectedSubmissions.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {pendingSubmissions.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center text-muted-foreground">
                  No pending submissions to review
                </CardContent>
              </Card>
            ) : (
              pendingSubmissions.map((submission) => (
                <SubmissionCard key={submission.id} submission={submission} />
              ))
            )}
          </TabsContent>

          <TabsContent value="reviewed" className="space-y-4">
            {reviewedSubmissions.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center text-muted-foreground">
                  No reviewed submissions yet
                </CardContent>
              </Card>
            ) : (
              reviewedSubmissions.map((submission) => (
                <SubmissionCard key={submission.id} submission={submission} />
              ))
            )}
          </TabsContent>

          <TabsContent value="rejected" className="space-y-4">
            {rejectedSubmissions.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center text-muted-foreground">
                  No rejected submissions
                </CardContent>
              </Card>
            ) : (
              rejectedSubmissions.map((submission) => (
                <SubmissionCard key={submission.id} submission={submission} />
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Review Modal */}
      <Dialog open={reviewModalOpen} onOpenChange={setReviewModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Review Submission</DialogTitle>
            <DialogDescription>
              Award points based on the quality of the user's work. {selectedSubmission?.tutorialDifficulty} projects can earn up to{' '}
              {selectedSubmission?.tutorialDifficulty === 'Beginner'
                ? 5
                : selectedSubmission?.tutorialDifficulty === 'Intermediate'
                ? 10
                : 20}{' '}
              points.
            </DialogDescription>
          </DialogHeader>

          {selectedSubmission && (
            <div className="space-y-4 py-4">
              {/* Preview */}
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={selectedSubmission.photoUrl}
                  alt="Project"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Points Input */}
              <div>
                <Label htmlFor="points">Points to Award *</Label>
                <Input
                  id="points"
                  type="number"
                  min="0"
                  max={
                    selectedSubmission.tutorialDifficulty === 'Beginner'
                      ? 5
                      : selectedSubmission.tutorialDifficulty === 'Intermediate'
                      ? 10
                      : 20
                  }
                  value={pointsToAward}
                  onChange={(e) => setPointsToAward(e.target.value)}
                  placeholder={`0-${
                    selectedSubmission.tutorialDifficulty === 'Beginner'
                      ? 5
                      : selectedSubmission.tutorialDifficulty === 'Intermediate'
                      ? 10
                      : 20
                  }`}
                  className="mt-2"
                />
              </div>

              {/* Admin Comment */}
              <div>
                <Label htmlFor="adminComment">Feedback (Optional)</Label>
                <Textarea
                  id="adminComment"
                  value={adminComment}
                  onChange={(e) => setAdminComment(e.target.value)}
                  placeholder="Provide constructive feedback to the user..."
                  rows={3}
                  className="mt-2 resize-none"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  onClick={handleApprove}
                  disabled={!pointsToAward}
                  className="flex-1"
                >
                  <CheckCircle className="size-4 mr-2" />
                  Approve & Award Points
                </Button>
                <Button onClick={handleReject} variant="destructive" className="flex-1">
                  <XCircle className="size-4 mr-2" />
                  Reject
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
