import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(t);
  }, [paused, total]);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const t = TESTIMONIALS[index];

  return (
    <section
      data-testid="testimonials-section"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="blob bg-[#EC4899] h-72 w-72 top-10 left-10" />
        <div className="blob bg-[#7C3AED] h-72 w-72 bottom-10 right-10" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 lg:px-8 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#EC4899] font-medium">
          Testimonials
        </p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
          Loved by clients across <em className="italic text-[#7C3AED]">three continents</em>
        </h2>

        <div className="mt-14 relative">
          <Quote className="absolute -top-6 left-1/2 -translate-x-1/2 h-14 w-14 text-[#7C3AED]/15" />

          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-black/5 rounded-3xl p-8 sm:p-12 shadow-[0_30px_80px_-40px_rgba(124,58,237,0.25)]"
                data-testid={`testimonial-${index}`}
              >
                <div className="flex justify-center gap-1 text-[#F59E0B]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-6 font-display text-xl sm:text-2xl leading-relaxed text-[#111827] italic">
                  "{t.text}"
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div className="text-left">
                    <div className="font-medium text-[#111827]">{t.name}</div>
                    <div className="text-xs text-[#9CA3AF]">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              data-testid="testimonial-prev"
              className="grid place-items-center h-11 w-11 rounded-full bg-white border border-black/10 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  data-testid={`testimonial-dot-${i}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-[#7C3AED]" : "w-2 bg-[#E5E7EB]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              data-testid="testimonial-next"
              className="grid place-items-center h-11 w-11 rounded-full bg-white border border-black/10 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
