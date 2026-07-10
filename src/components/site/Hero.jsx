import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import { HERO_IMAGE, HERO_STATS } from "@/data/content";
import Counter from "@/components/site/Counter";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_IMAGE}
          alt="Luxury wedding setup"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Floating decorative blobs */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="blob bg-[#EC4899] h-72 w-72 -top-10 right-10"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="blob bg-[#F59E0B] h-80 w-80 bottom-10 left-1/3"
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 w-full grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7C3AED]/20 bg-white/70 backdrop-blur text-[12px] tracking-[0.2em] uppercase text-[#7C3AED] mb-6"
          >
            <Star className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
            Award-winning luxury event design
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-4xl sm:text-5xl lg:text-7xl text-[#111827] leading-[1.05] tracking-tight"
            data-testid="hero-headline"
          >
            Creating <em className="italic text-[#7C3AED]">Unforgettable</em>
            <br /> Celebrations
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 text-base sm:text-lg text-[#4B5563] max-w-xl leading-relaxed"
          >
            Transforming your special moments into extraordinary experiences with
            creative decorations, immaculate florals and flawless execution —
            from intimate gatherings to destination weddings.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              data-testid="hero-cta-quote"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white bg-[#7C3AED] hover:bg-[#6D28D9] hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_18px_40px_-15px_rgba(124,58,237,0.55)]"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              data-testid="hero-cta-portfolio"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-[#111827] bg-white border border-black/10 hover:border-[#7C3AED]/40 hover:text-[#7C3AED] transition-all"
            >
              <span className="grid place-items-center h-6 w-6 rounded-full bg-[#F59E0B] text-white">
                <Play className="h-3 w-3 fill-white" />
              </span>
              View Portfolio
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6"
            data-testid="hero-stats"
          >
            {HERO_STATS.map((s, i) => (
              <div key={s.label} className="border-l-2 border-[#7C3AED]/30 pl-4">
                <div className="font-display text-3xl sm:text-4xl text-[#111827]">
                  <Counter end={s.value} />
                  <span className="text-[#EC4899]">{s.suffix}</span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-[#6B7280] leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating accent card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex lg:col-span-5 justify-end"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-10 z-10 bg-white rounded-2xl p-4 pr-6 shadow-xl border border-black/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
                  ].map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="h-9 w-9 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-[#6B7280]">
                    Trusted by 300+ couples
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-6 z-10 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] text-white rounded-2xl p-5 shadow-xl"
            >
              <div className="text-3xl font-display">98%</div>
              <p className="text-xs opacity-90 mt-1 max-w-[120px]">
                Client satisfaction across all events
              </p>
            </motion.div>

            <div className="relative h-[460px] w-[360px] rounded-[2rem] overflow-hidden glow-purple">
              <img
                src="https://images.pexels.com/photos/28998231/pexels-photo-28998231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700"
                alt="Featured event"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/40 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
