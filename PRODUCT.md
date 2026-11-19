# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Empresas e possíveis patrocinadores** avaliando se vale associar a marca a uma equipe universitária de rovers. Precisam entender rápido quem é a equipe, o que está construindo e o que ganham ao apoiar.
- **Estudantes da UnB** (engenharias e áreas como Administração) curiosos sobre a equipe. No momento não há processo seletivo aberto: o site convida a acompanhar a equipe pelo Instagram e LinkedIn.

Os dois públicos têm o mesmo peso.

## Product Purpose

Site institucional de página única da ARES (Aerospace Rover Exploration System), equipe oficial de Rovers da Universidade de Brasília, vinculada à Engenharia Aeroespacial da UnB. Apresenta a equipe e o primeiro rover em desenvolvimento, atrai patrocinadores e mantém estudantes acompanhando a equipe. Sucesso: uma empresa chega ao contato para patrocinar; um estudante passa a seguir a equipe.

## Positioning

A equipe oficial de rovers da UnB: estudantes de várias engenharias construindo o primeiro rover da equipe para operar em terrenos análogos a superfícies extraterrestres, organizados em sete áreas: cinco de engenharia (Controle e Comunicação, Dinâmica, Elétrica, Estruturas, Braço Robótico) e duas de gestão (Financeiro, Relações Públicas).

## Operating Context

- Deploy estático no GitHub Pages (`next build` + `gh-pages -d out`), base `/ARES_ROVERS_UNB_WEBSITE`.
- Seções navegadas por âncora: início, sobre, projetos, equipe, patrocinadores, contato. `not-found.tsx` redireciona caminhos antigos para as âncoras.
- Contato por e-mail (ares.unb.rovers@gmail.com), Instagram @ares.unb e LinkedIn /company/aresunb.

## Capabilities and Constraints

- Next.js 16 + Tailwind 4, idioma pt-BR.
- Competições-alvo: **indefinido**; o site diz apenas "competições nacionais e internacionais".
- Sete áreas confirmadas pela equipe (2026-11-19); "cinco subsistemas de engenharia" está correto. Sigla e descrição detalhada do Braço Robótico ainda a confirmar (o site usa "BRA").
- Processo seletivo: nenhum aberto no momento.

## Brand Commitments

- Nome ARES / ARES Rovers UnB; logo dourado e roxo (`public/Logo_dourada_roxa_dark.png`, `public/Logo_ARES.png`).
- Cores do logo: dourado e roxo são da marca e devem permanecer reconhecíveis.

## Evidence on Hand

- Foto real da equipe em campo com a bandeira: `public/equipe.jpg`.
- Logo em versões clara e escura.
- Fotos reais do rover (enviadas em 2026-11-19), em `public/fotos/`: rover montado na bancada, rover em exposição com o sensor no mastro, rover em uso, chassi sem rodas na bancada e na oficina.
- `public/rover_by_gettyimages.jpeg` é foto de banco (Getty), **não** é o rover da ARES; não deve ser apresentada como tal.
- **Não existem** patrocinadores confirmados, resultados de competição, depoimentos ou números além de "7 áreas" e "30+ membros". Nada disso pode ser inventado.

## Product Principles

1. Mostrar o trabalho real da equipe antes de qualquer promessa.
2. Falar com patrocinadores e estudantes com o mesmo peso.
3. Honestidade sobre o estágio: primeiro rover, em desenvolvimento, sem patrocinadores ainda.
4. Contato a no máximo um clique de qualquer ponto da página.
