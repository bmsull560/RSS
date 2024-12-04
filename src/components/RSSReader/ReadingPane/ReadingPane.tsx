import React from "react";
import ArticleHeader from "./ArticleHeader";
import ArticleContent from "./ArticleContent";

interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: Date;
  source: string;
  sourceUrl?: string;
  isStarred: boolean;
  isRead: boolean;
  estimatedReadTime?: number;
  thumbnailUrl?: string;
  images?: Array<{ url: string; caption?: string }>;
  videos?: Array<{ url: string; type: string; poster?: string }>;
}

interface ReadingPaneProps {
  article?: Article;
  onStar?: () => void;
  onShare?: () => void;
  onMarkRead?: () => void;
  onSourceClick?: () => void;
}

const ReadingPane = ({
  article = {
    id: "1",
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends in web development...",
    content: `<p>Web development is constantly evolving, with new technologies and frameworks emerging regularly. This article explores the latest trends and what they mean for developers.</p>

<h2>The Rise of Web Components</h2>
<p>Web Components are becoming increasingly important in modern web development. They offer a way to create reusable, encapsulated HTML elements that can be shared across different projects and frameworks.</p>

<figure>
  <img src="https://dummyimage.com/800x400/4338ca/ffffff.png&text=Web+Components" alt="Web Components Diagram" />
  <figcaption>Modern Web Components Architecture</figcaption>
</figure>

<h2>AI-Powered Development</h2>
<p>Artificial Intelligence is revolutionizing how we build websites and applications. From code completion to automated testing, AI tools are making developers more productive than ever.</p>

<pre><code>// Example of AI-assisted code
function optimizeImage(image) {
  return ai.enhance(image, {
    quality: "auto",
    format: "webp"
  });
}</code></pre>

<blockquote>
  <p>The future of web development lies in the intersection of human creativity and machine intelligence.</p>
  <cite>- Tech Visionary</cite>
</blockquote>`,
    date: new Date(),
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
    isStarred: false,
    isRead: false,
    estimatedReadTime: 5,
    thumbnailUrl:
      "https://dummyimage.com/800x400/2563eb/ffffff.png&text=Web+Development",
    images: [
      {
        url: "https://dummyimage.com/800x400/4338ca/ffffff.png&text=Architecture",
        caption: "Modern Web Architecture Diagram",
      },
    ],
    videos: [
      {
        url: "https://example.com/demo.mp4",
        type: "video/mp4",
        poster: "https://dummyimage.com/800x400/16a34a/ffffff.png&text=Video",
      },
    ],
  },
  onStar = () => {},
  onShare = () => {},
  onMarkRead = () => {},
  onSourceClick = () => {},
}: ReadingPaneProps) => {
  if (!article) {
    return (
      <div className="w-[832px] h-[982px] bg-background flex items-center justify-center text-muted-foreground">
        <div className="text-center space-y-2">
          <p className="text-lg font-medium">Select an article to read</p>
          <p className="text-sm">
            Choose an article from the list to view its content
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[832px] h-[982px] border-l bg-background flex flex-col">
      <ArticleHeader
        title={article.title}
        source={article.source}
        sourceUrl={article.sourceUrl}
        date={article.date}
        isStarred={article.isStarred}
        isRead={article.isRead}
        estimatedReadTime={article.estimatedReadTime}
        onStar={onStar}
        onShare={onShare}
        onMarkRead={onMarkRead}
        onSourceClick={onSourceClick}
      />
      <div className="flex-1 overflow-hidden">
        <ArticleContent
          content={article.content}
          thumbnailUrl={article.thumbnailUrl}
          images={article.images}
          videos={article.videos}
        />
      </div>
    </div>
  );
};

export default ReadingPane;
