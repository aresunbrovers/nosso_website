---
name: ARES Rovers UnB
description: O site como jogo de folhas de um projeto técnico, com o rover real na bancada.
colors:
  paper: "#f4f5f2"
  paper-deep: "#e9ebe6"
  ink: "#15171a"
  ink-soft: "#4a4e55"
  line: "#c9ccc5"
  purple: "#4c1d95"
  purple-ink: "#ece6f7"
  gold: "#d4a017"
  gold-hover: "#e0ae24"
  gold-soft: "#f3e2a8"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(5rem, 13vw, 11rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 125"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 125"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.375
    fontVariation: "\"wdth\" 100"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    fontVariation: "\"wdth\" 100"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
    fontVariation: "\"wdth\" 112"
  button:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    letterSpacing: "0.04em"
    fontVariation: "\"wdth\" 112"
rounded:
  none: "0px"
  balloon: "9999px"
spacing:
  sheet-gutter: "8px"
  sheet-gutter-sm: "16px"
  cell: "24px"
  cell-sm: "40px"
  cell-lg: "48px"
  grid-fine: "8px"
  grid-major: "40px"
components:
  button-action:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    height: "48px"
  button-action-hover:
    backgroundColor: "{colors.gold-hover}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-line-light:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-line-light-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.purple}"
  balloon:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.balloon}"
    size: "44px"
  balloon-active:
    backgroundColor: "{colors.gold}"
  title-block:
    backgroundColor: "{colors.purple}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "8px 16px"
  nav-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "56px"
  legend-row-active:
    backgroundColor: "{colors.gold-soft}"
---

# Design System: ARES Rovers UnB

## Overview

**Creative North Star: "A Prancha na Bancada"**

O rover da ARES ainda está na bancada, então o site é o jogo de folhas do projeto: cada seção é uma prancha de desenho técnico numerada (Folha 01/06 a 06/06), com margem em traço grosso, zonas A–F e 1–8 nas bordas, etiqueta de folha no canto inferior direito e, quando cabe, o carimbo roxo da equipe. O papel é frio e milimetrado; tudo é desenhado a nanquim em dois pesos de traço; as fotos reais do rover entram como janelas de vista recortadas na folha.

A densidade é de prancha, não de landing page: blocos separados por traços de 2px que dividem a folha em células, títulos em letreiro expandido, rótulos de cota em caixa alta pequena. A cor é quase toda neutra; o dourado aparece apenas onde há uma ação ou uma marca de revisão, e o roxo apenas no carimbo e na marca. A recusa central, confirmada no contrato de direção, é o padrão da categoria: página preta espacial com brilho e cards.

O movimento é de desenho: na Folha 01 as linhas de chamada se traçam da borda da foto até a peça, o balão surge quando a linha parte e o ponto quando ela chega. Fora disso, só respostas de estado curtas.

**Key Characteristics:**
- Cada seção é uma folha (`Sheet`) com margem de 2px, zonas nas bordas e etiqueta "Folha NN/06".
- Papel frio com malha milimetrada (8px fina, 40px grossa) como fundo do `body`.
- Nanquim em dois pesos: 2px para margens e divisões de célula, 1.5px para botões, janelas e balões; 1px em `line` para linhas de tabela.
- Uma única família, Archivo, variando o eixo `wdth` (100 texto, 112 rótulos e botões, 125 letreiro).
- Cantos retos em tudo, exceto o balão de peça, que é círculo por convenção de desenho técnico.
- Fotos reais do rover e da equipe em janelas de vista com cantoneiras.

## Colors

Paleta de prancha: papel e nanquim fazem quase tudo; dourado e roxo são as duas cores da marca, cada uma com um único papel.

### Primary
- **Dourado de Ação** (`gold`): fundo do botão de ação ("Quero patrocinar", "Patrocinar"), balão ativo, triângulo de revisão no carimbo e seleção de texto. Hover do botão em **Dourado Aceso** (`gold-hover`).
- **Dourado Pálido de Revisão** (`gold-soft`): realce de estado ligado à ação ou à revisão: linha ativa da lista de peças, linha de subsistema alvo de âncora (`:target`), painel que envolve o convite de patrocínio, preenchimento do triângulo de revisão.

### Secondary
- **Roxo Carimbo** (`purple`): fundo do carimbo (bloco de título com Equipe, Instituição, Revisão) e do grande carimbo de contato; também anel de foco, `accent-color` e cursor de texto.
- **Lavanda de Carimbo** (`purple-ink`): rótulos e divisões dentro do roxo (a 80% e 40% de opacidade), borda do botão de traço claro.

### Neutral
- **Papel Frio** (`paper`): fundo da página, do nav e dos balões; cantoneiras das janelas de vista.
- **Papel Fundo** (`paper-deep`): fundo de janela de vista enquanto a foto carrega, item de nav ativo e hover.
- **Nanquim** (`ink`): todo texto principal, todas as margens e traços, linhas de chamada.
- **Nanquim Diluído** (`ink-soft`): parágrafos de apoio, rótulos de cota, zonas da margem, numeração do nav.
- **Grafite** (`line`): linhas finas de tabela e listas, divisões do nav, barra de rolagem.

### Named Rules
**The Gold Is Action Rule.** O dourado só marca o que se clica para agir (patrocinar) ou o que está em revisão. Nunca como decoração, faixa de seção, título ou ícone solto.

**The Purple Is Stamp Rule.** O roxo só aparece no carimbo, no bloco de contato que é um carimbo ampliado e nos sinais do sistema (foco, caret). Nunca como fundo de seção inteira ou cor de texto corrido.

## Typography

**Display Font:** Archivo (com system-ui, sans-serif), eixo `wdth` 125
**Body Font:** Archivo (com system-ui, sans-serif), eixo `wdth` 100
**Label Font:** Archivo, eixo `wdth` 112

**Character:** Uma família só, como numa prancha onde título, cota e carimbo saem do mesmo normógrafo. A hierarquia vem da largura e do peso, não da troca de fonte.

### Hierarchy
- **Display** (800, `clamp(5rem,13vw,11rem)`, 0.92, caixa alta, `wdth` 125): só o "ARES" da Folha 01; a linha "Rovers UnB" abaixo usa a mesma classe em `clamp(1.75rem,4vw,3.5rem)`.
- **Headline** (800, `clamp(2.25rem,5vw,4.25rem)`, 0.92, caixa alta, `wdth` 125): título de cada folha. Contato sobe para `clamp(2.5rem,6vw,5rem)`.
- **Title** (700, 1.125rem): títulos de item em listas (benefícios, subsistemas).
- **Body** (400, 1.125rem, 1.625): parágrafo de apoio em `ink-soft`, limitado a 44–56ch. Texto de lista em 1rem.
- **Label** (600, 0.6875rem, 0.08em, caixa alta, `wdth` 112): rótulos de cota, campos do carimbo, zonas da margem, cabeçalho da lista de peças, etiqueta de folha.

### Named Rules
**The One Family Rule.** Toda tipografia é Archivo; varia-se `wdth` e peso. Não se introduz segunda família, serifada ou monoespaçada.

**The Label Is A Field Rule.** O rótulo de cota nomeia um campo ou uma tabela (Equipe, Revisão, Folha, Lista de peças). Não vira sobretítulo acima de um headline.

## Layout

Cada seção é uma `Sheet`: um respiro de 8px (16px a partir de `sm`) entre a borda da tela e a margem de 2px, dentro da qual o conteúdo se divide em células de uma grade de 12 colunas em `lg`, tipicamente 6/6 ou 5/7 ou 7/5. As células são separadas por traços de 2px em `ink` (`border-t-2` no celular, `border-l-2` no desktop), não por espaço vazio. O padding de célula é 24px, 40px em `sm`, 48px em `lg`.

As zonas da margem (1–8 no topo, A–F à esquerda) só aparecem em `lg`. A Folha 01 ocupa a altura da viewport menos nav e etiqueta. O nav é fixo, 56px, e as âncoras compensam com `scroll-margin-top: 3.5rem`. No celular as células empilham, a janela de vista do rover vem logo depois das ações, e o carimbo quebra para linha inteira acima da etiqueta.

## Elevation & Depth

O sistema é plano: profundidade vem de traço, não de sombra. Folhas, células, carimbos e janelas ficam no plano do papel. A única sombra é uma resposta de estado do botão.

### Shadow Vocabulary
- **Levantar do botão** (`box-shadow: 0 6px 14px -8px rgb(21 23 26 / 0.45)`): só no hover de `.btn`, junto de `translateY(-2px)`; some no `:active`.
- **Sublinhado do nav ativo** (`box-shadow: inset 0 -3px 0 var(--ink)`): marca a seção atual no nav; é traço, não elevação.

### Named Rules
**The Flat Sheet Rule.** Nada repousa com sombra. Se algo precisa se destacar, ganha um traço ou uma célula própria.

## Shapes

Cantos retos (0px) em folhas, células, botões, carimbos, janelas e nav. A única curva é o balão de peça (círculo), porque é assim que um balão de lista de peças se desenha. Janelas de vista levam cantoneiras de 14px em traço de 2px na cor do papel, no canto superior esquerdo e inferior direito. Marca de revisão é um triângulo de traço.

## Components

### Buttons
Retângulos de traço, firmes e técnicos.
- **Shape:** cantos retos (0px), borda de 1.5px em `ink`, altura mínima 48px, padding 12px 24px; rótulo em caixa alta, 700, `wdth` 112, 0.04em.
- **Ação:** fundo `gold`, texto `ink`. Só para patrocinar.
- **Traço:** fundo transparente, texto `ink`; no hover inverte para `ink` com texto `paper`.
- **Traço claro:** sobre roxo, borda `purple-ink`, texto branco; hover branco com texto `purple`.
- **Hover / Active:** sobe 2px com a sombra de levantar (220ms, `--ease-out-expo`); no `:active` volta e escala 0.985 em 80ms.

### Navigation
Barra fixa de 56px em `paper`, borda inferior de 2px. Marca à esquerda numa célula própria (logo em `mix-blend-multiply` + "ARES" em letreiro). Links em células separadas por `line`, cada um numerado 01–06 em `ink-soft` tabular; ativo em `paper-deep` com sublinhado interno de 3px. Botão de ação "Patrocinar" na célula da direita. No celular, botão de menu de duas barras que viram X e um painel de tela cheia com a mesma numeração e o botão de ação em largura total.

### Folha (Sheet)
Contêiner de cada seção. Margem de 2px em `ink`, zonas na borda em `lg`, e no rodapé a etiqueta: campos opcionais de carimbo, título da folha em rótulo, e "Folha NN/06" em tabular. É o componente que define o mundo; toda seção nova entra numa folha nova com número próprio.

### Carimbo (bloco de título)
Faixa roxa com campos rótulo/valor separados por traços de 2px em `purple-ink` a 40%: Equipe, Instituição, Revisão (com triângulo dourado). Em Contato, o carimbo cresce e vira a superfície de contato, com e-mail em `link-draw`.

### Janela de vista
Foto real recortada com borda de 1.5px, fundo `paper-deep` e cantoneiras. No hover a foto aproxima 2.5% em 700ms.

### Balão de peça e lista de peças (assinatura)
Balões numerados (36px, 44px em `lg`) presos à borda da foto com um ombro de traço e uma linha de chamada SVG até um ponto na peça. Passar o mouse ou focar num balão acende o balão em `gold` e a linha correspondente da lista de peças em `gold-soft`, e vice-versa. Na entrada, a linha se desenha (650ms), o balão surge (450ms) e o ponto aparece, escalonados em 120ms por peça.

### Link desenhado
Links de texto ganham um sublinhado de 1.5px que se traça da esquerda em 320ms no hover e no foco.

## Do's and Don'ts

### Do:
- **Do** colocar toda seção nova numa `Sheet` com número de folha próprio e atualizar `TOTAL_FOLHAS`.
- **Do** separar conteúdo por traços de 2px em `ink` entre células, com padding 24/40/48px.
- **Do** usar o botão de ação dourado só para patrocinar; seguir/contatar usa botão de traço.
- **Do** usar fotos reais do rover e da equipe em janelas de vista com cantoneiras.
- **Do** variar `wdth` do Archivo (100/112/125) em vez de trocar de família.
- **Do** respeitar `prefers-reduced-motion`: animações e transformações de hover zeradas.

### Don't:
- **Don't** usar fundo preto espacial, brilho, gradiente ou cards flutuantes; é o padrão da categoria que este mundo recusa.
- **Don't** usar dourado como decoração, título, faixa ou ícone; ele é ação e revisão.
- **Don't** usar roxo fora do carimbo, do bloco de contato e dos sinais de foco.
- **Don't** arredondar cantos; só o balão de peça é circular.
- **Don't** pôr sombra em repouso; a única sombra é o hover do botão.
- **Don't** colocar rótulo de cota como sobretítulo acima de um headline.
