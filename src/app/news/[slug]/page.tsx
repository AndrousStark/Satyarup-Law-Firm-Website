import { articleData, articleSlugs } from "@/lib/data";
import NewsArticleClient from "./client";

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleData[slug];
  return <NewsArticleClient slug={slug} article={article} />;
}
