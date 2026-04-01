import Link from "next/link";
import { siteConfig, getWhatsAppLink } from "@/lib/site";

const links = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/imoveis", label: "Imóveis" },
  { href: "/prova-social", label: "Prova social" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  const wa = getWhatsAppLink();

  return (
    <footer className="border-t border-brand-blue/10 bg-brand-blue text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-white/75">{siteConfig.title}</p>
            <p className="mt-4 text-sm text-white/70">{siteConfig.region}</p>
            <p className="mt-1 text-sm text-white/70">
              {siteConfig.experienceYears} anos de experiência
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Navegação
            </p>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/80 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Contato
            </p>
            <p className="mt-4 text-sm text-white/80">{siteConfig.phoneDisplay}</p>
            <p className="mt-1 text-sm text-white/80">{siteConfig.email}</p>
            <a
              href={wa}
              className="mt-4 inline-block text-sm font-semibold text-brand-gold hover:text-brand-gold-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp →
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-white/55">
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          {" · "}
          <span className="text-white/45">
            CRECI / CNAI conforme registro profissional vigente.
          </span>
        </div>
      </div>
    </footer>
  );
}
