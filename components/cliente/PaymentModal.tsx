"use client";

import { useState } from "react";

export function PaymentModal({
  open,
  onClose,
  title,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
}) {
  const [mode, setMode] = useState<"now" | "schedule">("now");
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button type="button" className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} aria-label="Cerrar" />
      <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
        <h2 className="text-lg font-bold text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">Checkout simulado — no se procesa ningún pago.</p>
        <div className="mt-4 flex rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setMode("now")}
            className={`flex-1 rounded-lg py-2 text-sm font-bold ${mode === "now" ? "bg-white text-[var(--brand)] shadow-sm" : "text-slate-500"}`}
          >
            Inmediato
          </button>
          <button
            type="button"
            onClick={() => setMode("schedule")}
            className={`flex-1 rounded-lg py-2 text-sm font-bold ${mode === "schedule" ? "bg-white text-[var(--brand)] shadow-sm" : "text-slate-500"}`}
          >
            Agendado
          </button>
        </div>
        <div className="mt-4 space-y-3">
          <label className="block text-sm font-medium text-slate-700">
            Titular de tarjeta
            <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Nombre completo" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Número de tarjeta
            <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="4242 4242 4242 4242" />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block text-sm font-medium text-slate-700">
              Vencimiento
              <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="MM/AA" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              CVC
              <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="123" />
            </label>
          </div>
        </div>
        {mode === "schedule" ? (
          <label className="mt-4 block text-sm font-medium text-slate-700">
            Fecha y hora preferida
            <input type="datetime-local" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" />
          </label>
        ) : null}
        <div className="mt-6 flex gap-3">
          <button type="button" onClick={onClose} className="flex-1 rounded-xl border border-slate-200 py-3 text-sm font-bold text-slate-700">
            Cancelar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl bg-[var(--brand)] py-3 text-sm font-bold text-white hover:bg-[var(--brand-muted)]"
          >
            Confirmar (mock)
          </button>
        </div>
      </div>
    </div>
  );
}
