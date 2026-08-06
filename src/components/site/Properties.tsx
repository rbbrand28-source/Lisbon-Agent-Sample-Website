import { ArrowUpRight } from "lucide-react";

import { IMAGES } from "./assets";
import { useStaggeredReveal } from "@/hooks/useReveal";

type Property = {
  title: string;
  location: string;
  desc: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  alt: string;
};

const PROPERTIES: Property[] = [
  {
    title: "Renovated Apartment with City Views",
    location: "Príncipe Real, Central Lisbon",
    desc: "A fully refurbished two-bedroom apartment in one of Lisbon's most sought-after neighbourhoods, with oversized windows framing the city skyline.",
    price: "€895,000",
    beds: 2,
    baths: 2,
    area: "96 m²",
    image: IMAGES.propertyCentralLisbon,
    alt: "Modern renovated apartment in central Lisbon with city views",
  },
  {
    title: "Bright Apartment with Classic Balcony",
    location: "Alfama, Lisbon",
    desc: "Contemporary living inside a historic building, opening onto a wrought-iron balcony with views over a quiet, characterful street.",
    price: "€540,000",
    beds: 2,
    baths: 1,
    area: "78 m²",
    image: IMAGES.propertyBalcony,
    alt: "Bright contemporary apartment with balcony in a classic Lisbon building",
  },
  {
    title: "Coastal Apartment in Cascais",
    location: "Cascais Marina, Cascais",
    desc: "An airy, light-filled apartment minutes from the Atlantic — open-plan living with a refined coastal palette and marina glimpses.",
    price: "€1,250,000",
    beds: 3,
    baths: 2,
    area: "128 m²",
    image: IMAGES.propertyCascais,
    alt: "Stylish coastal apartment in Cascais with an open airy feel",
  },
];

const PropertyCard = ({ p, visible }: { p: Property; visible: boolean }) => {
  return (
    <article
      className={[
        "group flex flex-col overflow-hidden rounded-sm border border-navy/8 bg-white transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_70px_-30px_rgba(15,23,42,0.35)]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
        {/* Price chip */}
        <span className="absolute left-4 top-4 rounded-sm bg-navy-deep/80 px-3 py-1.5 text-xs font-semibold tracking-wide-luxe text-gold backdrop-blur-sm">
          {p.price}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="mb-2 flex items-center gap-1.5 text-[11px] uppercase tracking-wide-luxe text-gold">
          <span>●</span> {p.location}
        </p>
        <h3 className="mb-3 font-serif-display text-2xl leading-snug text-navy">
          {p.title}
        </h3>
        <p className="mb-5 flex-1 font-sans-body text-sm leading-relaxed text-charcoal/75">
          {p.desc}
        </p>

        {/* Stats */}
        <div className="mb-5 grid grid-cols-3 gap-2 border-y border-navy/6 py-3 text-center">
          <div>
            <div className="font-serif-display text-lg text-navy">{p.beds}</div>
            <div className="text-[10px] uppercase tracking-wide-luxe text-charcoal/60">
              Beds
            </div>
          </div>
          <div className="border-x border-navy/6">
            <div className="font-serif-display text-lg text-navy">{p.baths}</div>
            <div className="text-[10px] uppercase tracking-wide-luxe text-charcoal/60">
              Baths
            </div>
          </div>
          <div>
            <div className="font-serif-display text-lg text-navy">{p.area}</div>
            <div className="text-[10px] uppercase tracking-wide-luxe text-charcoal/60">
              Area
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="group/btn inline-flex items-center justify-between rounded-sm border border-navy/15 px-5 py-3 text-xs font-semibold uppercase tracking-wide-luxe text-navy transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy"
        >
          View details
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </a>
      </div>
    </article>
  );
};

const Properties = () => {
  const { ref, visibleCount } = useStaggeredReveal(PROPERTIES.length);

  return (
    <section id="properties" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:mb-20 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-4 text-[11px] uppercase tracking-luxe text-gold">
              A selection of current listings
            </p>
            <h2 className="font-serif-display text-4xl leading-tight text-navy sm:text-5xl">
              Featured Properties
            </h2>
            <div className="mt-6 h-px w-16 bg-gold/60" />
          </div>
          <p className="max-w-sm font-sans-body text-sm leading-relaxed text-charcoal/70">
            A curated selection from my active portfolio. Each home is chosen for
            location, quality, and honest value.
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid gap-6 md:grid-cols-3 md:gap-7">
          {PROPERTIES.map((p, i) => (
            <PropertyCard key={p.title} p={p} visible={i < visibleCount} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;

