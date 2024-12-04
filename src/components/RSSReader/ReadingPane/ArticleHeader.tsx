import React from "react";
import { format } from "date-fns";
import { Star, Share2, BookmarkCheck, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ArticleHeaderProps {
  title?: string;
  source?: string;
  sourceUrl?: string;
  date?: Date;
  isStarred?: boolean;
  isRead?: boolean;
  estimatedReadTime?: number;
  onStar?: () => void;
  onShare?: () => void;
  onMarkRead?: () => void;
  onSourceClick?: () => void;
}

const ArticleHeader = ({
  title = "Article Title",
  source = "Source",
  sourceUrl = "#",
  date = new Date(),
  isStarred = false,
  isRead = false,
  estimatedReadTime = 5,
  onStar = () => {},
  onShare = () => {},
  onMarkRead = () => {},
  onSourceClick = () => {},
}: ArticleHeaderProps) => {
  return (
    <TooltipProvider>
      <div className="p-6 border-b bg-background sticky top-0 z-10">
        <div className="space-y-4">
          {/* Metadata row */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <button
                onClick={onSourceClick}
                className="flex items-center hover:text-foreground transition-colors"
              >
                <span className="font-medium">{source}</span>
                <ExternalLink className="ml-1 h-3 w-3" />
              </button>
              <span>{format(date, "MMM d, yyyy")}</span>
              <span>{estimatedReadTime} min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold leading-tight tracking-tight">
            {title}
          </h1>

          {/* Actions row */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`${isStarred ? "text-yellow-500 hover:text-yellow-600" : "hover:text-yellow-500"} transition-colors`}
                    onClick={onStar}
                  >
                    <Star className="h-4 w-4 mr-1.5" />
                    {isStarred ? "Starred" : "Star"}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isStarred ? "Remove from starred" : "Add to starred"}</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" onClick={onShare}>
                    <Share2 className="h-4 w-4 mr-1.5" />
                    Share
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share this article</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`${isRead ? "text-green-500 hover:text-green-600" : "hover:text-green-500"} transition-colors`}
                  onClick={onMarkRead}
                >
                  <BookmarkCheck className="h-4 w-4 mr-1.5" />
                  {isRead ? "Read" : "Mark as Read"}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isRead ? "Mark as unread" : "Mark as read"}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default ArticleHeader;
