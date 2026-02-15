"use client";

import Link from "next/link";
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
  { href: "/news", label: "In the Media" },
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
            <div className="mb-6">
              <h3 className="text-2xl font-bold tracking-wider font-display">SATYARUP</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-warm-gold mt-1">Law Firm</p>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Strategic litigation and dispute resolution practice with over three decades of experience before the Supreme Court, High Courts, and tribunals across India.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Email"].map((social) => (
                <a
                  key={social}
                  href="#"
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
    </footer>
  );
}
