"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logoImg from "@/public/Logo_ARES.png";

const navLinks = [
  { href: "#hero", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Rover" },
  { href: "#equipe", label: "Equipe" },
  { href: "#patrocinadores", label: "Patrocínio" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-paper">
      <nav className="flex h-14 items-stretch">
        <Link
          href="#hero"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3 border-r-2 border-ink px-4"
        >
          <Image
            src={logoImg}
            alt=""
            width={40}
            height={40}
            preload
            className="h-10 w-10 mix-blend-multiply"
          />
          <span className="lettering text-lg">ARES</span>
          <span className="sr-only">Rovers UnB, voltar ao início</span>
        </Link>

        <ul className="hidden flex-1 items-stretch lg:flex">
          {navLinks.map((link, i) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href} className="flex border-r border-line">
                <Link
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`flex items-center gap-2 px-5 text-sm font-semibold transition-colors hover:bg-paper-deep ${
                    isActive ? "bg-paper-deep shadow-[inset_0_-3px_0_var(--ink)]" : ""
                  }`}
                >
                  <span className="tabular-nums text-ink-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="ml-auto hidden items-center border-l-2 border-ink px-3 lg:flex">
          <Link href="#patrocinadores" className="btn btn-action min-h-10 py-2 text-sm">
            Patrocinar
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen((v) => !v)}
          className="ml-auto flex w-14 items-center justify-center border-l-2 border-ink lg:hidden"
        >
          <span className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-6 bg-ink transition-transform duration-300 ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-0.5 w-6 bg-ink transition-transform duration-300 ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="menu-mobile"
        inert={!menuOpen}
        className={`fixed inset-x-0 bottom-0 top-14 bg-paper transition-opacity duration-200 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col border-b-2 border-ink">
          {navLinks.map((link, i) => (
            <li key={link.href} className="border-t border-line first:border-t-0">
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-14 items-center gap-4 px-6 text-lg font-semibold"
              >
                <span className="tabular-nums text-ink-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="p-6">
          <Link
            href="#patrocinadores"
            onClick={() => setMenuOpen(false)}
            className="btn btn-action w-full"
          >
            Patrocinar
          </Link>
        </div>
      </div>
    </header>
  );
}
