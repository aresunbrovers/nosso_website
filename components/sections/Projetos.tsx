import Image from "next/image";
import roverImg from "@/public/fotos/rover-bancada.jpg";
import chassiImg from "@/public/fotos/chassi-bancada.jpg";
import { subsistemas } from "@/content/site";

export default function Projetos() {
  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="bg-concrete-deep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="projetos-titulo" className="headline text-[clamp(2.25rem,5vw,4rem)]">
              Nosso primeiro rover
            </h2>
            <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-night-soft">
              Estamos construindo nosso primeiro rover para competições nacionais
              e internacionais. Um veículo robótico capaz de operar em terrenos
              análogos a superfícies extraterrestres, integrando cinco subsistemas
              de engenharia.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-sky-noon" aria-hidden="true" />
              Em desenvolvimento
            </p>
          </div>

          <div className="grid grid-cols-5 gap-4 lg:col-span-7">
            <div className="photo col-span-3 aspect-[3/4]">
              <Image
                src={roverImg}
                alt="Rover de seis rodas da ARES montado sobre uma bancada, com chassi de alumínio e peças impressas em 3D"
                fill
                sizes="(min-width: 1024px) 30vw, 60vw"
                className="object-cover object-[50%_70%]"
              />
            </div>
            <div className="photo col-span-2 aspect-[1/2]">
              <Image
                src={chassiImg}
                alt="Chassi do rover ainda sem rodas sobre a bancada"
                fill
                sizes="(min-width: 1024px) 20vw, 40vw"
                className="object-cover object-[50%_55%]"
              />
            </div>
          </div>
        </div>

        <ol className="mt-20 grid gap-x-12 border-t border-night/20 sm:grid-cols-2 lg:grid-cols-3">
          {subsistemas.map((s) => (
            <li
              key={s.sigla}
              id={`peca-${s.sigla.toLowerCase()}`}
              className="scroll-mt-24 border-b border-night/20 py-7"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="headline text-xl">{s.nome}</h3>
                <span className="text-sm font-bold text-night-soft">{s.sigla}</span>
              </div>
              <p className="mt-3 text-base leading-relaxed text-night-soft">
                {s.descricao}
              </p>
              {s.provisorio && (
                <p className="mt-2 text-sm font-semibold text-night-soft">
                  Sigla e descrição a confirmar
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
