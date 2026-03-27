"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cornerSpices = [
  { src: "/spices/cardamom.png", alt: "Cardamom", position: "top-3 left-3", delay: 0 },
  { src: "/spices/chilli.png", alt: "Chilli", position: "top-12 left-16", delay: 0.14 },
  { src: "/spices/clove.png", alt: "Clove", position: "top-3 right-3", delay: 0.28 },
  { src: "/spices/turmeric.png", alt: "Turmeric", position: "top-14 right-14", delay: 0.42 },
  { src: "/spices/star-anise.png", alt: "Star anise", position: "bottom-3 left-3", delay: 0.56 },
  { src: "/spices/cardamom.png", alt: "Cardamom", position: "bottom-14 left-14", delay: 0.7 },
  { src: "/spices/chilli.png", alt: "Chilli", position: "right-3 bottom-3", delay: 0.84 },
  { src: "/spices/clove.png", alt: "Clove", position: "right-14 bottom-14", delay: 0.98 },
] as const;

export function SectionSpiceCorners() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
      {cornerSpices.map((item) => (
        <motion.div
          key={`${item.src}-${item.position}`}
          className={`absolute ${item.position}`}
          initial={false}
          animate={{
            y: [0, -7, 0],
            rotate: [0, 3, 0, -3, 0],
          }}
          transition={{
            delay: item.delay,
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={80}
            height={80}
            className="h-14 w-14 object-contain opacity-95 drop-shadow-[0_4px_12px_rgba(0,0,0,0.38)] md:h-20 md:w-20"
          />
        </motion.div>
      ))}
    </div>
  );
}
