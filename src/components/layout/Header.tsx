"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Expertise" },
  { href: "/people", label: "People" },
  { href: "/news", label: "In the Media" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-warm-gold/10"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full border-2 border-warm-gold flex items-center justify-center group-hover:bg-warm-gold/10 transition-colors duration-300">
              <span className={cn(
                "text-lg font-bold font-display transition-colors duration-300",
                scrolled ? "text-charcoal" : "text-white"
              )}>
                S
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "text-lg font-bold tracking-wider font-display transition-colors duration-300",
              scrolled ? "text-charcoal" : "text-white"
            )}>
              SATYARUP
            </span>
            <span className={cn(
              "text-[0.6rem] uppercase tracking-[0.3em] transition-colors duration-300",
              scrolled ? "text-warm-gray" : "text-white/70"
            )}>
              Law Firm
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:text-warm-gold relative group",
                scrolled ? "text-charcoal" : "text-white"
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-warm-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 rounded-full border border-warm-gold px-6 py-2 text-sm font-medium uppercase tracking-wider text-warm-gold transition-all duration-300 hover:bg-warm-gold hover:text-white"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "block h-[2px] w-6 transition-all duration-300",
              scrolled ? "bg-charcoal" : "bg-white",
              mobileOpen && "rotate-45 translate-y-[5px]"
            )}
          />
          <span
            className={cn(
              "block h-[2px] w-6 transition-all duration-300",
              scrolled ? "bg-charcoal" : "bg-white",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-[2px] w-6 transition-all duration-300",
              scrolled ? "bg-charcoal" : "bg-white",
              mobileOpen && "-rotate-45 -translate-y-[5px]"
            )}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.9, 0.3, 1] }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-warm-gold/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-charcoal text-lg font-medium uppercase tracking-wider py-2 hover:text-warm-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center rounded-full border-2 border-warm-gold px-6 py-3 text-sm font-semibold uppercase tracking-wider text-warm-gold hover:bg-warm-gold hover:text-white transition-all"
                >
                  Free Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
