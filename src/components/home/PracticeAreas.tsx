"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Link from "next/link";

const practices = [
  {
    title: "Supreme Court Litigation",
    icon: "&#9878;",
    description: "Special Leave Petitions, Civil & Criminal Appeals, Constitutional matters, and Arbitration-related litigation as Advocate-on-Record.",
    slug: "supreme-court-litigation",
  },
  {
    title: "High Court Litigation",
    icon: "&#9879;",
    description: "Appearances before Delhi, Bombay, Punjab & Haryana, Madhya Pradesh, Patna, and Tripura High Courts in original and appellate matters.",
    slug: "high-court-litigation",
  },
  {
    title: "Arbitration & Dispute Resolution",
    icon: "&#9877;",
    description: "Arbitration proceedings, enforcement of awards, contractual dispute resolution, and court proceedings related to arbitration.",
    slug: "arbitration-dispute-resolution",
  },
  {
    title: "Banking & Financial Litigation",
    icon: "&#9830;",
    description: "Representing major financial institutions including Bank of Baroda, PNB, Central Bank of India, and Indian Overseas Bank.",
    slug: "banking-financial-litigation",
  },
  {
    title: "Government & Regulatory Matters",
    icon: "&#9962;",
    description: "Representing Union of India, Ministry of Railways, Western Coalfields, Shipping Corporation, and public sector undertakings.",
    slug: "government-regulatory-matters",
  },
  {
    title: "Environmental & Tribunal Litigation",
    icon: "&#9874;",
    description: "Matters before National Green Tribunal, Consumer Dispute Redressal Commissions, and regulatory forums.",
    slug: "environmental-tribunal-litigation",
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
                    <Link
                      href={`/practice-areas/${practice.slug}`}
                      className="text-sm font-semibold text-warm-gold hover:underline"
                    >
                      Learn More &rarr;
                    </Link>
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
