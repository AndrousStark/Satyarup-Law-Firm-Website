"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "Supreme Court Landmark Ruling on Corporate Governance",
    excerpt: "A recent ruling reshapes how boards of directors must approach fiduciary duties in listed companies, with far-reaching implications for corporate India.",
    date: "Feb 10, 2026",
    category: "Constitutional Law",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
    slug: "supreme-court-corporate-governance",
    featured: true,
  },
  {
    title: "New Amendments to Labour Code: What Employers Must Know",
    excerpt: "Key changes in the new labour code that impact hiring practices, working hours, and employee benefits across all industries.",
    date: "Feb 05, 2026",
    category: "Regulatory Law",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80",
    slug: "labour-code-amendments",
    featured: true,
  },
  {
    title: "Protecting Your Intellectual Property in the Digital Age",
    excerpt: "Essential strategies for safeguarding patents, trademarks, and copyrights in an increasingly digital world.",
    date: "Jan 28, 2026",
    category: "IP Law",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80",
    slug: "ip-digital-age",
    featured: false,
  },
  {
    title: "Real Estate Market Update: RERA Compliance Changes for 2026",
    excerpt: "New regulatory changes under RERA that developers and buyers need to be aware of in the coming year.",
    date: "Jan 20, 2026",
    category: "Property Law",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80",
    slug: "rera-compliance-2026",
    featured: false,
  },
  {
    title: "Understanding Cyber Crime Laws in India",
    excerpt: "A comprehensive overview of India's cyber crime legislation and what individuals and businesses should know.",
    date: "Jan 15, 2026",
    category: "Criminal Law",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
    slug: "cyber-crime-laws-india",
    featured: false,
  },
  {
    title: "Satyarup Law Firm: A Year of Continued Growth",
    excerpt: "The firm begins 2026 with renewed commitment to delivering high-quality legal representation across core practice areas.",
    date: "Jan 08, 2026",
    category: "Firm News",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80",
    slug: "firm-expansion-2026",
    featured: false,
  },
];

const featuredArticles = articles.filter((a) => a.featured);
const regularArticles = articles.filter((a) => !a.featured);

export default function NewsPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1504711434969-e33886168d4c?w=1920&auto=format&fit=crop&q=80"
              alt="News"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/90" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 text-center px-6"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-warm-gold text-xs uppercase tracking-[0.4em] mb-4 block"
            >
              Stay Informed
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: [0.2, 0.9, 0.3, 1] }}
              className="text-4xl md:text-6xl font-bold text-white font-display"
            >
              News & Media
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="w-16 h-[1px] bg-warm-gold mx-auto mt-6 mb-4"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="text-white/50 text-sm mt-2 max-w-xl mx-auto leading-relaxed"
            >
              Reported judgments, legal commentary, publications, and important case updates from Satyarup Law Firm.
            </motion.p>
          </motion.div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-warm-gold text-xs uppercase tracking-[0.3em] font-medium">Featured</span>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal font-display mt-2">Latest Highlights</h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              {featuredArticles.map((article, i) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.2, 0.9, 0.3, 1] }}
                >
                  <Link
                    href={`/news/${article.slug}`}
                    className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-warm-gold/5 hover:border-warm-gold/20"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-warm-gold text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <time className="text-xs text-white/70 uppercase tracking-wider">{article.date}</time>
                        <h3 className="mt-1 text-xl md:text-2xl font-bold text-white font-display leading-tight group-hover:text-warm-gold transition-colors duration-300">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-warm-gray leading-relaxed line-clamp-2">{article.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-warm-gold group-hover:gap-3 transition-all duration-300">
                        Read Full Article
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-warm-gold text-xs uppercase tracking-[0.3em] font-medium">Archive</span>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal font-display mt-2">More Articles</h2>
            </motion.div>

            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {regularArticles.map((article) => (
                <motion.div key={article.slug} variants={fadeUp}>
                  <Link
                    href={`/news/${article.slug}`}
                    className="group block rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 border border-warm-gold/5 hover:border-warm-gold/20 h-full"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block bg-charcoal/80 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <time className="text-[10px] text-warm-gray uppercase tracking-wider">{article.date}</time>
                      <h3 className="mt-1.5 text-base font-semibold text-charcoal group-hover:text-warm-gold transition-colors font-display leading-snug line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-xs text-warm-gray leading-relaxed line-clamp-2">{article.excerpt}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-warm-gold group-hover:gap-2.5 transition-all duration-300">
                        Read More
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
