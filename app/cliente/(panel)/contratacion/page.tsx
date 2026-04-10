"use client";

import Link from "next/link";
import { useState } from "react";
import { PaymentModal } from "@/components/cliente/PaymentModal";

export default function ClienteContratacionPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Contratación</h1>
        <p className="mt-1 text-sm text-slate-500">Elige modalidad y abre el pago de demostración.</p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Consultor seleccionado</p>
        <p className="mt-1 text-sm text-slate-600">Dra. Elena Vázquez — consulta M&A (referencia mock).</p>
        <p className="mt-4 text-2xl font-bold text-slate-900">$3,200 MXN</p>
        <p className="text-xs text-slate-500">Incluye 45 min por videollamada + resumen escrito.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex-1 rounded-xl bg-[var(--brand)] py-3 text-sm font-bold text-white hover:bg-[var(--brand-muted)]"
          >
            Pagar y comenzar ahora
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex-1 rounded-xl border border-slate-300 py-3 text-sm font-bold text-slate-800 hover:border-[var(--brand)]"
          >
            Agendar y pagar
          </button>
        </div>
        <Link href="/profesional/1" className="mt-4 inline-block text-sm font-semibold text-[var(--brand)] hover:underline">
          Ver perfil del consultor
        </Link>
      </div>
      <PaymentModal open={open} onClose={() => setOpen(false)} title="Pago seguro (demo)" />
    </div>
  );
}
