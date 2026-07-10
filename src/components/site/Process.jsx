import { motion } from "framer-motion";
import {
  MessageCircle,
  ClipboardList,
  PencilRuler,
  PartyPopper,
} from "lucide-react";
import { PROCESS } from "@/data/content";

const iconMap = { MessageCircle, ClipboardList, PencilRuler, PartyPopper };

export default function Process() {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="relative py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] uppercase text-[#EC4899] font-medium">
            Our Process
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
            From consultation to <em className="italic text-[#7C3AED]">show-day magic</em>
          </h2>
          <p className="mt-5 text-[#4B5563] leading-relaxed">
            A simple, transparent 4-step journey — designed to reduce stress and
            maximise delight.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F59E0B] opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
            {PROCESS.map((p, i) => {
              const Icon = iconMap[p.icon];
              return (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative text-center"
                  data-testid={`process-step-${i}`}
                >
                  <div className="relative inline-flex">
                    <div className="grid place-items-center h-24 w-24 rounded-full bg-white border border-[#7C3AED]/20 shadow-[0_15px_45px_-15px_rgba(124,58,237,0.35)] mx-auto">
                      <Icon className="h-8 w-8 text-[#7C3AED]" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-9 w-9 rounded-full bg-[#F59E0B] text-[#111827] grid place-items-center font-display text-sm">
                      {p.step}
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-xl text-[#111827]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#6B7280] leading-relaxed max-w-[260px] mx-auto">
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
