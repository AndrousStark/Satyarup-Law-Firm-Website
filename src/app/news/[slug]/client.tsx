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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-charcoal font-display mb-4">Article Not Found</h1>
            <p className="text-warm-gray mb-6">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Button href="/news">Back to News & Media</Button>
          </motion.div>
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
          <div className="relative z-10 text-center px-6 max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-block bg-warm-gold/90 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-4"
            >
              {article.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.2, 0.9, 0.3, 1] }}
              className="text-3xl md:text-5xl font-bold text-white font-display leading-tight"
            >
              {article.title}
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="w-12 h-[1px] bg-warm-gold mx-auto mt-6 mb-3"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-white/50 text-sm"
            >
              {article.date}
            </motion.p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {article.content.split("\n\n").map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-warm-gray leading-relaxed mb-6 text-base"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.article>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-12 pt-8 border-t border-warm-gold/10"
            >
              <Button href="/news" variant="outline">&larr; Back to News & Media</Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
