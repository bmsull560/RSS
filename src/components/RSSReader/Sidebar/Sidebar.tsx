import React from "react";
import AddFeedButton from "./AddFeedButton";
import FeedList from "./FeedList";
import { ThemeToggle } from "./ThemeToggle";

interface SidebarProps {
  selectedFeedId?: string;
  onFeedSelect?: (feedId: string) => void;
  onAddFeed?: (url: string) => void;
}

const Sidebar = ({
  selectedFeedId = "",
  onFeedSelect = () => {},
  onAddFeed = () => {},
}: SidebarProps) => {
  return (
    <div className="w-[280px] h-[982px] border-r bg-background flex flex-col">
      <div className="p-4 border-b flex items-center justify-between">
        <AddFeedButton onAddFeed={onAddFeed} />
        <ThemeToggle />
      </div>
      <div className="flex-1">
        <FeedList selectedFeedId={selectedFeedId} onFeedSelect={onFeedSelect} />
      </div>
    </div>
  );
};

export default Sidebar;
