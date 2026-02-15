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
    title: "Corporate Law",
    slug: "corporate-law",
    description: "Comprehensive corporate advisory, M&A, governance, venture capital, private equity, and regulatory compliance for businesses of all sizes.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Criminal Defence",
    slug: "criminal-defence",
    description: "Aggressive and strategic defence in criminal matters including white-collar crime, fraud, cyber crime, and complex criminal litigation.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Civil Litigation",
    slug: "civil-litigation",
    description: "Expert dispute resolution through litigation, arbitration, and mediation across commercial, contractual, and tortious claims.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Family Law",
    slug: "family-law",
    description: "Sensitive and strategic handling of divorce, child custody, adoption, domestic violence, maintenance, and matrimonial disputes.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Property & Real Estate",
    slug: "property-real-estate",
    description: "End-to-end real estate advisory including transactions, title verification, RERA compliance, construction disputes, and landlord-tenant matters.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Labour & Employment",
    slug: "labour-employment",
    description: "Employment contracts, workplace disputes, compliance with labour codes, industrial relations, and employee benefit advisory.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Intellectual Property",
    slug: "intellectual-property",
    description: "Patent and trademark registration, copyright protection, trade secrets, licensing, and IP litigation across all industries.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&auto=format&fit=crop&q=80",
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
            className="relative z-10 text-center px-6"
          >
            <span className="text-warm-gold text-xs uppercase tracking-[0.4em] mb-4 block">Our Expertise</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display">Practice Areas</h1>
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
