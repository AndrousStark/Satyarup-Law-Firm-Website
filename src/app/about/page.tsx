"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

const values = [
  { title: "Preparation", description: "Thorough preparation is the foundation of effective advocacy. Every matter receives detailed study of facts and applicable law." },
  { title: "Clarity", description: "Clear legal reasoning and structured arguments strengthen every case. We believe in disciplined, well-reasoned counsel." },
  { title: "Integrity", description: "Professional ethics and responsible practice are central to our work. We uphold the highest standards of professional conduct." },
  { title: "Commitment", description: "Every matter receives careful attention and dedicated effort. We remain committed to protecting the interests of our clients." },
];

const services = [
  "Legal strategy and advisory",
  "Drafting of pleadings and petitions",
  "Filing and procedural compliance",
  "Representation before courts and tribunals",
  "Post-judgment advisory and compliance",
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
              alt="Supreme Court"
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
            <span className="text-warm-gold text-xs uppercase tracking-[0.4em] mb-4 block">Our Firm</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display">About Us</h1>
          </motion.div>
        </section>

        {/* The Firm */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={prefersReducedMotion ? {} : slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <SectionHeading label="The Firm" title="Commitment to Professional Excellence" align="left" />
                <p className="text-warm-gray leading-relaxed mb-6">
                  Satyarup Law Firm is committed to delivering high-quality legal services with
                  professionalism, diligence, and integrity. The firm focuses on litigation and dispute
                  resolution, providing legal representation and advisory services across a wide range
                  of legal areas.
                </p>
                <p className="text-warm-gray leading-relaxed mb-6">
                  The practice handles matters at all stages of litigation, guided by careful
                  preparation, thorough legal research, and practical judgment.
                </p>

                <h3 className="text-lg font-semibold text-charcoal font-display mb-4">Our Services Include</h3>
                <ul className="space-y-3 mb-6">
                  {services.map((service) => (
                    <li key={service} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-warm-gold flex-shrink-0" />
                      <span className="text-warm-gray text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
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
                    alt="Supreme Court Lawyers Chambers"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-warm-gold/30 rounded-bl-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-20 bg-charcoal">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-warm-gold text-xs uppercase tracking-[0.4em] mb-4 block">Our Mission</span>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-display italic">
                &ldquo;To provide reliable, ethical, and high-quality legal representation while upholding
                the rule of law and protecting the interests of clients.&rdquo;
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Philosophy / Values */}
        <section className="py-20 md:py-28 bg-cream">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading label="Our Philosophy" title="Guiding Principles" />
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

        {/* Our Approach */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading label="Our Approach" title="Structured & Disciplined Process" description="At Satyarup Law Firm, litigation is approached as a structured and disciplined process." />
            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-5"
            >
              {[
                { step: "01", title: "Detailed Study", desc: "Thorough analysis of facts and applicable law" },
                { step: "02", title: "Strategic Planning", desc: "Careful planning of litigation steps" },
                { step: "03", title: "Drafting", desc: "Meticulous drafting and documentation" },
                { step: "04", title: "Advocacy", desc: "Effective oral advocacy in courts" },
                { step: "05", title: "Communication", desc: "Continuous client communication" },
              ].map((item, i) => (
                <motion.div key={item.step} variants={fadeUp} className="relative text-center p-6 rounded-xl bg-cream/50 border border-warm-gold/10">
                  <span className="text-3xl font-bold text-warm-gold/30 font-display">{item.step}</span>
                  <h3 className="text-sm font-semibold text-charcoal font-display mt-2 mb-2">{item.title}</h3>
                  <p className="text-xs text-warm-gray leading-relaxed">{item.desc}</p>
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
