import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "dark",
  className,
  titleAs: TitleTag = "h2",
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const isLight = theme === "light";

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl",
        alignmentClasses[align],
        className
      )}
    >
      {eyebrow && (
        <Badge
          variant={isLight ? "offwhite" : "pink"}
          className="mb-3.5"
        >
          {eyebrow}
        </Badge>
      )}

      <TitleTag
        className={cn(
          "font-serif font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15]",
          isLight ? "text-white" : "text-brand-dark"
        )}
      >
        {title}
      </TitleTag>

      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-sans",
            isLight ? "text-white/85" : "text-brand-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

