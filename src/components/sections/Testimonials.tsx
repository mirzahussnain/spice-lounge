"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionSpiceCorners } from "@/components/ui/SectionSpiceCorners";

const testimonials = [
	{
		quote: "The tasting menu was theatrical without losing authenticity. Every course felt like a story chapter.",
		author: "Riya M., Food Editor"
	},
	{
		quote: "Service timing, spice balance, room lighting, soundtrack. It all felt deeply intentional.",
		author: "Adrian K., Designer"
	},
	{
		quote: "The best dinner night we have had in London this year. Warm, bold, and unforgettable.",
		author: "Charlotte & Ishan"
	}
] as const;

export function Testimonials() {
	return (
		<section id="testimonials" className="section-shell relative overflow-hidden">
			<SectionSpiceCorners />
			<div className="section-topline">Testimonials</div>
			<h2>Guests remember the flavour. They return for the feeling.</h2>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{testimonials.map((item, index) => (
					<ScrollReveal key={item.author} variant={index === 1 ? "fade-up" : index % 2 === 0 ? "fade-left" : "fade-right"}>
						<motion.article
							tabIndex={0}
							initial={{ scale: 1, y: 0, opacity: 0.92 }}
							whileHover={{ scale: 1.03, y: -4, opacity: 1 }}
							whileFocus={{ scale: 1.03, y: -4, opacity: 1 }}
							transition={{ duration: 0.28, ease: "easeOut" }}
							className="border border-[rgba(245,233,218,0.18)] bg-[rgba(44,36,32,0.6)] p-5 outline-none"
						>
							<p>“{item.quote}”</p>
							<span className="mt-4 block text-[0.78rem] uppercase tracking-[0.12em] text-(--saffron)">{item.author}</span>
						</motion.article>
					</ScrollReveal>
				))}
			</div>
		</section>
	);
}
