"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  distance?: number;
  duration?: number; // em segundos (0.7 a 0.9s)
  delay?: number; // em segundos
  easing?: string;
  className?: string;
  as?: React.ElementType;
  triggerOnce?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export const Reveal = React.forwardRef<HTMLElement, RevealProps>(function Reveal(
  {
    children,
    direction = "up",
    distance = 25,
    duration = 0.8,
    delay = 0,
    easing = "cubic-bezier(0.22, 1, 0.36, 1)",
    className,
    as: Component = "div",
    triggerOnce = true,
    threshold = 0.1,
    rootMargin = "0px 0px -20px 0px",
    style,
    ...props
  },
  forwardedRef
) {
  const internalRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respeitar preferência do usuário por movimento reduzido (acessibilidade)
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const element = internalRef.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [triggerOnce, threshold, rootMargin]);

  const setRefs = (node: HTMLElement | null) => {
    (internalRef as React.MutableRefObject<HTMLElement | null>).current = node;
    if (typeof forwardedRef === "function") {
      forwardedRef(node);
    } else if (forwardedRef) {
      (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
    }
  };

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0)";
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)`;
      case "down":
        return `translate3d(0, -${distance}px, 0)`;
      case "left":
        return `translate3d(${distance}px, 0, 0)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0)`;
      case "fade":
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  return (
    <Component
      ref={setRefs}
      className={cn("will-change-[transform,opacity]", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}s`,
        transitionTimingFunction: easing,
        transitionDelay: `${delay}s`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
});
