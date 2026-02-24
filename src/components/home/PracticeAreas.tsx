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
    description: "Appearances before Delhi, Bombay, Punjab & Haryana, Madhya Pradesh, Patna, and Tripura High Courts.",
    slug: "high-court-litigation",
  },
  {
    title: "Arbitration & ADR",
    icon: "&#9877;",
    description: "Domestic & international arbitration, enforcement of awards, mediation, negotiation, and contractual dispute resolution.",
    slug: "arbitration-dispute-resolution",
  },
  {
    title: "Corporate & Commercial",
    icon: "&#9830;",
    description: "Incorporation, governance, M&A, private equity, joint ventures, NCLT representation, and cross-border transactions.",
    slug: "corporate-commercial-law",
  },
  {
    title: "Banking & Finance",
    icon: "&#9830;",
    description: "Lending, project finance, recovery proceedings, and regulatory advice for banks, NBFCs, and fintech firms.",
    slug: "banking-financial-litigation",
  },
  {
    title: "Government & Public Sector",
    icon: "&#9962;",
    description: "Representing Union of India, Ministries, PSUs, and public sector entities in statutory and policy matters.",
    slug: "government-regulatory-matters",
  },
  {
    title: "Maritime & Shipping",
    icon: "&#9875;",
    description: "Charterparties, cargo claims, vessel arrest, marine insurance, admiralty jurisdiction, and ship finance.",
    slug: "maritime-shipping-admiralty",
  },
  {
    title: "Intellectual Property",
    icon: "&#9874;",
    description: "Patent drafting, trademark filing, copyright enforcement, IP licensing, portfolio management, and IP litigation.",
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
          description="Our multidisciplinary team delivers specialized legal counsel across 27+ practice areas spanning litigation, corporate advisory, dispute resolution, and sector-specific matters."
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
            View All 27+ Practice Areas
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
