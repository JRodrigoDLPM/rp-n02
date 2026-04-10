"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProveedorEstadoPage() {
  const [approved, setApproved] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-lg">
        {!approved ? (
          <>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-2xl">⏳</div>
            <h1 className="mt-6 text-2xl font-bold text-slate-900">En validación</h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Tu expediente está en revisión por el equipo de compliance. Recibirás un correo cuando haya novedades (simulado).
            </p>
            <button
              type="button"
              onClick={() => setApproved(true)}
              className="mt-8 text-sm font-semibold text-[var(--brand)] underline"
            >
              Simular aprobación (demo)
            </button>
          </>
        ) : (
          <>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl">✓</div>
            <h1 className="mt-6 text-2xl font-bold text-slate-900">Cuenta aprobada</h1>
            <p className="mt-3 text-sm text-slate-600">Ya puedes configurar servicios y disponibilidad.</p>
            <Link
              href="/proveedor"
              className="mt-8 inline-flex rounded-xl bg-[var(--brand)] px-8 py-3 text-sm font-bold text-white hover:bg-[var(--brand-muted)]"
            >
              Ir al dashboard
            </Link>
          </>
        )}
        <p className="mt-8 text-xs text-slate-400">
          <Link href="/" className="hover:text-[var(--brand)]">
            Volver al inicio
          </Link>
        </p>
      </div>
    </div>
  );
}
