import Image from "next/image";
import oficinaImg from "@/public/fotos/chassi-oficina.jpg";
import Sheet from "@/components/layout/Sheet";
import { MAILTO_PATROCINIO } from "@/content/site";

const beneficios = [
  {
    titulo: "Visibilidade em competições",
    descricao:
      "Sua marca presente nas competições de rovers que a equipe disputar.",
  },
  {
    titulo: "Associação acadêmica",
    descricao:
      "Parceria com a Universidade de Brasília e o Departamento de Engenharia Aeroespacial.",
  },
  {
    titulo: "Fomento à indústria aeroespacial nacional",
    descricao:
      "Apoio direto ao desenvolvimento de tecnologia espacial brasileira.",
  },
];

export default function Patrocinadores() {
  return (
    <Sheet id="patrocinadores" folha={5} titulo="Patrocínio">
      <div className="grid lg:grid-cols-12">
        <div className="p-6 sm:p-10 lg:col-span-7 lg:p-12">
          <h2 id="patrocinadores-titulo" className="lettering text-[clamp(2.25rem,5vw,4.25rem)]">
            Patrocine o primeiro rover da ARES
          </h2>
          <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-ink-soft">
            Apoiar a ARES é investir na nova geração de engenheiros do Brasil e
            na indústria aeroespacial nacional — e marcar presença em
            competições nacionais e internacionais.
          </p>

          <ul className="mt-10 border-t-2 border-ink">
            {beneficios.map((b) => (
              <li key={b.titulo} className="border-b border-line py-5">
                <h3 className="text-lg font-bold leading-snug">{b.titulo}</h3>
                <p className="mt-1 text-base leading-relaxed text-ink-soft">
                  {b.descricao}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-2 border-ink">
            <div className="flex flex-col gap-5 bg-gold-soft p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[40ch] text-base font-semibold leading-snug">
                Ainda não temos patrocinadores confirmados. Sua empresa pode ser
                a primeira a apoiar a ARES.
              </p>
              <a href={MAILTO_PATROCINIO} className="btn btn-action shrink-0">
                Quero patrocinar
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-ink p-4 sm:p-8 lg:col-span-5 lg:border-l-2 lg:border-t-0">
          <div className="view aspect-[4/3] w-full">
            <Image
              src={oficinaImg}
              alt="Chassi do rover sobre uma bancada na oficina, ao lado de uma furadeira de coluna"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover object-[50%_50%]"
            />
          </div>
        </div>
      </div>
    </Sheet>
  );
}
