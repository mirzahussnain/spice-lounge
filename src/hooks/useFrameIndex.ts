"use client";

import { useMemo } from "react";
import { clamp } from "@/lib/utils";

export function useFrameIndex(progress: number, totalFrames: number) {
  return useMemo(() => {
    const maxIndex = Math.max(0, totalFrames - 1);
    return Math.floor(clamp(progress, 0, 1) * maxIndex);
  }, [progress, totalFrames]);
}
