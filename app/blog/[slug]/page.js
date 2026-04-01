import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import BlogArticleBody from "@/components/BlogArticleBody";
import { getPostBySlug, getAllSlugs } from "@/data/blogPosts";
import { siteConfig, getWhatsAppLink } from "@/lib/site";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Artigo" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="border-b border-brand-blue/10 pb-16">
        <div className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="text-sm font-semibold text-brand-gold-dark hover:text-brand-gold"
          >
            ← Voltar ao blog
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
            {post.category}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-brand-blue sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-brand-blue/50">
            <time dateTime={post.date}>
              {new Date(post.date + "T12:00:00").toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>{post.readTime} de leitura</span>
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-6 lg:px-8">
          <BlogArticleBody content={post.content} />
        </div>
        <div className="mx-auto mt-12 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Button
            href={getWhatsAppLink(
              `Olá, Rui! Li o artigo: ${post.title}`
            )}
            external
            variant="primary"
          >
            Tire dúvidas com um especialista
          </Button>
        </div>
      </article>
    </>
  );
}
