import Card from "@/components/Card";

export default function TestimonialCard({ item }) {
  return (
    <Card className="h-full">
      <blockquote className="text-brand-blue/85">&ldquo;{item.quote}&rdquo;</blockquote>
      <footer className="mt-6 border-t border-brand-blue/10 pt-4">
        <p className="font-semibold text-brand-blue">{item.name}</p>
        <p className="text-sm text-brand-blue/60">{item.role}</p>
        {item.caseTitle && (
          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-brand-gold-dark">
            {item.caseTitle}
          </p>
        )}
      </footer>
    </Card>
  );
}
