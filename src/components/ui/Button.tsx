"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-medium uppercase tracking-wider transition-all duration-300 whitespace-nowrap";

  const variants = {
    primary: "bg-warm-gold text-white hover:bg-warm-gold/90 shadow-lg shadow-warm-gold/20 hover:shadow-warm-gold/30",
    outline: "border-2 border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-white",
    ghost: "text-charcoal hover:text-warm-gold",
  };

  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-sm",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], disabled && "opacity-50 cursor-not-allowed", className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
