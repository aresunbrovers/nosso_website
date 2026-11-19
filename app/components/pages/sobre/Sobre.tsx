import Image from "next/image";
import exposicaoImg from "@/public/fotos/rover-exposicao.jpg";

const fatos = [
  { campo: "Áreas", valor: "7", nota: "cinco de engenharia, duas de gestão" },
  { campo: "Membros", valor: "30+", nota: "estudantes de várias engenharias" },
  { campo: "Faculdade", valor: "FCTE", nota: "UnB, campus Gama" },
];

export default function Sobre() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-7">
          <h2 id="sobre-titulo" className="headline text-[clamp(2.25rem,5vw,4rem)]">
            Uma equipe de competição da UnB
          </h2>
          <div className="mt-8 max-w-[60ch] space-y-4 text-lg leading-relaxed text-night-soft">
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

          <dl className="mt-12 grid gap-6 border-t border-rule pt-8 sm:grid-cols-3">
            {fatos.map((f) => (
              <div key={f.campo}>
                <dt className="text-sm font-semibold text-night-soft">{f.campo}</dt>
                <dd className="mt-1">
                  <span className="headline block text-2xl">{f.valor}</span>
                  <span className="mt-1 block text-sm text-night-soft">{f.nota}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="photo aspect-[4/5]">
            <Image
              src={exposicaoImg}
              alt="Rover da ARES exposto numa mesa com a toalha da equipe, com o sensor no alto do mastro"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover object-[50%_95%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
