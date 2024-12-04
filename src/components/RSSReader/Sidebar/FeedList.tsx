import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import FeedCategory from "./FeedCategory";
import FeedItem from "./FeedItem";

interface Feed {
  id: string;
  title: string;
  unreadCount: number;
}

interface Category {
  id: string;
  name: string;
  feeds: Feed[];
  unreadCount: number;
}

interface FeedListProps {
  categories?: Category[];
  selectedFeedId?: string;
  onFeedSelect?: (feedId: string) => void;
}

const FeedList = ({
  categories = [
    {
      id: "1",
      name: "Technology",
      unreadCount: 5,
      feeds: [
        { id: "1-1", title: "TechCrunch", unreadCount: 3 },
        { id: "1-2", title: "The Verge", unreadCount: 2 },
      ],
    },
    {
      id: "2",
      name: "News",
      unreadCount: 8,
      feeds: [
        { id: "2-1", title: "BBC News", unreadCount: 5 },
        { id: "2-2", title: "Reuters", unreadCount: 3 },
      ],
    },
  ],
  selectedFeedId = "",
  onFeedSelect = () => {},
}: FeedListProps) => {
  return (
    <ScrollArea className="h-[902px] w-[280px] bg-background">
      <div className="p-2 space-y-2">
        {categories.map((category) => (
          <FeedCategory
            key={category.id}
            name={category.name}
            unreadCount={category.unreadCount}
          >
            {category.feeds.map((feed) => (
              <FeedItem
                key={feed.id}
                title={feed.title}
                unreadCount={feed.unreadCount}
                isSelected={feed.id === selectedFeedId}
                onClick={() => onFeedSelect(feed.id)}
              />
            ))}
          </FeedCategory>
        ))}
      </div>
    </ScrollArea>
  );
};

export default FeedList;
