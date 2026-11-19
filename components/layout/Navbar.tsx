"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logoImg from "@/public/brand/Logo_dourada_roxa_dark.png";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Rover" },
  { href: "#equipe", label: "Equipe" },
  { href: "#patrocinadores", label: "Patrocínio" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-sky-afternoon/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6 text-white lg:px-10">
        <Link
          href="#hero"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <Image src={logoImg} alt="" width={40} height={40} preload className="h-10 w-10" />
          <span className="font-display text-lg font-bold tracking-tight">ARES</span>
          <span className="sr-only">Rovers UnB, voltar ao início</span>
        </Link>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-[0.9375rem] font-semibold text-white/85 transition-colors hover:bg-white/15 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="#patrocinadores" className="btn btn-ipe hidden min-h-10 py-2 lg:inline-flex">
          Patrocinar
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen((v) => !v)}
          className="ml-auto flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-6 rounded bg-white transition-transform duration-300 ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-0.5 w-6 rounded bg-white transition-transform duration-300 ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="menu-mobile"
        inert={!menuOpen}
        className={`fixed inset-x-0 bottom-0 top-16 bg-sky-afternoon px-6 pb-8 text-white transition-opacity duration-200 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col pt-4">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-white/20">
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display flex min-h-16 items-center text-2xl font-semibold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#patrocinadores"
          onClick={() => setMenuOpen(false)}
          className="btn btn-ipe mt-8 w-full"
        >
          Patrocinar
        </Link>
      </div>
    </header>
  );
}
