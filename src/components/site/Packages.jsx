import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { PACKAGES } from "@/data/content";

export default function Packages() {
  return (
    <section
      id="packages"
      data-testid="packages-section"
      className="relative py-24 lg:py-32 bg-[#F9FAFB] overflow-hidden"
    >
      <div className="blob bg-[#7C3AED] h-80 w-80 -top-20 -left-20" />
      <div className="blob bg-[#F59E0B] h-72 w-72 bottom-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#EC4899] font-medium">
            Packages & Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
            Transparent pricing, <em className="italic text-[#7C3AED]">extraordinary value</em>
          </h2>
          <p className="mt-5 text-[#4B5563] leading-relaxed">
            Choose a starting point — we'll tailor every detail to your guest
            count, venue, and dream.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6 lg:gap-8">
          {PACKAGES.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 lg:p-10 border transition-all duration-500 ${
                p.popular
                  ? "bg-[#111827] text-white border-[#F59E0B] glow-gold scale-[1.02] lg:scale-105"
                  : "bg-white text-[#111827] border-black/5 hover:border-[#7C3AED]/30 hover:shadow-[0_25px_70px_-30px_rgba(124,58,237,0.3)]"
              }`}
              data-testid={`package-${p.name.toLowerCase()}`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F59E0B] text-[#111827] text-[11px] tracking-[0.2em] uppercase font-semibold">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </div>
              )}

              <h3
                className={`font-display text-3xl ${
                  p.popular ? "text-white" : "text-[#111827]"
                }`}
              >
                {p.name}
              </h3>
              <p
                className={`mt-2 text-sm ${
                  p.popular ? "text-white/70" : "text-[#6B7280]"
                }`}
              >
                {p.tagline}
              </p>

              <div className="mt-6 flex items-end gap-1">
                <span
                  className={`font-display text-5xl ${
                    p.popular ? "text-[#F59E0B]" : "text-[#7C3AED]"
                  }`}
                >
                  ${p.price.toLocaleString()}
                </span>
                <span
                  className={`pb-2 text-sm ${
                    p.popular ? "text-white/60" : "text-[#9CA3AF]"
                  }`}
                >
                  / starting
                </span>
              </div>

              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 grid place-items-center h-5 w-5 rounded-full shrink-0 ${
                        p.popular
                          ? "bg-[#F59E0B]/20 text-[#F59E0B]"
                          : "bg-[#7C3AED]/10 text-[#7C3AED]"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span
                      className={p.popular ? "text-white/85" : "text-[#374151]"}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                data-testid={`package-cta-${p.name.toLowerCase()}`}
                className={`mt-10 inline-flex w-full items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium transition-all ${
                  p.popular
                    ? "bg-[#F59E0B] text-[#111827] hover:bg-[#FBBF24]"
                    : "bg-[#7C3AED] text-white hover:bg-[#6D28D9]"
                } hover:scale-[1.03] active:scale-[0.98]`}
              >
                Book {p.name} Package
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-[#9CA3AF]">
          All packages are starting points. Final pricing depends on guest count,
          venue, location & customizations.
        </p>
      </div>
    </section>
  );
}
