import Image from "next/image";
import Link from "next/link";
import emUsoImg from "@/public/fotos/rover-em-uso.jpg";
import { INSTAGRAM, LINKEDIN } from "@/content/site";

export default function Equipe() {
  return (
    <section id="equipe" aria-labelledby="equipe-titulo" className="sky-afternoon py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <div className="photo aspect-[4/5] bg-white/10">
            <Image
              src={emUsoImg}
              alt="Integrante da equipe conduzindo o rover de seis rodas pelo chão do laboratório"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover object-[50%_45%]"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-7">
          <h2 id="equipe-titulo" className="headline text-[clamp(2.25rem,5vw,4rem)]">
            Quem constrói o rover
          </h2>
          <p className="mt-8 max-w-[56ch] text-lg leading-relaxed text-white/85">
            Estudantes de diversas engenharias trabalhando em conjunto:
            aeroespacial, automotiva, eletrônica, software, mecatrônica. Além de
            alunos de áreas como Administração para contribuir com a gestão do
            projeto. Uma equipe que projeta, prototipa e explora!
          </p>
          <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-white/85">
            No momento não há processo seletivo aberto. Siga a equipe para
            acompanhar o projeto.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn btn-cloud">
              Seguir no Instagram
            </Link>
            <Link href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-cloud">
              Ver no LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
