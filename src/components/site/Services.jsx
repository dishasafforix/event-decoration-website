import { motion } from "framer-motion";
import {
  Heart,
  Cake,
  Building2,
  Baby,
  Sparkles,
  Wand2,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "@/data/content";

const iconMap = { Heart, Cake, Building2, Baby, Sparkles, Wand2 };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] uppercase text-[#EC4899] font-medium">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
            Signature services for every <em className="italic text-[#7C3AED]">milestone</em>
          </h2>
          <p className="mt-5 text-[#4B5563] leading-relaxed">
            Whether you're saying "I do" or launching a flagship product — we
            build settings that match the magnitude of your moment.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            const hasImage = index >= 3;
            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{ y: -8 }}
                className="group relative bg-white border border-black/5 rounded-3xl overflow-hidden hover:shadow-[0_25px_70px_-25px_rgba(124,58,237,0.35)] transition-all duration-500 flex flex-col"
                data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {hasImage && (
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4 grid place-items-center h-11 w-11 rounded-full bg-white text-[#7C3AED] shadow-lg group-hover:bg-[#7C3AED] group-hover:text-white transition-colors duration-500">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col justify-between min-h-[220px]">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl text-[#111827]">
                        {service.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-[#6B7280] group-hover:text-[#7C3AED] group-hover:rotate-45 transition-all duration-500" />
                    </div>
                    <p className="mt-4 text-sm text-[#6B7280] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#7C3AED] hover:gap-2.5 transition-all"
                      data-testid={`service-cta-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      Enquire now →
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
