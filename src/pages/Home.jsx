import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Portfolio from "@/components/site/Portfolio";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Packages from "@/components/site/Packages";
import Testimonials from "@/components/site/Testimonials";
import Process from "@/components/site/Process";
import FAQ from "@/components/site/FAQ";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import BackToTop from "@/components/site/BackToTop";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div data-testid="home-page" className="relative bg-white text-[#111827] font-body overflow-x-hidden">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="page-loader"
            data-testid="page-loader"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-14 w-14">
                <span className="absolute inset-0 rounded-full border-2 border-[#7C3AED]/20" />
                <motion.span
                  className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#7C3AED] border-r-[#EC4899]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <p className="font-display text-lg tracking-wide text-[#111827]">
                Eternal Affairs
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Packages />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
