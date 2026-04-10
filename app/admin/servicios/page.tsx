const items = [
  { id: "SV-01", name: "Consulta legal 30 min", owner: "Dra. Elena Vázquez", flag: "OK" },
  { id: "SV-02", name: "Plan fiscal trimestral", owner: "Lic. Miguel Herrera", flag: "Revisión" },
];

export default function AdminServiciosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Servicios (moderación)</h1>
        <p className="mt-1 text-sm text-slate-500">Listings reportados o con palabras clave sensibles.</p>
      </div>
      <ul className="space-y-3">
        {items.map((s) => (
          <li key={s.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div>
              <p className="font-bold text-slate-900">{s.name}</p>
              <p className="text-xs text-slate-500">{s.owner}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-900">{s.flag}</span>
              <button type="button" className="text-sm font-semibold text-[var(--brand)]">
                Revisar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
