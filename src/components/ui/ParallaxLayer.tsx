"use client";

import { ReactNode, useRef } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

interface ParallaxLayerProps {
  children: ReactNode;
  speed: number;
  className?: string;
}

export function ParallaxLayer({ children, speed, className }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const progress = useScrollProgress(ref);
  const y = (progress - 0.5) * 180 * speed;

  return (
    <div ref={ref} className={className} style={{ transform: `translateY(${y}px)` }}>
      {children}
    </div>
  );
}
