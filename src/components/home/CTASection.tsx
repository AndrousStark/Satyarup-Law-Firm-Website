"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm-gold/3 rounded-full blur-[80px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-warm-gold mb-6">
            Get Started Today
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white font-display leading-tight mb-6">
            Ready to Discuss Your<br />Legal Needs?
          </h2>

          <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Schedule a confidential consultation with our experienced legal team.
            We are here to provide the strategic guidance you need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Schedule Free Consultation
            </Button>
            <div className="text-white/40 text-sm">
              or call us at <a href="tel:+911122053080" className="text-warm-gold hover:underline">+91-11-2205-3080</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
