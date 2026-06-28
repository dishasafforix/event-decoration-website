import { motion } from "framer-motion";
import { Compass, Target, Sparkles } from "lucide-react";
import { ABOUT_IMAGE } from "@/data/content";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 lg:py-32 bg-[#F9FAFB]"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image column */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative h-[460px] sm:h-[560px] rounded-[2rem] overflow-hidden">
            <img
              src={ABOUT_IMAGE}
              alt="Eternal Affairs team at work"
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1500ms]"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 -right-4 bg-white rounded-2xl p-5 shadow-xl border border-black/5 w-56"
          >
            <div className="font-display text-3xl text-[#7C3AED]">A+</div>
            <p className="text-xs text-[#6B7280] mt-1">
              Rated by Couples Choice Awards three years running.
            </p>
          </motion.div>
        </motion.div>

        {/* Content column */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#EC4899] font-medium">
            About Us
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
            A decade of designing <em className="italic text-[#7C3AED]">moments that linger</em>
          </h2>
          <p className="mt-6 text-[#4B5563] leading-relaxed max-w-2xl">
            Eternal Affairs began with a simple belief: every celebration deserves
            a setting as remarkable as the people inside it. Over 10 years, our
            team of designers, florists and producers has created over 500 events
            across three continents — from intimate vow-renewals to 1,000-guest
            galas. We obsess over the details so you can be fully present.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Compass className="h-5 w-5" />,
                title: "Our Vision",
                text: "To become the most trusted name in luxury event design, globally.",
              },
              {
                icon: <Target className="h-5 w-5" />,
                title: "Our Mission",
                text: "Translate every couple's story into a one-of-a-kind, breathtaking environment.",
              },
              {
                icon: <Sparkles className="h-5 w-5" />,
                title: "Our Promise",
                text: "On-time delivery, transparent pricing, and a team that treats your day like our own.",
              },
              {
                icon: <Sparkles className="h-5 w-5" />,
                title: "Our Edge",
                text: "Concept-led design + in-house production = creative control, end to end.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4"
                data-testid={`about-card-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="grid place-items-center h-10 w-10 rounded-full bg-white border border-[#7C3AED]/15 text-[#7C3AED] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-display text-lg text-[#111827]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#6B7280] mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
