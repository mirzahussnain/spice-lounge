"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionSpiceCorners } from "@/components/ui/SectionSpiceCorners";

export function OurStory() {
	return (
		<section id="story" className="section-shell grid gap-7 lg:grid-cols-[45%_55%]">
			<SectionSpiceCorners />
			<div>
				<div className="section-topline">Our Story</div>
				<h2>Spice Lounge Erdington is 4 years old, and excellence is our standard.</h2>
				<div className="mt-7 space-y-4 rounded-2xl border border-[rgba(232,148,58,0.2)] bg-[linear-gradient(160deg,rgba(28,21,17,0.82),rgba(16,12,10,0.74))] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.28)]">
					<p className="m-0 leading-7 text-[rgba(245,233,218,0.93)]">
						At Spice Lounge Erdington, excellence is not just a goal - it&apos;s our standard. We take pride in
						sourcing the finest quality ingredients and crafting each dish with meticulous attention to detail.
					</p>
					<p className="m-0 leading-7 text-[rgba(245,233,218,0.9)]">
						From the vibrant spices to the freshest produce, every component of our menu is carefully selected to
						ensure the highest standards of taste and freshness. Our chefs are passionate about their craft,
						drawing on years of experience and a deep understanding of flavor to create dishes that are not only
						delicious but also unforgettable.
					</p>
				</div>
			</div>

			<ScrollReveal className="relative min-h-115 lg:min-h-167.5" variant="fade-up">
				<motion.div
					className="absolute top-[2%] left-[3%] h-[56%] w-[55%] overflow-hidden border border-[rgba(245,233,218,0.18)]"
					initial={{ opacity: 0, y: 24, rotate: -2 }}
					whileInView={{ opacity: 1, y: 0, rotate: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.65, ease: "easeOut", delay: 0.04 }}
				>
					<Image
						src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1100&q=80"
						alt="Chef preparing a spice blend"
						fill
						sizes="(max-width: 1024px) 52vw, 30vw"
						className="h-full w-full object-cover object-center"
					/>
				</motion.div>
				<motion.div
					className="absolute top-[20%] right-[4%] h-[52%] w-[54%] overflow-hidden border border-[rgba(245,233,218,0.18)]"
					initial={{ opacity: 0, y: 26, rotate: 2 }}
					whileInView={{ opacity: 1, y: 0, rotate: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.68, ease: "easeOut", delay: 0.14 }}
				>
					<Image
						src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=80"
						alt="Guests dining in warm evening lighting"
						fill
						sizes="(max-width: 1024px) 52vw, 30vw"
						className="h-full w-full object-cover object-center"
					/>
				</motion.div>
				<motion.div
					className="absolute bottom-0 left-[14%] h-[45%] w-[48%] overflow-hidden border border-[rgba(245,233,218,0.18)]"
					initial={{ opacity: 0, y: 22, rotate: -1.4 }}
					whileInView={{ opacity: 1, y: 0, rotate: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.62, ease: "easeOut", delay: 0.22 }}
				>
					<Image
						src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=80"
						alt="Plated signature dish"
						fill
						sizes="(max-width: 1024px) 46vw, 27vw"
						className="h-full w-full object-cover object-center"
					/>
				</motion.div>
			</ScrollReveal>
		</section>
	);
}
