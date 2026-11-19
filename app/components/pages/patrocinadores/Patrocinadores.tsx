import Image from "next/image";
import oficinaImg from "@/public/fotos/chassi-oficina.jpg";
import { MAILTO_PATROCINIO } from "../../dados";

const beneficios = [
  {
    titulo: "Visibilidade em competições",
    descricao: "Sua marca presente nas competições de rovers que a equipe disputar.",
  },
  {
    titulo: "Associação acadêmica",
    descricao:
      "Parceria com a Universidade de Brasília e o Departamento de Engenharia Aeroespacial.",
  },
  {
    titulo: "Fomento à indústria aeroespacial nacional",
    descricao: "Apoio direto ao desenvolvimento de tecnologia espacial brasileira.",
  },
];

export default function Patrocinadores() {
  return (
    <section id="patrocinadores" aria-labelledby="patrocinadores-titulo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 id="patrocinadores-titulo" className="headline text-[clamp(2.25rem,5vw,4rem)]">
              Patrocine o primeiro rover da ARES
            </h2>
            <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-night-soft">
              Apoiar a ARES é investir na nova geração de engenheiros do Brasil e
              na indústria aeroespacial nacional — e marcar presença em
              competições nacionais e internacionais.
            </p>
            <ul className="mt-12 border-t border-rule">
              {beneficios.map((b) => (
                <li key={b.titulo} className="border-b border-rule py-6">
                  <h3 className="headline text-lg">{b.titulo}</h3>
                  <p className="mt-2 text-base leading-relaxed text-night-soft">
                    {b.descricao}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="photo aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[28rem]">
              <Image
                src={oficinaImg}
                alt="Chassi do rover sobre uma bancada na oficina, ao lado de uma furadeira de coluna"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="origin-[51%_51%] scale-[1.35] object-cover object-[50%_50%] lg:scale-[1.7]"
              />
            </div>
          </div>
        </div>

        {/* Floração do ipê: a faixa amarela é a ação */}
        <div className="mt-20 flex flex-col gap-8 rounded-[2rem] bg-ipe p-8 text-night sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="headline text-[clamp(1.75rem,3.5vw,2.75rem)]">Seja o primeiro</p>
            <p className="mt-3 max-w-[44ch] text-lg leading-relaxed">
              Ainda não temos patrocinadores confirmados. Sua empresa pode ser a
              primeira a apoiar a ARES.
            </p>
          </div>
          <a href={MAILTO_PATROCINIO} className="btn shrink-0 bg-night text-white hover:bg-[#22325a]">
            Quero patrocinar
          </a>
        </div>
      </div>
    </section>
  );
}
