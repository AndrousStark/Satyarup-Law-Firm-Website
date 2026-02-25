"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Image from "next/image";

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "AoR", label: "Supreme Court of India" },
  { value: "Pan India", label: "Presence & Network" },
  { value: "Full Service", label: "Legal & Consulting" },
];

export default function AboutPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            variants={prefersReducedMotion ? {} : slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80"
                alt="Professional legal consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 md:right-6 glass-card p-6 shimmer"
            >
              <p className="text-3xl font-bold text-warm-gold font-display">30+</p>
              <p className="text-sm text-warm-gray">Years of Legal Excellence</p>
            </motion.div>
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-warm-gold/30 rounded-tl-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={prefersReducedMotion ? {} : slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeading
              label="About Our Firm"
              title="Diversified Full Service Legal & Consulting Practice"
              align="left"
            />
            <p className="text-warm-gray leading-relaxed mb-6">
              Satyarup Law Firm is a diversified full service legal and consulting practice
              delivering integrated litigation, advisory, transactional, regulatory, research,
              and paralegal solutions across India. Established on principles of excellence,
              integrity, and strategic precision, the firm combines deep legal acumen with
              commercially informed insight to serve clients in an increasingly complex
              regulatory and business environment.
            </p>
            <p className="text-warm-gray leading-relaxed mb-4">
              Led by Dr. Ashwani Bhardwaj, Advocate on Record, Supreme Court of India, the firm
              draws upon over three decades of experience in handling high value and multifaceted
              legal mandates across sectors and jurisdictions. The firm maintains a strong presence
              before the Supreme Court of India and regularly appears before High Courts across
              India, national tribunals, appellate authorities, and specialised adjudicatory forums.
            </p>
            <p className="text-warm-gray leading-relaxed mb-8">
              Committed to professional excellence, discretion, and strategic clarity, the firm
              positions itself not merely as legal counsel, but as a long term partner in
              governance, growth, and risk management.
            </p>

            {/* Stats Grid */}
            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp} className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-charcoal font-display">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-warm-gray mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <Button href="/about" variant="outline">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
