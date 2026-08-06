import { Mail, MessageCircle } from "lucide-react";

import { CONTACT } from "./assets";
import { useReveal } from "@/hooks/useReveal";

const CTA = () => {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-navy-deep py-24 sm:py-32 noise-overlay"
    >
      {/* Decorative gold glow */}
      <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-gold/5 blur-[100px]" />

      <div
        className={[
          "relative mx-auto max-w-3xl px-5 text-center sm:px-8",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        ].join(" ")}
        style={{ transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)" }}
      >
        <p className="mb-5 text-[11px] uppercase tracking-luxe text-gold">
          Let&rsquo;s talk
        </p>
        <h2 className="font-serif-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          Ready to buy or sell
          <br />
          in <span className="text-gold-gradient italic">Lisbon</span>?
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-sans-body text-base leading-relaxed text-white/70 sm:text-lg">
          Let&rsquo;s have a clear conversation about your goals. No pressure,
          no jargon — just honest advice from someone who knows the market
          inside out.
        </p>

        {/* Primary WhatsApp button */}
        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wide-luxe text-navy transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_14px_40px_-12px_hsl(41_48%_57%/0.7)]"
          >
            <MessageCircle size={18} strokeWidth={2} />
            Message Francisco on WhatsApp
          </a>
        </div>

        {/* Secondary contact */}
        <div className="mt-8 flex flex-col items-center gap-3 text-white/60 sm:flex-row sm:justify-center sm:gap-6">
          <a
            href={CONTACT.emailHref}
            className="inline-flex items-center gap-2 text-sm transition-colors hover:text-gold"
          >
            <Mail size={15} />
            {CONTACT.email}
          </a>
          <span className="hidden h-4 w-px bg-white/20 sm:block" />
          <a
            href={CONTACT.phoneHref}
            className="text-sm transition-colors hover:text-gold"
          >
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

