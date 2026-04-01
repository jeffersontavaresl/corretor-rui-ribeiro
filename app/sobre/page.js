import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { siteConfig, getWhatsAppLink } from "@/lib/site";

export const metadata = {
  title: "Sobre",
  description:
    "Conheça Rui Ribeiro: mais de 25 anos como corretor de imóveis e perito avaliador judicial em Santa Catarina.",
};

export default function SobrePage() {
  const wa = getWhatsAppLink(
    "Olá, Rui! Li a página Sobre e gostaria de conversar."
  );

  return (
    <>
      <section className="bg-brand-blue py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Trajetória
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Rui Ribeiro
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Corretor de imóveis e perito avaliador judicial, com mais de{" "}
            {siteConfig.experienceYears} anos dedicados ao mercado imobiliário e à
            avaliação técnica em {siteConfig.region}.
          </p>
        </div>
      </section>

      <Section
        title="História profissional"
        subtitle="Uma carreira construída em campo: negociações, laudos, tribunais e famílias que precisavam de clareza para decidir."
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4 text-brand-blue/80">
            <p>
              Ao longo de mais de duas décadas, acompanhei ciclos do mercado no Vale
              do Itajaí — de expansão urbana a ajustes de financiamento — sempre com
              o mesmo foco: traduzir números e documentos em decisões seguras para
              clientes, empresas e magistrados.
            </p>
            <p>
              Como corretor, atuo na intermediação de compra e venda com processos
              transparentes e comunicação direta. Como perito, entrego laudos e
              pareceres com rigor metodológico e linguagem acessível para quem
              precisa entender o valor real de um imóvel.
            </p>
            <p>
              Minha atuação é regional e intencional: conhecer bairros, perfis de
              demanda e a dinâmica de Blumenau, Gaspar, Timbó e cidades vizinhas é
              o que sustenta avaliações coerentes — não genéricas.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-blue/10 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&q=80"
              alt="Profissional em reunião com clientes"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section
        dark
        title="Experiência como perito"
        subtitle="Participação em processos que exigem imparcialidade, prazos e fundamentação sólida."
      >
        <ul className="mx-auto max-w-3xl space-y-6 text-white/90">
          <li className="flex gap-4">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-gold" />
            <div>
              <strong className="text-white">Judicial e extrajudicial</strong>
              <p className="mt-1 text-sm text-white/75">
                Elaboração de laudos para inventários, partilhas, dissoluções
                societárias e demais demandas com determinação de valor de bens.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-gold" />
            <div>
              <strong className="text-white">Comunicação com o processo</strong>
              <p className="mt-1 text-sm text-white/75">
                Respostas objetivas a quesitos, esclarecimentos e diligências,
                respeitando o ritmo forense e a necessidade de clareza às partes.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-gold" />
            <div>
              <strong className="text-white">Ética e atualização</strong>
              <p className="mt-1 text-sm text-white/75">
                Conduta alinhada às normas profissionais e às melhores práticas de
                mercado, com estudo contínuo de regulação e jurisprudência.
              </p>
            </div>
          </li>
        </ul>
      </Section>

      <Section
        title="Diferenciais"
        subtitle="O que você pode esperar ao trabalhar comigo."
      >
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-brand-blue/10 bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-brand-blue">
              Laudos técnicos confiáveis
            </h3>
            <p className="mt-3 text-sm text-brand-blue/75">
              Fundamentação explícita, comparáveis bem escolhidos e conclusões
              coerentes com a realidade local.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-blue/10 bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-brand-blue">
              Segurança jurídica
            </h3>
            <p className="mt-3 text-sm text-brand-blue/75">
              Atenção a documentação, ônus e particularidades que impactam valor e
              negociação.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-blue/10 bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-brand-blue">
              Precisão nas avaliações
            </h3>
            <p className="mt-3 text-sm text-brand-blue/75">
              Conhecimento de micromercados em SC — essencial para evitar erros caros.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button href={wa} external variant="primary">
            Agende uma conversa
          </Button>
        </div>
      </Section>
    </>
  );
}
