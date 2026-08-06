import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { CONTACT } from "./assets";

const LINKS = [
  { label: "Properties", href: "#properties" },
  { label: "Areas", href: "#areas" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-navy/85 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5",
      ].join(" ")}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a
          href="#top"
          className="group flex flex-col leading-none"
          aria-label="The Lisbon Agent — home"
        >
          <span className="font-serif-display text-xl tracking-wide-luxe text-white sm:text-2xl">
            The Lisbon Agent
          </span>
          <span className="mt-1 text-[9px] uppercase tracking-luxe text-gold sm:text-[10px]">
            Lisbon · Cascais · Comporta
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-sm bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-wide-luxe text-navy transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_8px_24px_-8px_hsl(41_48%_57%/0.6)] md:inline-block"
        >
          Speak with Francisco
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={[
          "overflow-hidden bg-navy-deep/95 backdrop-blur-lg transition-[max-height,opacity] duration-500 md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-3 font-serif-display text-2xl text-white/90 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-sm bg-gold px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide-luxe text-navy"
            >
              Speak with Francisco
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;

