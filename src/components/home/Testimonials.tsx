"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { testimonialFade } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote: "Satyarup Law Firm delivered exceptional results for our corporate restructuring. Their strategic insight and meticulous attention to detail made all the difference.",
    name: "Rajesh Mehta",
    title: "CEO, Mehta Industries",
  },
  {
    quote: "The criminal defence team was outstanding. They fought tirelessly for our case and achieved an outcome beyond our expectations. Truly world-class representation.",
    name: "Priya Sharma",
    title: "Business Owner",
  },
  {
    quote: "Their property law expertise saved us from a complex real estate dispute. Professional, knowledgeable, and always responsive. I recommend them without reservation.",
    name: "Amit Kapoor",
    title: "Real Estate Developer",
  },
  {
    quote: "From the first consultation to the final resolution, the team at Satyarup provided clear guidance and unwavering support. A law firm that truly cares about its clients.",
    name: "Neha Gupta",
    title: "HR Director, TechCorp",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-warm-gold/3 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
        />

        <div className="relative min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={prefersReducedMotion ? {} : testimonialFade}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center"
            >
              {/* Quote mark */}
              <span className="block text-6xl text-warm-gold/20 font-display mb-4">&ldquo;</span>

              <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 italic">
                {testimonials[current].quote}
              </p>

              <div>
                <p className="font-semibold text-charcoal font-display">{testimonials[current].name}</p>
                <p className="text-sm text-warm-gray">{testimonials[current].title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-warm-gold w-6"
                  : "bg-warm-gold/20 hover:bg-warm-gold/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
