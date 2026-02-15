"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp, cardHover } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Image from "next/image";

const articles = [
  {
    title: "Supreme Court Landmark Ruling on Corporate Governance",
    excerpt: "A recent ruling reshapes how boards of directors must approach fiduciary duties in listed companies.",
    date: "Feb 10, 2026",
    category: "Corporate Law",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
    slug: "supreme-court-corporate-governance",
  },
  {
    title: "New Amendments to Labour Code: What Employers Must Know",
    excerpt: "Key changes in the new labour code that impact hiring practices, working hours, and employee benefits.",
    date: "Feb 05, 2026",
    category: "Labour Law",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80",
    slug: "labour-code-amendments",
  },
  {
    title: "Protecting Your Intellectual Property in the Digital Age",
    excerpt: "Essential strategies for safeguarding patents, trademarks, and copyrights in an increasingly digital world.",
    date: "Jan 28, 2026",
    category: "IP Law",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80",
    slug: "ip-digital-age",
  },
];

export default function NewsPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="In the Media"
          title="Legal Updates & Insights"
          description="Reported judgments, publications, and important case updates from our practice."
        />

        <motion.div
          variants={prefersReducedMotion ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {articles.map((article) => (
            <motion.div
              key={article.slug}
              variants={prefersReducedMotion ? {} : cardHover}
              initial="rest"
              whileHover="hover"
            >
              <motion.a
                href={`/news/${article.slug}`}
                variants={fadeUp}
                className="group block rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow border border-warm-gold/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-warm-gold/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <time className="text-xs text-warm-gray uppercase tracking-wider">{article.date}</time>
                  <h3 className="mt-2 text-lg font-semibold text-charcoal group-hover:text-warm-gold transition-colors font-display leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-warm-gray leading-relaxed line-clamp-2">{article.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-warm-gold">
                    Read More &rarr;
                  </span>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button href="/news" variant="outline">
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
