"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StaggerContextType {
  isVisible: boolean;
  staggerInterval: number;
  baseDelay: number;
  duration: number;
  distance: number;
  easing: string;
}

const StaggerContext = createContext<StaggerContextType>({
  isVisible: false,
  staggerInterval: 0.1,
  baseDelay: 0,
  duration: 0.8,
  distance: 25,
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
});

export interface StaggerContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  staggerInterval?: number; // em segundos (ex: 0.1s = 100ms)
  baseDelay?: number;
  duration?: number;
  distance?: number;
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
  as?: React.ElementType;
}

export const StaggerContainer = React.forwardRef<HTMLElement, StaggerContainerProps>(
  function StaggerContainer(
    {
      children,
      staggerInterval = 0.1,
      baseDelay = 0,
      duration = 0.8,
      distance = 25,
      easing = "cubic-bezier(0.22, 1, 0.36, 1)",
      threshold = 0.1,
      rootMargin = "0px 0px -20px 0px",
      triggerOnce = true,
      className,
      as: Component = "div",
      ...props
    },
    forwardedRef
  ) {
    const internalRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
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

    return (
      <StaggerContext.Provider
        value={{
          isVisible,
          staggerInterval,
          baseDelay,
          duration,
          distance,
          easing,
        }}
      >
        <Component ref={setRefs} className={className} {...props}>
          {children}
        </Component>
      </StaggerContext.Provider>
    );
  }
);

export interface StaggerItemProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  index?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  distance?: number;
  duration?: number;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

export function StaggerItem({
  children,
  index = 0,
  direction = "up",
  distance: customDistance,
  duration: customDuration,
  delay: customDelay,
  className,
  as: Component = "div",
  style,
  ...props
}: StaggerItemProps) {
  const context = useContext(StaggerContext);
  const distance = customDistance ?? context.distance;
  const duration = customDuration ?? context.duration;
  const delay = customDelay ?? (context.baseDelay + index * context.staggerInterval);
  const isVisible = context.isVisible;

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
      className={cn("will-change-[transform,opacity]", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}s`,
        transitionTimingFunction: context.easing,
        transitionDelay: `${delay}s`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
