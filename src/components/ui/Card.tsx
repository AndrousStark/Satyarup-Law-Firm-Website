"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cardHover } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className, hoverable = true }: CardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={!prefersReducedMotion && hoverable ? cardHover : {}}
      initial="rest"
      whileHover="hover"
      className={cn(
        "rounded-xl border border-warm-gold/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg hover:border-warm-gold/20",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
