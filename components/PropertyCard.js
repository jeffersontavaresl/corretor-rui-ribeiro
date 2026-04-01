import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";

export default function PropertyCard({ property, lazy }) {
  return (
    <Card className="overflow-hidden p-0">
      <Link href={`/imoveis#${property.id}`} className="block">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            loading={lazy ? "lazy" : undefined}
            priority={!lazy}
          />
        </div>
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold-dark">
            {property.type} · {property.location}
          </p>
          <h3 className="mt-1 font-display text-lg font-bold text-brand-blue">
            {property.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-brand-blue/70">
            {property.short}
          </p>
          <p className="mt-4 font-display text-xl font-bold text-brand-blue">
            {property.priceLabel}
          </p>
        </div>
      </Link>
    </Card>
  );
}
