import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink } from "lucide-react";

interface ArticleContentProps {
  content?: string;
  thumbnailUrl?: string;
  images?: Array<{ url: string; caption?: string }>;
  videos?: Array<{ url: string; type: string; poster?: string }>;
}

const ArticleContent = ({
  content = `<p>Web development is constantly evolving, with new technologies and frameworks emerging regularly. This article explores the latest trends and what they mean for developers.</p>

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
</blockquote>

<h3>Key Trends</h3>
<ul>
  <li>Serverless Architecture</li>
  <li>Edge Computing</li>
  <li>Progressive Web Apps</li>
  <li>WebAssembly</li>
</ul>

<p>As we look to the future, it's clear that web development will continue to evolve and adapt to new technologies and user needs.</p>`,
  thumbnailUrl = "https://dummyimage.com/800x400/2563eb/ffffff.png&text=Article+Image",
  images = [],
  videos = [],
}: ArticleContentProps) => {
  return (
    <ScrollArea className="h-full bg-background">
      <article className="max-w-none p-6">
        {/* Featured Image */}
        {thumbnailUrl && (
          <div className="mb-8">
            <AspectRatio ratio={2}>
              <img
                src={thumbnailUrl}
                alt="Article thumbnail"
                className="rounded-lg object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        )}

        {/* Article Content */}
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="prose prose-slate dark:prose-invert max-w-none
            prose-headings:scroll-m-20 prose-headings:tracking-tight
            prose-h1:text-3xl prose-h1:font-bold
            prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-10 prose-h2:first:mt-0
            prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8
            prose-h4:text-lg prose-h4:font-semibold
            prose-p:leading-7 prose-p:mb-6
            prose-blockquote:border-l-2 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground
            prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-6
            prose-li:mt-2
            prose-code:rounded prose-code:bg-muted prose-code:p-1 prose-code:text-sm prose-code:font-mono
            prose-pre:rounded-lg prose-pre:bg-muted prose-pre:p-4
            prose-img:rounded-lg prose-img:my-8
            prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-muted-foreground prose-figcaption:mt-2
            prose-a:text-primary prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary/80
            [&>*:first-child]:mt-0
            [&>*:last-child]:mb-0
            [&>pre]:overflow-x-auto [&>pre]:my-6
            [&>figure]:my-8
          "
        />

        {/* Additional Images */}
        {images.map((image, index) => (
          <figure key={index} className="my-8">
            <AspectRatio ratio={16 / 9}>
              <img
                src={image.url}
                alt={image.caption || `Image ${index + 1}`}
                className="rounded-lg object-cover w-full h-full"
              />
            </AspectRatio>
            {image.caption && (
              <figcaption className="text-center text-sm text-muted-foreground mt-2">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}

        {/* Video Embeds */}
        {videos.map((video, index) => (
          <div key={index} className="my-8">
            <AspectRatio ratio={16 / 9}>
              <video
                controls
                poster={video.poster}
                className="rounded-lg w-full h-full"
              >
                <source src={video.url} type={video.type} />
                Your browser does not support the video tag.
              </video>
            </AspectRatio>
          </div>
        ))}
      </article>
    </ScrollArea>
  );
};

export default ArticleContent;
