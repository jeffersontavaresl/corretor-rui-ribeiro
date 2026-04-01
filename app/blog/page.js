import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

export const metadata = {
  title: "Blog",
  description:
    "Artigos sobre avaliação imobiliária, compra e venda e tendências do mercado no Vale do Itajaí.",
};

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-brand-blue/10 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold-dark">
            Conteúdo
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-brand-blue sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-blue/75">
            Artigos sobre avaliação, negócios e mercado regional — conteúdo pensado para
            orientar e fortalecer sua decisão.
          </p>
        </div>
      </section>

      <Section className="pt-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </>
  );
}
