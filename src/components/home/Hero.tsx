"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";

const ParticleField = dynamic(() => import("@/components/three/ParticleField"), {
  ssr: false,
});

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      hero.style.setProperty("--mouse-x", `${x}px`);
      hero.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="hero-section relative bg-charcoal">
      {/* 3D Particle Background */}
      <ParticleField />

      {/* Gradient Overlay */}
      <div className="hero-bg absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.08)_0%,transparent_70%)] z-10" />
      </div>

      {/* Content */}
      <div className="hero-content relative z-20 flex flex-col items-center justify-center px-6">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.2, 0.9, 0.3, 1] }}
          className="w-16 h-[1px] bg-warm-gold mb-8"
        />

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-warm-gold text-xs uppercase tracking-[0.4em] mb-6 font-medium"
        >
          Strategic Litigation. Trusted Advocacy. Professional Excellence.
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8, ease: [0.2, 0.9, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white text-center leading-tight mb-4"
        >
          SATYARUP
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-lg md:text-xl text-white/60 tracking-[0.2em] uppercase mb-3 font-light"
        >
          Law Firm
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-warm-gold to-transparent mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="max-w-xl text-center text-white/50 text-sm md:text-base leading-relaxed mb-10"
        >
          A litigation and dispute-resolution practice representing clients before the Supreme Court of India, High Courts, and specialized tribunals across the country.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="/contact" variant="primary" size="lg">
            Schedule Consultation
          </Button>
          <Button href="/practice-areas" variant="outline" size="lg" className="!border-white/30 !text-white hover:!bg-white hover:!text-charcoal">
            Our Practice Areas
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.0, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-warm-gold/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
