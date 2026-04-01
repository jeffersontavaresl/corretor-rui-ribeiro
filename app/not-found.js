import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="font-display text-3xl font-bold text-brand-blue">Página não encontrada</h1>
      <p className="mt-4 text-brand-blue/70">
        O endereço pode ter mudado ou o link está incorreto.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-brand-gold px-6 py-3 text-sm font-bold text-brand-blue-dark hover:bg-brand-gold-light"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
