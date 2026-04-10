export default function ProveedorPagosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Pagos</h1>
        <p className="mt-1 text-sm text-slate-500">Liquidaciones y método de cobro (simulado).</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase text-slate-400">Próxima transferencia</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">$18,450 MXN</p>
          <p className="mt-1 text-sm text-slate-500">Estimada 15 abr 2026</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase text-slate-400">Cuenta conectada</p>
          <p className="mt-2 text-lg font-bold text-slate-900">STP · **** 4821</p>
          <button type="button" className="mt-3 text-sm font-semibold text-[var(--brand)] hover:underline">
            Cambiar cuenta
          </button>
        </div>
      </div>
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-600">
        Conexión a pasarela de pagos simulada — en producción usarías Stripe / Mercado Pago.
      </div>
    </div>
  );
}
