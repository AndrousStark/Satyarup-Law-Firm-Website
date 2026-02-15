"use client";

import AnimatedText from "./AnimatedText";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({ label, title, description, align = "center", light }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center")}>
      {label && (
        <span className={cn(
          "inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4",
          light ? "text-warm-gold/80" : "text-warm-gold"
        )}>
          {label}
        </span>
      )}
      <AnimatedText
        text={title}
        as="h2"
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight",
          light ? "text-white" : "text-charcoal",
          align === "center" && "justify-center"
        )}
      />
      {description && (
        <p className={cn(
          "mt-4 max-w-2xl text-base leading-relaxed",
          light ? "text-white/70" : "text-warm-gray",
          align === "center" && "mx-auto"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
