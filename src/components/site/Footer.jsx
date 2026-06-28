import { Instagram, Facebook, Youtube, Heart, Send } from "lucide-react";
import { BRAND, NAV_LINKS, SERVICES } from "@/data/content";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative bg-[#0B0F1A] text-[#D1D5DB] pt-20 pb-10 overflow-hidden"
    >
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="blob bg-[#7C3AED] h-80 w-80 -top-20 left-0 opacity-30" />
        <div className="blob bg-[#EC4899] h-80 w-80 -bottom-20 right-0 opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] text-white font-display text-lg">
                E
              </span>
              <div>
                <div className="font-display text-2xl text-white">
                  {BRAND.name}
                </div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-[#9CA3AF]">
                  Events · Decor · Florals
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-[#9CA3AF] leading-relaxed max-w-sm">
              Concept-led luxury event design. From intimate gatherings to
              destination weddings — we craft the kind of moments that get
              framed, shared, and remembered.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Instagram, href: BRAND.instagram, name: "instagram" },
                { Icon: Facebook, href: BRAND.facebook, name: "facebook" },
                { Icon: Youtube, href: BRAND.youtube, name: "youtube" },
              ].map(({ Icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`footer-social-${name}`}
                  className="grid place-items-center h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:bg-[#7C3AED] hover:border-[#7C3AED] transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-white text-lg">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[#9CA3AF] hover:text-white transition-colors"
                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-white text-lg">Services</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-[#9CA3AF] hover:text-white transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-white text-lg">Stay in the loop</h4>
            <p className="mt-3 text-sm text-[#9CA3AF]">
              Subscribe for design inspiration and curated event reels.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex items-center bg-white/5 border border-white/10 rounded-full overflow-hidden focus-within:border-[#EC4899]"
              data-testid="footer-newsletter"
            >
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 bg-transparent px-5 py-3 text-sm placeholder-[#6B7280] outline-none"
              />
              <button
                type="submit"
                data-testid="footer-newsletter-submit"
                className="grid place-items-center h-10 w-10 mr-1 rounded-full bg-[#EC4899] text-white hover:bg-[#DB2777] transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 space-y-2 text-sm text-[#9CA3AF]">
              <div>{BRAND.phone}</div>
              <div>{BRAND.email}</div>
              <div className="text-xs">{BRAND.address}</div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B7280]">
          <div>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            Crafted with <Heart className="h-3.5 w-3.5 fill-[#EC4899] text-[#EC4899]" /> for unforgettable moments.
          </div>
        </div>
      </div>
    </footer>
  );
}
