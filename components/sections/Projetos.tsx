import Image from "next/image";
import chassiImg from "@/public/fotos/chassi-bancada.jpg";
import emUsoImg from "@/public/fotos/rover-em-uso.jpg";
import Sheet from "@/components/layout/Sheet";
import { subsistemas } from "@/content/site";

export default function Projetos() {
  return (
    <Sheet
      id="projetos"
      folha={3}
      titulo="Lista de peças"
      carimbo={
        <div className="flex flex-col justify-center gap-1 px-4 py-2">
          <span className="field-label text-ink-soft">Revisão</span>
          <span className="flex items-center gap-2 text-sm font-bold">
            <svg viewBox="0 0 12 11" aria-hidden="true" className="h-3 w-3">
              <path d="M6 1 11 10H1z" fill="var(--gold-soft)" stroke="var(--ink)" strokeWidth="1.2" />
            </svg>
            Em desenvolvimento
          </span>
        </div>
      }
    >
      <div className="grid lg:grid-cols-12">
        <div className="p-6 sm:p-10 lg:col-span-6 lg:p-12">
          <h2 id="projetos-titulo" className="lettering text-[clamp(2.25rem,5vw,4.25rem)]">
            Nosso primeiro rover
          </h2>
          <p className="mt-8 max-w-[56ch] text-lg leading-relaxed text-ink-soft">
            Estamos construindo nosso primeiro rover para competições nacionais
            e internacionais. Um veículo robótico capaz de operar em terrenos
            análogos a superfícies extraterrestres, integrando cinco subsistemas
            de engenharia.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t-2 border-ink p-4 sm:gap-6 sm:p-8 lg:col-span-6 lg:border-l-2 lg:border-t-0">
          <div className="view aspect-[3/4]">
            <Image
              src={chassiImg}
              alt="Chassi do rover ainda sem rodas sobre a bancada, com perfis de alumínio e juntas impressas em 3D"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover object-[50%_55%]"
            />
          </div>
          <div className="view aspect-[3/4]">
            <Image
              src={emUsoImg}
              alt="Integrante da equipe conduzindo o rover de seis rodas pelo chão do laboratório"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover object-[50%_45%]"
            />
          </div>
        </div>
      </div>

      {/* Lista de peças: um subsistema por linha */}
      <div className="border-t-2 border-ink">
        <div
          aria-hidden="true"
          className="hidden grid-cols-[4rem_5rem_16rem_1fr] border-b-2 border-ink bg-paper-deep md:grid"
        >
          {["Item", "Sigla", "Subsistema", "Função"].map((c) => (
            <span key={c} className="field-label border-ink px-4 py-3 not-first:border-l">
              {c}
            </span>
          ))}
        </div>
        <ol>
          {subsistemas.map((s, i) => (
            <li
              key={s.sigla}
              id={`peca-${s.sigla.toLowerCase()}`}
              className="grid scroll-mt-20 grid-cols-[3rem_1fr] border-ink transition-colors not-last:border-b target:bg-gold-soft md:grid-cols-[4rem_5rem_16rem_1fr]"
            >
              <span className="row-span-3 px-4 py-4 font-bold tabular-nums md:row-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="px-4 pt-4 text-sm font-bold md:border-l md:border-ink md:py-4">
                {s.sigla}
              </span>
              <h3 className="flex items-center gap-2 px-4 pt-1 text-base font-bold md:border-l md:border-ink md:py-4">
                {s.nome}
                {s.provisorio && (
                  <span title="Revisão pendente" className="inline-flex items-center gap-1.5">
                    <svg viewBox="0 0 12 11" aria-hidden="true" className="h-3 w-3 shrink-0">
                      <path d="M6 1 11 10H1z" fill="var(--gold-soft)" stroke="var(--ink)" strokeWidth="1.2" />
                    </svg>
                    <span className="field-label text-ink-soft">Rev. pendente</span>
                  </span>
                )}
              </h3>
              <p className="px-4 pb-4 pt-1 text-[0.9375rem] leading-relaxed text-ink-soft md:border-l md:border-ink md:py-4">
                {s.descricao}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Sheet>
  );
}
