"use client";

import { useMemo, useState } from "react";
import {
  filterProperties,
  locations,
  priceRanges,
  propertyTypes,
} from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

export default function PropertyFilters() {
  const [type, setType] = useState("Todos");
  const [location, setLocation] = useState("Todos");
  const [priceRange, setPriceRange] = useState("all");

  const list = useMemo(
    () => filterProperties({ type, location, priceRange }),
    [type, location, priceRange]
  );

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 rounded-2xl border border-brand-blue/10 bg-brand-blue/[0.03] p-4 sm:flex-row sm:flex-wrap sm:items-end">
        <label className="flex flex-1 min-w-[140px] flex-col gap-1 text-sm font-medium text-brand-blue">
          Tipo
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="rounded-lg border border-brand-blue/20 bg-white px-3 py-2 text-brand-blue"
          >
            {propertyTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-1 min-w-[140px] flex-col gap-1 text-sm font-medium text-brand-blue">
          Localização
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="rounded-lg border border-brand-blue/20 bg-white px-3 py-2 text-brand-blue"
          >
            {locations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-1 min-w-[180px] flex-col gap-1 text-sm font-medium text-brand-blue">
          Valor
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="rounded-lg border border-brand-blue/20 bg-white px-3 py-2 text-brand-blue"
          >
            {priceRanges.map((r) => (
              <option key={r.id} value={r.id}>
                {r.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {list.length === 0 ? (
        <p className="text-center text-brand-blue/70">
          Nenhum imóvel encontrado com esses filtros. Fale comigo no WhatsApp para
          outras opções.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <div key={p.id} id={p.id}>
              <PropertyCard property={p} lazy={i > 2} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
