import Link from "next/link";
import Card from "@/components/Card";

export default function BlogCard({ post }) {
  return (
    <Card className="flex h-full flex-col">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold-dark">
        {post.category}
      </p>
      <h3 className="mt-2 font-display text-xl font-bold text-brand-blue">
        <Link href={`/blog/${post.slug}`} className="hover:text-brand-blue-light">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm text-brand-blue/75">{post.excerpt}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-brand-blue/50">
        <time dateTime={post.date}>
          {new Date(post.date + "T12:00:00").toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </time>
        <span>{post.readTime}</span>
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 text-sm font-semibold text-brand-gold-dark hover:text-brand-gold"
      >
        Ler artigo →
      </Link>
    </Card>
  );
}
