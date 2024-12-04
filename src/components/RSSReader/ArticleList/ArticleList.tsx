import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ListControls from "./ListControls";
import ArticleCard from "./ArticleCard";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: Date;
  isUnread: boolean;
  isStarred: boolean;
  source: string;
  thumbnailUrl?: string;
}

interface ArticleListProps {
  articles?: Article[];
  selectedArticleId?: string;
  onArticleSelect?: (articleId: string) => void;
}

const ArticleList = ({
  articles = [
    {
      id: "1",
      title: "The Future of Web Development",
      excerpt:
        "Exploring the latest trends and technologies shaping the future of web development...",
      date: new Date(),
      isUnread: true,
      isStarred: true,
      source: "TechCrunch",
      thumbnailUrl:
        "https://dummyimage.com/200x200/2563eb/ffffff.png&text=Web+Dev",
    },
    {
      id: "2",
      title: "Understanding Modern JavaScript",
      excerpt:
        "A deep dive into the modern features and best practices of JavaScript programming...",
      date: new Date(Date.now() - 86400000),
      isUnread: false,
      isStarred: false,
      source: "Dev.to",
      thumbnailUrl: "https://dummyimage.com/200x200/16a34a/ffffff.png&text=JS",
    },
  ],
  selectedArticleId = "",
  onArticleSelect = () => {},
}: ArticleListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);
  const [showStarredOnly, setShowStarredOnly] = useState(false);
  const [selectedSource, setSelectedSource] = useState("all");

  const sources = [
    "all",
    ...new Set(articles.map((article) => article.source)),
  ];

  const filteredArticles = articles
    .filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesUnread = !showUnreadOnly || article.isUnread;
      const matchesStarred = !showStarredOnly || article.isStarred;
      const matchesSource =
        selectedSource === "all" || article.source === selectedSource;

      return matchesSearch && matchesUnread && matchesStarred && matchesSource;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "source":
          return a.source.localeCompare(b.source);
        case "unread":
          return Number(b.isUnread) - Number(a.isUnread);
        case "date":
        default:
          return b.date.getTime() - a.date.getTime();
      }
    });

  return (
    <div className="w-[400px] h-[982px] border-r bg-background flex flex-col">
      <ListControls
        searchQuery={searchQuery}
        sortBy={sortBy}
        showUnreadOnly={showUnreadOnly}
        showStarredOnly={showStarredOnly}
        selectedSource={selectedSource}
        sources={sources}
        onSearchChange={setSearchQuery}
        onSortChange={setSortBy}
        onUnreadFilterChange={setShowUnreadOnly}
        onStarredFilterChange={setShowStarredOnly}
        onSourceChange={setSelectedSource}
      />
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-2">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              excerpt={article.excerpt}
              date={article.date}
              isUnread={article.isUnread}
              source={article.source}
              thumbnailUrl={article.thumbnailUrl}
              isSelected={article.id === selectedArticleId}
              onClick={() => onArticleSelect(article.id)}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ArticleList;
