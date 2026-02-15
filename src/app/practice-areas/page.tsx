"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";

const practices = [
  {
    title: "Supreme Court Practice",
    slug: "supreme-court-litigation",
    description: "As an Advocate-on-Record practice, the firm provides complete procedural and litigation support before the Supreme Court of India, including Special Leave Petitions, Civil & Criminal Appeals, and Constitutional matters.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "High Court Litigation",
    slug: "high-court-litigation",
    description: "Appearances before the Delhi, Bombay, Punjab & Haryana, Madhya Pradesh, Patna, and Tripura High Courts in original and appellate matters across civil, criminal, and commercial law.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Arbitration & Dispute Resolution",
    slug: "arbitration-dispute-resolution",
    description: "Extensive experience in arbitration involving government departments, institutions, and commercial entities. Dr. Ashwani Bhardwaj has served as an arbitrator on the panel of the Delhi International Arbitration Centre.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Banking & Financial Litigation",
    slug: "banking-financial-litigation",
    description: "Representing major financial institutions including Bank of Baroda, Punjab National Bank, Central Bank of India, and Indian Overseas Bank in recovery proceedings, commercial disputes, and regulatory issues.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Government & Public Sector Representation",
    slug: "government-regulatory-matters",
    description: "Representing the Union of India, Ministry of Railways, Western Coalfields Limited, Shipping Corporation of India, and Association of Indian Universities in complex statutory and policy matters.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Environmental & Tribunal Matters",
    slug: "environmental-tribunal-litigation",
    description: "Handling matters before the National Green Tribunal, Consumer Dispute Redressal Commissions, and arbitration forums, including environmental litigation and regulatory disputes.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=80",
  },
];

export default function PracticeAreasPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&auto=format&fit=crop&q=80"
              alt="Legal library"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/90" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 text-center px-6 max-w-3xl"
          >
            <span className="text-warm-gold text-xs uppercase tracking-[0.4em] mb-4 block">Our Expertise</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display mb-4">Practice Areas</h1>
            <p className="text-white/50 text-sm md:text-base">
              The firm regularly appears before the Supreme Court of India, various High Courts, and tribunals in matters involving civil, criminal, constitutional, arbitration, banking, commercial, and environmental law.
            </p>
          </motion.div>
        </section>

        {/* Practice Areas List */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {practices.map((practice, i) => (
                <motion.div key={practice.slug} variants={fadeUp}>
                  <Link
                    href={`/practice-areas/${practice.slug}`}
                    className="group grid md:grid-cols-2 gap-8 items-center rounded-2xl border border-warm-gold/10 p-4 md:p-0 overflow-hidden hover:border-warm-gold/30 hover:shadow-xl transition-all duration-500"
                  >
                    <div className={`relative aspect-[16/10] overflow-hidden rounded-xl md:rounded-none ${i % 2 === 1 ? "md:order-2" : ""}`}>
                      <Image
                        src={practice.image}
                        alt={practice.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 md:p-10">
                      <span className="text-xs text-warm-gold uppercase tracking-wider font-medium">0{i + 1}</span>
                      <h2 className="text-2xl md:text-3xl font-bold text-charcoal font-display mt-2 mb-4 group-hover:text-warm-gold transition-colors">
                        {practice.title}
                      </h2>
                      <p className="text-warm-gray leading-relaxed mb-6">{practice.description}</p>
                      <span className="text-sm font-semibold text-warm-gold group-hover:underline">
                        Learn More &rarr;
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
