import { motion } from "framer-motion";
import {
  Palette,
  Users,
  BadgeDollarSign,
  Clock,
  Wand2,
  Crown,
} from "lucide-react";
import { WHY_US } from "@/data/content";

const iconMap = { Palette, Users, BadgeDollarSign, Clock, Wand2, Crown };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyChooseUs() {
  return (
    <section
      data-testid="why-us-section"
      className="relative py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.3em] uppercase text-[#EC4899] font-medium">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
              Why couples and brands <em className="italic text-[#7C3AED]">choose us</em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[#6B7280] leading-relaxed text-sm">
            We bring together the most experienced designers, florists, and event
            producers under one roof — so your event is always cohesive,
            on-brand, and beautifully on-time.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {WHY_US.map((f, i) => {
            const Icon = iconMap[f.icon] || Crown;
            return (
              <motion.div
                key={f.title}
                variants={card}
                whileHover={{ y: -6 }}
                className="group relative p-7 rounded-3xl border border-black/5 bg-white hover:border-[#7C3AED]/20 hover:shadow-[0_20px_60px_-25px_rgba(124,58,237,0.3)] transition-all duration-500"
                data-testid={`why-us-card-${i}`}
              >
                <div className="absolute -top-4 left-7 grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] text-white shadow-lg group-hover:rotate-6 transition-transform duration-500">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl text-[#111827]">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm text-[#6B7280] leading-relaxed">
                  {f.description}
                </p>
                <div className="mt-6 text-xs text-[#9CA3AF] tracking-wider">
                  0{i + 1}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
