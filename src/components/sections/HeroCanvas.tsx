"use client";

import { motion } from "framer-motion";

export function HeroCanvas() {
	return (
		<section
			id="top"
			className="relative min-h-dvh overflow-hidden"
			role="img"
			aria-label="Spice Lounge hero video background"
		>
			<div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
				<video
					className="absolute top-1/2 left-1/2 z-0 h-dvh min-h-full w-screen min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.64] object-cover object-[50%_44%] md:scale-[1.58] md:object-[16%_38%]"
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					aria-hidden="true"
				>
					<source src="/videos/spice-lounge.mp4" type="video/mp4" />
				</video>
				<div className="absolute inset-0 z-1 bg-[linear-gradient(180deg,rgba(6,5,4,0.318),rgba(9,7,6,0.52)),radial-gradient(circle_at_50%_36%,rgba(0,0,0,0.16),rgba(0,0,0,0.38))]" />
			</div>

			<div className="relative z-12 grid min-h-dvh place-items-center overflow-hidden px-[clamp(20px,6vw,90px)] will-change-transform">
				<motion.div
					className="relative mx-auto grid w-[min(920px,92vw)] place-content-center justify-items-center pt-0 text-center"
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, ease: "easeOut" }}
				>
					<motion.h1 className="hero-title-glow m-0 whitespace-nowrap text-[clamp(4rem,17vw,6.4rem)] leading-[0.95] font-semibold md:text-[clamp(3rem,11vw,11rem)] md:leading-none" initial={false}>
						<motion.span
							initial={{ x: -48, opacity: 0, filter: "blur(4px)" }}
							animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
							transition={{ duration: 0.62, ease: "easeOut" }}
							className="inline-block"
						>
							Spice
						</motion.span>
						<motion.span
							initial={{ x: 48, opacity: 0, filter: "blur(4px)" }}
							animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
							transition={{ duration: 0.62, ease: "easeOut", delay: 0.08 }}
							className="ml-4 inline-block"
						>
							Lounge
						</motion.span>
					</motion.h1>
					<motion.p
						className="hero-subtitle-shift mt-4 max-w-[23ch] text-[clamp(1.18rem,5.3vw,1.6rem)] md:mt-[0.9rem] md:max-w-[58ch] md:text-[clamp(1rem,1.9vw,1.35rem)]"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.55 }}
					>
						Real Delicious Asian Food Straight To Your Table
					</motion.p>
				</motion.div>
				<motion.div
					className="absolute bottom-8 left-1/2 grid -translate-x-1/2 justify-items-center text-[0.8rem] uppercase tracking-[0.15em]"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.35, duration: 0.4 }}
				>
					<span>Scroll</span>
					<span>⌄</span>
				</motion.div>
			</div>
		</section>
	);
}
