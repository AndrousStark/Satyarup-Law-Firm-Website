"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";

const practices = [
  {
    title: "Supreme Court Practice",
    slug: "supreme-court-litigation",
    description: "As an Advocate-on-Record practice, the firm provides complete procedural and litigation support before the Supreme Court of India, including Special Leave Petitions, Civil & Criminal Appeals, and Constitutional matters.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
    category: "Litigation",
  },
  {
    title: "High Court Litigation",
    slug: "high-court-litigation",
    description: "Appearances before the Delhi, Bombay, Punjab & Haryana, Madhya Pradesh, Patna, and Tripura High Courts in original and appellate matters.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
    category: "Litigation",
  },
  {
    title: "Civil & Criminal Litigation",
    slug: "civil-criminal-litigation",
    description: "High-quality advocacy in civil suits, writ petitions, appeals, criminal defense and white-collar crime prosecution/defense across courts and tribunals.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
    category: "Litigation",
  },
  {
    title: "Arbitration & ADR",
    slug: "arbitration-dispute-resolution",
    description: "Domestic and international arbitration, enforcement of arbitral awards, mediation and negotiation under the Arbitration & Conciliation Act.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80",
    category: "Dispute Resolution",
  },
  {
    title: "Corporate & Commercial Law",
    slug: "corporate-commercial-law",
    description: "Incorporation, corporate governance, shareholders' agreements, joint ventures, M&A, private equity, venture capital, and cross-border transactions.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80",
    category: "Corporate",
  },
  {
    title: "Mergers & Acquisitions",
    slug: "mergers-acquisitions",
    description: "Full-service M&A support: due diligence, deal structuring, SPA negotiation, regulatory filings, and post-merger integration.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
    category: "Corporate",
  },
  {
    title: "Insolvency & Bankruptcy (IBC)",
    slug: "insolvency-bankruptcy",
    description: "CIRP proceedings, creditor/debtor strategy, NCLAT appeals, Supreme Court IBC matters, and restructuring advice.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80",
    category: "Corporate",
  },
  {
    title: "Banking & Finance",
    slug: "banking-financial-litigation",
    description: "Lending, syndicated loans, project finance, recovery proceedings, and regulatory advice for banks, NBFCs and fintech firms.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80",
    category: "Financial",
  },
  {
    title: "Securities & Capital Markets",
    slug: "securities-capital-markets",
    description: "IPOs, private placements, SEBI compliance, takeovers and delisting matters, and securities litigation.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80",
    category: "Financial",
  },
  {
    title: "Taxation (Direct & Indirect)",
    slug: "taxation",
    description: "Tax planning, ITAT representation, GST advisory and litigation, customs duty disputes, transfer pricing and tax structuring.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80",
    category: "Financial",
  },
  {
    title: "Competition (Antitrust) Law",
    slug: "competition-antitrust",
    description: "CCI filings, merger control, abuse-of-dominance issues, cartel investigations, and compliance audits.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80",
    category: "Regulatory",
  },
  {
    title: "Contract Drafting & Commercial Disputes",
    slug: "contract-drafting-commercial-disputes",
    description: "Drafting, reviewing and negotiating commercial agreements. Litigation and arbitration for breach of contract.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80",
    category: "Corporate",
  },
  {
    title: "Government & Public Sector",
    slug: "government-regulatory-matters",
    description: "Representing the Union of India, Ministries, PSUs, and public sector entities in complex statutory and policy matters.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&auto=format&fit=crop&q=80",
    category: "Regulatory",
  },
  {
    title: "Employment & Labour Law",
    slug: "employment-labour-law",
    description: "Employment contracts, labour statute compliance, labour court representation, retrenchment, ESOPs and employee matters.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=80",
    category: "Regulatory",
  },
  {
    title: "Real Estate & Construction",
    slug: "real-estate-construction",
    description: "Title due diligence, RERA compliance, developer disputes, construction contracts and delay claims.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80",
    category: "Sector",
  },
  {
    title: "Intellectual Property (IP)",
    slug: "intellectual-property",
    description: "Patent drafting & prosecution, trademark filing & enforcement, copyright matters, IP licensing and litigation.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80",
    category: "Sector",
  },
  {
    title: "Data Protection, Privacy & IT Law",
    slug: "data-protection-it-law",
    description: "Data protection compliance, cross-border data transfers, IT contracts, cybersecurity incidents and regulatory disputes.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
    category: "Sector",
  },
  {
    title: "Environmental & Energy Law",
    slug: "environmental-energy-law",
    description: "NGT matters, environmental clearances, renewable energy projects, power purchase agreements, and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=80",
    category: "Sector",
  },
  {
    title: "Maritime, Shipping & Admiralty",
    slug: "maritime-shipping-admiralty",
    description: "End-to-end maritime services: charterparties, cargo claims, vessel arrest, marine insurance, admiralty jurisdiction.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=600&auto=format&fit=crop&q=80",
    category: "Sector",
  },
  {
    title: "Aviation, Transport & Logistics",
    slug: "aviation-transport-logistics",
    description: "Aviation regulatory advisory, transport liability, cargo disputes, port agreements and cross-border transport regulation.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&auto=format&fit=crop&q=80",
    category: "Sector",
  },
  {
    title: "Insurance & Reinsurance",
    slug: "insurance-reinsurance",
    description: "Policy drafting, claim handling, coverage disputes, marine insurance, and insurance tribunal representation.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80",
    category: "Financial",
  },
  {
    title: "Customs, Foreign Trade & FEMA",
    slug: "customs-foreign-trade-fema",
    description: "Trade remedy matters, customs litigation, import-export compliance, FDI structuring and FEMA advisory.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&auto=format&fit=crop&q=80",
    category: "Regulatory",
  },
  {
    title: "White-Collar Crime & Compliance",
    slug: "white-collar-crime-compliance",
    description: "Internal investigations, anti-corruption compliance, SEBI/FEMA/PC Act matters, and defense in regulatory probes.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
    category: "Litigation",
  },
  {
    title: "Family Law & Personal Matters",
    slug: "family-law",
    description: "Divorce, maintenance, child custody & adoption, family settlements, and related litigation.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=80",
    category: "Personal",
  },
  {
    title: "Consumer Protection",
    slug: "consumer-protection",
    description: "Consumer disputes, product liability, class suits, NCDRC representation and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=80",
    category: "Regulatory",
  },
  {
    title: "Education, Health & Regulatory",
    slug: "education-health-regulatory",
    description: "Licensing, accreditation, compliance and disputes for education and healthcare sectors.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80",
    category: "Sector",
  },
  {
    title: "Trust, Society & Nonprofit Law",
    slug: "trust-society-nonprofit",
    description: "Trust/society formation, charitable institution regulation, FCRA advisory and fundraising compliance.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80",
    category: "Personal",
  },
];

const categories = ["All", "Litigation", "Corporate", "Financial", "Regulatory", "Sector", "Dispute Resolution", "Personal"];

export default function PracticeAreasPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&auto=format&fit=crop&q=80"
              alt="Legal library"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/90" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 text-center px-6 max-w-3xl"
          >
            <span className="text-warm-gold text-xs uppercase tracking-[0.4em] mb-4 block">Our Expertise</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display mb-4">Practice Areas</h1>
            <p className="text-white/50 text-sm md:text-base">
              Satyarup Law Firm offers comprehensive legal services across 27+ practice areas, providing expert counsel in litigation, corporate advisory, regulatory compliance, dispute resolution, and specialized sector-specific matters.
            </p>
          </motion.div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {practices.map((practice, i) => (
                <motion.div key={practice.slug} variants={fadeUp}>
                  <Link
                    href={`/practice-areas/${practice.slug}`}
                    className="group block rounded-2xl border border-warm-gold/10 overflow-hidden hover:border-warm-gold/30 hover:shadow-xl transition-all duration-500 h-full"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={practice.image}
                        alt={practice.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                      <span className="absolute top-3 right-3 text-[10px] font-semibold text-white/80 bg-warm-gold/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {practice.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h2 className="text-lg font-bold text-charcoal font-display mb-2 group-hover:text-warm-gold transition-colors">
                        {practice.title}
                      </h2>
                      <p className="text-sm text-warm-gray leading-relaxed line-clamp-3">{practice.description}</p>
                      <span className="inline-block mt-4 text-xs font-semibold text-warm-gold group-hover:underline">
                        Learn More &rarr;
                      </span>
                    </div>
                  </Link>
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
