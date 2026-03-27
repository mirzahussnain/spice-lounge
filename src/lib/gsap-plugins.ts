"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

let isRegistered = false;

export function registerGsapPlugins() {
  if (isRegistered) {
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  isRegistered = true;
}

export function syncLenisWithGsap(lenis: Lenis) {
  registerGsapPlugins();
  lenis.on("scroll", ScrollTrigger.update);
  const rafSync = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(rafSync);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(rafSync);
    lenis.off("scroll", ScrollTrigger.update);
  };
}
