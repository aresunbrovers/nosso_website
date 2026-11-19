---
name: ARES Rovers UnB
description: A equipe constrói sob o céu de Brasília; o céu é o chão da página e passa do meio-dia ao entardecer roxo.
colors:
  sky-noon: "#4c1d95"
  sky-noon-deep: "#3f1782"
  sky-afternoon: "#3a1478"
  sky-dusk: "#2a0f5c"
  sky-dusk-deep: "#170838"
  concrete: "#f1f2ef"
  concrete-deep: "#e3e5e0"
  night: "#14213d"
  night-soft: "#45506a"
  rule: "#c9cdd3"
  ipe-yellow: "#d4a017"
  ipe-yellow-hover: "#e6b52a"
  cloud: "#ffffff"
typography:
  display:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: "clamp(5.5rem, 19vw, 16rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  display-sm:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  body-lead:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.375
  body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.43
  button:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.5
rounded:
  focus: "6px"
  photo: "2rem"
  pill: "9999px"
spacing:
  gutter: "1.5rem"
  gutter-lg: "2.5rem"
  grid-gap: "4rem"
  section: "6rem"
  section-lg: "8rem"
  container: "80rem"
components:
  button-ipe:
    backgroundColor: "{colors.ipe-yellow}"
    textColor: "{colors.night}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.75rem"
    height: "3rem"
  button-ipe-hover:
    backgroundColor: "{colors.ipe-yellow-hover}"
    textColor: "{colors.night}"
  button-cloud:
    backgroundColor: "transparent"
    textColor: "{colors.cloud}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.75rem"
    height: "3rem"
  button-cloud-hover:
    backgroundColor: "{colors.cloud}"
    textColor: "{colors.night}"
  button-night-solid:
    backgroundColor: "{colors.night}"
    textColor: "{colors.cloud}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.75rem"
    height: "3rem"
  chip-status:
    backgroundColor: "{colors.cloud}"
    textColor: "{colors.night}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem"
  photo:
    backgroundColor: "{colors.concrete-deep}"
    rounded: "{rounded.photo}"
  band-ipe:
    backgroundColor: "{colors.ipe-yellow}"
    textColor: "{colors.night}"
    rounded: "{rounded.photo}"
    padding: "3rem"
  nav-bar:
    backgroundColor: "{colors.sky-afternoon}"
    textColor: "{colors.cloud}"
    height: "4rem"
---

# Design System: ARES Rovers UnB

## Overview

**Creative North Star: "O Céu de Brasília"**

A página é o céu do Plano Piloto. Campos inteiros do roxo da equipe ocupam a página de borda a borda e se alternam com o concreto claro da cidade modernista; o dia passa ao longo da rolagem em estações fixas (meio-dia no início, tarde na equipe, entardecer roxo no contato), sem nenhuma animação ligada ao scroll. As duas cores do ipê são as duas cores do logo: o roxo é o próprio céu, do meio-dia claro ao entardecer quase noite, e o amarelo é a floração que só aparece onde há ação.

A densidade é baixa e generosa: títulos enormes em Unbounded, texto corrido em Figtree com medida curta, fotos reais da equipe e do rover em cantos largos de Niemeyer. O hero abre com "ARES" gigante sobre o céu, e a foto da equipe sobe como horizonte, com o céu da foto dissolvendo por máscara no céu da página. A página recusa o preto espacial e o branco corporativo.

**Key Characteristics:**
- O céu é superfície, não fundo decorativo: cada estação é um gradiente vertical de borda a borda.
- Concreto claro alterna com o céu; nunca dois campos de céu seguidos.
- Ipê amarelo apenas em ações e no foco.
- Curvas generosas: pílulas nos botões, 2rem nas fotos e na faixa de ipê.
- Movimento de entrada único: o horizonte sobe uma vez; hover é discreto.

## Colors

Um céu inteiro no roxo da equipe, escurecendo ao longo do dia, sobre concreto frio, com uma tinta azul-noite e um único amarelo de ação.

### Primary
- **Ipê Roxo ao Meio-Dia** (sky-noon): o roxo do logo e o primeiro campo da página (hero), gradiente de sky-noon-deep no topo para um lilás mais claro (#6a3fb0) no horizonte. Também a cor do caret, do accent-color e do ponto do chip de status.
- **Ipê Roxo Profundo** (sky-noon-deep): topo do gradiente do meio-dia e polegar da barra de rolagem.
- **Ipê Roxo à Tarde** (sky-afternoon): a seção da equipe, a barra de navegação quando sólida (95% de opacidade com desfoque) e o menu mobile; o gradiente desce para #2c105f.
- **Entardecer Roxo** (sky-dusk / sky-dusk-deep): o último campo da página (contato e rodapé), descendo até quase noite (sky-dusk-deep).

O roxo aparece sempre como céu: nunca como cor de texto, botão ou divisória.

### Tertiary
- **Ipê Amarelo** (ipe-yellow; hover ipe-yellow-hover): botões de ação principais ("Quero patrocinar", "Patrocinar"), a faixa "Seja o primeiro", o anel de foco e a seleção de texto. É o dourado da marca.

### Neutral
- **Concreto** (concrete): fundo do corpo e das seções claras (Sobre, Patrocínio).
- **Concreto Sombreado** (concrete-deep): a seção do rover e o preenchimento das fotos enquanto carregam.
- **Azul-Noite** (night): toda a tinta sobre concreto e sobre ipê; preenchimento do botão dentro da faixa de ipê.
- **Noite Diluída** (night-soft): texto corrido secundário, rótulos e siglas sobre concreto.
- **Fio** (rule): divisórias finas de 1px entre listas sobre concreto; sobre concreto-deep usa-se night a 20%, e sobre céu, branco a 20–25%.
- **Nuvem** (cloud): toda a tinta sobre céu; texto corrido sobre céu fica em branco a 85%, rótulos a 70%, rodapé a 60%.

### Named Rules
**A Regra da Floração.** Ipê amarelo só marca ação ou foco: botão principal, a faixa de convite ao patrocínio, `:focus-visible` e `::selection`. Nunca em títulos, ícones, divisórias ou fundos de seção.

**A Regra das Estações.** O céu muda em estações fixas, do roxo mais claro ao mais escuro, na ordem meio-dia, tarde, entardecer, separadas por campos de concreto. Uma nova seção escolhe uma estação já existente na posição certa do dia; nunca uma animação de cor ligada ao scroll.

## Typography

**Display Font:** Unbounded (com system-ui, sans-serif), via next/font, variável `--font-display`
**Body Font:** Figtree (com system-ui, sans-serif), via next/font, variável `--font-body`

**Character:** Unbounded é larga e geométrica, com a mesma curva cheia das pílulas e do concreto de Niemeyer; Figtree é uma sans humanista e clara que deixa o texto leve sob títulos pesados.

### Hierarchy
- **Display** (700, clamp(5.5rem, 19vw, 16rem), 0.95, -0.03em): apenas "ARES" no hero, em branco sobre o céu.
- **Display pequeno** (700, clamp(3rem, 8vw, 6rem), 0.95): o título de fechamento no entardecer ("Fale com a equipe").
- **Headline** (600, clamp(2.25rem, 5vw, 4rem), 1.05, -0.025em): títulos de seção. A mesma classe em 1.75–2.75rem na faixa de ipê e em 1.5rem nos números de fatos.
- **Title** (600, 1.125–1.25rem, Unbounded): nomes de áreas e benefícios em listas.
- **Body lead** (400, 1.25–1.5rem, leading-snug): a linha de função do hero e o parágrafo do contato; máx. 34–48ch.
- **Body** (400, 1.125rem, 1.625): texto corrido, máx. 52–60ch.
- **Label** (600, 0.875rem, sem caixa alta): rótulos de fatos, siglas, chip de status.

### Named Rules
**A Regra do Título Equilibrado.** h1–h3 usam `text-wrap: balance`, parágrafos `text-wrap: pretty`. Títulos sempre em Unbounded; Unbounded nunca em texto corrido.

**A Regra da Caixa Natural.** Rótulos ficam em caixa normal, peso 600, sem tracking aberto; não há sobrancelhas nem kickers acima dos títulos.

## Layout

Contêiner central de 80rem (`max-w-7xl`) com respiro lateral de 1.5rem no mobile e 2.5rem a partir de 1024px. As seções têm 6rem de respiro vertical (8rem a partir de 640px). Em desktop o conteúdo usa uma grade de 12 colunas com espaço de 4rem: texto em 7 colunas e foto em 5 (ou 5/7 na seção do rover, e a equipe inverte a ordem com a foto à esquerda). No mobile tudo empilha em uma coluna com 3.5rem entre blocos.

O hero ocupa `100dvh`: título e ações no terço superior, a foto da equipe como horizonte no pé (46–50vh no mobile em fluxo; 66vh e absoluta atrás do texto a partir de 1024px). Âncoras de seção compensam a barra fixa com `scroll-margin-top: 4rem`.

## Elevation & Depth

O sistema é chapado: a profundidade vem dos campos de cor e dos gradientes verticais de céu, não de sombras. A única sombra é a do botão de ipê, uma sombra azul-noite difusa e deslocada para baixo, que sugere a floração pousada sobre o céu. A barra de navegação ganha `backdrop-filter: blur` quando sólida. O texto do hero leva uma sombra suave azul-noite (`0 1px 14px rgb(20 33 61 / 0.6)`) para manter a leitura sobre o céu da foto.

### Shadow Vocabulary
- **Floração** (`0 8px 20px -10px rgb(20 33 61 / 0.55)`; hover `0 12px 26px -12px rgb(20 33 61 / 0.6)`): apenas no botão de ipê.

### Named Rules
**A Regra do Céu Chapado.** Cartões, fotos e faixas não têm sombra. Se algo precisa se destacar, muda de campo de cor.

## Shapes

Curvas de Niemeyer: tudo que é clicável é pílula completa (9999px); fotos e a faixa de ipê têm cantos largos de 2rem; o anel de foco arredonda em 6px. Divisórias são fios retos de 1px que organizam listas (fatos, áreas, benefícios, canais). O horizonte do hero não tem borda: a foto se dissolve no céu por uma máscara de gradiente (transparente no topo, opaca a partir de ~44–55%).

## Components

### Buttons
Pílulas firmes e quentes, sempre em Figtree 700.
- **Shape:** pílula completa (9999px), altura mínima 3rem, padding 0.8rem 1.75rem; na barra de navegação, altura 2.5rem.
- **Ipê (principal):** ipe-yellow com tinta night e a sombra Floração. Hover clareia para ipe-yellow-hover, sobe 2px e alonga a sombra. É o único botão de patrocínio.
- **Nuvem (secundário sobre céu):** contorno branco a 70% de 1.5px, texto branco; hover preenche de branco com tinta night.
- **Noite sólido:** dentro da faixa de ipê, onde o amarelo já é o fundo, o botão vira night com texto branco.
- **Estados:** hover sobe 2px (220ms, ease-out-expo); active volta e encolhe para 0.98 em 80ms; foco é o anel de ipê de 3px com 3px de afastamento.

### Chips
- **Status:** pílula branca, label 600 0.875rem, com ponto de 8px em sky-noon ("Em desenvolvimento"). Informativo, não clicável.

### Cards / Containers
- **Foto:** cantos de 2rem, `overflow: hidden`, preenchimento concrete-deep (branco a 10% sobre céu); a imagem dá zoom de 1.025 em 800ms no hover. Proporções verticais (4/5, 3/4, 1/2) ou 4/3. Quando a foto real traz ruído ao redor do assunto, o enquadramento é feito com `object-position` mais `scale`/`transform-origin` na própria imagem (ex.: o chassi na foto de patrocínio, a placa do campus cortada do horizonte), nunca trocando por foto de banco.
- **Faixa de ipê ("Seja o primeiro"):** bloco ipe-yellow, cantos de 2rem, padding 2rem (3rem a partir de 640px), headline + parágrafo à esquerda e botão noite sólido à direita. É o único bloco amarelo da página.
- **Listas com fio:** fatos, áreas e benefícios não viram cartões; são linhas separadas por fios de 1px.

### Navigation
- **Barra:** fixa, 4rem de altura, transparente sobre o hero e sky-afternoon a 95% com desfoque depois de 24px de rolagem. Logo + "ARES" em Unbounded 700 à esquerda; links em pílula (Figtree 600, 0.9375rem, branco a 85%, hover fundo branco a 15%); botão de ipê "Patrocinar" à direita.
- **Mobile:** botão de duas barras que viram X; painel em tela cheia sky-afternoon com links em Unbounded 600 1.5rem separados por fios brancos a 20% e o botão de ipê em largura total.

### Link desenhado
Links de texto (e-mail, canais) recebem um sublinhado de 2px que se desenha da esquerda para a direita em 320ms no hover e no foco.

### Horizonte do hero
A foto real da equipe ocupa o pé do hero e sobe uma vez na entrada (48px, 1100ms, ease-out-expo, 120ms de atraso); o céu da foto se funde ao céu da página por máscara. O bloco de texto acima entra em cascata (16px, 800ms, atrasos de 0/90/180ms).

## Do's and Don'ts

### Do:
- **Do** alternar campos de céu (gradientes `.sky-noon`, `.sky-afternoon`, `.sky-dusk`) com concreto, na ordem do dia.
- **Do** usar ipê amarelo só no botão principal, na faixa de convite, no foco e na seleção.
- **Do** escrever sobre céu em branco (texto corrido a 85%) e sobre concreto em night / night-soft.
- **Do** dar a toda foto real cantos de 2rem e a todo controle a forma de pílula.
- **Do** manter a entrada única do horizonte e respeitar `prefers-reduced-motion`, que zera animações e o deslocamento de hover.

### Don't:
- **Don't** usar fundo preto espacial nem página corporativa toda branca.
- **Don't** usar ipê amarelo em títulos, ícones, divisórias ou fundos de seção além da faixa de convite.
- **Don't** colocar sombras em fotos, cartões ou faixas; a sombra Floração é só do botão de ipê.
- **Don't** ligar a cor do céu ou qualquer animação à posição do scroll.
- **Don't** apresentar a foto de banco do rover como o rover da ARES; só fotos reais da equipe e do rover.
