import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/data/content";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-24 lg:py-32 bg-[#F9FAFB]"
    >
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#EC4899] font-medium">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
            Questions, <em className="italic text-[#7C3AED]">answered</em>
          </h2>
          <p className="mt-5 text-[#4B5563] leading-relaxed">
            Still curious? Drop us a line — we usually reply within 4 hours.
          </p>
        </div>

        <div className="mt-12 space-y-3" data-testid="faq-list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                layout
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? "bg-white border-[#7C3AED]/30 shadow-[0_15px_40px_-25px_rgba(124,58,237,0.35)]"
                    : "bg-white border-black/5"
                }`}
                data-testid={`faq-item-${i}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-6 text-left"
                  data-testid={`faq-toggle-${i}`}
                >
                  <span
                    className={`font-display text-base sm:text-lg ${
                      isOpen ? "text-[#7C3AED]" : "text-[#111827]"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`grid place-items-center h-9 w-9 rounded-full shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#7C3AED] text-white"
                        : "bg-[#F3F4F6] text-[#374151]"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-[#4B5563] leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
