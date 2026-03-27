"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href?: string;
  children: ReactNode;
  className?: string;
}

export function MagneticButton({ href = "#", children, className }: MagneticButtonProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 250, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 250, damping: 20 });
  const innerX = useTransform(springX, (value) => value * 0.55);
  const innerY = useTransform(springY, (value) => value * 0.55);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    mouseX.set(x * 0.35);
    mouseY.set(y * 0.35);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Link
        href={href}
        className={cn(
          "inline-flex items-center justify-center rounded-full border border-[rgba(232,148,58,0.7)] bg-[linear-gradient(120deg,rgba(232,148,58,0.25),rgba(232,148,58,0))] px-5 py-2.5 text-(--cream) transition-[transform,box-shadow] duration-300 hover:shadow-[0_0_24px_rgba(232,148,58,0.28)]",
          className
        )}
      >
        <motion.span style={{ x: innerX, y: innerY }}>{children}</motion.span>
      </Link>
    </motion.div>
  );
}
