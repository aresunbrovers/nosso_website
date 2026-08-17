import Image from "next/image";
import Link from "next/link";
// TODO: trocar pelo arquivo IMG_2637.jpg (ainda não adicionado em public/).
// Placeholder temporário usando a foto da equipe.
import equipeCampoImg from "@/public/equipe.jpg";

export default function Equipe() {
  return (
    <section
      id="equipe"
      className="relative flex min-h-dvh w-full items-center overflow-hidden bg-[#4c1d95] py-24 text-white"
    >
      <Image
        src={equipeCampoImg}
        alt="Equipe Ares em campo, com todos os membros"
        fill
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      {/* Escurece a foto para não ofuscar o texto */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(212,160,23,0.18),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-center px-6 lg:px-10">
        <div className="max-w-xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
            Equipe
          </span>
          <h2
            className="mt-4 text-4xl uppercase leading-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-russo-one)" }}
          >
            A força por trás do <span className="text-[#D4A017]">Rover</span>
          </h2>
          <p className="mt-6 text-base text-white/85 sm:text-lg">
            Estudantes de diversas engenharias trabalhando em conjunto:
            aeroespacial, automotiva, eletrônica, software, mecatrônica. Além de
            alunos de áreas como Administração para contribuir com a gestão do
            projeto. Uma equipe que projeta, prototipa e explora!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="https://www.instagram.com/ares.unb/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#D4A017] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#F5C842]"
            >
              Siga-nos no Instagram
            </Link>
            <Link
              href="https://www.linkedin.com/company/aresunb/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Nosso LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
