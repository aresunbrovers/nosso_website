import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import Projetos from "@/components/sections/Projetos";
import Equipe from "@/components/sections/Equipe";
import Patrocinadores from "@/components/sections/Patrocinadores";
import Contato from "@/components/sections/Contato";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Sobre />
      <Projetos />
      <Equipe />
      <Patrocinadores />
      <Contato />
    </main>
  );
}
