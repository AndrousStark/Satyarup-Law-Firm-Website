"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Image from "next/image";

interface NewsArticleClientProps {
  slug: string;
  article: { title: string; date: string; category: string; image: string; content: string } | undefined;
}

export default function NewsArticleClient({ article }: NewsArticleClientProps) {
  if (!article) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-charcoal font-display mb-4">Article Not Found</h1>
            <p className="text-warm-gray mb-6">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Button href="/news">Back to News</Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <Image src={article.image} alt={article.title} fill className="object-cover opacity-25" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/90" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 text-center px-6 max-w-3xl"
          >
            <span className="inline-block bg-warm-gold/90 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white font-display leading-tight">{article.title}</h1>
            <p className="text-white/50 mt-4 text-sm">{article.date}</p>
          </motion.div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {article.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-warm-gray leading-relaxed mb-6">{paragraph}</p>
              ))}
            </motion.article>
            <div className="mt-12 pt-8 border-t border-warm-gold/10">
              <Button href="/news" variant="outline">&larr; Back to News</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
