"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#ambience", label: "Ambience" },
  { href: "#reserve", label: "Reserve" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-200 flex h-(--nav-height) items-center justify-between px-[clamp(20px,5vw,64px)] transition-[background,border,backdrop-filter] duration-300",
        scrolled && "border-b border-[rgba(232,148,58,0.2)] bg-[rgba(26,20,16,0.82)] backdrop-blur-2xl"
      )}
    >
      <a href="#top" className="inline-flex items-center">
        <Image
          src="/brand/sl.png"
          alt="Spice Lounge logo"
          width={174}
          height={58}
          className="h-auto w-32 object-contain sm:w-36 md:w-40"
          priority
        />
      </a>
      <nav className="hidden gap-5 md:flex" aria-label="Main">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative text-[0.76rem] uppercase tracking-[0.12em] after:absolute after:right-0 after:bottom-[-0.35rem] after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-(--saffron) after:transition-transform after:duration-200 hover:after:scale-x-100"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="hidden md:block">
        <MagneticButton href="#reserve">Reserve</MagneticButton>
      </div>
      <button
        className="inline-flex border-0 bg-transparent text-(--cream) md:hidden"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <div
        className={cn(
          "absolute top-(--nav-height) right-0 left-0 grid gap-0 overflow-hidden bg-[rgba(14,11,9,0.95)] px-5 transition-[max-height,padding] duration-300",
          open ? "max-h-65 pt-3 pb-5" : "max-h-0 p-0"
        )}
      >
        {links.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            style={{ transitionDelay: `${index * 60}ms` }}
            className={cn(
              "border-b border-[rgba(245,233,218,0.08)] py-2.5 transition-[transform,opacity] duration-300",
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            )}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
