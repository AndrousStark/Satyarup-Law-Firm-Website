"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Image from "next/image";

const openings = [
  {
    title: "Senior Associate - Corporate Law",
    department: "Corporate Law",
    location: "New Delhi",
    type: "Full-time",
    description: "We are seeking an experienced corporate law associate with 5+ years of practice in M&A, governance, and regulatory compliance.",
  },
  {
    title: "Associate - Civil Litigation",
    department: "Litigation",
    location: "New Delhi",
    type: "Full-time",
    description: "Join our litigation team to handle complex civil disputes, arbitration proceedings, and commercial matters.",
  },
  {
    title: "Junior Associate - Family Law",
    department: "Family Law",
    location: "New Delhi",
    type: "Full-time",
    description: "An opportunity for a passionate young lawyer to build a career in family law with mentorship from senior partners.",
  },
  {
    title: "Legal Research Intern",
    department: "Research",
    location: "New Delhi / Remote",
    type: "Internship",
    description: "A 3-6 month internship for law students to gain hands-on experience in legal research and case analysis.",
  },
];

const benefits = [
  "Competitive compensation packages",
  "Professional development & CLE programs",
  "Mentorship from senior partners",
  "Work-life balance initiatives",
  "Health & wellness benefits",
  "Performance-based bonuses",
];

export default function CareersPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format&fit=crop&q=80"
              alt="Careers"
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
            <span className="text-warm-gold text-xs uppercase tracking-[0.4em] mb-4 block">Join Our Team</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display">Careers</h1>
          </motion.div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <SectionHeading label="Why Join Us" title="Build Your Legal Career" align="left" />
                <p className="text-warm-gray leading-relaxed mb-6">
                  At Satyarup Law Firm, we believe our people are our greatest asset. We foster an
                  environment of continuous learning, professional growth, and meaningful work that makes
                  a difference in the legal profession.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-warm-gold flex-shrink-0" />
                      <span className="text-warm-gray text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 md:py-28 bg-cream">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading label="Open Positions" title="Current Opportunities" description="Explore our current openings and take the next step in your legal career." />

            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {openings.map((opening) => (
                <motion.div
                  key={opening.title}
                  variants={fadeUp}
                  className="rounded-xl bg-white border border-warm-gold/10 p-6 md:p-8 hover:border-warm-gold/30 hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-charcoal font-display group-hover:text-warm-gold transition-colors">
                        {opening.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="text-xs text-warm-gold bg-warm-gold/10 px-3 py-1 rounded-full">{opening.department}</span>
                        <span className="text-xs text-warm-gray bg-warm-gray/10 px-3 py-1 rounded-full">{opening.location}</span>
                        <span className="text-xs text-warm-gray bg-warm-gray/10 px-3 py-1 rounded-full">{opening.type}</span>
                      </div>
                      <p className="text-sm text-warm-gray mt-3 leading-relaxed">{opening.description}</p>
                    </div>
                    <Button href="/contact" variant="outline" size="sm" className="flex-shrink-0">
                      Apply Now
                    </Button>
                  </div>
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
