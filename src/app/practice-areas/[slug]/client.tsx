"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Image from "next/image";

interface PracticeAreaClientProps {
  slug: string;
  practice: { title: string; description: string; details: string[]; image: string } | undefined;
}

export default function PracticeAreaClient({ practice }: PracticeAreaClientProps) {
  if (!practice) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-charcoal font-display mb-4">Practice Area Not Found</h1>
            <Button href="/practice-areas">Back to Practice Areas</Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <Image src={practice.image} alt={practice.title} fill className="object-cover opacity-25" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/90" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 text-center px-6"
          >
            <span className="text-warm-gold text-xs uppercase tracking-[0.4em] mb-4 block">Practice Area</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display">{practice.title}</h1>
          </motion.div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-lg text-warm-gray leading-relaxed mb-12">{practice.description}</p>
              <h2 className="text-2xl font-bold text-charcoal font-display mb-8">Our Services Include</h2>
              <ul className="space-y-4 mb-12">
                {practice.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-warm-gold flex-shrink-0" />
                    <span className="text-warm-gray">{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="glass-card shimmer p-8 text-center">
                <h3 className="text-xl font-semibold text-charcoal font-display mb-3">Need Legal Assistance?</h3>
                <p className="text-warm-gray mb-6">Schedule a confidential consultation with our {practice.title} team.</p>
                <Button href="/contact" variant="primary">Schedule Consultation</Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
