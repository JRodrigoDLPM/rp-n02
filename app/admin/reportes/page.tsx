export default function AdminReportesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Reportes</h1>
        <p className="mt-1 text-sm text-slate-500">Gráficas ilustrativas — datos ficticios.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-bold text-slate-900">GMV por categoría</h2>
          <div className="mt-6 flex h-48 items-end justify-between gap-2">
            {[40, 65, 50, 80, 55, 70].map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div className="w-full rounded-t-lg bg-emerald-700/90" style={{ height: `${h}%` }} />
                <span className="text-[10px] text-slate-400">M{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-bold text-slate-900">Retención clientes B2B</h2>
          <div className="mt-6 space-y-3">
            {[
              ["Mes 1", 92],
              ["Mes 2", 88],
              ["Mes 3", 84],
              ["Mes 4", 81],
            ].map(([label, pct]) => (
              <div key={String(label)}>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>{label}</span>
                  <span>{pct}%</span>
                </div>
                <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-[var(--brand)]" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
