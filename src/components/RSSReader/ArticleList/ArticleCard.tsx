import React from "react";
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ArticleCardProps {
  title?: string;
  excerpt?: string;
  date?: Date;
  isUnread?: boolean;
  source?: string;
  isSelected?: boolean;
  thumbnailUrl?: string;
  onClick?: () => void;
}

const ArticleCard = ({
  title = "Article Title",
  excerpt = "Article excerpt goes here...",
  date = new Date(),
  isUnread = true,
  source = "Source",
  isSelected = false,
  thumbnailUrl,
  onClick = () => {},
}: ArticleCardProps) => {
  return (
    <Card
      className={`p-4 cursor-pointer transition-colors hover:bg-accent ${isSelected ? "bg-accent" : "bg-card"}`}
      onClick={onClick}
    >
      <div className="flex gap-4">
        {thumbnailUrl && (
          <div className="flex-shrink-0 w-20">
            <AspectRatio ratio={1}>
              <img
                src={thumbnailUrl}
                alt=""
                className="rounded-md object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        )}
        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3
              className={`text-sm font-medium leading-tight truncate ${isUnread ? "font-semibold" : ""}`}
            >
              {title}
            </h3>
            {isUnread && (
              <Badge variant="secondary" className="flex-shrink-0">
                New
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="truncate">{source}</span>
            <span className="flex-shrink-0">{format(date, "MMM d, yyyy")}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ArticleCard;
