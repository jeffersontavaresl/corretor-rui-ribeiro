export const siteConfig = {
  name: "Rui Ribeiro",
  title: "Corretor de Imóveis e Perito Avaliador Judicial",
  description:
    "Mais de 25 anos de experiência em avaliações imobiliárias precisas, perícia judicial e intermediação em Santa Catarina — Blumenau, Gaspar, Timbó e região.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ruirribeiro.com.br",
  region: "Santa Catarina — Blumenau, Gaspar, Timbó e região",
  experienceYears: "25+",
  email: "contato@ruirribeiro.com.br",
  phoneE164: process.env.NEXT_PUBLIC_WHATSAPP_E164 || "5547997825893",
  phoneDisplay: "(47) 99782-5893",
  address: "Blumenau, SC — atendimento presencial sob agendamento",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113656.83618565985!2d-49.1808224!3d-26.9165792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df17c0884d0c39%3A0x5c6c6e0e4c5c5c5c!2sBlumenau%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
};

export function getWhatsAppLink(message) {
  const num = siteConfig.phoneE164.replace(/\D/g, "");
  const text = encodeURIComponent(
    message ||
      "Olá, Rui! Gostaria de falar sobre avaliação imobiliária / imóveis."
  );
  return `https://wa.me/${num}?text=${text}`;
}
