import Image from "next/image";
import exposicaoImg from "@/public/fotos/rover-exposicao.jpg";
import Sheet from "@/components/layout/Sheet";

const fatos = [
  { campo: "Áreas", valor: "7 · cinco de engenharia, duas de gestão" },
  { campo: "Membros", valor: "30+ estudantes" },
  { campo: "Faculdade", valor: "FCTE · UnB Gama" },
];

export default function Sobre() {
  return (
    <Sheet id="sobre" folha={2} titulo="Quem somos">
      <div className="grid lg:grid-cols-12">
        <div className="p-6 sm:p-10 lg:col-span-7 lg:p-12">
          <h2 id="sobre-titulo" className="lettering text-[clamp(2.25rem,5vw,4.25rem)]">
            Uma equipe de competição da UnB
          </h2>
          <div className="mt-8 max-w-[62ch] space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              A ARES (Aerospace Rover Exploration System) é a equipe oficial de
              Rovers da Universidade de Brasília, vinculada à Engenharia
              Aeroespacial da UnB.
            </p>
            <p>
              Projetamos, simulamos e construímos rovers de exploração de solo,
              capazes de atuar em condições convencionais e em simulações de
              exploração espacial.
            </p>
            <p>
              Nosso objetivo é competir nacional e internacionalmente e
              representar a UnB cada vez mais longe.
            </p>
          </div>

          <dl className="mt-10 max-w-xl border-2 border-ink">
            {fatos.map((f) => (
              <div
                key={f.campo}
                className="grid grid-cols-[7.5rem_1fr] border-ink not-first:border-t"
              >
                <dt className="field-label flex items-center border-r border-ink px-4 py-3 text-ink-soft">
                  {f.campo}
                </dt>
                <dd className="px-4 py-3 text-base font-semibold">{f.valor}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="border-t-2 border-ink p-4 sm:p-8 lg:col-span-5 lg:border-l-2 lg:border-t-0">
          <div className="view aspect-[4/5] w-full">
            <Image
              src={exposicaoImg}
              alt="Rover da ARES exposto numa mesa com a toalha da equipe, com o sensor no alto do mastro e o banner da equipe ao fundo"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover object-[50%_95%]"
            />
          </div>
        </div>
      </div>
    </Sheet>
  );
}
