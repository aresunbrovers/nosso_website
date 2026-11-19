import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/brand/Logo_dourada_roxa_dark.png";
import { EMAIL, INSTAGRAM, LINKEDIN, MAILTO_PATROCINIO } from "@/content/site";

const canais = [
  { campo: "Instagram", valor: "@ares.unb", href: INSTAGRAM },
  { campo: "LinkedIn", valor: "ARES UnB", href: LINKEDIN },
];

export default function Contato() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="sky-dusk pb-10 pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 id="contato-titulo" className="display text-[clamp(3rem,8vw,6rem)]">
              Fale com a equipe
            </h2>
            <p className="mt-8 max-w-[48ch] text-xl leading-relaxed text-white/85">
              Parcerias, patrocínio e colaboração com a equipe oficial de Rovers
              da UnB.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="link-draw mt-12 inline-block break-all text-[clamp(1.25rem,3vw,2.25rem)] font-bold"
            >
              {EMAIL}
            </a>
            <div className="mt-10">
              <a href={MAILTO_PATROCINIO} className="btn btn-ipe">
                Quero patrocinar
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end gap-8 lg:col-span-4">
            <Image src={logoImg} alt="" width={160} height={160} className="h-28 w-28" />
            <dl className="border-t border-white/25">
              {canais.map((c) => (
                <div key={c.campo} className="border-b border-white/25">
                  <dt className="sr-only">{c.campo}</dt>
                  <dd>
                    <Link
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-12 items-center justify-between gap-4"
                    >
                      <span className="text-sm text-white/70">{c.campo}</span>
                      <span className="link-draw font-semibold">{c.valor}</span>
                    </Link>
                  </dd>
                </div>
              ))}
              <div className="flex min-h-12 items-center justify-between gap-4 border-b border-white/25">
                <dt className="text-sm text-white/70">Local</dt>
                <dd className="font-semibold">Gama, Brasília – DF</dd>
              </div>
            </dl>
          </div>
        </div>

        <p className="mt-24 text-sm text-white/60">
          © {new Date().getFullYear()} ARES Rovers · Universidade de Brasília
        </p>
      </div>
    </section>
  );
}
