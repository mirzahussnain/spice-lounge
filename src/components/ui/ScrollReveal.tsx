"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Variant = "fade-up" | "fade-left" | "fade-right" | "scale-in";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

export function ScrollReveal({ children, className, variant = "fade-up" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[transform,opacity] duration-550 ease-out",
        visible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : "opacity-0",
        !visible && variant === "fade-up" && "translate-y-7",
        !visible && variant === "fade-left" && "-translate-x-20",
        !visible && variant === "fade-right" && "translate-x-20",
        !visible && variant === "scale-in" && "scale-95",
        className
      )}
    >
      {children}
    </div>
  );
}
