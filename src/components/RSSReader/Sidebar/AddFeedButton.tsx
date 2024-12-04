import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddFeedButtonProps {
  onAddFeed?: (url: string) => void;
  isOpen?: boolean;
}

const AddFeedButton = ({
  onAddFeed = () => {},
  isOpen = false,
}: AddFeedButtonProps) => {
  const [feedUrl, setFeedUrl] = useState("");
  const [open, setOpen] = useState(isOpen);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddFeed(feedUrl);
    setFeedUrl("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-[240px] h-10 justify-start bg-background hover:bg-accent hover:text-accent-foreground"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Feed
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New RSS Feed</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="feed-url">Feed URL</Label>
            <Input
              id="feed-url"
              type="url"
              placeholder="https://example.com/feed.xml"
              value={feedUrl}
              onChange={(e) => setFeedUrl(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Add Feed
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddFeedButton;
