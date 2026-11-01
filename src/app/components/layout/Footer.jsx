export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0d12]">
      {/* Main Footer */}
      <div className="mx-auto grid min-h-[190px]  grid-cols-1 items-center gap-7 px-6 py-10 md:grid-cols-3">
        {/* Brand */}
        <a
          href="#home"
          className="flex w-fit items-center gap-3 text-lg font-semibold tracking-tight text-[#f5f7fa]"
        >
          <span className="font-mono text-sky-400">&lt;L/&gt;</span>

          <span>Liaqat.dev</span>
        </a>

        {/* Description */}
        <p className="text-xs leading-7 text-[#a1a8b7]">
          Frontend development and Shopify themes,
          <br className="hidden sm:block" />
          built with clarity and care.
        </p>

        {/* Footer Links */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end"
        >
          <a
            href="#projects"
            className="text-[11px] text-[#a1a8b7] transition-colors hover:text-white"
          >
            Projects
          </a>

          <a
            href="#shopify"
            className="text-[11px] text-[#a1a8b7] transition-colors hover:text-white"
          >
            Shopify
          </a>

          <a
            href="#about"
            className="text-[11px] text-[#a1a8b7] transition-colors hover:text-white"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-[11px] text-[#a1a8b7] transition-colors hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Footer Bottom */}
      <div className="mx-auto flex min-h-[68px] max-w-[1240px] flex-col justify-center gap-2 border-t border-white/10 px-6 text-[9px] uppercase tracking-[0.08em] text-[#6f7788] sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Liaqat.dev. All rights reserved.</span>

        <span>Designed & developed with intention.</span>
      </div>
    </footer>
  );
}
