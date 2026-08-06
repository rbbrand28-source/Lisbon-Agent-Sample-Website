import { IMAGES } from "./assets";
import { useStaggeredReveal } from "@/hooks/useReveal";

const AREAS = [
  {
    name: "Lisbon",
    image: IMAGES.areaLisbon,
    alt: "Charming classic Lisbon street with pastel buildings and cobblestones",
    desc: "From Príncipe Real to Alfama, I cover the historic centre and the neighbourhoods buyers actually want — with deep, street-level knowledge of every block.",
  },
  {
    name: "Cascais",
    image: IMAGES.areaCascais,
    alt: "Cascais marina and Atlantic coastline",
    desc: "The coast's most refined addresses — from the marina to Guincho. Ideal for second homes, sea-view apartments, and quiet family living near Lisbon.",
  },
  {
    name: "Comporta",
    image: IMAGES.areaComporta,
    alt: "Comporta beach with pine dunes at sunset",
    desc: "Portugal's most discreet luxury escape. Pine forests, rice fields, and wild beaches — a growing market for those seeking privacy and natural beauty.",
  },
] as const;

const Areas = () => {
  const { ref, visibleCount } = useStaggeredReveal(AREAS.length);

  return (
    <section id="areas" className="bg-navy py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl sm:mb-20">
          <p className="mb-4 text-[11px] uppercase tracking-luxe text-gold">
            Where I work
          </p>
          <h2 className="font-serif-display text-4xl leading-tight text-white sm:text-5xl">
            Areas I Cover
          </h2>
          <div className="mt-6 h-px w-16 bg-gold/60" />
        </div>

        {/* Cards */}
        <div ref={ref} className="grid gap-6 md:grid-cols-3 md:gap-7">
          {AREAS.map((a, i) => {
            const visible = i < visibleCount;
            return (
              <article
                key={a.name}
                className={[
                  "group relative overflow-hidden rounded-sm transition-all duration-700",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                ].join(" ")}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <h3 className="mb-3 font-serif-display text-3xl text-white sm:text-4xl">
                    {a.name}
                  </h3>
                  <p className="max-h-0 overflow-hidden font-sans-body text-sm leading-relaxed text-white/0 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:text-white/80 group-hover:opacity-100">
                    {a.desc}
                  </p>
                  <span className="mt-4 block h-px w-12 bg-gold/70 transition-all duration-500 group-hover:w-24" />
                </div>

                {/* Top corner index */}
                <span className="absolute right-5 top-5 font-serif-display text-sm text-white/40">
                  0{i + 1}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Areas;

