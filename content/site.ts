export const EMAIL = "ares.unb.rovers@gmail.com";
export const MAILTO_PATROCINIO = `mailto:${EMAIL}?subject=${encodeURIComponent("Patrocínio ARES")}`;
export const INSTAGRAM = "https://www.instagram.com/ares.unb/";
export const LINKEDIN = "https://www.linkedin.com/company/aresunb/";

export type Subsistema = {
  sigla: string;
  nome: string;
  descricao: string;
  // descrição ainda a confirmar com a equipe
  provisorio?: boolean;
};

export const subsistemas: Subsistema[] = [
  {
    sigla: "CC",
    nome: "Controle e Comunicação",
    descricao:
      "Implementar sistemas para o controle do rover e recepção de dados coletados a distância por meio de: Antenas, Bus Servos, Sensores, Co-processadores, e controle remoto por ROS.",
  },
  {
    sigla: "DIN",
    nome: "Dinâmica",
    descricao:
      "Projetar soluções para a locomoção do rover, desenvolvendo design, posições estratégicas, e manobrabilidade do veículo.",
  },
  {
    sigla: "ELE",
    nome: "Elétrica",
    descricao:
      "Circuitos embarcados, sensores e atuadores que controlam os sistemas do rover em tempo real.",
  },
  {
    sigla: "STR",
    nome: "Estruturas",
    descricao:
      "Chassi e sistemas mecânicos projetados para terrenos irregulares análogos a superfícies planetárias.",
  },
  {
    sigla: "BR",
    nome: "Braço Robótico",
    descricao: "Projetar e construir o braço robótico do rover.",
    provisorio: true,
  },
  {
    sigla: "FIN",
    nome: "Financeiro",
    descricao:
      "Gerenciar o orçamento do projeto, captação de recursos e parcerias, além de organizar o projeto para cumprir com a documentação das competições.",
  },
  {
    sigla: "RP",
    nome: "Relações Públicas",
    descricao:
      "Coordenação de equipe, parcerias, documentação e planejamento de competições, além de divulgação do projeto e captação de recursos.",
  },
];

// Peças apontadas na foto do rover (rover-bancada.jpg, recortada em 3:4: y 300–1500 px
// do original 900x1600). alvo: ponto na peça em % da foto; lado: margem do balão
// (e = esquerda, d = direita); y: altura do balão em % da foto.
export const pecas = [
  { n: 1, nome: "Mastro do sensor", sigla: "CC", alvo: [52.5, 14.5], lado: "d", y: 9 },
  { n: 2, nome: "Junta da suspensão", sigla: "DIN", alvo: [22.5, 38], lado: "e", y: 24 },
  { n: 3, nome: "Rodas", sigla: "DIN", alvo: [15, 62], lado: "e", y: 78 },
  { n: 4, nome: "Chassi", sigla: "STR", alvo: [71.5, 45], lado: "d", y: 58 },
] as const;
