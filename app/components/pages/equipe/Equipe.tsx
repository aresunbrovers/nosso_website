import Image from "next/image";
import Link from "next/link";
import equipeImg from "@/public/equipe.jpg";
import Sheet from "../../Sheet";
import { INSTAGRAM, LINKEDIN } from "../../dados";

export default function Equipe() {
  return (
    <Sheet id="equipe" folha={4} titulo="Equipe">
      <div className="p-4 sm:p-8">
        <div className="view aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src={equipeImg}
            alt="Integrantes da ARES reunidos ao ar livre segurando a bandeira da equipe"
            fill
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
        </div>
      </div>
      <div className="grid border-t-2 border-ink lg:grid-cols-12">
        <div className="p-6 sm:p-10 lg:col-span-6 lg:p-12">
          <h2 id="equipe-titulo" className="lettering text-[clamp(2.25rem,5vw,4.25rem)]">
            Quem constrói o rover
          </h2>
        </div>
        <div className="border-t-2 border-ink p-6 sm:p-10 lg:col-span-6 lg:border-l-2 lg:border-t-0 lg:p-12">
          <p className="max-w-[60ch] text-lg leading-relaxed text-ink-soft">
            Estudantes de diversas engenharias trabalhando em conjunto:
            aeroespacial, automotiva, eletrônica, software, mecatrônica. Além de
            alunos de áreas como Administração para contribuir com a gestão do
            projeto. Uma equipe que projeta, prototipa e explora!
          </p>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-ink-soft">
            No momento não há processo seletivo aberto. Siga a equipe para
            acompanhar o projeto.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn btn-line">
              Seguir no Instagram
            </Link>
            <Link href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-line">
              Ver no LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </Sheet>
  );
}
