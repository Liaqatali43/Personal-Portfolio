"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Shopify", href: "#shopify" },
    { name: "Frontend", href: "#frontend" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0B0D12]/85 backdrop-blur-xl">
      <nav
        className="container mx-auto flex h-[76px] items-center justify-between px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3 font-['Space_Grotesk'],sans-serif text-[17px] font-semibold tracking-tight text-[#F5F7FA]"
        >
          <span className="grid h-[38px] w-[38px] place-items-center border border-white/15 text-xs text-[#38BDF8]">
            &lt;L/&gt;
          </span>
          Liaqat.dev
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative py-2 text-[13px] text-[#A1A8B7] transition-colors duration-200 hover:text-[#F5F7FA]"
            >
              {link.name}

              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#38BDF8] transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <Link
          href="#contact"
          className="hidden h-[42px] items-center gap-3 bg-[#F5F7FA] px-[18px] text-[13px] font-semibold text-[#0B0D12] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#38BDF8] md:inline-flex"
        >
          Let s Talk
          <span aria-hidden="true">→</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="grid h-[42px] w-[42px] place-items-center border border-white/10 text-[#F5F7FA] transition-colors hover:border-[#38BDF8] md:hidden"
        >
          {menuOpen ? (
            <svg
              className="h-[22px] w-[22px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6 6 18" />
            </svg>
          ) : (
            <svg
              className="h-[22px] w-[22px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M4 7h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`absolute left-0 top-full w-full border-b border-white/10 bg-[#0D1016] px-6 transition-all duration-300 md:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-[15px] text-[#A1A8B7] transition-colors hover:text-[#38BDF8]"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={closeMenu}
            className="mt-5 flex h-[46px] items-center justify-center gap-3 bg-[#F5F7FA] text-sm font-semibold text-[#0B0D12] transition-colors hover:bg-[#38BDF8]"
          >
            Let s Talk
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
