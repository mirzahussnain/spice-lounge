"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { menuCategories } from "@/data/menu";
import { SpiceParticles } from "@/components/ui/SpiceParticles";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const spiceSprites = [
  "/spices/chilli.png",
  "/spices/cardamom.png",
  "/spices/clove.png",
  "/spices/star-anise.png",
  "/spices/turmeric.png"
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]?.slug ?? "");
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileTabsOpen, setMobileTabsOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);

  const desktopVisibleCategories = useMemo(() => menuCategories.slice(0, 5), []);
  const desktopOverflowCategories = useMemo(() => menuCategories.slice(5), []);

  const category = useMemo(() => {
    if (!menuCategories.length) return null;
    return menuCategories.find((entry) => entry.slug === activeCategory) ?? menuCategories[0];
  }, [activeCategory]);

  const featuredItems = useMemo(() => category?.items ?? [], [category]);

  useEffect(() => {
    setActiveSlide(0);
    setMobileTabsOpen(false);
  }, [activeCategory]);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (featuredItems.length <= 1) return;
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredItems.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [featuredItems.length]);

  useEffect(() => {
    if (!menuCategories.length) return;
    if (!menuCategories.some((entry) => entry.slug === activeCategory)) {
      setActiveCategory(menuCategories[0].slug);
      setActiveSlide(0);
    }
  }, [activeCategory]);

  const getSlot = (index: number) => {
    const total = featuredItems.length;
    const rel = (index - activeSlide + total) % total;
    if (rel === 0) return "focus" as const;
    if (rel === 1) return "right" as const;
    return "left" as const;
  };

  const isMobile = viewportWidth !== null && viewportWidth <= 768;
  const isTablet = viewportWidth !== null && viewportWidth > 768 && viewportWidth <= 1024;

  const motionOffset = isMobile ? 114 : isTablet ? 176 : 252;
  const focusScale = isMobile ? 1.11 : isTablet ? 1.13 : 1.15;
  const sideScale = isMobile ? 0.67 : isTablet ? 0.76 : 0.84;

  const slotMotion = {
    left: { x: -motionOffset, y: 16, rotate: -1.4, scale: sideScale, opacity: 0.67, zIndex: 2 },
    focus: { x: 0, y: 0, rotate: 0, scale: focusScale, opacity: 1, zIndex: 3 },
    right: { x: motionOffset, y: 16, rotate: 1.4, scale: sideScale, opacity: 0.67, zIndex: 2 }
  } as const;

  const activeCategoryLabel =
    menuCategories.find((item) => item.slug === activeCategory)?.label ?? menuCategories[0]?.label ?? "Menu";

  const activeOverflowSelection = desktopOverflowCategories.some((item) => item.slug === activeCategory)
    ? activeCategory
    : "";

  if (!category) {
    return null;
  }

  return (
    <section id="menu" className="section-shell relative z-20">
      <div className="menu-spice-layer">
        <SpiceParticles spritePaths={spiceSprites} count={20} interactive />
      </div>

      <div className="relative z-3">
        <div>
          <div className="section-topline">Current Best Sellers</div>
          <h2>Top-rated dishes our guests are ordering most right now.</h2>
          <div className="mt-1.5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <p className="m-0 max-w-[60ch] text-[clamp(0.96rem,1.05vw,1.08rem)] text-[rgba(245,233,218,0.82)]">
              These highlights are pulled from live menu ratings so you always see what is trending first.
            </p>
            <Link
              href="/menu"
              className="mt-0.5 inline-flex self-start whitespace-nowrap rounded-full border border-[rgba(245,233,218,0.36)] bg-transparent px-5 py-2.5 text-(--cream) transition-[transform,box-shadow] duration-300 hover:shadow-[0_0_24px_rgba(232,148,58,0.28)] md:mt-0"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </div>

      <div className="menu-showcase-shell">
        <div className="mb-3 md:hidden">
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-xl border border-[rgba(245,233,218,0.22)] bg-[rgba(18,13,10,0.45)] px-3 py-2 text-left"
            onClick={() => setMobileTabsOpen((prev) => !prev)}
            aria-expanded={mobileTabsOpen}
            aria-controls="menu-mobile-tablist"
          >
            <span className="text-sm font-medium text-[rgba(245,233,218,0.95)]">{activeCategoryLabel}</span>
            <span className="text-lg leading-none text-[rgba(245,233,218,0.9)]">{mobileTabsOpen ? "×" : "☰"}</span>
          </button>
          {mobileTabsOpen ? (
            <div
              id="menu-mobile-tablist"
              className="mt-2 grid gap-1 rounded-xl border border-[rgba(245,233,218,0.18)] bg-[rgba(14,10,8,0.78)] p-2"
              role="tablist"
              aria-label="Menu categories"
            >
              {menuCategories.map((item) => (
                <button
                  key={item.slug}
                  role="tab"
                  aria-selected={activeCategory === item.slug}
                  onClick={() => {
                    setActiveCategory(item.slug);
                    setActiveSlide(0);
                    setMobileTabsOpen(false);
                  }}
                  className={`rounded-lg px-3 py-2 text-left text-sm transition-colors duration-200 ${
                    activeCategory === item.slug
                      ? "bg-[rgba(232,148,58,0.16)] text-[rgba(245,233,218,0.98)]"
                      : "text-[rgba(245,233,218,0.82)] hover:bg-[rgba(245,233,218,0.08)]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div
          className="relative z-3 mb-5 hidden flex-wrap items-center gap-1 border-b border-[rgba(245,233,218,0.14)] pb-1 md:flex"
          role="tablist"
          aria-label="Menu categories"
        >
          {desktopVisibleCategories.map((item) => (
            <button
              key={item.slug}
              role="tab"
              aria-selected={activeCategory === item.slug}
              onClick={() => {
                setActiveCategory(item.slug);
                setActiveSlide(0);
              }}
              className={`relative rounded-t-[10px] border-0 bg-transparent px-4 py-2 text-[0.95rem] text-[rgba(245,233,218,0.76)] transition-[color,background-color,transform] duration-200 hover:-translate-y-px hover:text-[rgba(245,233,218,0.95)] ${
                activeCategory === item.slug ? "bg-[rgba(232,148,58,0.08)] text-[rgba(245,233,218,0.98)]" : ""
              }`}
            >
              {item.label}
              {activeCategory === item.slug ? (
                <motion.span
                  layoutId="menu-tab-indicator"
                  className="absolute right-[12%] -bottom-0.75 left-[12%] h-[2.5px] rounded-full bg-(--saffron)"
                />
              ) : null}
            </button>
          ))}
          {desktopOverflowCategories.length > 0 ? (
            <div className="ml-2 flex items-center gap-2">
              <label htmlFor="menu-category-overflow" className="sr-only">
                More categories
              </label>
              <select
                id="menu-category-overflow"
                value={activeOverflowSelection}
                onChange={(event) => {
                  if (!event.target.value) return;
                  setActiveCategory(event.target.value);
                  setActiveSlide(0);
                }}
                className="rounded-lg border border-[rgba(245,233,218,0.28)] bg-[rgba(18,13,10,0.76)] px-3 py-2 text-sm text-[rgba(245,233,218,0.94)] outline-none"
                aria-label="More menu categories"
              >
                <option value="">More categories</option>
                {desktopOverflowCategories.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
        </div>

        <div className="menu-particles-wrap">
          <ScrollReveal>
            <div className="menu-stage">
              <div className="menu-stack" aria-live="polite">
                {featuredItems.map((item, index) => {
                  const slot = getSlot(index);
                  const emphasis = slot === "focus" ? "focus" : "side";
                  const motionState = slotMotion[slot];

                  return (
                    <div key={item.id} className="menu-card-anchor" style={{ zIndex: motionState.zIndex }}>
                    <motion.article
                      key={item.id}
                      className={`menu-card menu-card-${emphasis} menu-card-pos-${slot}`}
                      animate={{
                        x: motionState.x,
                        y: motionState.y,
                        rotate: motionState.rotate,
                        scale: motionState.scale,
                        opacity: motionState.opacity
                      }}
                      transition={{ type: "spring", stiffness: 132, damping: 25, mass: 0.85 }}
                    >
                      <Image src={item.image} alt={item.name} width={620} height={420} className="menu-image" />
                      <div className="menu-content">
                        <div className="menu-row">
                          <h3>{item.name}</h3>
                          <strong>{item.price}</strong>
                        </div>
                        <p>{item.description}</p>
                        <div className="tag-row">
                          {item.tags.map((tag) => (
                            <span key={`${item.id}-${tag}-${index}`} className={`tag tag-${tag}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.article>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <div className="relative z-12 mt-[0.35rem] flex items-center justify-center gap-[0.48rem]" role="tablist" aria-label="Featured menu items">
            {featuredItems.map((item, index) => (
              <button
                key={item.id}
                role="tab"
                type="button"
                aria-selected={index === activeSlide}
                className={`grid h-5.5 w-5.5 cursor-pointer place-items-center rounded-full border text-[0.68rem] font-semibold transition-[transform,background-color,border-color,box-shadow] duration-200 ${
                  index === activeSlide
                    ? "scale-[1.14] border-(--saffron) bg-(--saffron) text-[#23160f] shadow-[0_0_0_2px_rgba(232,148,58,0.32)]"
                    : "border-[rgba(245,233,218,0.62)] bg-[rgba(245,233,218,0.24)] text-[rgba(245,233,218,0.96)] hover:border-[rgba(245,233,218,0.92)] hover:bg-[rgba(245,233,218,0.4)]"
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${item.name}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
