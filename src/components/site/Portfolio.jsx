import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expand } from "lucide-react";
import { GALLERY, GALLERY_CATEGORIES } from "@/data/content";
import Lightbox from "@/components/site/Lightbox";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () => (active === "All" ? GALLERY : GALLERY.filter((g) => g.category === active)),
    [active]
  );

  return (
    <section
      id="portfolio"
      data-testid="portfolio-section"
      className="relative py-24 lg:py-32 bg-[#F9FAFB]"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase text-[#EC4899] font-medium">
              Portfolio
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
              A gallery of <em className="italic text-[#7C3AED]">love, light & details</em>
            </h2>
          </div>
          <p className="text-[#6B7280] max-w-md text-sm leading-relaxed">
            Browse a curated selection of our most loved events — each one
            designed from scratch with the couple or brand at the centre.
          </p>
        </div>

        {/* Filter pills */}
        <div className="mt-10 flex flex-wrap gap-2.5" data-testid="portfolio-filters">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-testid={`portfolio-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className={`relative px-5 py-2.5 rounded-full text-sm border transition-all ${
                active === cat
                  ? "bg-[#111827] text-white border-[#111827]"
                  : "bg-white text-[#374151] border-black/10 hover:border-[#7C3AED]/40 hover:text-[#7C3AED]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry */}
        <motion.div layout className="mt-10 masonry" data-testid="portfolio-grid">
          <AnimatePresence>
            {filtered.map((g, i) => (
              <motion.div
                layout
                key={`${g.url}-${active}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="masonry-item group relative overflow-hidden rounded-2xl cursor-pointer bg-white"
                onClick={() => setLightboxIndex(i)}
                data-testid={`portfolio-item-${i}`}
              >
                <img
                  src={g.url}
                  alt={g.title}
                  className="w-full block object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/85 via-[#111827]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#F59E0B]">
                    {g.category}
                  </p>
                  <h4 className="mt-1 font-display text-white text-lg">
                    {g.title}
                  </h4>
                </div>
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 backdrop-blur grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="h-4 w-4 text-[#7C3AED]" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox
        items={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((i) => (i === 0 ? filtered.length - 1 : i - 1))
        }
        onNext={() =>
          setLightboxIndex((i) => (i === filtered.length - 1 ? 0 : i + 1))
        }
      />
    </section>
  );
}
