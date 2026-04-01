export const blogPosts = [
  {
    slug: "avaliacao-imobiliaria-quando-pedir",
    title: "Avaliação imobiliária: quando pedir e por que faz diferença",
    excerpt:
      "Entenda em quais situações a avaliação técnica protege patrimônio, evita conflitos e apoia decisões seguras.",
    category: "Avaliação imobiliária",
    date: "2026-03-12",
    readTime: "6 min",
    content: `
## Por que a avaliação importa

A avaliação imobiliária não é apenas um número: é um documento técnico que traduz características do imóvel, do entorno e do mercado em um valor fundamentado. Isso é essencial em compras, vendas, inventários, divisões e garantias.

## Momentos comuns para solicitar

- Antes de comprar ou vender, para calibrar expectativas
- Em processos judiciais ou extrajudiciais que exigem laudo
- Para atualização patrimonial e planejamento sucessório
- Ao estruturar garantias em operações financeiras

## O que um bom laudo deve conter

Metodologia clara, descrição do imóvel, análise comparativa de mercado e conclusões objetivas. A experiência regional — conhecer Blumenau, Gaspar, Timbó e cidades vizinhas — evita distorções típicas de avaliações genéricas.

## Próximo passo

Se você precisa de precisão e segurança jurídica, converse com um profissional habilitado e com trânsito real no mercado local.
    `.trim(),
  },
  {
    slug: "compra-segura-checklist",
    title: "Checklist para uma compra de imóvel mais segura em SC",
    excerpt:
      "Documentos, matrícula, ITBI e sinais de alerta: um guia prático para compradores na região.",
    category: "Compra e venda",
    date: "2026-02-28",
    readTime: "8 min",
    content: `
## Antes da proposta

Verifique situação cadastral, ônus e penhoras na matrícula, regularidade de IPTU e condomínio. Em terrenos, confirme zoneamento e restrições urbanísticas.

## Durante a negociação

Formalize acordos por escrito, defina prazos e condições de pagamento e evite sinais elevados sem contrato claro. Um corretor experiente ajuda a estruturar a proposta.

## Na escritura

Confira identificação das partes, descrição do imóvel, valores e forma de quitação. O registro na matrícula é o que consolida a propriedade.

## Conclusão

Checklists não substituem assessoria profissional, mas reduzem riscos. Na dúvida, busque orientação antes de assinar.
    `.trim(),
  },
  {
    slug: "mercado-imobiliario-vale-itajai-2026",
    title: "Tendências do mercado imobiliário no Vale do Itajaí",
    excerpt:
      "Demanda, financiamento e oportunidades: leitura prática para quem compra ou vende em 2026.",
    category: "Dicas do mercado",
    date: "2026-01-15",
    readTime: "5 min",
    content: `
## Cenário regional

O Vale do Itajaí segue atrativo pela infraestrutura, empregos e qualidade de vida. Blumenau e cidades vizinhas apresentam micromercados distintos — o preço médio e o tempo de venda variam por bairro e tipologia.

## Financiamento

Acompanhe taxas, linhas de crédito e documentação exigida. Imóveis com documentação em dia e preço alinhado ao mercado tendem a vender mais rápido.

## Para vendedores

Invista em apresentação, fotos profissionais e precificação fundamentada. Avaliações técnicas ajudam a sustentar o valor perante compradores e bancos.

## Para compradores

Defina prioridades (localização, metragem, lazer) e mantenha reserva para custos acessórios. Negocie com base em dados, não só em anúncios.
    `.trim(),
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug) || null;
}

export function getAllSlugs() {
  return blogPosts.map((p) => p.slug);
}
