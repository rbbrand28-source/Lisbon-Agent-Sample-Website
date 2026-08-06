import { CheckCircle2 } from "lucide-react";

import { CONTACT, IMAGES } from "./assets";
import { useReveal } from "@/hooks/useReveal";

const POINTS = [
  "Lisbon-native with lifelong street-by-street knowledge",
  "Years of experience with international and expat clients",
  "Part of one of the top RE/MAX teams in Portugal",
  "Honest, data-driven pricing — no pressure, no fluff",
] as const;

const About = () => {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="bg-cream py-24 sm:py-32">
      <div
        ref={ref}
        className={[
          "mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20",
          isVisible ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{ transition: "opacity 1s ease" }}
      >
        {/* Image */}
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={IMAGES.agent}
              alt="Francisco Devito, Lisbon real estate agent"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-navy/10" />
          </div>
          {/* Gold frame accent */}
          <div className="absolute -left-4 -top-4 -z-10 hidden h-full w-full rounded-sm border border-gold/40 lg:block" />
          {/* Signature card */}
          <div className="absolute -bottom-6 -right-2 rounded-sm bg-navy px-6 py-5 shadow-xl sm:right-6">
            <p className="font-serif-display text-xl italic text-gold">Francisco Devito</p>
            <p className="mt-1 text-[10px] uppercase tracking-luxe text-white/60">
              RE/MAX · Lisbon
            </p>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <p className="mb-4 text-[11px] uppercase tracking-luxe text-gold">
            Your agent
          </p>
          <h2 className="font-serif-display text-4xl leading-tight text-navy sm:text-5xl">
            Meet Francisco
          </h2>
          <div className="mt-6 mb-8 h-px w-16 bg-gold/60" />

          <p className="mb-6 font-sans-body text-base leading-relaxed text-charcoal/85 sm:text-lg">
            A Lisbon-native agent with deep local knowledge and genuine
            international experience. Francisco focuses on helping clients make
            smart real estate decisions with{" "}
            <span className="text-navy">clarity, timing, and trust</span>.
          </p>
          <p className="mb-9 font-sans-body text-[15px] leading-relaxed text-charcoal/75">
            His hyper-local approach means he knows the difference between two
            streets that look identical online — and which one is the better buy.
            He has guided buyers and sellers from across Europe, the US, and
            Brazil through the Portuguese market with confidence.
          </p>

          {/* Points */}
          <ul className="mb-10 space-y-3.5">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-gold"
                  strokeWidth={1.5}
                />
                <span className="font-sans-body text-sm leading-relaxed text-charcoal/85">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={CONTACT.emailHref}
            className="inline-flex items-center gap-2 border-b border-gold pb-1 font-sans-body text-sm font-semibold text-navy transition-all duration-300 hover:gap-3.5 hover:border-gold-soft"
          >
            Get in touch directly
            <span className="text-gold">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

