import Button from "@/components/Button";
import Card from "@/components/Card";
import { getWhatsAppLink } from "@/lib/site";

export default function ServiceCard({ service }) {
  const wa = getWhatsAppLink(service.waMessage);

  return (
    <Card className="flex h-full flex-col">
      <h3 className="font-display text-xl font-bold text-brand-blue">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm text-brand-blue/75">{service.description}</p>
      <ul className="mt-4 space-y-2">
        {service.benefits.map((b) => (
          <li key={b} className="flex gap-2 text-sm text-brand-blue/80">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
            {b}
          </li>
        ))}
      </ul>
      <Button href={wa} external className="mt-6 w-full sm:w-auto">
        {service.cta}
      </Button>
    </Card>
  );
}
