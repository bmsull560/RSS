import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rss } from "lucide-react";

interface FeedItemProps {
  title?: string;
  unreadCount?: number;
  isSelected?: boolean;
  onClick?: () => void;
}

const FeedItem = ({
  title = "Feed Title",
  unreadCount = 0,
  isSelected = false,
  onClick = () => {},
}: FeedItemProps) => {
  return (
    <Button
      variant={isSelected ? "secondary" : "ghost"}
      className="w-full h-9 px-2 justify-between bg-background hover:bg-accent hover:text-accent-foreground"
      onClick={onClick}
    >
      <div className="flex items-center truncate">
        <Rss className="h-4 w-4 mr-2 flex-shrink-0" />
        <span className="text-sm truncate">{title}</span>
      </div>
      {unreadCount > 0 && (
        <Badge variant="secondary" className="ml-2 flex-shrink-0">
          {unreadCount}
        </Badge>
      )}
    </Button>
  );
};

export default FeedItem;
