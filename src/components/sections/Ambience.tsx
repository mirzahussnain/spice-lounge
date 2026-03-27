"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionSpiceCorners } from "@/components/ui/SectionSpiceCorners";

const ambienceShots = [
	{
		className: "item-1",
		src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
		alt: "Candlelit dining table"
	},
	{
		className: "item-2",
		src: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&w=1200&q=80",
		alt: "Lounge seating with warm lighting"
	},
	{
		className: "item-3",
		src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
		alt: "Signature dish plating"
	},
	{
		className: "item-4",
		src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
		alt: "Evening dining room atmosphere"
	},
	{
		className: "item-5",
		src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
		alt: "Chef finishing a plate"
	}
] as const;

export function Ambience() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<section id="ambience" className="section-shell relative overflow-hidden">
			<SectionSpiceCorners />
			<p className="pointer-events-none absolute top-[12%] left-[-2%] m-0 text-[clamp(3.5rem,19vw,15rem)] opacity-[0.04]">EXPERIENCE</p>
			<div className="section-topline">Ambience</div>
			<h2>A sensory evening in ember, aroma, and velvet light.</h2>

			<div className="ambience-grid relative grid min-h-175 grid-cols-1 gap-4 md:grid-cols-6">
				{ambienceShots.map((shot, index) => (
					<ScrollReveal
						key={shot.className}
						className={`ambience-item overflow-hidden border border-[rgba(245,233,218,0.18)] ${
							shot.className === "item-1"
								? "h-57.5 md:col-[1/3]"
								: shot.className === "item-2"
									? "mt-0 h-57.5 md:col-[3/6] md:mt-10 md:h-75"
									: shot.className === "item-3"
										? "mt-0 h-57.5 md:col-[1/4] md:-mt-5 md:h-62.5"
										: shot.className === "item-4"
											? "h-57.5 md:col-[4/7] md:h-75"
											: "mt-0 h-57.5 md:col-[2/6] md:-mt-7.5 md:h-65"
						}`}
						variant={index % 2 === 0 ? "fade-up" : "scale-in"}
					>
						<motion.div
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							animate={{
								scale: hoveredIndex === index ? 1.035 : 1,
								filter:
									hoveredIndex === null
										? "saturate(1) brightness(1)"
										: hoveredIndex === index
											? "saturate(1.08) brightness(1.06)"
											: "saturate(0.72) brightness(0.8)"
							}}
							transition={{ duration: 0.35, ease: "easeOut" }}
						>
							<Image src={shot.src} alt={shot.alt} width={1200} height={900} />
						</motion.div>
					</ScrollReveal>
				))}
			</div>
		</section>
	);
}
