"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { fullMenuCategories, restaurantProfile } from "@/data/full-menu";

const formatPrice = (value: number) => `£${value.toFixed(2)}`;

export default function FullMenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"popular" | "price-low" | "price-high">("popular");

  // Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Handle window resize for responsive carousel
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setCardsPerView(1);
      else if (width < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset carousel index when changing tabs
  useEffect(() => {
    setCarouselIndex(0);
  }, [activeCategory]);

  const allItemsCount = useMemo(
    () => fullMenuCategories.reduce((total, category) => total + category.items.length, 0),
    []
  );

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    return fullMenuCategories
      .filter((category) => activeCategory === "all" || category.slug === activeCategory)
      .map((category) => {
        const items = category.items
          .filter((item) => {
            if (!query) return true;
            const haystack = `${item.name} ${item.description}`.toLowerCase();
            return haystack.includes(query);
          })
          .slice()
          .sort((a, b) => {
            if (sortBy === "price-low") return a.priceGbp - b.priceGbp;
            if (sortBy === "price-high") return b.priceGbp - a.priceGbp;

            const aScore = (a.ratingPercent ?? 0) * 1000 + (a.reviewCount ?? 0);
            const bScore = (b.ratingPercent ?? 0) * 1000 + (b.reviewCount ?? 0);
            return bScore - aScore;
          });

        return { ...category, items };
      })
      .filter((category) => category.items.length > 0);
  }, [activeCategory, search, sortBy]);

  const isShowingAllTab = activeCategory === "all";
  const maxIndex = Math.max(0, filteredCategories.length - cardsPerView);

  useEffect(() => {
    if (carouselIndex > maxIndex) {
      setCarouselIndex(maxIndex);
    }
  }, [maxIndex, carouselIndex]);

  const handleNext = () => setCarouselIndex((prev) => Math.min(prev + 1, maxIndex));
  const handlePrev = () => setCarouselIndex((prev) => Math.max(prev - 1, 0));
  const filterButtonClass = (isActive: boolean) =>
    [
      "cursor-pointer rounded-full border px-[0.84rem] py-[0.42rem] text-[0.77rem] text-[var(--cream)] transition-[border-color,background,transform] duration-200",
      isActive
        ? "-translate-y-px border-[rgba(232,148,58,0.78)] bg-[rgba(232,148,58,0.12)]"
        : "border-[rgba(245,233,218,0.2)] bg-[rgba(44,36,32,0.6)] hover:-translate-y-px hover:border-[rgba(232,148,58,0.78)] hover:bg-[rgba(232,148,58,0.12)]",
    ].join(" ");

  return (
    <main className="full-menu-page">
      <section className="full-menu-hero section-shell">
        <motion.div
          className="full-menu-hero-inner"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-topline">Spice Lounge Birmingham</p>
          <h1>Full Menu</h1>
          <p className="full-menu-subtitle">
            From tandoor classics to rich house curries, explore our complete offering in one place.
          </p>
          <div className="full-menu-meta">
            <span>{restaurantProfile.rating}</span>
            <span>{restaurantProfile.openingHours}</span>
            <span>Minimum order {restaurantProfile.minimumOrder}</span>
            <span>Delivery fee {restaurantProfile.deliveryFee}</span>
          </div>
          <div className="full-menu-hero-actions">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(245,233,218,0.36)] bg-transparent px-5 py-2.5 text-(--cream) transition-[transform,box-shadow] duration-300 hover:shadow-[0_0_24px_rgba(232,148,58,0.28)]"
            >
              Back to Home
            </Link>
            <a
              href={restaurantProfile.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(232,148,58,0.7)] bg-[linear-gradient(120deg,rgba(232,148,58,0.25),rgba(232,148,58,0))] px-5 py-2.5 text-(--cream) transition-[transform,box-shadow] duration-300 hover:shadow-[0_0_24px_rgba(232,148,58,0.28)]"
            >
              Order on {restaurantProfile.source}
            </a>
          </div>
        </motion.div>
      </section>

      <section className="section-shell pb-7.5 pt-5">
        <div className="sticky z-40 grid gap-[0.7rem] rounded-2xl border border-[rgba(245,233,218,0.16)] bg-[rgba(18,13,10,0.76)] p-[0.9rem] backdrop-blur-[10px] top-[calc(var(--nav-height)+8px)] md:top-[calc(var(--nav-height)+14px)] md:rounded-[20px]">
          <div className="flex flex-wrap gap-[0.52rem]">
            <button
              type="button"
              className={filterButtonClass(activeCategory === "all")}
              onClick={() => setActiveCategory("all")}
            >
              All ({allItemsCount})
            </button>
            {fullMenuCategories.map((category) => (
              <button
                key={category.slug}
                type="button"
                className={filterButtonClass(activeCategory === category.slug)}
                onClick={() => setActiveCategory(category.slug)}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-[0.58rem]">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search dishes..."
              aria-label="Search dishes"
              className="flex-[1_1_260px] rounded-xl border border-[rgba(245,233,218,0.2)] bg-[rgba(26,20,16,0.82)] px-[0.72rem] py-[0.56rem] text-[0.92rem] text-[rgba(245,233,218,0.96)]"
            />
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as typeof sortBy)}
              aria-label="Sort menu"
              className="rounded-xl border border-[rgba(245,233,218,0.2)] bg-[rgba(26,20,16,0.82)] px-[0.72rem] py-[0.56rem] text-[0.92rem] text-[rgba(245,233,218,0.96)]"
            >
              <option value="popular">Most popular</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </div>
        </div>
      </section>

      <section className="full-menu-grid-wrap section-shell relative">
        {isShowingAllTab && filteredCategories.length > 0 ? (
          <div className="relative w-full">
            <div className="mb-6 flex justify-end gap-3">
              <button 
                onClick={handlePrev} 
                disabled={carouselIndex === 0} 
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(232,148,58,0.3)] bg-(--dark-red) text-xl text-(--cream) transition-all duration-200 enabled:hover:bg-(--primary-accent) enabled:hover:shadow-[0_0_12px_rgba(232,148,58,0.4)] disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Previous categories"
              >
                ←
              </button>
              <button 
                onClick={handleNext} 
                disabled={carouselIndex >= maxIndex} 
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(232,148,58,0.3)] bg-(--dark-red) text-xl text-(--cream) transition-all duration-200 enabled:hover:bg-(--primary-accent) enabled:hover:shadow-[0_0_12px_rgba(232,148,58,0.4)] disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Next categories"
              >
                →
              </button>
            </div>
            
            <div className="overflow-hidden pb-6">
              <motion.div
                className="flex w-full gap-6"
                initial={false}
                animate={{ 
                  x: `calc(-${(carouselIndex * 100) / cardsPerView}% - ${(carouselIndex * 24) / cardsPerView}px)` 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {filteredCategories.map((category, index) => (
                  <motion.article
                    key={category.slug}
                    className="full-menu-category flex h-137.5 flex-col"
                    style={{ flex: `0 0 calc(${100 / cardsPerView}% - ${24 * (cardsPerView - 1) / cardsPerView}px)` }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{ duration: 0.55, delay: index * 0.05 }}
                  >
                    <header className="shrink-0">
                      <h2>{category.label}</h2>
                      <span>{category.items.length} items</span>
                    </header>

                    <ul className="custom-scrollbar flex-1 overflow-y-auto pr-2">
                      {category.items.map((item) => (
                        <li key={item.id} className="full-menu-item">
                          <div className="flex items-baseline justify-between gap-4">
                            <h3 className="m-0 text-[1.04rem]">{item.name}</h3>
                            <strong className="font-(--font-display) text-[1.12rem] text-(--saffron)">{formatPrice(item.priceGbp)}</strong>
                          </div>
                          <p>{item.description}</p>
                          <div className="mt-2 flex flex-wrap gap-[0.44rem]">
                            {item.ratingPercent !== null && item.reviewCount !== null ? (
                              <span className="rounded-full border border-[rgba(245,233,218,0.22)] px-[0.46rem] py-[0.2rem] text-[0.72rem] tracking-[0.08em] text-[rgba(245,233,218,0.82)] uppercase">{item.ratingPercent}% liked ({item.reviewCount} reviews)</span>
                            ) : (
                              <span className="rounded-full border border-[rgba(245,233,218,0.22)] px-[0.46rem] py-[0.2rem] text-[0.72rem] tracking-[0.08em] text-[rgba(245,233,218,0.82)] uppercase">Newly listed</span>
                            )}
                            {item.spiceLevel ? <span className="rounded-full border border-[rgba(245,233,218,0.22)] px-[0.46rem] py-[0.2rem] text-[0.72rem] tracking-[0.08em] text-[rgba(245,233,218,0.82)] uppercase">{item.spiceLevel}</span> : null}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="full-menu-grid">
            {filteredCategories.map((category, index) => (
              <motion.article
                key={category.slug}
                className="full-menu-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
              >
                <header>
                  <h2>{category.label}</h2>
                  <span>{category.items.length} items</span>
                </header>

                <ul>
                  {category.items.map((item) => (
                    <li key={item.id} className="full-menu-item">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="m-0 text-[1.04rem]">{item.name}</h3>
                        <strong className="font-(--font-display) text-[1.12rem] text-(--saffron)">{formatPrice(item.priceGbp)}</strong>
                      </div>
                      <p>{item.description}</p>
                      <div className="mt-2 flex flex-wrap gap-[0.44rem]">
                        {item.ratingPercent !== null && item.reviewCount !== null ? (
                          <span className="rounded-full border border-[rgba(245,233,218,0.22)] px-[0.46rem] py-[0.2rem] text-[0.72rem] tracking-[0.08em] text-[rgba(245,233,218,0.82)] uppercase">{item.ratingPercent}% liked ({item.reviewCount} reviews)</span>
                        ) : (
                          <span className="rounded-full border border-[rgba(245,233,218,0.22)] px-[0.46rem] py-[0.2rem] text-[0.72rem] tracking-[0.08em] text-[rgba(245,233,218,0.82)] uppercase">Newly listed</span>
                        )}
                        {item.spiceLevel ? <span className="rounded-full border border-[rgba(245,233,218,0.22)] px-[0.46rem] py-[0.2rem] text-[0.72rem] tracking-[0.08em] text-[rgba(245,233,218,0.82)] uppercase">{item.spiceLevel}</span> : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
