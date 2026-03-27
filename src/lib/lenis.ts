import Lenis from "lenis";

export const LENIS_OPTIONS = {
  duration: 1.4,
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1,
  infinite: false
};

let lenisInstance: Lenis | null = null;

export function getLenis(): Lenis {
  if (!lenisInstance) {
    lenisInstance = new Lenis(LENIS_OPTIONS);
  }
  return lenisInstance;
}

export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}
