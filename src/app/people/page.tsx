"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

const qualifications = [
  "B.Sc., University of Delhi",
  "LL.B., University of Delhi",
  "LL.M., University of Delhi",
  "Ph.D., University of Delhi",
];

const experience = [
  "Advocate-on-Record, Supreme Court of India (since 2003)",
  "Senior Central Government Counsel, Delhi High Court",
  "Arbitrator, Delhi International Arbitration Centre",
  "Counsel for Public Sector Undertakings and Financial Institutions",
  "Enrolled as Advocate (1996)",
];

const memberships = [
  "Supreme Court Bar Association",
  "Delhi High Court Bar Association",
  "Bombay Bar Association",
  "Punjab & Haryana High Court Bar Association",
];

const practiceAreas = [
  "Constitutional Law",
  "Civil Litigation",
  "Criminal Litigation",
  "Arbitration & Dispute Resolution",
  "Banking & Financial Litigation",
  "Government & Regulatory Matters",
  "Environmental & Tribunal Litigation",
  "Commercial Law",
];

export default function PeoplePage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&auto=format&fit=crop&q=80"
              alt="People"
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
            <span className="text-warm-gold text-xs uppercase tracking-[0.4em] mb-4 block">Leadership</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display">Our People</h1>
          </motion.div>
        </section>

        {/* Dr. Ashwani Bhardwaj */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16 items-start">
              {/* Photo Side */}
              <motion.div
                variants={prefersReducedMotion ? {} : slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80"
                    alt="Dr. Ashwani Bhardwaj"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-charcoal font-display">Dr. Ashwani Bhardwaj</h2>
                  <p className="text-warm-gold text-sm font-medium mt-1">Advocate-on-Record, Supreme Court of India</p>
                </div>

                {/* Professional Memberships */}
                <div className="mt-8 p-6 rounded-xl bg-cream border border-warm-gold/10">
                  <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">Professional Memberships</h3>
                  <ul className="space-y-2">
                    {memberships.map((m) => (
                      <li key={m} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-warm-gold flex-shrink-0" />
                        <span className="text-sm text-warm-gray">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Bio Side */}
              <motion.div
                variants={prefersReducedMotion ? {} : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <p className="text-lg text-warm-gray leading-relaxed mb-6">
                  Dr. Ashwani Bhardwaj is a litigation practitioner with over three decades of experience
                  in constitutional, civil, criminal, arbitration, and commercial matters. He leads
                  Satyarup Law Firm with a focus on strategic litigation and dispute resolution.
                </p>
                <p className="text-warm-gray leading-relaxed mb-6">
                  Enrolled as an Advocate in 1996 and practising as an Advocate-on-Record since 2003,
                  he has developed extensive experience in litigation, arbitration, and government matters.
                  He has represented the Union of India, public sector undertakings, financial institutions,
                  and corporate entities in significant legal proceedings involving constitutional, statutory,
                  commercial, and regulatory issues.
                </p>

                {/* Qualifications */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-charcoal font-display mb-4">Qualifications</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {qualifications.map((q) => (
                      <div key={q} className="flex items-center gap-2 p-3 rounded-lg bg-cream/50 border border-warm-gold/10">
                        <span className="w-2 h-2 rounded-full bg-warm-gold flex-shrink-0" />
                        <span className="text-sm text-warm-gray">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Experience */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-charcoal font-display mb-4">Professional Experience</h3>
                  <ul className="space-y-3">
                    {experience.map((exp) => (
                      <li key={exp} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-warm-gold flex-shrink-0 mt-1.5" />
                        <span className="text-warm-gray text-sm leading-relaxed">{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practice Areas */}
                <div>
                  <h3 className="text-lg font-semibold text-charcoal font-display mb-4">Areas of Practice</h3>
                  <div className="flex flex-wrap gap-2">
                    {practiceAreas.map((area) => (
                      <span
                        key={area}
                        className="text-xs font-medium text-warm-gold bg-warm-gold/10 px-4 py-2 rounded-full border border-warm-gold/20"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tech Advisor */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="text-warm-gold text-xs uppercase tracking-[0.4em] mb-4 block">Technology</span>
              <h2 className="text-2xl font-bold text-charcoal font-display mb-4">Tech Advisor</h2>
              <div className="inline-block p-6 rounded-xl bg-white border border-warm-gold/10 shadow-sm">
                <h3 className="text-xl font-semibold text-charcoal font-display">Aniruddh Atrey</h3>
                <p className="text-sm text-warm-gold mt-1">Technology Advisor</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
