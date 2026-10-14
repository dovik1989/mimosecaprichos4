import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "pink" | "blue" | "neutral" | "offwhite";
  size?: "sm" | "md";
}

export function Badge({
  children,
  className,
  variant = "pink",
  size = "md",
  ...props
}: BadgeProps) {
  const variantStyles = {
    pink: "bg-brand-pink-light text-brand-pink border-brand-pink/20",
    blue: "bg-brand-blue-light text-brand-blue border-brand-blue/20",
    neutral: "bg-stone-100 text-brand-dark border-stone-200",
    offwhite: "bg-white/90 text-brand-dark border-white/40 shadow-sm backdrop-blur-sm",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-1 tracking-wider",
    md: "text-xs font-semibold px-3.5 py-1.5 tracking-wider",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 uppercase font-medium rounded-full border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

