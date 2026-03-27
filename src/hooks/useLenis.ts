"use client";

import { useEffect } from "react";
import { getLenis, destroyLenis } from "@/lib/lenis";
import { syncLenisWithGsap, registerGsapPlugins } from "@/lib/gsap-plugins";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useLenis() {
  useEffect(() => {
    registerGsapPlugins();
    const lenis = getLenis();
    const detach = syncLenisWithGsap(lenis);

    const onVisibilityChange = () => {
      if (document.hidden) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    const initialRefresh = () => {
      ScrollTrigger.refresh();
      lenis.off("scroll", initialRefresh);
    };
    lenis.on("scroll", initialRefresh);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      detach();
      destroyLenis();
    };
  }, []);
}
