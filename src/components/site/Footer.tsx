import { CONTACT } from "./assets";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-navy py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif-display text-2xl text-white">
              The Lisbon Agent
            </h3>
            <p className="mt-2 text-[10px] uppercase tracking-luxe text-gold">
              Francisco Devito · RE/MAX
            </p>
            <p className="mt-4 font-sans-body text-sm text-white/50">
              Lisbon, Portugal
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {[
              { label: "Properties", href: "#properties" },
              { label: "Areas", href: "#areas" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans-body text-sm text-white/70 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="text-center md:text-right">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans-body text-sm text-white/70 transition-colors hover:text-gold"
            >
              {CONTACT.phone}
            </a>
            <br />
            <a
              href={CONTACT.emailHref}
              className="font-sans-body text-sm text-white/70 transition-colors hover:text-gold"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} The Lisbon Agent. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Crafted in Lisbon · Cascais · Comporta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

