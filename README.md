# Rui Ribeiro — site institucional

Site em **Next.js (App Router)** + **Tailwind CSS** + **JavaScript**, com foco em SEO, performance e conversão (WhatsApp).

## Requisitos

- **Node.js 18.17+** (recomendado: 20 LTS). O arquivo `.nvmrc` fixa a major 20.

## Configuração

1. `npm install`
2. Copie `.env.example` para `.env.local` e ajuste:
   - `NEXT_PUBLIC_SITE_URL` — URL canônica (SEO / Open Graph)
   - `NEXT_PUBLIC_WHATSAPP_E164` — WhatsApp apenas dígitos com DDI (ex.: `5547991234567`)

## Scripts

- `npm run dev` — desenvolvimento
- `npm run build` — build de produção
- `npm run start` — servidor após build
- `npm run lint` — ESLint

## Estrutura

- `app/` — rotas e layout
- `components/` — UI reutilizável
- `data/` — mocks (imóveis, blog, serviços, depoimentos) — ponto natural para troca por CMS/API
- `lib/` — configuração do site e helpers (ex.: link WhatsApp)
- `public/` — estáticos
- `styles/` — tokens CSS complementares

## Conteúdo e CMS

Textos e listas vêm de `data/*.js` e `lib/site.js`. Para integrar um CMS depois, substitua as importações nas páginas por `fetch` (SSR/ISR) mantendo os mesmos componentes.
