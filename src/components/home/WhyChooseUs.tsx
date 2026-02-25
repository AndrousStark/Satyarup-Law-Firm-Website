"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  "Strategic legal advisory and case assessment",
  "Drafting of pleadings, petitions, and legal submissions",
  "Procedural filings and compliance management",
  "Representation before courts, tribunals, and adjudicatory bodies",
  "Post judgment advisory and enforcement guidance",
  "Corporate and commercial advisory services",
  "Arbitration and alternative dispute resolution",
  "Maritime, shipping, and admiralty practice",
  "Mergers, acquisitions, and due diligence",
  "Regulatory compliance and government representation",
];

export default function WhyChooseUs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Professional Commitment"
          title="Professional Commitment and Legal Approach"
        />

        {/* Intro Paragraphs */}
        <motion.div
          variants={prefersReducedMotion ? {} : slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-warm-gray leading-relaxed mb-6 text-center">
            Satyarup Law Firm is dedicated to delivering high quality legal services founded on
            professionalism, diligence, and integrity. The firm provides comprehensive legal
            representation and strategic advisory support across a broad spectrum of legal
            disciplines, serving clients with precision and accountability.
          </p>
          <p className="text-warm-gray leading-relaxed text-center">
            With a structured and methodical approach, the firm manages matters at every stage of
            legal proceedings. Each engagement is guided by meticulous preparation, rigorous legal
            research, and sound professional judgment, ensuring that legal strategies are both
            technically robust and practically effective.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-16 bg-warm-gold/40" />
          <div className="mx-4 h-2 w-2 rotate-45 border border-warm-gold/40" />
          <div className="h-px w-16 bg-warm-gold/40" />
        </div>

        {/* Scope of Services */}
        <motion.div
          variants={prefersReducedMotion ? {} : slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-charcoal text-center mb-10">
            Scope of Services
          </h3>
          <p className="text-warm-gray leading-relaxed text-center mb-10">
            The firm offers a comprehensive range of services designed to address both contentious
            and non contentious legal requirements, including:
          </p>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-2"
          >
            {services.map((service) => (
              <motion.div
                key={service}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl border border-warm-gold/10 bg-white p-4 shadow-sm transition-all hover:border-warm-gold/30 hover:shadow-md"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-warm-gold" />
                <p className="text-sm text-charcoal leading-relaxed">{service}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
