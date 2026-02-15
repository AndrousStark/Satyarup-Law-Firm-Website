"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp, cardHover } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

const features = [
  {
    title: "Depth of Experience",
    description: "Over three decades of courtroom practice across multiple courts and tribunals, including the Supreme Court of India.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=300&fit=crop&auto=format",
  },
  {
    title: "Institutional Representation",
    description: "Experience representing government bodies, public sector enterprises, nationalized banks, universities, and institutions.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop&auto=format",
  },
  {
    title: "Nationwide Practice",
    description: "Appearances in the Supreme Court, several High Courts, and tribunals across India ensuring comprehensive geographical reach.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=300&fit=crop&auto=format",
  },
  {
    title: "Professional Integrity",
    description: "Commitment to ethical practice, responsible advocacy, and upholding the highest standards of professional conduct.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=300&h=300&fit=crop&auto=format",
  },
];

export default function WhyChooseUs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Why Choose Us"
          title="The Satyarup Advantage"
          description="We combine legal excellence with a commitment to understanding your unique challenges."
        />

        <motion.div
          variants={prefersReducedMotion ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={prefersReducedMotion ? {} : cardHover}
              initial="rest"
              whileHover="hover"
              className="group"
            >
              <motion.div variants={fadeUp} className="rounded-xl border border-warm-gold/10 bg-white p-6 shadow-sm transition-all hover:border-warm-gold/30 hover:shadow-lg h-full">
                <div className="mb-4 w-12 h-12 rounded-lg overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-charcoal group-hover:text-warm-gold transition-colors font-display">
                  {feature.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
