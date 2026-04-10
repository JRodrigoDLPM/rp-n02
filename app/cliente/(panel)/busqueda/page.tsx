"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories, professionals } from "@/lib/mock-data";

export default function ClienteBusquedaPage() {
  const [cat, setCat] = useState<string | null>(null);
  const filtered = useMemo(
    () => (cat ? professionals.filter((p) => p.categorySlug === cat) : professionals),
    [cat],
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Búsqueda</h1>
        <p className="mt-1 text-sm text-slate-500">Filtra por categoría y abre el perfil del consultor.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCat(null)}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold ${!cat ? "bg-[var(--brand)] text-white" : "bg-white text-slate-600 ring-1 ring-slate-200"}`}
        >
          Todas
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => setCat(c.slug)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
              cat === c.slug ? "bg-[var(--brand)] text-white" : "bg-white text-slate-600 ring-1 ring-slate-200"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <ul className="space-y-3">
        {filtered.map((p) => (
          <li key={p.id}>
            <Link
              href={`/profesional/${p.id}`}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                <Image src={p.image} alt={p.name} fill className="object-cover" sizes="80px" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-slate-900">{p.name}</p>
                <p className="text-xs text-slate-500">{p.title}</p>
                <p className="mt-1 line-clamp-2 text-sm text-slate-600">{p.bioShort}</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Desde ${p.priceChat.toFixed(2)}/min
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
