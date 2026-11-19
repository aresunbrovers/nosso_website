---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

Escopo: página única ARES Rovers UnB (app/page.tsx e componentes), branch redesign-2, para apresentação ao líder da equipe. Modo: Persuade.
Público: empresas/patrocinadores e estudantes da UnB, mesmo peso. Ação: contato de patrocínio por e-mail; seguir no Instagram.
Prova: foto real da equipe sob o céu de Brasília; fotos reais do rover; 7 áreas, 30+ membros; FCTE, UnB Gama.
Restrições: nada de patrocinador, competição específica ou número inventado; deploy estático GitHub Pages.
Momento memorável: o céu da foto da equipe continua no céu da página, e o céu muda do meio-dia ao entardecer roxo ao longo da página.

## Direction contract

THESIS: A equipe constrói sob o maior céu do Brasil: o céu de Brasília é o chão da página, e os ipês amarelo e roxo são as cores da marca. Recusa a página preta espacial e o corporativo branco.

OWN-WORLD: Campos de céu no roxo da equipe, o ipê roxo (#4C1D95 meio-dia, #3A1478 tarde, #2A0F5C entardecer; trocado do azul a pedido do usuário em 2026-11-19) alternando com concreto claro #F1F2EF; tinta azul-noite #14213D; ipê amarelo #D4A017 só para ação; curvas generosas de Niemeyer nas fotos e botões em pílula; Unbounded nos títulos, Figtree no texto.

STORY: O visitante vê estudantes reais sob o céu de Brasília, depois o rover que constroem e as sete áreas, e termina no entardecer, onde escreve para patrocinar ou segue a equipe.

FIRST VIEWPORT: Céu roxo de borda a borda; "ARES" enorme em branco no terço superior; linha de função e as ações "Quero patrocinar" (ipê amarelo) e "Seguir a equipe" sobre o céu; a foto da equipe ocupando o terço inferior como horizonte, com o céu da foto dissolvendo no céu da página.

FORM: Céu de Brasília (Plano Piloto e ipês), candidato 3 da lista ordenada do segundo sorteio; seed:6576cdf09d80a513. Interação assinatura: o dia passa ao longo da página, em estações fixas (meio-dia, tarde, entardecer), sem animação ligada ao scroll; a entrada do hero sobe o horizonte uma vez.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
