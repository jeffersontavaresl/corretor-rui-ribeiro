import Section from "@/components/Section";
import PropertyFilters from "@/components/PropertyFilters";
import Button from "@/components/Button";
import { getWhatsAppLink } from "@/lib/site";

export const metadata = {
  title: "Imóveis",
  description:
    "Casas, apartamentos, terrenos e salas comerciais na região de Blumenau, Gaspar e Timbó. Filtre por tipo, valor e localização.",
};

export default function ImoveisPage() {
  const wa = getWhatsAppLink(
    "Olá, Rui! Vi os imóveis no site e quero mais opções / visita."
  );

  return (
    <>
      <section className="border-b border-brand-blue/10 bg-brand-blue py-14 text-white sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Portfólio
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Imóveis
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Oportunidades na região. Para visitas, fotos adicionais e imóveis sob medida,
            fale diretamente pelo WhatsApp.
          </p>
          <div className="mt-6">
            <Button href={wa} external variant="primary">
              Quero visitar ou receber novidades
            </Button>
          </div>
        </div>
      </section>

      <Section title="Encontre por perfil" subtitle="Filtros simples para refinar tipo, faixa de valor e cidade.">
        <PropertyFilters />
      </Section>
    </>
  );
}
