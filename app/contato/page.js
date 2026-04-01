import Section from "@/components/Section";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { siteConfig, getWhatsAppLink } from "@/lib/site";

export const metadata = {
  title: "Contato",
  description:
    "Fale com Rui Ribeiro por WhatsApp, e-mail ou formulário. Atendimento em Blumenau, Gaspar, Timbó e região.",
};

export default function ContatoPage() {
  const wa = getWhatsAppLink(
    "Olá, Rui! Vim pela página de contato do site."
  );

  return (
    <>
      <section className="bg-brand-blue py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Contato</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Escolha o canal que for mais rápido para você. Para leads quentes, o
            WhatsApp costuma ser o melhor caminho.
          </p>
          <div className="mt-8">
            <Button href={wa} external variant="primary" className="text-base px-8 py-4">
              Conversar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Section title="Informações" subtitle="Horário e dados para contato direto.">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-brand-blue/80">
            <p>
              <strong className="text-brand-blue">Telefone / WhatsApp</strong>
              <br />
              {siteConfig.phoneDisplay}
            </p>
            <p>
              <strong className="text-brand-blue">E-mail</strong>
              <br />
              <a href={`mailto:${siteConfig.email}`} className="text-brand-gold-dark hover:underline">
                {siteConfig.email}
              </a>
            </p>
            <p>
              <strong className="text-brand-blue">Região</strong>
              <br />
              {siteConfig.region}
            </p>
            <p>
              <strong className="text-brand-blue">Endereço</strong>
              <br />
              {siteConfig.address}
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>

      <Section title="Mapa" subtitle="Referência de localização — Blumenau, SC." className="pt-0">
        <div className="overflow-hidden rounded-2xl border border-brand-blue/10 shadow-md">
          <iframe
            title="Mapa — Blumenau SC"
            src={siteConfig.mapEmbedUrl}
            className="h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Section>
    </>
  );
}
