import React, { useState } from "react";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Sidebar from "./RSSReader/Sidebar/Sidebar";
import ArticleList from "./RSSReader/ArticleList/ArticleList";
import ReadingPane from "./RSSReader/ReadingPane/ReadingPane";

interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: Date;
  source: string;
  sourceUrl?: string;
  isUnread: boolean;
  isStarred: boolean;
  isRead: boolean;
  estimatedReadTime?: number;
  thumbnailUrl?: string;
}

const demoArticles: Article[] = [
  {
    id: "1",
    title: "The Future of Web Development",
    excerpt:
      "Exploring the latest trends and technologies shaping the future of web development...",
    content: `<p>Web development is constantly evolving, with new technologies and frameworks emerging regularly. This article explores the latest trends and what they mean for developers.</p>

<h2>The Rise of Web Components</h2>
<p>Web Components are becoming increasingly important in modern web development. They offer a way to create reusable, encapsulated HTML elements that can be shared across different projects and frameworks.</p>

<figure>
  <img src="https://dummyimage.com/800x400/4338ca/ffffff.png&text=Web+Components" alt="Web Components Diagram" />
  <figcaption>Modern Web Components Architecture</figcaption>
</figure>

<h2>AI-Powered Development</h2>
<p>Artificial Intelligence is revolutionizing how we build websites and applications. From code completion to automated testing, AI tools are making developers more productive than ever.</p>`,
    date: new Date(),
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
    isUnread: true,
    isStarred: true,
    isRead: false,
    estimatedReadTime: 5,
    thumbnailUrl:
      "https://dummyimage.com/200x200/2563eb/ffffff.png&text=Web+Dev",
  },
  {
    id: "2",
    title: "Understanding Modern JavaScript",
    excerpt:
      "A deep dive into the modern features and best practices of JavaScript programming...",
    content: `<p>JavaScript has evolved significantly over the years, introducing powerful new features and patterns.</p>

<h2>Modern JavaScript Features</h2>
<p>ES6+ has brought numerous improvements to the language, making it more powerful and developer-friendly.</p>

<pre><code>// Modern JavaScript example
const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};</code></pre>`,
    date: new Date(Date.now() - 86400000),
    source: "Dev.to",
    sourceUrl: "https://dev.to",
    isUnread: false,
    isStarred: false,
    isRead: true,
    estimatedReadTime: 3,
    thumbnailUrl: "https://dummyimage.com/200x200/16a34a/ffffff.png&text=JS",
  },
];

function Home() {
  const [selectedFeedId, setSelectedFeedId] = useState("");
  const [selectedArticleId, setSelectedArticleId] = useState("");
  const [articles] = useState<Article[]>(demoArticles);

  const selectedArticle = articles.find(
    (article) => article.id === selectedArticleId,
  );

  const handleFeedSelect = (feedId: string) => {
    setSelectedFeedId(feedId);
  };

  const handleArticleSelect = (articleId: string) => {
    setSelectedArticleId(articleId);
  };

  const handleAddFeed = (url: string) => {
    console.log("Adding feed:", url);
    // Implement feed addition logic
  };

  const handleStar = () => {
    // Implement star logic
  };

  const handleShare = () => {
    // Implement share logic
  };

  const handleMarkRead = () => {
    // Implement mark as read logic
  };

  const handleSourceClick = () => {
    // Implement source click logic
  };

  return (
    <div className="h-screen bg-background">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
          <Sidebar
            selectedFeedId={selectedFeedId}
            onFeedSelect={handleFeedSelect}
            onAddFeed={handleAddFeed}
          />
        </ResizablePanel>

        <ResizablePanel defaultSize={30} minSize={20} maxSize={40}>
          <ArticleList
            articles={articles}
            selectedArticleId={selectedArticleId}
            onArticleSelect={handleArticleSelect}
          />
        </ResizablePanel>

        <ResizablePanel defaultSize={50} minSize={30}>
          <ReadingPane
            article={selectedArticle}
            onStar={handleStar}
            onShare={handleShare}
            onMarkRead={handleMarkRead}
            onSourceClick={handleSourceClick}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default Home;
