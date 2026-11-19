import Image from "next/image";
import Link from "next/link";
import equipeImg from "@/public/fotos/equipe.jpg";
import { INSTAGRAM, MAILTO_PATROCINIO } from "@/content/site";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-titulo"
      className="sky-noon relative flex min-h-dvh flex-col overflow-hidden"
    >
      <div className="enter-rise relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 sm:pt-32 lg:px-10">
        <h1 id="hero-titulo" className="display text-[clamp(5.5rem,19vw,16rem)]">
          ARES
        </h1>
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-[34ch] text-xl leading-snug text-white [text-shadow:0_1px_14px_rgb(20_33_61/0.6)] sm:text-2xl">
            Estudantes de engenharia da UnB projetando e construindo rovers de
            exploração planetária, sob o céu de Brasília.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={MAILTO_PATROCINIO} className="btn btn-ipe">
              Quero patrocinar
            </a>
            <Link href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn btn-cloud">
              Seguir a equipe
            </Link>
          </div>
        </div>
      </div>

      {/* Horizonte: o céu da foto se dissolve no céu da página */}
      {/* No desktop a foto sobe por trás do título, com o céu dela na zona de transição */}
      <div className="enter-horizon relative mt-auto h-[46vh] min-h-[280px] w-full sm:h-[50vh] lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:h-[66vh]">
        <Image
          src={equipeImg}
          alt="Integrantes da ARES reunidos ao ar livre em Brasília, segurando a bandeira da equipe"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[center_78%] [mask-image:linear-gradient(to_bottom,transparent_0%,rgb(0_0_0/0.6)_30%,black_55%)] lg:object-[center_55%] lg:origin-[85%_60%] lg:scale-[1.12] lg:[mask-image:linear-gradient(to_bottom,transparent_0%,rgb(0_0_0/0.55)_26%,black_44%)]"
        />
      </div>
    </section>
  );
}
