import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/80 border-b border-black/5 shadow-[0_8px_30px_rgba(124,58,237,0.06)]"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2"
          data-testid="navbar-logo"
        >
          <span className="grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] text-white font-display text-lg">
            E
          </span>
          <div className="leading-tight">
            <div className="font-display text-lg sm:text-xl text-[#111827]">
              {BRAND.name}
            </div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#6B7280]">
              Events · Decor
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className="px-4 py-2 text-sm text-[#374151] hover:text-[#7C3AED] transition-colors relative group"
            >
              {link.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform bg-gradient-to-r from-[#7C3AED] to-[#EC4899]" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="flex items-center gap-2 text-sm text-[#374151] hover:text-[#7C3AED] transition-colors"
            data-testid="navbar-phone"
          >
            <Phone className="h-4 w-4" />
            {BRAND.phone}
          </a>
          <a
            href="#contact"
            data-testid="navbar-cta"
            className="px-5 py-2.5 rounded-full text-sm font-medium text-white bg-[#7C3AED] hover:bg-[#6D28D9] hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_10px_30px_-10px_rgba(124,58,237,0.6)]"
          >
            Get Free Quote
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          data-testid="navbar-menu-toggle"
          className="lg:hidden grid place-items-center h-11 w-11 rounded-full bg-white/70 border border-black/5 backdrop-blur"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-black/5"
            data-testid="navbar-mobile-menu"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="py-3 text-[15px] text-[#111827] border-b border-black/5"
                  data-testid={`nav-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={close}
                className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-medium text-white bg-[#7C3AED]"
                data-testid="navbar-mobile-cta"
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
