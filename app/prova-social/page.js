import Section from "@/components/Section";
import TestimonialCard from "@/components/TestimonialCard";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { testimonials, successCases } from "@/data/testimonials";
import { getWhatsAppLink } from "@/lib/site";

export const metadata = {
  title: "Prova social",
  description:
    "Depoimentos de clientes e casos de sucesso em avaliação imobiliária, perícia e intermediação na região.",
};

export default function ProvaSocialPage() {
  const wa = getWhatsAppLink(
    "Olá, Rui! Gostaria de referências / conversar sobre meu caso."
  );

  return (
    <>
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-dark py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Prova social</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Confiança se constrói com resultados. Veja depoimentos e resumos de casos
            em que a combinação de técnica e experiência fez a diferença.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Depoimentos"
        title="O que dizem clientes e parceiros"
        subtitle="Cards com relatos reais de contexto — nomes podem ser ajustados conforme autorização."
      >
        <div className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-[min(100vw-2rem,380px)] shrink-0 snap-center sm:w-auto"
            >
              <TestimonialCard item={t} />
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-brand-blue/50 sm:hidden">
          Deslize para o lado para ver mais depoimentos.
        </p>
      </Section>

      <Section
        dark
        eyebrow="Casos de sucesso"
        title="Resultados em destaque"
        subtitle="Resumos anônimos ou semi-anônimos — ideais para autoridade sem expor dados sensíveis do processo."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {successCases.map((c) => (
            <Card
              key={c.title}
              className="!border-white/10 !bg-white/5 text-white hover:!border-brand-gold/40"
            >
              <h3 className="font-display text-lg font-bold text-brand-gold-light">
                {c.title}
              </h3>
              <p className="mt-3 text-sm text-white/75">{c.summary}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href={wa} external variant="primary">
            Quero um resultado assim
          </Button>
        </div>
      </Section>
    </>
  );
}
