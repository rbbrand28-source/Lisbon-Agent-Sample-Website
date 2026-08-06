import { Globe2, MapPin, TrendingUp } from "lucide-react";

import { useStaggeredReveal } from "@/hooks/useReveal";

const FEATURES = [
  {
    icon: MapPin,
    title: "Hyper-local Knowledge",
    desc: "Street-by-street, building-by-building expertise across Lisbon. I know which blocks hold value, which are rising, and which to avoid.",
  },
  {
    icon: Globe2,
    title: "International Clients",
    desc: "Experienced in guiding expats and foreign buyers through Portuguese contracts, taxes, and the full purchase process — in plain language.",
  },
  {
    icon: TrendingUp,
    title: "Smart Pricing",
    desc: "Helping buyers not overpay and sellers not get stuck. Pricing grounded in real comparable data, not wishful thinking.",
  },
] as const;

const Features = () => {
  const { ref, visibleCount } = useStaggeredReveal(FEATURES.length);

  return (
    <section id="why" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <p className="mb-4 text-[11px] uppercase tracking-luxe text-gold">
            What sets this apart
          </p>
          <h2 className="font-serif-display text-4xl leading-tight text-navy sm:text-5xl">
            Why work with The Lisbon Agent
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gold/60" />
        </div>

        {/* Cards */}
        <div ref={ref} className="grid gap-6 md:grid-cols-3 md:gap-8">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            const visible = i < visibleCount;
            return (
              <article
                key={f.title}
                className={[
                  "group relative overflow-hidden rounded-sm border border-navy/8 bg-white p-8 transition-all duration-700 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.25)] sm:p-10",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                ].join(" ")}
                style={{ transitionDelay: visible ? `${i * 60}ms` : "0ms" }}
              >
                {/* Gold corner accent */}
                <span className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-gold/0 transition-colors duration-500 group-hover:border-gold/60" />

                <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-navy">
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                <h3 className="mb-4 font-serif-display text-2xl text-navy">
                  {f.title}
                </h3>
                <p className="font-sans-body text-[15px] leading-relaxed text-charcoal/80">
                  {f.desc}
                </p>

                <span className="mt-7 block h-px w-full bg-navy/5" />
                <span className="mt-4 block text-xs uppercase tracking-wide-luxe text-gold/80">
                  0{i + 1} — Specialism
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

