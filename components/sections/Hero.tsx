"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import roverImg from "@/public/fotos/rover-bancada.jpg";
import Sheet from "@/components/layout/Sheet";
import { INSTAGRAM, MAILTO_PATROCINIO, pecas, subsistemas } from "@/content/site";

const nomeDe = (sigla: string) =>
  subsistemas.find((s) => s.sigla === sigla)?.nome ?? sigla;

function Carimbo() {
  return (
    <div className="flex flex-wrap bg-purple text-white">
      <div className="flex flex-col justify-center gap-1 px-4 py-2">
        <span className="field-label text-purple-ink/80">Equipe</span>
        <span className="text-sm font-bold">ARES · Aerospace Rover Exploration System</span>
      </div>
      <div className="hidden flex-col justify-center gap-1 border-l-2 border-purple-ink/40 px-4 py-2 xl:flex">
        <span className="field-label text-purple-ink/80">Instituição</span>
        <span className="text-sm font-bold">Universidade de Brasília · FCTE</span>
      </div>
      <div className="flex flex-col justify-center gap-1 border-l-2 border-purple-ink/40 px-4 py-2">
        <span className="field-label text-purple-ink/80">Revisão</span>
        <span className="flex items-center gap-2 text-sm font-bold">
          <svg viewBox="0 0 12 11" aria-hidden="true" className="h-3 w-3">
            <path d="M6 1 11 10H1z" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
          </svg>
          Em desenvolvimento
        </span>
      </div>
    </div>
  );
}

function Vista({
  ativo,
  setAtivo,
}: {
  ativo: number | null;
  setAtivo: (n: number | null) => void;
}) {
  return (
    <div className="enter-draw relative mx-auto aspect-[3/4] w-[70%] lg:w-[72%] lg:max-w-[calc((100dvh-13rem)*0.75)]">
      <div className="view absolute inset-0">
        <Image
          src={roverImg}
          alt="Rover de seis rodas da ARES montado sobre uma bancada, com chassi de alumínio, peças impressas em 3D e mastro do sensor"
          fill
          preload
          sizes="(min-width: 1024px) 34vw, 70vw"
          className="object-cover object-[50%_75%]"
        />
      </div>

      {/* Linhas de chamada: da borda da foto até a peça (unidades da foto 3:4) */}
      <svg
        viewBox="0 0 75 100"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      >
        {pecas.map((p, i) => (
          <path
            key={`halo-${p.n}`}
            className="leader-halo"
            pathLength={1}
            style={{ "--i": i } as CSSProperties}
            d={`M${p.lado === "e" ? 0 : 75} ${p.y} L${p.alvo[0] * 0.75} ${p.alvo[1]}`}
          />
        ))}
        {pecas.map((p, i) => (
          <path
            key={p.n}
            className="leader"
            pathLength={1}
            style={{ "--i": i } as CSSProperties}
            d={`M${p.lado === "e" ? 0 : 75} ${p.y} L${p.alvo[0] * 0.75} ${p.alvo[1]}`}
          />
        ))}
        {pecas.map((p, i) => (
          <circle
            key={`dot-${p.n}`}
            className="leader-dot"
            style={{ "--i": i } as CSSProperties}
            cx={p.alvo[0] * 0.75}
            cy={p.alvo[1]}
            r={1.1}
          />
        ))}
      </svg>

      {pecas.map((p, i) => (
        <Link
          key={`b-${p.n}`}
          href={`#peca-${p.sigla.toLowerCase()}`}
          aria-label={`${p.n}: ${p.nome}, ${nomeDe(p.sigla)}`}
          data-on={ativo === p.n}
          data-lado={p.lado}
          onMouseEnter={() => setAtivo(p.n)}
          onMouseLeave={() => setAtivo(null)}
          onFocus={() => setAtivo(p.n)}
          onBlur={() => setAtivo(null)}
          className="balloon tabular-nums"
          style={{ top: `${p.y}%`, "--i": i } as CSSProperties}
        >
          {p.n}
        </Link>
      ))}
    </div>
  );
}

export default function Hero() {
  const [ativo, setAtivo] = useState<number | null>(null);

  return (
    <Sheet id="hero" folha={1} titulo="Vista geral" carimbo={<Carimbo />}>
      <div className="grid lg:min-h-[calc(100dvh-3.5rem-2rem-3.25rem)] lg:grid-cols-12 lg:grid-rows-[1fr_auto]">
        <div className="enter-rise p-6 sm:p-10 lg:col-span-6 lg:p-12 lg:pb-6">
          <h1 id="hero-titulo" className="lettering">
            <span className="block text-[clamp(5rem,13vw,11rem)]">ARES</span>
            <span className="mt-2 block text-[clamp(1.75rem,4vw,3.5rem)]">
              Rovers <span className="normal-case">UnB</span>
            </span>
          </h1>
          <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-ink-soft">
            Estudantes de engenharia da UnB projetando, simulando e construindo
            rovers de exploração planetária. O primeiro já está na bancada.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={MAILTO_PATROCINIO} className="btn btn-action">
              Quero patrocinar
            </a>
            <Link href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn btn-line">
              Seguir a equipe
            </Link>
          </div>
        </div>

        {/* Vista do rover com balões: logo após as ações no celular */}
        <div className="flex items-center border-t-2 border-ink px-4 py-8 sm:p-8 lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:border-l-2 lg:border-t-0">
          <Vista ativo={ativo} setAtivo={setAtivo} />
        </div>

        <div className="border-t-2 border-ink p-6 sm:p-10 lg:col-span-6 lg:row-start-2 lg:border-t-0 lg:p-12 lg:pt-0">
          <h2 className="field-label text-ink-soft">Lista de peças · vista 1</h2>
          <ul className="mt-3 border-t-2 border-ink">
            {pecas.map((p) => (
              <li key={p.n}>
                <Link
                  href={`#peca-${p.sigla.toLowerCase()}`}
                  data-on={ativo === p.n}
                  onMouseEnter={() => setAtivo(p.n)}
                  onMouseLeave={() => setAtivo(null)}
                  onFocus={() => setAtivo(p.n)}
                  onBlur={() => setAtivo(null)}
                  className="legend-row grid min-h-11 grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-line px-1 text-sm transition-colors"
                >
                  <span className="font-bold tabular-nums">{p.n}</span>
                  <span className="font-semibold">{p.nome}</span>
                  <span className="text-ink-soft">{nomeDe(p.sigla)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Sheet>
  );
}
