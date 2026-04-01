import Image from "next/image";
import Button from "@/components/Button";
import { getWhatsAppLink } from "@/lib/site";

/* Imagens hero: fachada alto padrão, interior clean, vista urbana do Vale. */

export default function Hero() {
  const wa = getWhatsAppLink(
    "Olá, Rui! Vi o site e quero falar sobre avaliação ou imóveis."
  );

  return (
    <section className="relative overflow-hidden bg-brand-blue">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue/90 to-brand-blue/75" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl flex-1">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Santa Catarina · Blumenau, Gaspar, Timbó e região
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
            Avaliações Imobiliárias Precisas e Seguras
          </h1>
          <p className="mt-6 text-lg text-white/90 sm:text-xl">
            Corretor de imóveis e perito avaliador judicial com mais de{" "}
            <strong className="text-white">25 anos</strong> de experiência.
            Laudos confiáveis, negociação profissional e orientação que protege
            seu patrimônio.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={wa} external variant="primary" className="shadow-lg">
              Fale no WhatsApp
            </Button>
            <Button href="/servicos" variant="secondary" className="border-white/80">
              Conheça os serviços
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Laudos técnicos fundamentados
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Perícia judicial
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Compra e venda
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md flex-1 lg:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
              alt="Ambiente residencial moderno"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
