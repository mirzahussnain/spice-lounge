"use client";

import { RefObject, useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

interface SplitTextProps {
  text: string;
  trigger: RefObject<HTMLElement | null>;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}

export function SplitText({
  text,
  trigger,
  className,
  delay = 0,
  stagger = 0.03,
  duration = 0.7
}: SplitTextProps) {
  const chars = useMemo(() => text.split(""), [text]);
  const containerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !trigger.current) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const tween = gsap.fromTo(
      containerRef.current.querySelectorAll(".split-char"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: trigger.current,
          start: "top 80%"
        }
      }
    );

    return () => {
      tween.kill();
    };
  }, [delay, duration, stagger, trigger]);

  return (
    <span ref={containerRef} className={className}>
      {chars.map((char, index) => (
        <span key={`${char}-${index}`} className="split-char" style={{ display: "inline-block" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
