"use client";

import { useEffect, useRef, useState } from "react";

interface SpiceParticlesProps {
  spritePaths: string[];
  count?: number;
  interactive?: boolean;
}

interface SpiceParticle {
  imgIndex: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  opacity: number;
  wobblePhase: number;
  wobbleSpeed: number;
  wobbleAmplitude: number;
}

function random(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function shuffledIndices(size: number) {
  const values = Array.from({ length: size }, (_, index) => index);
  for (let i = values.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }
  return values;
}

function balancedRandomIndices(total: number, poolSize: number) {
  const result: number[] = [];
  while (result.length < total) {
    const batch = shuffledIndices(poolSize);
    for (let i = 0; i < batch.length && result.length < total; i += 1) {
      result.push(batch[i]);
    }
  }
  return result;
}

export function SpiceParticles({ spritePaths, count = 25, interactive = true }: SpiceParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const particlesRef = useRef<SpiceParticle[]>([]);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    Promise.all(
      spritePaths.map(
        (path) =>
          new Promise<HTMLImageElement | null>((resolve) => {
            const img = new Image();
            img.src = path;
            img.onload = () => resolve(img);
            img.onerror = () => resolve(null);
          })
      )
    ).then((loaded) => {
      const validImages = loaded.filter(
        (image): image is HTMLImageElement => !!image && image.naturalWidth > 0 && image.naturalHeight > 0
      );
      imagesRef.current = validImages;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width));
      canvas.height = Math.max(1, Math.floor(rect.height));

      const maxUnique = Math.max(1, validImages.length);
      const safeCount = Math.max(1, Math.min(16, reduced ? Math.min(count, 5) : count));
      const chosenOrder = balancedRandomIndices(safeCount, maxUnique);

      particlesRef.current = chosenOrder.map((imgIndex) => ({
        imgIndex,
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        vx: random(-0.08, 0.08),
        vy: random(-0.12, -0.04),
        rotation: random(0, Math.PI * 2),
        rotationSpeed: reduced ? 0 : random(-0.003, 0.003),
        scale: random(0.06, 0.12),
        opacity: 0,
        wobblePhase: random(0, Math.PI * 2),
        wobbleSpeed: reduced ? 0 : random(0.004, 0.01),
        wobbleAmplitude: reduced ? 0 : random(0.1, 0.4)
      }));
    });
  }, [count, spritePaths]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !visible) {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const images = imagesRef.current;

      particlesRef.current.forEach((particle) => {
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (interactive && dist < 120) {
          const strength = 1 - dist / 120;
          const push = Math.min(1.25, strength * 0.9);
          particle.x += (dx / Math.max(1, dist)) * push;
          particle.y += (dy / Math.max(1, dist)) * push;
        }

        particle.opacity += ((visible ? 1 : 0) * 0.44 - particle.opacity) * 0.02;
        particle.x += particle.vx + Math.sin(particle.wobblePhase) * particle.wobbleAmplitude;
        particle.y += particle.vy;
        particle.wobblePhase += particle.wobbleSpeed;
        particle.rotation += particle.rotationSpeed;

        if (particle.y < -100) {
          particle.y = canvas.height + 50;
          particle.x = random(0, canvas.width);
        }
        if (particle.x < -60) particle.x = canvas.width + 30;
        if (particle.x > canvas.width + 60) particle.x = -30;

        const image = images[particle.imgIndex];
        if (!image || !image.complete || image.naturalWidth === 0 || image.naturalHeight === 0) return;

        const width = image.width * particle.scale;
        const height = image.height * particle.scale;

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.globalAlpha = particle.opacity;
        try {
          ctx.drawImage(image, -width / 2, -height / 2, width, height);
        } catch {
          return;
        }
        ctx.restore();
      });

      frameRef.current = requestAnimationFrame(loop);
    };

    frameRef.current = requestAnimationFrame(loop);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [interactive, visible]);

  return (
    <canvas
      ref={canvasRef}
      className="spice-particles"
      aria-hidden="true"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseRef.current = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      }}
      onTouchMove={(event) => {
        const touch = event.touches[0];
        if (!touch) return;
        const rect = event.currentTarget.getBoundingClientRect();
        mouseRef.current = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
      }}
    />
  );
}
