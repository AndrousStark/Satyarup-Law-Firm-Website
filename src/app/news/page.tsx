"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "Supreme Court Landmark Ruling on Corporate Governance",
    excerpt: "A recent ruling reshapes how boards of directors must approach fiduciary duties in listed companies, with far-reaching implications for corporate India.",
    date: "Feb 10, 2026",
    category: "Corporate Law",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
    slug: "supreme-court-corporate-governance",
  },
  {
    title: "New Amendments to Labour Code: What Employers Must Know",
    excerpt: "Key changes in the new labour code that impact hiring practices, working hours, and employee benefits across all industries.",
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
  {
    title: "Real Estate Market Update: RERA Compliance Changes for 2026",
    excerpt: "New regulatory changes under RERA that developers and buyers need to be aware of in the coming year.",
    date: "Jan 20, 2026",
    category: "Property Law",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80",
    slug: "rera-compliance-2026",
  },
  {
    title: "Understanding Cyber Crime Laws in India",
    excerpt: "A comprehensive overview of India's cyber crime legislation and what individuals and businesses should know.",
    date: "Jan 15, 2026",
    category: "Criminal Law",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
    slug: "cyber-crime-laws-india",
  },
  {
    title: "Satyarup Law Firm Expands Corporate Practice",
    excerpt: "Our firm welcomes three new senior associates to strengthen our corporate advisory and M&A capabilities.",
    date: "Jan 08, 2026",
    category: "Firm News",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80",
    slug: "firm-expansion-2026",
  },
];

export default function NewsPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Header />
      <main>
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
            <span className="text-warm-gold text-xs uppercase tracking-[0.4em] mb-4 block">Stay Informed</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display">News & Media</h1>
          </motion.div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {articles.map((article) => (
                <motion.div key={article.slug} variants={fadeUp}>
                  <Link
                    href={`/news/${article.slug}`}
                    className="group block rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all border border-warm-gold/5 hover:border-warm-gold/20"
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
                      <h2 className="mt-2 text-lg font-semibold text-charcoal group-hover:text-warm-gold transition-colors font-display leading-snug">
                        {article.title}
                      </h2>
                      <p className="mt-2 text-sm text-warm-gray leading-relaxed line-clamp-2">{article.excerpt}</p>
                      <span className="mt-4 inline-block text-sm font-medium text-warm-gold">Read More &rarr;</span>
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
