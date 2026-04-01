export const propertyTypes = ["Todos", "Casa", "Apartamento", "Terreno", "Sala comercial"];

export const locations = ["Todos", "Blumenau", "Gaspar", "Timbó", "Indaial"];

export const priceRanges = [
  { id: "all", label: "Qualquer valor" },
  { id: "0-500", label: "Até R$ 500 mil" },
  { id: "500-1000", label: "R$ 500 mil — 1 mi" },
  { id: "1000+", label: "Acima de R$ 1 mi" },
];

export const properties = [
  {
    id: "1",
    slug: "casa-moderna-victor-konder",
    title: "Casa contemporânea — Victor Konder",
    type: "Casa",
    location: "Blumenau",
    price: 1280000,
    priceLabel: "R$ 1.280.000",
    short:
      "Projeto luminoso, 4 suítes, área gourmet e excelente localização.",
    description:
      "Residência em condomínio fechado com acabamento premium, piscina aquecida e garagem para 4 veículos. Próximo a escolas e comércio.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    imageHint:
      "Sugestão: foto de casa moderna com fachada limpa e jardim (hero de imóvel alto padrão).",
  },
  {
    id: "2",
    slug: "apartamento-centro-blumenau",
    title: "Apartamento no centro — vista panorâmica",
    type: "Apartamento",
    location: "Blumenau",
    price: 689000,
    priceLabel: "R$ 689.000",
    short: "2 dormitórios, sacada com churrasqueira, andar alto.",
    description:
      "Unidade ensolarada, condomínio com academia e salão de festas. Ideal para moradia ou investimento na região central.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
    imageHint:
      "Sugestão: interior de apartamento com varanda e luz natural.",
  },
  {
    id: "3",
    slug: "terreno-plano-gaspar",
    title: "Terreno plano — Gaspar",
    type: "Terreno",
    location: "Gaspar",
    price: 320000,
    priceLabel: "R$ 320.000",
    short: "360 m², esquina, documentação em ordem.",
    description:
      "Lote em bairro em valorização, infraestrutura completa. Estudo de viabilidade construtiva disponível mediante consulta.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    imageHint:
      "Sugestão: terreno vazio com topografia visível ou loteamento organizado.",
  },
  {
    id: "4",
    slug: "casa-timbo",
    title: "Casa térrea — Timbó",
    type: "Casa",
    location: "Timbó",
    price: 950000,
    priceLabel: "R$ 950.000",
    short: "3 quartos, quintal amplo, bairro tranquilo.",
    description:
      "Imóvel pronto para morar, com espaço para ampliação ou área de lazer. Ótima relação custo-benefício na região.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80",
    imageHint:
      "Sugestão: casa térrea familiar com gramado e fachada acolhedora.",
  },
  {
    id: "5",
    slug: "sala-comercial-blumenau",
    title: "Sala comercial — Blumenau",
    type: "Sala comercial",
    location: "Blumenau",
    price: 410000,
    priceLabel: "R$ 410.000",
    short: "42 m², edifício corporativo, vaga coberta.",
    description:
      "Unidade com recepção compartilhada, ideal para escritórios e consultórios. Localização estratégica com fácil acesso.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    imageHint:
      "Sugestão: hall corporativo ou sala comercial clean.",
  },
  {
    id: "6",
    slug: "apartamento-indaial",
    title: "Apartamento novo — Indaial",
    type: "Apartamento",
    location: "Indaial",
    price: 520000,
    priceLabel: "R$ 520.000",
    short: "Obra recente, 2 vagas, lazer completo.",
    description:
      "Empreendimento com piscina, playground e segurança 24h. Documentação facilitada para financiamento.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    imageHint:
      "Sugestão: fachada de prédio residencial novo ou área de lazer do condomínio.",
  },
];

export function filterProperties({ type, location, priceRange }) {
  return properties.filter((p) => {
    if (type && type !== "Todos" && p.type !== type) return false;
    if (location && location !== "Todos" && p.location !== location)
      return false;
    if (!priceRange || priceRange === "all") return true;
    if (priceRange === "0-500") return p.price <= 500000;
    if (priceRange === "500-1000")
      return p.price > 500000 && p.price <= 1000000;
    if (priceRange === "1000+") return p.price > 1000000;
    return true;
  });
}
