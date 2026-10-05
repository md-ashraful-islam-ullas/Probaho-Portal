import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type BodyBlock =
  | { type: "text"; text: string }
  | { type: "subheading"; text: string }
  | {
      type: "image";
      url: string;
      width: number;
      height: number;
      caption?: string;
      altText?: string;
      copyrightHolder?: string;
    };

interface Article {
  id: string;
  title: string;
  link: string;
  firstPublished: string;
  lastPublished: string;
  byline: { name: string; role: string }[];
  topics: { id: string; name: string }[];
  tags: string[];
  imageUrl: string;
  body: BodyBlock[];
  wordCount: number;
  source: string;
  sourceUrl: string;
}

type Props = { params: Promise<{ articleId: string }> };

async function getArticle(articleId: string): Promise<Article | null> {
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${articleId}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return null;
  const json = await res.json();
  return json.success ? (json.data as Article) : null;
}

// fetch() is deduped by Next, so this doesn't cost a second request
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { articleId } = await params;
  const news = await getArticle(articleId);
  return { title: news?.title ?? "Article not found" };
}

const NewsDetailsPage = async ({ params }: Props) => {
  const { articleId } = await params;
  const news = await getArticle(articleId);

  if (!news) notFound();

  const published = new Date(news.firstPublished).toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      {/* Topics */}
      <div className="mb-4 flex flex-wrap gap-2">
        {news.topics.map((topic) => (
          <span
            key={topic.id}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
          >
            {topic.name}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold leading-tight md:text-4xl">
        {news.title}
      </h1>

      {/* Meta */}
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-b pb-4 text-sm text-gray-600">
        {news.byline.map((b) => (
          <span key={b.name} className="font-medium text-gray-900">
            {b.name.trim()}
            <span className="font-normal text-gray-500">
              {" "}
              · {b.role}
            </span>
          </span>
        ))}
        <span>•</span>
        <time dateTime={news.firstPublished}>{published}</time>
        <span>•</span>
        <span>{news.source}</span>
      </div>

      {/* Body */}
      <div className="mt-8 space-y-6">
        {news.body.map((block, i) => {
          switch (block.type) {
            case "subheading":
              return (
                <h2 key={i} className="pt-4 text-2xl font-semibold">
                  {block.text}
                </h2>
              );

            case "image":
              return (
                <figure key={i}>
                  <Image
                    src={block.url}
                    alt={block.altText ?? block.caption ?? ""}
                    width={block.width}
                    height={block.height}
                    className="h-auto w-full rounded-lg"
                    priority={i === 0}
                  />
                  {(block.caption || block.copyrightHolder) && (
                    <figcaption className="mt-2 text-sm text-gray-500">
                      {block.caption}
                      {block.copyrightHolder && (
                        <span className="block text-xs text-gray-400">
                          {block.copyrightHolder}
                        </span>
                      )}
                    </figcaption>
                  )}
                </figure>
              );

            case "text":
              // text blocks contain "\n" — split them into real paragraphs
              return (
                <div key={i} className="space-y-4 text-lg leading-8">
                  {block.text
                    .split("\n")
                    .map((p) => p.trim())
                    .filter(Boolean)
                    .map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                </div>
              );

            default:
              return null;
          }
        })}
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t pt-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {news.tags.map((tag) => (
            <span key={tag} className="text-sm text-blue-600">
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm">
          <Link href="/" className="text-gray-600 hover:underline">
            ← Back to home
          </Link>
          <a
            href={news.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline"
          >
            Read on {news.source} →
          </a>
        </div>
      </footer>
    </article>
  );
};

export default NewsDetailsPage;