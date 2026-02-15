"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

const team = [
  {
    name: "Satyarup Sengupta",
    role: "Founding Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    bio: "With over 25 years of legal experience, Satyarup leads the firm with a vision for excellence and justice.",
  },
  {
    name: "Aditi Verma",
    role: "Senior Partner, Corporate Law",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    bio: "Specialist in corporate governance, M&A, and regulatory compliance with 18 years of practice.",
  },
  {
    name: "Vikram Rao",
    role: "Senior Partner, Litigation",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    bio: "A formidable litigator with an exceptional record in complex civil and criminal matters.",
  },
  {
    name: "Meera Joshi",
    role: "Partner, Family Law",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    bio: "Known for her compassionate yet strategic approach to family law and dispute resolution.",
  },
];

const values = [
  { title: "Integrity", description: "We uphold the highest ethical standards in every interaction and case." },
  { title: "Excellence", description: "We pursue the best possible outcomes through meticulous preparation and expertise." },
  { title: "Innovation", description: "We embrace modern solutions while respecting time-tested legal principles." },
  { title: "Commitment", description: "We are dedicated to our clients' success and the pursuit of justice." },
];

export default function AboutPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format&fit=crop&q=80"
              alt="Office"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/90" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 text-center px-6"
          >
            <span className="text-warm-gold text-xs uppercase tracking-[0.4em] mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display">About Us</h1>
          </motion.div>
        </section>

        {/* Mission */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={prefersReducedMotion ? {} : slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <SectionHeading label="Our Mission" title="Justice Through Excellence" align="left" />
                <p className="text-warm-gray leading-relaxed mb-6">
                  Satyarup Law Firm Group was founded on the principle that every individual and
                  organization deserves access to exceptional legal representation. Our mission is
                  to deliver strategic, results-driven counsel that protects rights, resolves disputes,
                  and creates opportunities.
                </p>
                <p className="text-warm-gray leading-relaxed mb-6">
                  We believe in building lasting relationships with our clients, understanding their unique
                  challenges, and providing solutions that go beyond mere legal compliance to create
                  meaningful, positive outcomes.
                </p>
                <p className="text-warm-gray leading-relaxed">
                  Our multidisciplinary team brings together decades of combined experience across diverse
                  practice areas, enabling us to offer comprehensive legal support under one roof.
                </p>
              </motion.div>

              <motion.div
                variants={prefersReducedMotion ? {} : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop&q=80"
                    alt="Modern office"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-warm-gold/30 rounded-bl-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-cream">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading label="Our Values" title="What Drives Us" />
            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="text-center p-8 rounded-xl bg-white border border-warm-gold/10 hover:border-warm-gold/30 transition-all hover:shadow-lg"
                >
                  <span className="inline-block text-3xl text-warm-gold mb-4 font-display font-bold">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">{value.title}</h3>
                  <p className="text-sm text-warm-gray leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading label="Our Team" title="Meet Our Leadership" description="A team of seasoned professionals dedicated to your success." />
            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
              {team.map((member) => (
                <motion.div key={member.name} variants={fadeUp} className="group text-center">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal font-display">{member.name}</h3>
                  <p className="text-sm text-warm-gold mb-2">{member.role}</p>
                  <p className="text-xs text-warm-gray leading-relaxed">{member.bio}</p>
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
