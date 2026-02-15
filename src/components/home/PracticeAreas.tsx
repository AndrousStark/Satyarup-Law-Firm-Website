"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const practices = [
  {
    title: "Corporate Law",
    icon: "&#9878;",
    description: "Strategic counsel for business formation, mergers & acquisitions, corporate governance, and regulatory compliance.",
    slug: "corporate-law",
  },
  {
    title: "Criminal Defence",
    icon: "&#9879;",
    description: "Vigorous defence representation in criminal matters, from white-collar offences to complex litigation.",
    slug: "criminal-defence",
  },
  {
    title: "Civil Litigation",
    icon: "&#9877;",
    description: "Resolving disputes through strategic litigation, arbitration, and mediation across all civil matters.",
    slug: "civil-litigation",
  },
  {
    title: "Family Law",
    icon: "&#9829;",
    description: "Compassionate guidance through divorce, custody, adoption, and all family-related legal matters.",
    slug: "family-law",
  },
  {
    title: "Property & Real Estate",
    icon: "&#9962;",
    description: "Comprehensive property advisory, transactions, title disputes, and real estate development law.",
    slug: "property-real-estate",
  },
  {
    title: "Labour & Employment",
    icon: "&#9874;",
    description: "Protecting workplace rights through employment contracts, disputes, and regulatory compliance.",
    slug: "labour-employment",
  },
  {
    title: "Intellectual Property",
    icon: "&#9888;",
    description: "Safeguarding innovations through patents, trademarks, copyrights, and IP litigation.",
    slug: "intellectual-property",
  },
];

export default function PracticeAreas() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,110,0.05)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Our Expertise"
          title="Practice Areas"
          description="Our multidisciplinary team delivers specialized legal counsel across a comprehensive range of practice areas."
          light
        />

        <motion.div
          variants={prefersReducedMotion ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {practices.map((practice) => (
            <motion.div key={practice.slug} variants={fadeUp}>
              <div className="flip-card">
                <div className="flip-front">
                  <span
                    className="flip-icon text-warm-gold"
                    dangerouslySetInnerHTML={{ __html: practice.icon }}
                  />
                  <span className="flip-title">{practice.title}</span>
                </div>
                <div className="flip-back">
                  <div className="flip-back-content">
                    <p className="mb-4 text-sm">{practice.description}</p>
                    <a
                      href={`/practice-areas/${practice.slug}`}
                      className="text-sm font-semibold text-warm-gold hover:underline"
                    >
                      Learn More &rarr;
                    </a>
                  </div>
                </div>
              </div>
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
          <Button href="/practice-areas" variant="outline" className="!border-warm-gold/40 !text-warm-gold hover:!bg-warm-gold hover:!text-white">
            View All Practice Areas
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
