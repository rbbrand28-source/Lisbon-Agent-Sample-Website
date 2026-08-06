import { Award } from "lucide-react";

import { useReveal } from "@/hooks/useReveal";

const TrustBar = () => {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="trust"
      ref={ref}
      className="relative border-y border-white/10 bg-navy py-6 sm:py-7"
    >
      <div
        className={[
          "mx-auto flex max-w-7xl items-center justify-center gap-3 px-5 transition-all duration-700 sm:gap-4 sm:px-8",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        ].join(" ")}
      >
        <Award size={18} className="text-gold sm:size-5" />
        <p className="text-center font-sans-body text-sm tracking-wide-luxe text-white/80 sm:text-base">
          Part of Portugal&rsquo;s{" "}
          <span className="font-semibold text-gold">#1 RE/MAX Team</span>
        </p>
        <span className="mx-2 hidden h-4 w-px bg-white/20 sm:block" />
        <p className="hidden text-sm tracking-wide-luxe text-white/60 sm:block">
          Trusted by international buyers worldwide
        </p>
      </div>
    </section>
  );
};

export default TrustBar;

