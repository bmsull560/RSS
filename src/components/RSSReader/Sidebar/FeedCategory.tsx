import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface FeedCategoryProps {
  name?: string;
  unreadCount?: number;
  isExpanded?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
}

const FeedCategory = ({
  name = "Category",
  unreadCount = 0,
  isExpanded: defaultExpanded = false,
  onToggle = () => {},
  children = null,
}: FeedCategoryProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    onToggle();
  };

  return (
    <Collapsible
      open={isExpanded}
      onOpenChange={handleToggle}
      className="w-full bg-background"
    >
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="w-full h-12 px-2 justify-between hover:bg-accent hover:text-accent-foreground"
        >
          <div className="flex items-center">
            {isExpanded ? (
              <ChevronDown className="h-4 w-4 mr-2" />
            ) : (
              <ChevronRight className="h-4 w-4 mr-2" />
            )}
            <span className="text-sm font-medium">{name}</span>
          </div>
          {unreadCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-6">{children}</CollapsibleContent>
    </Collapsible>
  );
};

export default FeedCategory;
