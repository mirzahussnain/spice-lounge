"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Reservations() {
  return (
    <section id="reserve" className="section-shell relative grid min-h-screen place-items-center overflow-hidden">
      <iframe
        src="https://player.mux.com/OVICaIU00LA9HVEmi01MTDHqs3WRw9YN3TRKd8P02d59uI?autoplay=1&muted=1&loop=1&metadata-video-title=AIVideo_260326_0bb15fdc-ab3e-436f-8660-670c26512cf9_0_MiriCanvas&video-title=AIVideo_260326_0bb15fdc-ab3e-436f-8660-670c26512cf9_0_MiriCanvas"
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0 opacity-40"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-1 bg-[linear-gradient(180deg,rgba(6,5,4,0.58),rgba(8,6,5,0.78))]" />
      <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_24%_30%,rgba(232,148,58,0.18),transparent_38%),radial-gradient(circle_at_74%_65%,rgba(255,223,186,0.12),transparent_42%)]" />
      <div className="relative z-2 max-w-175 text-center">
        <div className="section-topline">Reservations</div>
        <h2>Book Your Table</h2>
        <p>Reserve your evening for spice-forward tasting menus, live-fire theatrics, and warm hospitality.</p>
        <div className="my-6 flex flex-wrap justify-center gap-3">
          <MagneticButton href="#" className="reservation-cta-glow">Reserve Online</MagneticButton>
          <MagneticButton
            href="tel:+442012345678"
            className="border-[rgba(245,233,218,0.36)] bg-transparent"
          >
            Call Us
          </MagneticButton>
        </div>
        <ScrollReveal variant="fade-up">
          <div className="mx-auto w-full max-w-130 border border-[rgba(232,148,58,0.3)] bg-[rgba(44,36,32,0.76)] p-4">
            <h3>Opening Hours</h3>
            <p>Mon-Thu: 5:30 PM - 11:00 PM</p>
            <p>Fri-Sun: 5:00 PM - 11:45 PM</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
