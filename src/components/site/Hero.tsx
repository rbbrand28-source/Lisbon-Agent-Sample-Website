import { ArrowDown, MessageCircle } from "lucide-react";

import { CONTACT, IMAGES } from "./assets";

const Hero = () => {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image with ken-burns */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Luxurious modern Lisbon apartment living room with city views"
          className="h-full w-full animate-ken-burns object-cover"
          fetchPriority="high"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy/55 to-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 sm:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-luxe text-gold sm:text-xs">
            <span className="h-px w-10 bg-gold/70" />
            Francisco Devito · RE/MAX
          </p>

          {/* Headline */}
          <h1 className="font-serif-display text-6xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            The Lisbon
            <br />
            <span className="text-gold-gradient italic">Agent</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-7 max-w-xl font-sans-body text-lg leading-relaxed text-white/85 sm:text-xl">
            Hyper-local expertise for buyers &amp; sellers in{" "}
            <span className="text-white">Lisbon, Cascais &amp; Comporta</span>.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-sm bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-wide-luxe text-navy transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_14px_40px_-12px_hsl(41_48%_57%/0.65)]"
            >
              Speak with Francisco
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <p className="text-sm text-white/70">
              Helping clients buy and sell with clarity and confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#trust"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-gold sm:flex"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-luxe">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>

      {/* WhatsApp floating hint (decorative) */}
      <div className="absolute bottom-7 right-7 z-10 hidden items-center gap-2 text-white/50 lg:flex">
        <MessageCircle size={15} />
        <span className="text-xs tracking-wide-luxe">WhatsApp available</span>
      </div>
    </section>
  );
};

export default Hero;

