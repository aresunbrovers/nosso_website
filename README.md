# Site da ARES Rovers UnB

Site institucional da **ARES (Aerospace Rover Exploration System)**, a equipe oficial de Rovers da Universidade de Brasília. É uma página única que apresenta a equipe e o primeiro rover, atrai patrocinadores e leva estudantes a acompanhar a equipe.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- [Tailwind CSS 4](https://tailwindcss.com)
- TypeScript
- pnpm (`packageManager` fixado no `package.json`)
- Fontes via `next/font` (Google Fonts, servidas pelo próprio site)

## Rodando localmente

Requer Node 22 ou mais novo.

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000). A página recarrega sozinha a cada alteração.

Outros comandos:

```bash
pnpm lint    # ESLint
pnpm build   # build de produção
pnpm start   # serve o build de produção
```

## Estrutura

```
app/
  layout.tsx           fontes, metadados (título, descrição, Open Graph) e Navbar
  page.tsx             monta a página com as seções, em ordem
  globals.css          tokens de cor, tipografia e componentes base (botões etc.)
  not-found.tsx        404: redireciona caminhos antigos para a âncora certa
  robots.ts, sitemap.ts
components/
  layout/              Navbar (e Sheet, a moldura de folha da versão Prancha)
  sections/            uma seção por arquivo: Hero, Sobre, Projetos,
                       Equipe, Patrocinadores, Contato
content/
  site.ts              conteúdo compartilhado: e-mail, redes, as 7 áreas
                       da equipe e as peças apontadas na foto do rover
public/
  brand/               logos da ARES
  fotos/               fotos da equipe e do rover
```

A navegação é por âncora (`#sobre`, `#projetos`, `#equipe`, `#patrocinadores`, `#contato`).

## Como editar o conteúdo

- **Contatos, áreas da equipe e peças do rover:** `content/site.ts`. Mudou aqui, muda em todas as seções que usam.
- **Textos de cada seção:** no arquivo da seção em `components/sections/`.
- **Fotos:** coloque o arquivo em `public/fotos/` e importe na seção (`import foto from "@/public/fotos/nome.jpg"`). Sempre escreva um `alt` descrevendo a foto.
- **Cores e estilos base:** os tokens ficam no topo de `app/globals.css`.

Pendência conhecida: a sigla (`BRA`) e a descrição da área de Braço Robótico, em `content/site.ts`, são provisórias e aparecem no site como "a confirmar".

## Branches

| Branch | O que tem |
|---|---|
| `main` | Versão atual do site: o redesign **Prancha de Desenho Técnico** (cada seção é uma folha de projeto, com a foto real do rover e balões de peça). |
| `redesign-2` | Proposta alternativa **Céu de Brasília**: o céu no roxo da equipe como fundo, escurecendo ao longo da página, com a foto da equipe no horizonte. Serve para comparação e ainda não foi mesclada. |
| `gh-pages` | Build antigo publicado no GitHub Pages, de antes da migração para a Vercel. |

## Deploy

O site é publicado pela **Vercel** desde o commit "fix: deploy na Vercel", que removeu a exportação estática para o GitHub Pages. O comando antigo (`npx gh-pages -d out`) não funciona mais, porque o build não gera a pasta `out/`.

> A constante `siteUrl` em `app/layout.tsx`, `app/sitemap.ts` e `app/robots.ts` (usada no Open Graph, no sitemap e no robots) ainda aponta para o endereço antigo do GitHub Pages. Atualize nos três arquivos para o domínio da Vercel quando ele estiver definido.

## Arquivos que ficam fora do Git

Além do padrão do Next (`node_modules/`, `.next/`, `.env*` etc.), o `.gitignore` deixa só na máquina local:

- `.claude/`: configurações e pastas de trabalho do Claude Code
- `CLAUDE.md`, `AGENTS.md`: instruções para assistentes de IA
- `PRODUCT.md`, `DESIGN.md`, `.impeccable/`: notas internas de produto e do sistema visual

Senhas, tokens e chaves vão sempre num arquivo `.env`, nunca no código.
