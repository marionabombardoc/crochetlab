import { useState } from 'react';
import { Camera, Upload, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  tutorialTitle: string;
  tutorialDifficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  onSubmit: (data: { photo: File | null; comment: string; struggles: string }) => void;
}

export function SubmissionModal({
  isOpen,
  onClose,
  tutorialTitle,
  tutorialDifficulty,
  onSubmit,
}: SubmissionModalProps) {
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [comment, setComment] = useState('');
  const [struggles, setStruggles] = useState('');

  const maxPoints = 
    tutorialDifficulty === 'Beginner' ? 5 : 
    tutorialDifficulty === 'Intermediate' ? 10 : 20;

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onSubmit({ photo, comment, struggles });
    // Reset form
    setPhoto(null);
    setPhotoPreview('');
    setComment('');
    setStruggles('');
    onClose();
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
    setPhotoPreview('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Share Your {tutorialTitle} Project!</DialogTitle>
          <DialogDescription>
            Upload a photo of your completed project and share your experience. 
            You can earn up to {maxPoints} points based on your work!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Photo Upload */}
          <div>
            <Label htmlFor="photo" className="mb-2 block">
              Project Photo *
            </Label>
            {!photoPreview ? (
              <label
                htmlFor="photo"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-primary/30 rounded-lg cursor-pointer bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Camera className="size-12 text-primary mb-3" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">PNG, JPG or JPEG (MAX. 5MB)</p>
                </div>
                <input
                  id="photo"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </label>
            ) : (
              <div className="relative">
                <img
                  src={photoPreview}
                  alt="Project preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={handleRemovePhoto}
                >
                  <X className="size-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Comment */}
          <div>
            <Label htmlFor="comment" className="mb-2 block">
              How did it go? *
            </Label>
            <Textarea
              id="comment"
              placeholder="Share your experience with this tutorial... What did you enjoy? How long did it take?"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className="resize-none"
            />
          </div>

          {/* Struggles */}
          <div>
            <Label htmlFor="struggles" className="mb-2 block">
              What challenges did you face?
            </Label>
            <Textarea
              id="struggles"
              placeholder="Let us know where you struggled so we can improve the tutorial..."
              value={struggles}
              onChange={(e) => setStruggles(e.target.value)}
              rows={3}
              className="resize-none"
            />
          </div>

          {/* Info Box */}
          <div className="bg-accent/30 border border-accent rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong>How points work:</strong> An admin will review your submission and award points 
              based on the quality of your work. {tutorialDifficulty} projects can earn up to{' '}
              <strong>{maxPoints} points</strong>. These points help you level up!
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!photo || !comment.trim()}
            className="gap-2"
          >
            <Upload className="size-4" />
            Submit Project
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
