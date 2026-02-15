"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

const clients = [
  {
    category: "Government Departments",
    entities: ["Union of India", "Ministry of Railways"],
  },
  {
    category: "Public Sector Undertakings",
    entities: ["Western Coalfields Limited", "Shipping Corporation of India"],
  },
  {
    category: "Financial Institutions",
    entities: ["Bank of Baroda", "Punjab National Bank", "Central Bank of India", "Indian Overseas Bank"],
  },
  {
    category: "Educational Institutions",
    entities: ["Association of Indian Universities"],
  },
  {
    category: "Corporate & Private Clients",
    entities: ["Corporate Entities", "Private Clients"],
  },
];

const howWeWork = [
  { step: "01", title: "Initial Consultation", description: "Case assessment and understanding of facts" },
  { step: "02", title: "Legal Research & Strategy", description: "Detailed study of applicable law and strategic planning" },
  { step: "03", title: "Drafting & Filing", description: "Careful drafting of pleadings and procedural compliance" },
  { step: "04", title: "Court Representation", description: "Effective oral advocacy before courts and tribunals" },
  { step: "05", title: "Post-Judgment Advisory", description: "Continuous client communication and compliance" },
];

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* Representative Clients */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-warm-gold/3 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            label="Representative Clients"
            title="Trusted by Leading Institutions"
            description="The firm has represented government departments, public sector undertakings, financial institutions, universities, and private clients."
          />

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3 lg:grid-cols-5"
          >
            {clients.map((client) => (
              <motion.div
                key={client.category}
                variants={fadeUp}
                className="rounded-xl border border-warm-gold/10 bg-cream/50 p-6 text-center hover:border-warm-gold/30 hover:shadow-lg transition-all"
              >
                <h3 className="text-sm font-semibold text-charcoal font-display mb-3">{client.category}</h3>
                <ul className="space-y-1.5">
                  {client.entities.map((entity) => (
                    <li key={entity} className="text-xs text-warm-gray">{entity}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            label="Our Process"
            title="How We Work"
            description="Every matter is handled through a structured and disciplined process."
          />

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-5"
          >
            {howWeWork.map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="relative text-center p-6"
              >
                <span className="text-4xl font-bold text-warm-gold/20 font-display">{item.step}</span>
                <h3 className="text-sm font-semibold text-charcoal font-display mt-2 mb-2">{item.title}</h3>
                <p className="text-xs text-warm-gray leading-relaxed">{item.description}</p>
                {i < howWeWork.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[1px] bg-warm-gold/30" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
