import { practiceData, practiceSlugs } from "@/lib/data";
import PracticeAreaClient from "./client";

export function generateStaticParams() {
  return practiceSlugs.map((slug) => ({ slug }));
}

export default async function PracticeAreaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const practice = practiceData[slug];
  return <PracticeAreaClient slug={slug} practice={practice} />;
}
