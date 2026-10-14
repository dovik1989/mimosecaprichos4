import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "blue" | "outline" | "outline-dark" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-brand-pink text-white hover:bg-brand-pink-hover shadow-soft hover:shadow-floating border border-transparent",
      secondary:
        "bg-brand-pink-light text-brand-pink hover:bg-[#F5D4DF] border border-transparent font-semibold",
      blue:
        "bg-brand-blue text-white hover:bg-brand-blue-hover shadow-soft border border-transparent",
      outline:
        "border-2 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white bg-transparent",
      "outline-dark":
        "border border-brand-border bg-white text-brand-dark hover:border-brand-pink hover:text-brand-pink shadow-sm",
      ghost:
        "bg-transparent text-brand-dark hover:text-brand-pink hover:bg-brand-pink-light/50",
    };

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm sm:text-base px-6 py-3 gap-2",
      lg: "text-base sm:text-lg px-8 py-4 gap-2.5",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && "w-full",
      className
    );

    const content = (
      <>
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      if (isExternal || href.startsWith("http") || href.startsWith("https://wa.me") || href.startsWith("tel:")) {
        return (
          <a
            href={href}
            className={combinedClasses}
            target={isExternal || href.startsWith("http") ? "_blank" : undefined}
            rel={isExternal || href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {content}
          </a>
        );
      }

      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} disabled={disabled} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

