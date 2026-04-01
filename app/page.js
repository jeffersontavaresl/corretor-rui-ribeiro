import dynamic from "next/dynamic";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import PropertyCard from "@/components/PropertyCard";
import { services } from "@/data/services";
import { properties } from "@/data/properties";
import { testimonials } from "@/data/testimonials";
import { getWhatsAppLink } from "@/lib/site";

const TestimonialCard = dynamic(() => import("@/components/TestimonialCard"), {
  loading: () => (
    <div className="h-48 animate-pulse rounded-2xl bg-brand-blue/5" aria-hidden />
  ),
});

export const metadata = {
  title: "Início",
  description:
    "Avaliações imobiliárias precisas, perícia judicial e intermediação em Blumenau, Gaspar, Timbó e região. Mais de 25 anos com Rui Ribeiro.",
};

export default function HomePage() {
  const previewServices = services.slice(0, 3);
  const previewProperties = properties.slice(0, 3);
  const previewTestimonials = testimonials.slice(0, 2);
  const waLead = getWhatsAppLink(
    "Olá, Rui! Quero solicitar uma avaliação / falar sobre imóveis."
  );

  return (
    <>
      <Hero />

      <Section
        eyebrow="Serviços"
        title="Técnica e negócio, no mesmo lugar"
        subtitle="Da avaliação fundamentada à intermediação comercial — você conversa com quem conhece o mercado e a documentação."
      >
        <div className="grid gap-8 md:grid-cols-3">
          {previewServices.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/servicos" variant="outline">
            Ver todos os serviços
          </Button>
        </div>
      </Section>

      <Section
        dark
        eyebrow="Autoridade"
        title="Mais de 25 anos a serviço do seu patrimônio"
        subtitle="Corretor de imóveis e perito avaliador judicial, com atuação consistente em Santa Catarina — especialmente Blumenau, Gaspar, Timbó e cidades vizinhas."
        className="relative overflow-hidden"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80"
              alt="Documentos e planejamento profissional"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <ul className="space-y-6 text-left text-white/90">
            <li>
              <strong className="text-brand-gold">Laudos técnicos confiáveis</strong>
              <p className="mt-1 text-sm text-white/75">
                Pareceres claros, com suporte em dados de mercado e características do imóvel.
              </p>
            </li>
            <li>
              <strong className="text-brand-gold">Segurança jurídica</strong>
              <p className="mt-1 text-sm text-white/75">
                Atendimento alinhado às exigências de cartórios, bancos e processos judiciais.
              </p>
            </li>
            <li>
              <strong className="text-brand-gold">Precisão nas avaliações</strong>
              <p className="mt-1 text-sm text-white/75">
                Leitura regional do Vale do Itajaí — evitando avaliações genéricas e fora de contexto.
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-10 text-center">
          <Button href="/sobre" variant="secondary">
            Conheça minha trajetória
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Imóveis"
        title="Oportunidades selecionadas"
        subtitle="Amostra de imóveis e terrenos na região. Lista atualizada sob consulta — fale comigo para visitas e novidades."
      >
        <div className="grid gap-8 md:grid-cols-3">
          {previewProperties.map((p, i) => (
            <PropertyCard key={p.id} property={p} lazy={i > 0} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/imoveis" variant="primary">
            Ver listagem completa
          </Button>
          <Button href={waLead} external variant="outline">
            Quero outra faixa ou bairro
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Prova social"
        title="Resultados que geram confiança"
        subtitle="Depoimentos de clientes e cenários em que a técnica fez a diferença."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {previewTestimonials.map((t) => (
            <TestimonialCard key={t.id} item={t} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/prova-social" variant="outline">
            Ver depoimentos e casos
          </Button>
        </div>
      </Section>

      <section className="border-t border-brand-blue/10 bg-brand-blue/[0.04] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-brand-blue">
            Pronto para decidir com segurança?
          </h2>
          <p className="mt-4 text-lg text-brand-blue/75">
            Solicite sua avaliação agora ou tire dúvidas sobre compra, venda e perícia.
            Atendimento direto pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={waLead} external variant="primary" className="shadow-md">
              Fale com um especialista
            </Button>
            <Button href="/contato" variant="outline">
              Formulário de contato
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
