import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/Logo_dourada_roxa_dark.png";
import Sheet from "../../Sheet";
import { EMAIL, INSTAGRAM, LINKEDIN, MAILTO_PATROCINIO } from "../../dados";

const canais = [
  { campo: "Instagram", valor: "@ares.unb", href: INSTAGRAM },
  { campo: "LinkedIn", valor: "ARES UnB", href: LINKEDIN },
];

export default function Contato() {
  return (
    <Sheet id="contato" folha={6} titulo="Contato">
      <div className="grid lg:grid-cols-12">
        <div className="flex flex-col justify-between gap-10 p-6 sm:p-10 lg:col-span-5 lg:p-12">
          <div>
            <h2 id="contato-titulo" className="lettering text-[clamp(2.5rem,6vw,5rem)]">
              Fale com a equipe
            </h2>
            <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-ink-soft">
              Parcerias, patrocínio e colaboração com a equipe oficial de Rovers
              da UnB.
            </p>
          </div>
          <p className="field-label text-ink-soft">
            © {new Date().getFullYear()} ARES Rovers · Universidade de Brasília
          </p>
        </div>

        {/* Carimbo grande: o bloco de título vira a superfície de contato */}
        <div className="flex items-end border-t-2 border-ink p-4 sm:p-8 lg:col-span-7 lg:border-l-2 lg:border-t-0">
          <div className="w-full border-2 border-ink bg-purple text-white">
            <div className="flex items-center gap-5 border-b-2 border-purple-ink/40 p-5 sm:p-6">
              <Image src={logoImg} alt="" width={96} height={96} className="h-16 w-16 shrink-0 sm:h-20 sm:w-20" />
              <div>
                <span className="field-label text-purple-ink/80">Equipe</span>
                <p className="mt-1 text-base font-bold sm:text-lg">
                  ARES · Aerospace Rover Exploration System
                </p>
              </div>
            </div>

            <div className="border-b-2 border-purple-ink/40 p-5 sm:p-6">
              <span className="field-label block text-purple-ink/80">E-mail</span>
              <a
                href={`mailto:${EMAIL}`}
                className="link-draw mt-2 inline-block break-all text-[clamp(1.125rem,2.4vw,1.875rem)] font-bold"
              >
                {EMAIL}
              </a>
            </div>

            <dl className="grid sm:grid-cols-3">
              {canais.map((c) => (
                <div
                  key={c.campo}
                  className="border-b-2 border-purple-ink/40 sm:border-b-0 sm:not-first:border-l-2"
                >
                  <dt className="field-label px-5 pt-4 text-purple-ink/80 sm:px-6">{c.campo}</dt>
                  <dd>
                    <Link
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-11 items-center px-5 pb-3 font-semibold sm:px-6"
                    >
                      <span className="link-draw">{c.valor}</span>
                    </Link>
                  </dd>
                </div>
              ))}
              <div className="border-b-2 border-purple-ink/40 sm:border-b-0 sm:border-l-2">
                <dt className="field-label px-5 pt-4 text-purple-ink/80 sm:px-6">Local</dt>
                <dd className="flex min-h-11 items-center px-5 pb-3 font-semibold sm:px-6">
                  Gama, Brasília – DF
                </dd>
              </div>
            </dl>

            <div className="border-purple-ink/40 bg-white/5 p-5 sm:border-t-2 sm:p-6">
              <a href={MAILTO_PATROCINIO} className="btn btn-action w-full sm:w-auto">
                Quero patrocinar
              </a>
            </div>
          </div>
        </div>
      </div>
    </Sheet>
  );
}
