import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { services } from "@/data/services";
import { getWhatsAppLink } from "@/lib/site";

export const metadata = {
  title: "Serviços",
  description:
    "Avaliação de imóveis, perícia judicial, consultoria, intermediação e terrenos em Blumenau, Gaspar, Timbó e região.",
};

export default function ServicosPage() {
  const wa = getWhatsAppLink(
    "Olá, Rui! Quero detalhes sobre seus serviços (avaliação / perícia / intermediação)."
  );

  return (
    <>
      <section className="border-b border-brand-blue/10 bg-brand-blue/[0.04] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold-dark">
            O que faço por você
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-brand-blue sm:text-5xl">
            Serviços
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-blue/75">
            Avaliações, perícia, consultoria e negociação — cada entrega com o mesmo
            padrão: clareza, técnica e foco em resultado.
          </p>
          <div className="mt-8">
            <Button href={wa} external variant="primary">
              Fale com um especialista
            </Button>
          </div>
        </div>
      </section>

      <Section className="pt-12">
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </Section>
    </>
  );
}
