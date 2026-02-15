"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const practiceLinks = [
  { href: "/practice-areas/supreme-court-litigation", label: "Supreme Court Litigation" },
  { href: "/practice-areas/high-court-litigation", label: "High Court Litigation" },
  { href: "/practice-areas/arbitration-dispute-resolution", label: "Arbitration & Disputes" },
  { href: "/practice-areas/banking-financial-litigation", label: "Banking & Financial" },
  { href: "/practice-areas/government-regulatory-matters", label: "Government & Regulatory" },
  { href: "/practice-areas/environmental-tribunal-litigation", label: "Environmental & Tribunal" },
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/practice-areas", label: "Our Expertise" },
  { href: "/people", label: "Our People" },
  { href: "/news", label: "News & Media" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <div className="mb-6 flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-warm-gold/30 flex-shrink-0">
                <Image
                  src="/satyarup-logo.jpeg"
                  alt="Satyarup Law Firm"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-wider font-display">SATYARUP</h3>
                <p className="text-xs uppercase tracking-[0.3em] text-warm-gold mt-0.5">Law Firm</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Strategic litigation and dispute resolution practice with over three decades of experience before the Supreme Court, High Courts, and tribunals across India.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Email"].map((social) => (
                <a
                  key={social}
                  href={social === "Email" ? "mailto:satyaruplawfirm@gmail.com" : "#"}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs text-white/60 hover:border-warm-gold hover:text-warm-gold transition-all duration-300"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Practice Areas */}
          <motion.div variants={fadeUp}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-gold mb-6">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-warm-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-warm-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-gold mb-6">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm text-white/60">
              <p>Chamber No. 319<br />Supreme Court Lawyers Chambers<br />M.C. Setalvad Block<br />Bhagwan Dass Road<br />New Delhi &ndash; 110001</p>
              <p>
                <span className="text-white/80">Phone:</span><br />
                <a href="tel:+919810343806" className="hover:text-warm-gold transition-colors">+91-9810343806</a>
              </p>
              <p>
                <span className="text-white/80">Email:</span><br />
                <a href="mailto:satyaruplawfirm@gmail.com" className="hover:text-warm-gold transition-colors">satyaruplawfirm@gmail.com</a>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Satyarup Law Firm. All rights reserved. | Tech Advisor: Aniruddh Atrey
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/40 hover:text-warm-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-white/40 hover:text-warm-gold transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-white/40 hover:text-warm-gold transition-colors">
              Disclaimer
            </Link>
          </div>
        </motion.div>
      </div>

      {/* MetaMinds Credit */}
      <div className="border-t border-white/5 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-white/30">
              Conceptualised &amp; Engineered by
            </span>
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 rounded-md overflow-hidden flex-shrink-0 bg-white/5">
                <Image
                  src="/metaminds-logo.jpg"
                  alt="MetaMinds"
                  fill
                  className="object-contain p-0.5"
                  sizes="28px"
                />
              </div>
              <span className="text-sm font-semibold tracking-wider text-white/50 hover:text-white/70 transition-colors">
                META MINDS
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
