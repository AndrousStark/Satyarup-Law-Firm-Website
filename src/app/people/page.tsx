"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════ */

interface TeamMember {
  id: string;
  name: string;
  title: string;
  subtitle?: string;
  image: string;
  bio: string[];
  education: { degree: string; institution: string; year?: string; extra?: string }[];
  experience: { role: string; org: string; period?: string; detail?: string }[];
  memberships?: string[];
  practiceAreas: string[];
  paLabel: string;
  publications?: { title: string; source: string; year: string }[];
  achievements?: string[];
  certifications?: { name: string; issuer: string }[];
  skills?: { category: string; items: string[] }[];
  links?: { label: string; url: string; icon: "web" | "linkedin" | "email" | "phone" | "github" | "instagram" }[];
  stats?: { value: string; label: string }[];
}

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

const team: TeamMember[] = [
  {
    id: "ashwani",
    name: "Dr. Ashwani Bhardwaj",
    title: "Founder & Lead Advocate",
    subtitle: "Advocate-on-Record, Supreme Court of India",
    image: "/images/team/ashwani.jpeg",
    bio: [
      "Dr. Ashwani Bhardwaj is a litigation practitioner with over three decades of experience in constitutional, civil, criminal, arbitration, and commercial matters. He leads Satyarup Law Firm with a focus on strategic litigation and dispute resolution.",
      "Enrolled as an Advocate in 1996 and practising as an Advocate-on-Record since 2003, he has represented the Union of India, public sector undertakings, financial institutions, and corporate entities in significant legal proceedings involving constitutional, statutory, commercial, and regulatory issues.",
    ],
    education: [
      { degree: "Ph.D.", institution: "University of Delhi" },
      { degree: "LL.M.", institution: "University of Delhi" },
      { degree: "LL.B.", institution: "University of Delhi" },
      { degree: "B.Sc.", institution: "University of Delhi" },
    ],
    experience: [
      { role: "Advocate-on-Record", org: "Supreme Court of India", period: "Since 2003" },
      { role: "Senior Central Government Counsel", org: "Delhi High Court" },
      { role: "Arbitrator", org: "Delhi International Arbitration Centre" },
      { role: "Counsel for PSUs & Financial Institutions", org: "Various" },
      { role: "Enrolled as Advocate", org: "Bar Council", period: "1996" },
    ],
    memberships: [
      "Supreme Court Bar Association",
      "Delhi High Court Bar Association",
      "Bombay Bar Association",
      "Punjab & Haryana High Court Bar Association",
    ],
    practiceAreas: ["Constitutional Law", "Civil Litigation", "Criminal Litigation", "Arbitration & Dispute Resolution", "Banking & Financial Litigation", "Government & Regulatory Matters", "Environmental & Tribunal Litigation", "Commercial Law"],
    paLabel: "Areas of Practice",
    stats: [
      { value: "30+", label: "Years Experience" },
      { value: "AoR", label: "Supreme Court" },
      { value: "6+", label: "High Courts" },
      { value: "Since 1996", label: "Legal Practice" },
    ],
    links: [
      { label: "Email", url: "mailto:drashwanibharadwaj@gmail.com", icon: "email" },
      { label: "Phone", url: "tel:+919810343806", icon: "phone" },
    ],
  },
  {
    id: "vinay",
    name: "Mrs. Vinay Sonik Bhardwaj",
    title: "Advocate",
    subtitle: "Supreme Court of India & Delhi High Court",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    bio: [
      "Mrs. Vinay Sonik Bhardwaj is a practicing Advocate before the Supreme Court of India, Delhi High Court, District Courts of Delhi, Central Administrative Tribunal (CAT), Armed Forces Tribunal (AFT), and National Consumer Disputes Redressal Commission (NCDRC).",
      "She has represented the Union of India before the Hon'ble Supreme Court of India as a Panel Lawyer. Her practice spans civil litigation, criminal matters, constitutional law, service law, and consumer disputes across original and appellate jurisdictions.",
    ],
    education: [
      { degree: "B.Sc.", institution: "University of Delhi" },
      { degree: "LL.B.", institution: "Chaudhary Charan Singh University" },
    ],
    experience: [
      { role: "Advocate", org: "Supreme Court of India" },
      { role: "Panel Lawyer for Union of India", org: "Supreme Court of India" },
      { role: "Practising Advocate", org: "Delhi High Court & District Courts" },
      { role: "Practising Advocate", org: "Central Administrative Tribunal (CAT)" },
      { role: "Practising Advocate", org: "Armed Forces Tribunal (AFT)" },
      { role: "Practising Advocate", org: "NCDRC & Consumer Commissions" },
    ],
    memberships: [
      "Supreme Court Bar Association",
      "Delhi High Court Bar Association",
      "Central Administrative Tribunal Bar Association",
    ],
    practiceAreas: ["Supreme Court Litigation", "Delhi High Court Practice", "Civil & Criminal Litigation", "Service & Administrative Law", "Armed Forces Tribunal Matters", "Consumer Disputes & NCDRC", "Constitutional Law", "Government Litigation"],
    paLabel: "Areas of Practice",
    stats: [
      { value: "2015", label: "Enrolled" },
      { value: "AIBE", label: "Qualified" },
      { value: "6+", label: "Courts & Tribunals" },
      { value: "UOI", label: "Panel Lawyer" },
    ],
    links: [
      { label: "Email", url: "mailto:vinaybhardwajadv@gmail.com", icon: "email" },
      { label: "Phone", url: "tel:+919810068696", icon: "phone" },
    ],
  },
  {
    id: "aayush",
    name: "Mr. Aayush Bhardwaj",
    title: "Legal Associate",
    subtitle: "BBA LL.B. (Hons) — Rank 1",
    image: "/images/team/aayush.jpg",
    bio: [
      "Aayush Bhardwaj is a Rank 1 BBA LL.B. (Hons) student with an 8.176 CGPA and 10+ internships at leading law firms, Fortune 500 in-house teams, and the offices of 2 Additional Solicitor Generals of India.",
      "His experience spans competition law, corporate advisory, M&A due diligence, Supreme Court constitutional litigation, and district court civil and criminal practice. He brings sharp analytical skills, rigorous legal drafting ability, and a strong foundation in both corporate and litigation matters.",
    ],
    education: [
      { degree: "BBA LL.B. (Hons)", institution: "Delhi Metropolitan Education (GGSIPU)", year: "2021–2026", extra: "CGPA: 8.176 | Rank 1 | Merit Scholarship" },
    ],
    experience: [
      { role: "Legal Intern", org: "Dua Associates", period: "Feb 2026", detail: "Competition Law & CCI Matters" },
      { role: "Legal Intern (In-House)", org: "Bharti Airtel Limited", period: "Jan 2026", detail: "Corporate Legal Department" },
      { role: "Call-Back Legal Intern", org: "Singhania & Partners LLP", period: "Feb & Aug 2025", detail: "Selected from 50+ intern cohort" },
      { role: "Legal Intern (2 tenures)", org: "Office of Addl. Solicitor General of India", period: "Jul & Sep 2024", detail: "Under Ms. Aishwarya Bhati & Mr. Vikramjit Banerjee" },
      { role: "Legal Intern", org: "Chambers of Sr. Advocate Mr. Pradeep Rai, Supreme Court", period: "Aug 2024" },
      { role: "Legal Research Intern", org: "The Legal Quorum", period: "Jul–Aug 2024" },
      { role: "Legal Intern", org: "Karkardooma District Courts & Shree & Anand Advocates", period: "2022–2023" },
    ],
    publications: [
      { title: "Atul Mehra v. Bank of Maharashtra, AIR 2003 P&H 11", source: "The Legal Quorum", year: "Oct 2024" },
      { title: "International Environmental Treaties", source: "The Legal Quorum", year: "Oct 2024" },
    ],
    achievements: [
      "AIR 114, International Economics Olympiad (2021) — Top 0.1% nationally among 100,000+ participants",
      "Rank 1 & Merit Scholarship Holder — 1st Sem (9.26 CGPA), 2nd Sem (9.22 CGPA)",
      "96% in CBSE Class XII",
      "Certificate of Honour, 6th All India Korean-India Friendship Essay Competition",
      "Best Answer Prize at Youth Parliament Competition",
      "Head Secretary, TATVA DME Eco Club — Led 15+ environmental initiatives",
    ],
    practiceAreas: ["Legal Research & Case Law Analysis", "Contract Review & Due Diligence", "Litigation Support & Court Procedures", "Legal Drafting (Petitions, Memos, Briefs)", "Competition Law & Antitrust", "Corporate & Commercial Advisory"],
    paLabel: "Key Skills",
    stats: [
      { value: "8.176", label: "CGPA" },
      { value: "Rank 1", label: "University" },
      { value: "10+", label: "Internships" },
      { value: "AIR 114", label: "Economics Olympiad" },
    ],
    links: [
      { label: "Email", url: "mailto:aayushbhardwajsrt@gmail.com", icon: "email" },
      { label: "Phone", url: "tel:+917048974851", icon: "phone" },
    ],
  },
  {
    id: "aniruddh",
    name: "Aniruddh Atrey",
    title: "Director of Technology & Innovation",
    subtitle: "AI Engineer | Cybersecurity Specialist | Entrepreneur",
    image: "/images/team/aniruddh.png",
    bio: [
      "Aniruddh Atrey is a technology entrepreneur, AI engineer, and cybersecurity specialist with 6+ years of experience building systems that protect, automate, and scale. He holds a Master of Science in Computer Science from the University of Florida and 18+ professional certifications from Stanford, Google, Cisco, EC-Council, IBM, and ISO.",
      "As Co-Founder & COO of F1Jobs.io and Founder & CTO of MetaMinds, he has architected AI systems with 95% precision, secured 50+ government web assets for the Ministry of Defence of India at INNEFU Labs (DRDO), and shipped production platforms at Arlo Technologies with 99.9% availability. He has authored 3 IEEE/Book Chapter publications and serves as a Hackathon Judge and Guest Speaker.",
      "At Satyarup Law Firm, he leads legal technology strategy, digital infrastructure, cybersecurity, and AI-driven automation — driving the firm's technological transformation.",
    ],
    education: [
      { degree: "M.S. in Computer Science", institution: "University of Florida, USA", year: "2023–2024", extra: "Network Security, ML, Advanced Data Structures" },
      { degree: "B.Tech in CSE", institution: "Amity University, India", year: "2019–2023", extra: "Exchange Programme at Amity University Dubai" },
    ],
    experience: [
      { role: "Co-Founder & COO", org: "F1Jobs.io (NeuraScribe Inc)", period: "Austin, Texas", detail: "Career acceleration platform for global tech workforce" },
      { role: "Founder & CTO", org: "MetaMinds", detail: "AI automation startup — RAG pipelines, LLM orchestration, AI agents" },
      { role: "Data Science Engineer", org: "SaveLIFE Foundation", period: "New Delhi", detail: "Road safety data science pipelines across India" },
      { role: "Cybersecurity Engineer", org: "INNEFU Labs (DRDO)", detail: "Secured 50+ government assets for Ministry of Defence" },
      { role: "Software Engineer", org: "Arlo Technologies", detail: "AI-driven IoT solutions, 99.9% availability" },
      { role: "Hackathon Judge & Chief Guest", org: "Geeta University" },
    ],
    certifications: [
      { name: "Machine Learning Specialization", issuer: "Stanford University" },
      { name: "Cybersecurity Professional Certificate", issuer: "Google" },
      { name: "CCNA Enterprise Networking", issuer: "Cisco" },
      { name: "Ethical Hacking Essentials", issuer: "EC-Council" },
      { name: "ISO/IEC 27001 Information Security", issuer: "SkillFront" },
      { name: "Elements of AI", issuer: "University of Helsinki" },
      { name: "Python Essentials", issuer: "Cisco" },
      { name: "Data Science Certificate", issuer: "IBM" },
    ],
    publications: [
      { title: "Real-Time Temperature Based Food Recommendation using AI", source: "IEEE Xplore, 14th ICCCNT, IIT-Delhi", year: "2023" },
      { title: "Urban Digital Twins for Sustainability: Singapore & Indian Smart Cities", source: "IEEE Xplore, 2nd Global AI Summit", year: "2025" },
      { title: "Perspective of Cyber Security and Ethical Hacking with VAET", source: "Book Chapter — Big Data Analytics Framework for Smart Grids", year: "2023" },
    ],
    skills: [
      { category: "AI / Machine Learning", items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "RAG Pipelines", "LLM Fine-tuning", "AI Agents", "Computer Vision", "NLP"] },
      { category: "Cybersecurity", items: ["VAPT", "OWASP Top 10", "Penetration Testing", "SIEM (Splunk)", "MITRE ATT&CK", "Incident Response", "Ethical Hacking"] },
      { category: "Full-Stack Development", items: ["React", "Next.js", "Angular", "Django", "FastAPI", "Node.js", "SpringBoot", "PostgreSQL", "MongoDB", "Redis", "GraphQL"] },
      { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Serverless"] },
      { category: "Design", items: ["Figma", "Three.js", "GSAP", "UI/UX Design", "Brand Identity"] },
    ],
    achievements: [
      "50+ Government web assets secured for Ministry of Defence (DRDO)",
      "500+ hours of AI-processed data at 95% precision",
      "99% deployment success rate across 80+ production deployments",
      "Clients across 10+ countries — USA, UK, Europe, Singapore, Australia, Dubai",
      "3 IEEE / Book Chapter publications",
      "18+ professional certifications",
      "2025 Webby Awards Winner — Best Home Page",
      "GSAP Site of the Month — Oct & Nov 2024",
    ],
    practiceAreas: ["AI/ML Engineering & Data Science", "Cybersecurity & VAPT", "Full-Stack Development", "Cloud Architecture", "Web Development & UI/UX Design", "Legal Tech & Automation"],
    paLabel: "Areas of Expertise",
    stats: [
      { value: "50+", label: "Govt Assets Secured" },
      { value: "18+", label: "Certifications" },
      { value: "3", label: "IEEE Publications" },
      { value: "10+", label: "Countries Served" },
    ],
    links: [
      { label: "Portfolio", url: "https://aniruddhatrey.com", icon: "web" },
      { label: "LinkedIn", url: "https://linkedin.com/in/aniruddhatrey", icon: "linkedin" },
      { label: "MetaMinds", url: "https://metaminds.firm.in", icon: "web" },
      { label: "F1Jobs.io", url: "https://f1jobs.io", icon: "web" },
      { label: "GitHub", url: "https://github.com/AndrousStark", icon: "github" },
      { label: "Instagram", url: "https://instagram.com/theaniruddhatrey", icon: "instagram" },
      { label: "Email", url: "mailto:atreyaniruddh@gmail.com", icon: "email" },
      { label: "WhatsApp", url: "https://wa.me/919319788556", icon: "phone" },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════
   ICONS
   ═══════════════════════════════════════════════════════════ */

function LinkIcon({ type }: { type: string }) {
  const cls = "w-3.5 h-3.5";
  switch (type) {
    case "web":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
    case "linkedin":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
    case "github":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>;
    case "instagram":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>;
    case "email":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
    case "phone":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
    default:
      return null;
  }
}

/* ═══════════════════════════════════════════════════════════
   SMALL COMPONENTS
   ═══════════════════════════════════════════════════════════ */

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-3">
      <span className="block text-xl font-bold text-charcoal font-display">{value}</span>
      <span className="block text-[10px] text-warm-gray uppercase tracking-wider mt-0.5">{label}</span>
    </div>
  );
}

function TabButton({ active, label, onClick, layoutId }: { active: boolean; label: string; onClick: () => void; layoutId: string }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors duration-200 rounded-md ${
        active ? "text-charcoal" : "text-warm-gray/60 hover:text-warm-gray"
      }`}
    >
      {label}
      {active && (
        <motion.div
          layoutId={layoutId}
          className="absolute bottom-0 left-2 right-2 h-[2px] bg-warm-gold rounded-full"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </button>
  );
}

function TimelineItem({ role, org, period, detail, index }: { role: string; org: string; period?: string; detail?: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="relative pl-6 pb-5 last:pb-0"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-warm-gold/15 last:hidden" />
      <div className="absolute left-[-3px] top-1.5 w-[7px] h-[7px] rounded-full bg-warm-gold/40" />
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <span className="font-medium text-charcoal text-sm">{role}</span>
        {period && <span className="text-[10px] text-warm-gold">{period}</span>}
      </div>
      <span className="text-xs text-warm-gray">{org}</span>
      {detail && <p className="text-xs text-warm-gray/60 mt-0.5">{detail}</p>}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROFILE SECTION
   ═══════════════════════════════════════════════════════════ */

function ProfileSection({ member, index }: { member: TeamMember; index: number }) {
  const [activeTab, setActiveTab] = useState("overview");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reversed = index % 2 === 1;
  const bg = index % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]";

  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "experience", label: "Experience" },
    ...(member.skills ? [{ key: "skills", label: "Skills" }] : []),
    ...(member.publications ? [{ key: "publications", label: "Publications" }] : []),
    ...(member.certifications ? [{ key: "certifications", label: "Certifications" }] : []),
    ...(member.achievements ? [{ key: "achievements", label: "Achievements" }] : []),
  ];

  return (
    <section id={member.id} ref={ref} className={`py-20 md:py-28 ${bg}`}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ── Photo Column ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-4 ${reversed ? "lg:order-2" : ""}`}
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-charcoal/5">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>

            {/* Name + Title */}
            <div className="mt-5">
              <h2 className="text-xl font-bold text-charcoal font-display">{member.name}</h2>
              <p className="text-warm-gold text-sm mt-0.5">{member.title}</p>
              {member.subtitle && <p className="text-warm-gray text-xs mt-0.5">{member.subtitle}</p>}
            </div>

            {/* Stats row */}
            {member.stats && (
              <div className="grid grid-cols-2 mt-5 border-t border-charcoal/5 pt-4">
                {member.stats.map((s) => <StatCard key={s.label} value={s.value} label={s.label} />)}
              </div>
            )}

            {/* Links */}
            {member.links && (
              <div className="mt-5 flex flex-wrap gap-1.5">
                {member.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-medium text-warm-gray border border-charcoal/8 hover:border-warm-gold/40 hover:text-warm-gold transition-colors duration-200"
                    title={link.url.startsWith("http") ? `Open ${link.label}` : link.label}
                  >
                    <LinkIcon type={link.icon} />
                    {link.label}
                    {link.url.startsWith("http") && (
                      <svg className="w-2.5 h-2.5 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                    )}
                  </a>
                ))}
              </div>
            )}

            {/* Memberships */}
            {member.memberships && (
              <div className="mt-6 pt-5 border-t border-charcoal/5">
                <h3 className="text-[10px] font-semibold text-warm-gray/60 uppercase tracking-widest mb-3">Memberships</h3>
                <ul className="space-y-1.5">
                  {member.memberships.map((m) => (
                    <li key={m} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-warm-gold/50 flex-shrink-0" />
                      <span className="text-xs text-warm-gray">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* ── Content Column ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className={`lg:col-span-8 ${reversed ? "lg:order-1" : ""}`}
          >
            {/* Tab bar */}
            {tabs.length > 2 && (
              <div className="flex flex-wrap gap-0.5 mb-8 border-b border-charcoal/5 pb-px">
                {tabs.map((tab) => (
                  <TabButton
                    key={tab.key}
                    active={activeTab === tab.key}
                    label={tab.label}
                    onClick={() => setActiveTab(tab.key)}
                    layoutId={`tab-${member.id}`}
                  />
                ))}
              </div>
            )}

            <AnimatePresence mode="wait">
              {/* OVERVIEW */}
              {activeTab === "overview" && (
                <motion.div key="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  {member.bio.map((p, i) => (
                    <p key={i} className={`text-warm-gray leading-relaxed ${i === 0 ? "text-base mb-4" : "text-sm mb-3 text-warm-gray/80"}`}>{p}</p>
                  ))}

                  <div className="mt-8">
                    <h3 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-3">Education</h3>
                    <div className="space-y-2">
                      {member.education.map((edu) => (
                        <div key={edu.degree} className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 py-2.5 border-b border-charcoal/5 last:border-0">
                          <span className="font-medium text-charcoal text-sm">{edu.degree}</span>
                          <span className="text-xs text-warm-gray">{edu.institution}</span>
                          {edu.year && <span className="text-[10px] text-warm-gold">{edu.year}</span>}
                          {edu.extra && <span className="basis-full text-xs text-warm-gray/60">{edu.extra}</span>}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-3">{member.paLabel}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {member.practiceAreas.map((area) => (
                        <span key={area} className="text-[11px] font-medium text-warm-gray bg-charcoal/[0.03] px-3 py-1.5 rounded-md border border-charcoal/5">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* EXPERIENCE */}
              {activeTab === "experience" && (
                <motion.div key="experience" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  <h3 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-5">Professional Experience</h3>
                  {member.experience.map((exp, i) => (
                    <TimelineItem key={exp.role + exp.org} role={exp.role} org={exp.org} period={exp.period} detail={exp.detail} index={i} />
                  ))}
                </motion.div>
              )}

              {/* SKILLS */}
              {activeTab === "skills" && member.skills && (
                <motion.div key="skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  <div className="space-y-6">
                    {member.skills.map((cat, ci) => (
                      <motion.div
                        key={cat.category}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: ci * 0.08 }}
                      >
                        <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-2.5">{cat.category}</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.items.map((skill) => (
                            <span key={skill} className="text-[11px] font-medium text-warm-gray px-3 py-1.5 rounded-md bg-charcoal/[0.03] border border-charcoal/5">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* PUBLICATIONS */}
              {activeTab === "publications" && member.publications && (
                <motion.div key="publications" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  <h3 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-5">Publications & Research</h3>
                  <div className="space-y-3">
                    {member.publications.map((pub, i) => (
                      <motion.div
                        key={pub.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex gap-4 py-4 border-b border-charcoal/5 last:border-0"
                      >
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-charcoal/[0.04] flex items-center justify-center text-xs font-semibold text-warm-gray/60 font-display">
                          {i + 1}
                        </span>
                        <div>
                          <h4 className="font-medium text-charcoal text-sm leading-snug">{pub.title}</h4>
                          <p className="text-xs text-warm-gray mt-0.5">{pub.source}</p>
                          <span className="text-[10px] text-warm-gold mt-1 inline-block">{pub.year}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* CERTIFICATIONS */}
              {activeTab === "certifications" && member.certifications && (
                <motion.div key="certifications" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  <h3 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-5">Certifications</h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {member.certifications.map((cert, i) => (
                      <motion.div
                        key={cert.name}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 p-3 rounded-lg border border-charcoal/5"
                      >
                        <svg className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                        <div>
                          <span className="text-sm font-medium text-charcoal leading-tight block">{cert.name}</span>
                          <span className="text-[11px] text-warm-gray">{cert.issuer}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ACHIEVEMENTS */}
              {activeTab === "achievements" && member.achievements && (
                <motion.div key="achievements" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  <h3 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-5">Awards & Achievements</h3>
                  <ul className="space-y-2.5">
                    {member.achievements.map((ach, i) => (
                      <motion.li
                        key={ach}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-warm-gold mt-1.5" />
                        <span className="text-sm text-warm-gray leading-relaxed">{ach}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════ */

export default function PeoplePage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative bg-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&auto=format&fit=crop&q=80"
              alt=""
              fill
              className="object-cover opacity-10"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 pt-32 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-14"
            >
              <span className="text-warm-gold text-[11px] uppercase tracking-[0.3em] block mb-3">Our Team</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white font-display leading-tight">
                The People Behind<br />
                <span className="text-warm-gold/80">Satyarup Law Firm</span>
              </h1>
              <p className="text-white/35 text-sm mt-4 max-w-lg">
                Legal professionals and technology experts dedicated to delivering excellence in every matter we undertake.
              </p>
            </motion.div>

            {/* Team grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {team.map((member, i) => (
                <motion.a
                  key={member.id}
                  href={`#${member.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="group block relative rounded-lg overflow-hidden bg-white/5"
                >
                  <div className="relative aspect-[3/4]">
                    <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-sm font-semibold text-white font-display leading-tight">{member.name}</h3>
                    <p className="text-[11px] text-warm-gold/70 mt-0.5">{member.title}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-warm-gold group-hover:w-full transition-all duration-400" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Profiles ── */}
        {team.map((member, i) => (
          <ProfileSection key={member.id} member={member} index={i} />
        ))}
      </main>
      <Footer />
    </>
  );
}
