import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import { BRAND, EVENT_TYPES } from "@/data/content";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in your name, phone and email.");
      return;
    }
    setSubmitted(true);
    toast.success("Thanks! We'll be in touch within 4 hours.");
    setForm({
      name: "",
      phone: "",
      email: "",
      eventType: "",
      eventDate: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="blob bg-[#7C3AED] h-80 w-80 -top-10 right-0" />
      <div className="blob bg-[#F59E0B] h-72 w-72 bottom-0 left-0" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
        {/* Left: details + CTAs */}
        <div className="lg:col-span-5">
          <p className="text-xs tracking-[0.3em] uppercase text-[#EC4899] font-medium">
            Get in touch
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
            Let's design your <em className="italic text-[#7C3AED]">unforgettable</em> day
          </h2>
          <p className="mt-5 text-[#4B5563] leading-relaxed">
            Share a few details and we'll send a personalised proposal within
            24 hours. No obligation, no spam — just thoughtful design.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              data-testid="contact-call-btn"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/5 hover:border-[#7C3AED]/30 transition-colors"
            >
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED]">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">
                  Call Now
                </div>
                <div className="text-[#111827] font-medium">{BRAND.phone}</div>
              </div>
            </a>

            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-whatsapp-btn"
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/15 transition-colors"
            >
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-[#25D366] text-white">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#16A34A]">
                  WhatsApp
                </div>
                <div className="text-[#111827] font-medium">Chat with us instantly</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/5">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-[#EC4899]/10 text-[#EC4899]">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">
                  Email
                </div>
                <div className="text-[#111827] font-medium">{BRAND.email}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/5">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">
                  Studio
                </div>
                <div className="text-[#111827] font-medium leading-snug">
                  {BRAND.address}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          onSubmit={onSubmit}
          data-testid="contact-form"
          className="lg:col-span-7 bg-white border border-black/5 rounded-3xl p-7 sm:p-10 shadow-[0_30px_80px_-40px_rgba(124,58,237,0.25)]"
        >
          <h3 className="font-display text-2xl text-[#111827]">
            Request a free quote
          </h3>

          <div className="mt-6 grid sm:grid-cols-2 gap-5">
            <Field label="Full Name *" testid="contact-name">
              <input
                type="text"
                required
                value={form.name}
                onChange={update("name")}
                className="input"
                placeholder="Jane Doe"
                data-testid="contact-input-name"
              />
            </Field>
            <Field label="Phone *" testid="contact-phone">
              <input
                type="tel"
                required
                value={form.phone}
                onChange={update("phone")}
                className="input"
                placeholder="+1 555 000 0000"
                data-testid="contact-input-phone"
              />
            </Field>
            <Field label="Email *" testid="contact-email">
              <input
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                className="input"
                placeholder="jane@email.com"
                data-testid="contact-input-email"
              />
            </Field>
            <Field label="Event Type" testid="contact-event-type">
              <select
                value={form.eventType}
                onChange={update("eventType")}
                className="input bg-white"
                data-testid="contact-input-event-type"
              >
                <option value="">Select an event</option>
                {EVENT_TYPES.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Event Date" testid="contact-event-date">
              <input
                type="date"
                value={form.eventDate}
                onChange={update("eventDate")}
                className="input"
                data-testid="contact-input-event-date"
              />
            </Field>
            <Field label="Guests / Budget" testid="contact-budget">
              <input
                type="text"
                placeholder="e.g. 150 guests · $5,000"
                className="input"
                onChange={() => {}}
                data-testid="contact-input-budget"
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Tell us about your event" testid="contact-message">
              <textarea
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="Share your vision, venue, theme inspirations..."
                className="input resize-none"
                data-testid="contact-input-message"
              />
            </Field>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-[#9CA3AF]">
              We respect your privacy. No spam, ever.
            </p>
            <button
              type="submit"
              data-testid="contact-submit"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white bg-[#7C3AED] hover:bg-[#6D28D9] hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_18px_40px_-15px_rgba(124,58,237,0.55)]"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Submitted
                </>
              ) : (
                <>
                  Send Enquiry
                  <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>

      <style>{`
        .input {
          width: 100%;
          padding: 0.85rem 1rem;
          border-radius: 0.85rem;
          background: #F9FAFB;
          border: 1px solid rgba(0,0,0,0.06);
          color: #111827;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          outline: none;
        }
        .input::placeholder { color: #9CA3AF; }
        .input:focus {
          border-color: #7C3AED;
          background: #FFFFFF;
          box-shadow: 0 0 0 4px rgba(124,58,237,0.12);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block mb-1.5 text-xs font-medium tracking-wide text-[#374151]">
        {label}
      </span>
      {children}
    </label>
  );
}
